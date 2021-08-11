import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeModActiveAction, getContactAction,
    getNewListAction,
} from "../reducer/contactListReducer";
import { Link } from "react-router-dom";

export const ChangePerson = () => {
  const person = useSelector((state) => state.contacts.getMoreInfo);
  const list = useSelector(({ contacts }) => contacts.contactList);
  const { ...parameters } = person;
  const dispatch = useDispatch();

  const changeInfo = (e, { ...args }) => {
    e.preventDefault();
    let data = e.target.elements;
    const { ...keys } = data;
    list[args.id].name = keys.name.value;
    list[args.id].email = keys.email.value;
    list[args.id].phone = keys.phone.value;
    list[args.id].website = keys.website.value;
    dispatch(getNewListAction(true))
      dispatch(getContactAction(list));
  };

  const closeChangeMode = () => {
      dispatch(changeModActiveAction(false));
  }

  return (
    <div>
      <form onSubmit={(e) => changeInfo(e, parameters)}>
        <input defaultValue={parameters.name} name="name" type="text" />
        <input defaultValue={parameters.email} name="email" type="text" />
        <input defaultValue={parameters.phone} name="phone" type="text" />
        <input defaultValue={parameters.website} name="website" type="text" />
        <button type="submit">Save change</button>
          <Link to="/list">
             <button onClick={closeChangeMode}>Back to list</button>
          </Link>

      </form>
    </div>
  );
};

export default ChangePerson;
