import React, {useEffect} from 'react';
import {getContactList} from "../services/getContactList";
import {useDispatch, useSelector} from "react-redux";
import {getContactAction, getMoreInfoAction, setLoadingAction} from "../reducer/contactListReducer";
import {Loader} from "./loader";
import {Link} from "react-router-dom";


export const ContactList=()=> {
    const list = useSelector(({contacts}) => contacts.contactList)
    const loader = useSelector((state) => state.contacts.loading)

    const dispatch = useDispatch()

   console.log(Array.isArray(list))


    useEffect(()=>{
        dispatch(setLoadingAction(true))
        getContactList().then(contacts=>localStorage.setItem("my_contacts", JSON.stringify(contacts)))
        const localList = JSON.parse(localStorage.getItem("my_contacts"));
        dispatch(getContactAction(localList))
        dispatch(setLoadingAction(false))

    },[])

        const getMoreInfo = (person,index)=>{
        dispatch(getMoreInfoAction(person,index))
        }
       if(loader){
           return (<Loader/>)
       }
        return (
            <div>
                {
                    list.map((person, index) =>
                        <div key={index}>
                           <h1>{person.name} </h1>
                            <h2>{person.username}</h2>
                            <Link to="/info">
                                <button onClick={()=>getMoreInfo(person,index)}>More info</button>
                            </Link>
                        </div>
                    )
                }


            </div>
        );

}

