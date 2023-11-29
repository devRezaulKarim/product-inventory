import { FaRegCalendarAlt } from "react-icons/fa";
import {
  divider,
  dataInputForm,
  sizeSelector,
  inputName,
  inputId,
  inputPrice,
  inputQuantity,
  inputDate,
  inputDesc,
  inputColor,
  inputBtn,
  terms,
  calIcon,
  calInput,
  calShow,
  formTitle,
} from "./FormData.module.css";
import { useState } from "react";

export default function FormData() {
  const currentDate = [
    new Date().getDate(),
    new Date().getMonth() + 1,
    new Date().getFullYear(),
  ].join("-");
  console.log(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [color, setColor] = useState(null);

  return (
    <div>
      <h1 className={formTitle}>Enter Your Desire Data</h1>
      <form action="" className={dataInputForm}>
        <div className={divider}>
          <div className={inputName}>
            <label htmlFor="name">Cloth Name:</label>
            <input type="text" name="" id="name" />
          </div>

          <div className={inputId}>
            <label htmlFor="id">Cloth Id:</label>
            <input type="text" name="" id="id" />
          </div>

          <div className={inputPrice}>
            <label htmlFor="price">Price:</label>
            <input type="number" name="" id="price" />
          </div>

          <div className={inputQuantity}>
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" name="" id="quantity" />
          </div>

          <div className={inputDate}>
            <label htmlFor="date">Manufacture date:</label>
            <div>
              <input
                type="date"
                name=""
                id="date"
                min={currentDate.split("-").reverse().join("-")}
                className={calInput}
                onChange={(e) =>
                  setSelectedDate(e.target.value.split("-").reverse().join("-"))
                }
              />
              <input
                type="text"
                name=""
                id=""
                className={calShow}
                value={selectedDate || "11-11-11"}
              />
              <FaRegCalendarAlt className={calIcon} />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className={divider}>
          <div className={inputDesc}>
            <label htmlFor="desc">Description:</label>
            <textarea name="" id="desc" cols="30" rows="5"></textarea>
          </div>

          <div className={sizeSelector}>
            <label htmlFor="">Select Size:</label>
            <div>
              <input type="radio" name="size" value="m" id="m" />
              <label htmlFor="m"> (M)</label>
            </div>
            <div>
              <input type="radio" name="size" value="l" id="l" />
              <label htmlFor="l"> (L)</label>
            </div>
            <div>
              <input type="radio" name="size" value="xl" id="xl" />
              <label htmlFor="xl"> (XL)</label>
            </div>
          </div>

          <div className={inputColor}>
            <label htmlFor="color">Select Color: </label>
            <select
              onChange={(e) => setColor(e.target.value)}
              style={{ color: `${color}` }}
              name=""
              id="color"
            >
              <option value="none" selected disabled hidden>
                Choose a color
              </option>
              <option style={{ color: "red" }} value="Red">
                Red
              </option>
              <option style={{ color: "blue" }} value="Blue">
                Blue
              </option>
              <option style={{ color: "green" }} value="Green">
                Green
              </option>
            </select>
            <div className={terms}>
              <div>
                <input type="checkbox" name="TnC" id="TnC" />
                <label htmlFor="TnC">Accept terms & condition</label>
              </div>
            </div>
          </div>
          <div className={inputBtn}>
            <div></div>
            <input type="submit" value="Add to Inventory" />
          </div>
        </div>
      </form>
    </div>
  );
}
