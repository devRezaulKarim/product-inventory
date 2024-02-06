/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ClothContext } from "../Home/Home";

export default function ClothRow({ cloth }) {
  const { cloths, setCloths } = useContext(ClothContext);
  const { id, name, price, quantity, size, color, date, desc } = cloth;

  const handleSingleDelete = (id) => {
    setCloths(() => cloths.filter((cloth) => cloth.id !== id));
  };

  return (
    <tr>
      <td>
        <div>{id}</div>
      </td>
      <td>
        <div>{name}</div>
      </td>
      <td>
        <div>৳{price}</div>
      </td>
      <td>
        <div>{quantity}</div>
      </td>
      <td>
        <div>{size}</div>
      </td>
      <td style={{ color: `${color}` }}>
        {" "}
        <div>{color}</div>{" "}
      </td>
      <td>
        <div>{date}</div>
      </td>
      <td>
        <div>{desc}</div>
      </td>
      <td>
        <MdDelete onClick={() => handleSingleDelete(id)} color="red" />
      </td>
    </tr>
  );
}
