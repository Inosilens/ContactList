import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeModActiveAction } from "../../reducer/contactListReducer";
import ChangePerson from "../changePerson/changePerson";
import "./contactInfo.css";

export const ContactInfo = () => {
  const person = useSelector((state) => state.contacts.getMoreInfo);
  const changeMode = useSelector((state) => state.contacts.changeModActive);
  const { name, email, phone, address, website } = person;
  const dispatch = useDispatch();

  const openChangeWindow = () => {
    dispatch(changeModActiveAction(true));
  };

  if (changeMode) {
    return <ChangePerson />;
  }
  return (
    <div className="container align-items-center text-center justify-content-center">
      <div className="personCart d-flex flex-column p-3 mt-5 justify-content-center align-items-center">
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h3>{address.city}</h3>
        <h3>{phone}</h3>
        <h3> {website} </h3>
        <button className="btn btn-secondary mt-3" onClick={openChangeWindow}>
          Change Person
        </button>
        <Link to="/list">
          <button className="btn btn-primary mt-3">Back to list</button>
        </Link>
      </div>
    </div>
  );
};
