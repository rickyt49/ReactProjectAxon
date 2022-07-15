import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function EditPhoneForm({ id }) {
  const API_URL = "http://localhost:8080/api";

  const [userInput, setUserInput] = useState({
    imei: "",
    color: "",
    memorySize: "",
    phoneStatus: "",
    condition: "",
    warranty: "",
    importPrice: "",
    importDate: "",
    storeId: "",
    supplierId: "",
    specificationModel: "",
    id: "",
  });

  useEffect(() => {
    async function getPhone() {
      try {
        const { data } = await axios({
          url: `${API_URL}/phones/${id}`,
          method: "GET",
        });

        setUserInput({ ...data });
      } catch (error) {
        console.log(error);
      }
    }
    getPhone();
  }, [id]);

  const handleChange = (event) => {
    let { id, value } = event.target;

    setUserInput({
      ...userInput,
      [id]: value,
    });
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    let newInput = Object.assign({}, { ...userInput });
    newInput.memorySize = newInput.memorySize.split(" ")[0];
    delete newInput.id;
    console.log(newInput);
    try {
      axios({
        url: `${API_URL}/phones/${id}`,
        method: "PUT",
        data: newInput,
      }).then((p) => {
        if (p.status === 200) {
          alertSuccess();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const alertSuccess = async () => {
    document.querySelector(
      "#notification"
    ).innerHTML = `<div class="alert alert-success">
    <strong>Edited successfully</strong>
  </div>
  `;
  };
  const alertError = async () => {
    document.querySelector(
      "#notification"
    ).innerHTML = `<div class="alert alert-danger">
    <strong>Edited failed</strong>
  </div>
  `;
  };
  return (
    <div>
      <div id="notification"></div>
      <form className="container" onSubmit={handleAddSubmit}>
        <h3>Edit panel</h3>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <p>Phone Model</p>
              <input
                className="form-control"
                id="specificationModel"
                onChange={handleChange}
                defaultValue={userInput.specificationModel}
              />
            </div>
            <div className="form-group">
              <p>IMEI</p>
              <input
                className="form-control"
                id="imei"
                onChange={handleChange}
                value={userInput.imei}
              />
            </div>
            <div className="form-group">
              <p>Memory Size</p>
              <select
                className="form-control"
                name="memorySize"
                id="memorySize"
                onChange={handleChange}
                value={userInput.memorySize}
              >
                <option value={64}>64GB</option>
                <option value={128}>128GB</option>
                <option value={256}>256GB</option>
                <option value={512}>512GB</option>
              </select>
            </div>
            <div className="form-group">
              <p>Warranty</p>
              <select
                className="form-control"
                name="warranty"
                id="warranty"
                onChange={handleChange}
                value={userInput.warranty}
              >
                <option value={3}>3 Months</option>
                <option value={6}>6 Months</option>
                <option value={12}>12 Months</option>
              </select>
            </div>
            <div className="form-group">
              <p>Color</p>
              <input
                className="form-control"
                id="color"
                onChange={handleChange}
                value={userInput.color}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Phone Condition</p>

              <select
                className="form-control"
                name="condition"
                id="condition"
                onChange={handleChange}
                value={userInput.condition}
              >
                <option value={"NEW"}>NEW</option>
                <option value={"USED"}>USED</option>
                <option value={"CPO"}>CPO</option>
                <option value={"REFURBISHED"}>REFURBISHED</option>
              </select>
            </div>
            <div className="form-group">
              <p>Import Price</p>
              <input
                className="form-control"
                id="importPrice"
                type="number"
                onChange={handleChange}
                value={userInput.importPrice}
              />
            </div>
            <div className="form-group">
              <p>Import Date</p>
              <input
                className="form-control"
                id="importDate"
                type="date"
                onChange={handleChange}
                value={userInput.importDate}
              />
            </div>
            <div className="form-group">
              <p>Store ID</p>
              <input
                className="form-control"
                id="storeId"
                type="number"
                onChange={handleChange}
                value={userInput.storeId}
              />
            </div>
            <div className="form-group">
              <p>Supplier ID</p>
              <input
                className="form-control"
                id="supplierId"
                type="number"
                onChange={handleChange}
                value={userInput.supplierId}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
