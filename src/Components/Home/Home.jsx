/* eslint-disable react-hooks/exhaustive-deps */
import { container, emptyMessage } from "./Home.module.css";
import FormData from "../FormData/FormData";
import { createContext, useEffect, useState } from "react";
import ClothTableDesktop from "../ClothTableDesktop/ClothTableDesktop";

const getCloths = () => {
  return JSON.parse(localStorage.getItem("cloths")) ?? [];
};

export const ClothContext = createContext();

export default function Home() {
  const currentDate = [
    new Date().getDate(),
    new Date().getMonth() + 1,
    new Date().getFullYear(),
  ].join("-");

  const [selectedDate, setSelectedDate] = useState(currentDate);

  const [TnC, setTnC] = useState(false);
  const [cloths, setCloths] = useState(getCloths);
  const colors = ["Choose a color", "Red", "Green", "Blue"];
  const [color, setColor] = useState(colors[0]);

  //Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    //Getting all input field as an array
    const allElements = [...e.target.elements]
      .filter((e) => e.name)
      .reduce((pre, cur) => {
        if (cur.name === "size") {
          cur.checked && pre.push(cur);
        } else {
          pre.push(cur);
        }
        return pre;
      }, []);

    //Getting all the value as an object
    let elementObject = {};
    allElements.forEach((e) => {
      elementObject[e.name] = e.value;
    });

    //validating the input value and setting to the state
    const existingId = cloths.reduce((pre, cur) => {
      pre.push(cur.id);
      return pre;
    }, []);

    if (elementObject["color"] === "Choose a color" || !elementObject["size"]) {
      alert("You have to choose color and size both.");
    } else if (existingId.includes(elementObject["id"])) {
      alert("You have to choose an unique id number!");
    } else if (
      elementObject["name"].trim().length < 1 ||
      elementObject["id"].trim().length < 1 ||
      elementObject["desc"].trim().length < 1
    ) {
      alert("You can't  just put only whitespace!");
    } else if (!isNaN(Number(elementObject["name"]))) {
      alert("You can't just put a number as a name!");
    } else {
      setCloths([...cloths, elementObject]);

      //Clearing the input field
      allElements.forEach((e) => {
        if (e.type == "text" || e.type == "number") {
          e.value = "";
        } else if (e.tagName == "TEXTAREA") {
          e.value = "";
        } else if (e.checked) {
          e.checked = false;
          setTnC(!TnC);
        } else {
          setColor(() => colors[0]);
        }
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("cloths", JSON.stringify(cloths));
    setSelectedDate(currentDate);
  }, [cloths]);

  return (
    <ClothContext.Provider value={{ cloths, setCloths }}>
      <div className={container}>
        <FormData
          handleSubmit={handleSubmit}
          TnC={TnC}
          setTnC={setTnC}
          colorsSet={{ color, colors, setColor }}
          selectedDate={{ currentDate, selectedDate, setSelectedDate }}
        />

        {cloths.length > 0 ? (
          <ClothTableDesktop />
        ) : (
          <div className={emptyMessage}>
            <h1>The inventory is empty!!!</h1>
            <img
              src="https://wherethetradebuys.com.au/wp-content/uploads/2018/12/icon-box-gift.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </ClothContext.Provider>
  );
}
