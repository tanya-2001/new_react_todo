import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Edititem = ({ show, toggle, updateItem, itemObj }) => {
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

  useEffect(() => {
    setItemName(itemObj.Name);
    setDescription(itemObj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let itemObj = {};
    itemObj["Name"] = itemName;
    itemObj["Description"] = description;
    updateItem(itemObj);
  };

  return (
    <>
      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
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
          <Button variant="secondary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="primary" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Edititem;
