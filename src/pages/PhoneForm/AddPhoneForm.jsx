import axios from "axios";
import React from "react";
import { useRef } from "react";

export default function AddPhoneForm() {
  const API_URL = "http://localhost:8080/api";
  const phoneCreationRef = useRef({
    imei: "",
    color: "",
    memorySize: "",
    phoneStatus: "AVAILABLE",
    condition: "",
    warranty: "",
    importPrice: "",
    importDate: "",
    storeId: 0,
    supplierId: 0,
    specificationModel: "",
  });
  const handleChange = (event) => {
    let { id, value } = event.target;
    phoneCreationRef.current[id] = value;
    console.log(phoneCreationRef.current);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios({
        url: `${API_URL}/phones/`,
        method: "POST",
        data: phoneCreationRef.current,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Add a new phone</h3>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <p>Phone Model</p>
              <input
                className="form-control"
                id="specificationModel"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>IMEI</p>
              <input
                className="form-control"
                id="imei"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>Memory Size</p>
              <select
                className="form-control"
                name="memorySize"
                id="memorySize"
                onChange={handleChange}
              >
                <option value={64} selected="selected">
                  64GB
                </option>
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
              >
                <option value={3} selected="selected">
                  3 Months
                </option>
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
              >
                <option value={"NEW"} selected="selected">
                  NEW
                </option>
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
              />
            </div>
            <div className="form-group">
              <p>Import Date</p>
              <input
                className="form-control"
                id="importDate"
                type="date"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>Store ID</p>
              <input
                className="form-control"
                id="storeId"
                type="number"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>Supplier ID</p>
              <input
                className="form-control"
                id="supplierId"
                type="number"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
