import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = (props) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 classNameName="card-title">{props.name}</h5>
        <p classNameName="card-text">{props.phone}</p>
        <p classNameName="card-text">{props.email}</p>
        <p classNameName="card-text">{props.address}</p>
        <a href="#" className="btn btn-primary">
          Update Contact
        </a>
      </div>
    </div>
  );
};
