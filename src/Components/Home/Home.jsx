import { container } from "./Home.module.css";
import FormData from "../FormData/FormData";
import { useState } from "react";
import ClothTableDesktop from "../ClothTableDesktop/ClothTableDesktop";
// import ClothTable from "../ClothTable/ClothTable";

export default function Home() {
  const [TnC, setTnC] = useState(false);
  const [cloths, setCloths] = useState([]);

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

    if (elementObject["color"] === "none" || !elementObject["size"]) {
      alert("You have to choose color and size both.");
    } else if (existingId.includes(elementObject["id"])) {
      alert("You have to choose an unique id number!");
    } else {
      setCloths([...cloths, elementObject]);
      allElements.forEach((e) => {
        if (e.type == "text") {
          e.value = "";
        } else if (e.type == "number") {
          e.value = "";
        } else if (e.tagName == "TEXTAREA") {
          e.value = "";
        } else if (e.checked) {
          e.checked = false;
          setTnC(!TnC);
        } else {
          e.value = "none ";
        }
      });
    }
  };

  return (
    <div className={container}>
      <FormData handleSubmit={handleSubmit} TnC={TnC} setTnC={setTnC} />
      {cloths.length > 0 ? (
        cloths.map((cloth) => (
          <ClothTableDesktop key={cloth.id} cloth={cloth} />
        ))
      ) : (
        <h1>The inventory is empty!!!</h1>
      )}
    </div>
  );
}
