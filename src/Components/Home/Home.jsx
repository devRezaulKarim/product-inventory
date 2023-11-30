import { container } from "./Home.module.css";
import FormData from "../FormData/FormData";
import { useState } from "react";
// import ClothTable from "../ClothTable/ClothTable";

export default function Home() {
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
    }
  };

  return (
    <div className={container}>
      <FormData handleSubmit={handleSubmit} />
    </div>
  );
}
