import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CreateContact = () => {
  const { store, dispatch } = useGlobalReducer();

  //   const addContact = async () => {
  //     let response = await fetch(``, {
  //     method: "POST",
  //     headers: {"Content-type": "application/json"},
  //     body: JSON.stringify({ contact })
  //     })
  // }

  // const contact =
  // {
  //     "name": name,
  //     "phone": phone,
  //     "email": email,
  //     "address": address
  //   }

  return (
    <div className="container">
      <div className="text-center mt-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </form>
      </div>
    </div>
  );
};
