/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import ClothRow from "../ClothRow/ClothRow";
import {
  tableWrapper,
  tableContainer,
  removeAllButton,
} from "./ClothTableDesktop.module.css";
import { ClothContext } from "../Home/Home";

export default function ClothTableDesktop() {
  const { cloths, setCloths } = useContext(ClothContext);
  return (
    <div className={tableContainer}>
      <div className={tableWrapper}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Cloth Id</th>
              <th>Cloth Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Color</th>
              <th>M. date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cloths.map((cloth) => (
              <ClothRow key={cloth.id} cloth={cloth} />
            ))}
          </tbody>
        </table>
        <div className={removeAllButton}>
          <button onClick={() => setCloths([])}>Remove All</button>
        </div>
      </div>
    </div>
  );
}
