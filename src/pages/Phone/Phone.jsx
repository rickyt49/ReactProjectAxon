import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Phone.css";

export default function Phone() {
  const API_URL = "http://localhost:8080/api";
  const [phones, setPhones] = useState([]);
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

  console.log(phones);

  //   let renderPhone = () => {
  //     phones.map((phone, id) => {
  //       return (
  //         <tr key={phone.id}>
  //           <td scope="row">
  //             {phone.model} {phone.color} {phone.memorySize}
  //           </td>
  //           <td>{phone.imei}</td>
  //           <td>{phone.condition}</td>
  //           <td>{phone.phoneStatus}</td>
  //           <td>{phone.importPrice}</td>
  //           <td>{phone.importDate}</td>
  //           <td>
  //             <span
  //               className="fa fa-pencil-square text-primary"
  //               aria-hidden="true"
  //               style={{ fontSize: 25 }}
  //             ></span>
  //             <span
  //               className="fa fa-trash text-danger"
  //               aria-hidden="true"
  //               style={{ fontSize: 25 }}
  //             ></span>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   };

  return (
    <section className="phone-content">
      <div className="container">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Phone</th>
                <th>IMEI</th>
                <th>Condition</th>
                <th>Availability</th>
                <th>Import Price</th>
                <th>Import Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {phones.map((phone, id) => {
                return (
                  <tr key={phone.id}>
                    <td scope="row">
                      {phone.model} {phone.color} {phone.memorySize}
                    </td>
                    <td>{phone.imei}</td>
                    <td>{phone.condition}</td>
                    <td>{phone.phoneStatus}</td>
                    <td>{phone.importPrice}</td>
                    <td>{phone.importDate}</td>
                    <td>
                      <span
                        className="fa fa-pencil-square text-primary mx-1"
                        aria-hidden="true"
                        style={{ fontSize: 25 }}
                      ></span>
                      <span
                        className="fa fa-trash text-danger mx-1"
                        aria-hidden="true"
                        style={{ fontSize: 25 }}
                      ></span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
