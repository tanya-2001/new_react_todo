import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Createitem = ({ show, toggle, saveItem }) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "itemName") {
      setItemName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    // e.preventDefault();
    let itemObj = {};
    itemObj["Name"] = itemName;
    itemObj["Description"] = description;
    saveItem(itemObj);
  };

  return (
    <>
      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Create Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Item Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              value={itemName}
              name="itemName"
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSave}>
            Create
          </Button>
          <Button variant="primary" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Createitem;
