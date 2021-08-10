import React from 'react';
import { useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const ContactInfo=()=>{
    const person = useSelector(state => state.contacts.getMoreInfo)
    const {name,email,phone,address,website} = person







    return (
        <div>

            {name}
            {email}
            {address.city}
            {phone}
            {website}
            <Link to="/change">
            <button>Change Person</button>
            </Link>





        </div>
    );
}

