import React, { useEffect } from "react";
import { getContactList } from "../services/getContactList";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactAction,
  getMoreInfoAction,
} from "../reducer/contactListReducer";

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
          console.log("Failed load");
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
    <div>
      {list.map((person, index) => (
        <div key={index}>
          <h1>{person.name} </h1>
          <h2>{person.username}</h2>
          <Link to="/info">
            <button onClick={() => getMoreInfo(person, index)}>
              More info
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
