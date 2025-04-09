import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = ({id, name, phone, email, address}) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{phone}</p>
        <p className="card-text">{email}</p>
        <p className="card-text">{address}</p>
        <a href="#" className="btn btn-primary">
          Update Contact
        </a>
      </div>
    </div>
  );
};
