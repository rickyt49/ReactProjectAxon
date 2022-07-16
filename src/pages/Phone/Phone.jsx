import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Phone.css";
import AddPhoneForm from "./PhoneForm/AddPhoneForm";
import ModalHOC from "../../HOC/ModalHOC";
import EditPhoneForm from "./PhoneForm/EditPhoneForm";

export default function Phone() {
  const API_URL = "http://localhost:8080/api";
  const [phones, setPhones] = useState([]);
  const [component, setComponent] = useState(<p>Default Component</p>);
  const [edit, setEdit] = useState("");
  useEffect(() => {
    async function getAllPhones() {
      try {
        const { data } = await axios({
          url: `${API_URL}/phones`,
          method: "GET",
        });
        setPhones(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPhones();
  }, []);

  let submitRender = async () => {
    try {
      const { data } = await axios({
        url: `${API_URL}/phones`,
        method: "GET",
      });
      setPhones(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = (id) => {
    try {
      axios({ url: `${API_URL}/phones/${id}`, method: "DELETE" });
      setPhones([...phones.filter((phone) => phone.id !== id)]);
    } catch (error) {
      console.log(error);
    }
  };

  let renderPhone = () => {
    let result = phones.map((phone, index) => {
      return (
        <tr key={phone.id}>
          <td>{index + 1}</td>

          <td>
            {phone.specificationModel} {phone.color} {phone.memorySize}
          </td>
          <td>{phone.imei}</td>
          <td>{phone.condition}</td>
          <td>{phone.phoneStatus}</td>
          <td>{phone.importPrice}</td>
          <td>{phone.importDate}</td>
          <td>
            <span
              className="fa fa-pencil-square text-primary mx-2 function-icon"
              aria-hidden="true"
              style={{ fontSize: 25 }}
              data-toggle="modal"
              data-target="#modelId"
              onClick={(e) =>
                setComponent(
                  <EditPhoneForm id={phone.id} submitRender={submitRender} />
                )
              }
            ></span>
            <span
              className="fa fa-trash text-danger mx-2 function-icon"
              aria-hidden="true"
              style={{ fontSize: 25 }}
              onClick={(e) => handleDelete(phone.id)}
            ></span>
          </td>
        </tr>
      );
    });
    return result;
  };

  return (
    <section className="phone-content">
      <h1 className="text-center">Phone page</h1>
      <div className="container">
        <button
          className="btn btn-primary mb-3"
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            setComponent(<AddPhoneForm submitRender={submitRender} />);
          }}
        >
          Add Phone
        </button>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>Phone</th>
                <th>IMEI</th>
                <th>Condition</th>
                <th>Availability</th>
                <th>Import Price</th>
                <th>Import Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderPhone()}</tbody>
          </table>
        </div>
      </div>
      <ModalHOC modalContent={component} />
    </section>
  );
}
