import React, { useEffect } from "react";
import { getContactList } from "../../services/getContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactAction,
  getMoreInfoAction,
} from "../../reducer/contactListReducer";
import "./contacList.css"


import { Link } from "react-router-dom";

export const ContactList = () => {
  const list = useSelector(({ contacts }) => contacts.contactList);
  const newList = useSelector((state) => state.contacts.modifiedList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!newList) {
      getContactList()
        .then((contacts) =>
          localStorage.setItem("my_contacts", JSON.stringify(contacts))
        )
        .catch((error) => {
          alert("Failed load");
          console.log(error);
        });
      const localList = JSON.parse(localStorage.getItem("my_contacts"));
      dispatch(getContactAction(localList));
    }
  }, []);

  const getMoreInfo = (person, index) => {
    dispatch(getMoreInfoAction(person, index));
  };

  return (
    <div className=" contactList flex-wrap p-5 container d-flex flex-row justify-content-center align-items-center">
      {list.map((person, index) => (
        <div className="contactList__container p-3 m-3" key={index}>
          <h3>{person.name} </h3>
          <h6>User name : {person.username}</h6>
          <Link to="/info">
            <button className="btn btn-primary" onClick={() => getMoreInfo(person, index)}>
              More info
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
