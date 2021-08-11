import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModActiveAction,
  getContactAction,
  getNewListAction,
} from "../../reducer/contactListReducer";
import { Link } from "react-router-dom";
import "./changePerson.css";

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
    dispatch(getNewListAction(true));
    dispatch(getContactAction(list));
  }; //modifiy person and push new array in state

  const closeChangeMode = () => {
    dispatch(changeModActiveAction(false));
  };//close change window when go to home

  return (
    <div className=" pt-5 mt-5  container ">
      <form
        className="changeCart form-group p-5 d-flex flex-column justify-content-center align-items-center"
        onSubmit={(e) => changeInfo(e, parameters)}
      >
        <input defaultValue={parameters.name} name="name" type="text" />
        <input defaultValue={parameters.email} name="email" type="text" />
        <input defaultValue={parameters.phone} name="phone" type="text" />
        <input defaultValue={parameters.website} name="website" type="text" />
        <button className="mt-3 btn btn-secondary" type="submit">
          Save change
        </button>
        <Link to="/list">
          <button className="mt-3  btn btn-primary" onClick={closeChangeMode}>
            Back to list
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ChangePerson;
