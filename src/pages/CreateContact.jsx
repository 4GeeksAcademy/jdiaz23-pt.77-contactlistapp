import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const CreateContact = () => {
  const { store, dispatch, addContact } = useGlobalReducer();
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleCreateContact = (e) => {
    e.preventDefault();
    console.log("here is your new contact", newContact);
    addContact(newContact);
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="text-center mt-3">Create New Contact</h1>
      <div className="text-center mt-3">
        <form className="row g-3">
          <div className="col-12">
            <label for="name" className="form-label">
              Full Name
            </label>
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
              type="text"
              className="form-control"
              placeholder="Full Name"
              id="name"
            />
          </div>
          <div className="col-12">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, phone: e.target.value })
              }
              type="text"
              className="form-control"
              placeholder="12457890"
              id="phone"
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, email: e.target.value })
              }
              type="email"
              className="form-control"
              placeholder="Enter Email"
              id="inputEmail4"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={(e) =>
                setNewContact({ ...newContact, address: e.target.value })
              }
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address"
            />
          </div>

          <div className="col-12">
            <label for="button"></label>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => handleCreateContact(e)}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
