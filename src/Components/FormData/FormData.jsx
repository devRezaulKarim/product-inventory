/* eslint-disable react/prop-types */
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
  leftInput,
  formContainer,
} from "./FormData.module.css";
import { useState } from "react";

export default function FormData({
  handleSubmit,
  TnC,
  setTnC,
  colorsSet: { color, setColor, colors },
}) {
  const currentDate = [
    new Date().getDate(),
    new Date().getMonth() + 1,
    new Date().getFullYear(),
  ].join("-");

  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <div className={formContainer}>
      <h1 className={formTitle}>Enter Your Desire Data</h1>
      <form onSubmit={handleSubmit} action="" className={dataInputForm}>
        <div className={divider} id={leftInput}>
          <div className={inputName}>
            <label htmlFor="name">Cloth Name:</label>
            <input
              maxLength="35"
              type="text"
              name="name"
              id="name"
              placeholder="Cloth Name"
              required
            />
          </div>

          <div className={inputId}>
            <label htmlFor="id">Cloth Id:</label>
            <input
              maxLength="10"
              type="text"
              name="id"
              id="id"
              placeholder="Cloth Id"
              required
            />
          </div>

          <div className={inputPrice}>
            <label htmlFor="price">Price:</label>
            <input
              min="1"
              max="99999999"
              type="number"
              name="price"
              id="price"
              placeholder="Price (max: 99999999)"
              required
            />
          </div>

          <div className={inputQuantity}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              min="1"
              max="999"
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity (max: 999)"
              required
            />
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
                name="date"
                id=""
                className={calShow}
                readOnly
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
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="5"
              placeholder="Description"
              required
            ></textarea>
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
              style={{
                color: `${color === "Choose a color" ? "black" : color}`,
              }}
              name="color"
              id="color"
              value={color}
            >
              {colors.map((color, i) => (
                <option
                  key={i}
                  disabled={i === 0}
                  hidden={i === 0}
                  value={color}
                  style={{
                    color: `${color}`,
                  }}
                >
                  {color}
                </option>
              ))}
              {/* <option
                defaultValue="none"
                selected
                disabled
                hidden
                placeholder="Choose a color"
              >
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
              </option> */}
            </select>
            <div className={terms}>
              <div>
                <input
                  onChange={() => setTnC(!TnC)}
                  type="checkbox"
                  name="TnC"
                  id="TnC"
                />
                <label style={{ color: TnC ? "black" : "red" }} htmlFor="TnC">
                  Accept terms & condition
                </label>
              </div>
            </div>
          </div>
          <div className={inputBtn}>
            <div></div>
            <input disabled={!TnC} type="submit" value="Add to Inventory" />
          </div>
        </div>
      </form>
    </div>
  );
}
