import React, { useContext, useState } from "react";
import Edititem from "./Edititem.js";
import { Itemfunc } from "./Itemlist.js";

function randomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.2)`;
}

const Card = ({ itemObj, ind }) => {
  const { deleteItem } = useContext(Itemfunc);
  const { updateListArray } = useContext(Itemfunc);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const updateItem = (obj) => {
    updateListArray(obj, ind);
  };

  const handleDelete = () => {
    deleteItem(ind);
  };

  return (
    <div class="card-wrapper m-3">
      <div class="item-holder">
        <span class="card-header" style={{ backgroundColor: randomRgbColor() }}>
          {itemObj.Name}
        </span>
        <p className="mt-3">{itemObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit mr-3"
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setShow(true)}
          ></i>
          <i
            class="fas fa-trash-alt p-2"
            style={{ cursor: "pointer", color: "red" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <Edititem
        show={show}
        toggle={toggle}
        updateItem={updateItem}
        itemObj={itemObj}
      />
    </div>
  );
};

export default Card;
