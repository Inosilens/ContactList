import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeModActiveAction } from "../reducer/contactListReducer";
import ChangePerson from "./changePerson";

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
    <div>
      {name}
      {email}
      {address.city}
      {phone}
      {website}
      <button onClick={openChangeWindow}>Change Person</button>
      <Link to="/list">
        <button>Back to list</button>
      </Link>
    </div>
  );
};
