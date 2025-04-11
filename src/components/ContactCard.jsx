import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, Navigate, useNavigate } from "react-router-dom"

export const ContactCard = ({id, name, phone, email, address}) => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate()
  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{phone}</p>
        <p className="card-text">{email}</p>
        <p className="card-text">{address}</p>
        <div className="buttonGroup d-flex justify-content-around">
        {/* <Link className="btn btn-light" to="/updatecontact/${id}">
        ✏️
        </Link> */}
        <button className="btn" onClick={() => navigate('/updatecontact/' + `${id}`)}><i className="fas fa-pencil-alt mr-3"></i></button>
        <Link className="btn btn-light" to="/">
        🗑️
        </Link>
        </div>
      </div>
    </div>
  );
};
