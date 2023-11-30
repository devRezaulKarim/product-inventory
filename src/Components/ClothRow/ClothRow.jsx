/* eslint-disable react/prop-types */
// import { style } from "./ClothRow.module.css";
import { MdDelete } from "react-icons/md";

export default function ClothRow({ cloth }) {
  return (
    <tr>
      <td>
        <div>{cloth.id}</div>
      </td>
      <td>
        <div>{cloth.name}</div>
      </td>
      <td>
        <div>{cloth.price}</div>
      </td>
      <td>
        <div>{cloth.quantity}</div>
      </td>
      <td>
        <div>{cloth.size}</div>
      </td>
      <td style={{ color: `${cloth.color}` }}>
        {" "}
        <div>{cloth.color}</div>{" "}
      </td>
      <td>
        <div>{cloth.date}</div>
      </td>
      <td>
        <div>{cloth.desc}</div>
      </td>
      <td>
        <MdDelete color="red" />
      </td>
    </tr>
  );
}
