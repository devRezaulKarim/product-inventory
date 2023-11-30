/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ClothRow from "../ClothRow/ClothRow";
import { tableWrapper,tableContainer } from "./ClothTableDesktop.module.css";

export default function ClothTableDesktop({ cloths }) {
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
      </div>
    </div>
  );
}
