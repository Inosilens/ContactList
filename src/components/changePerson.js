import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {

     getNewPersonAction,

} from "../reducer/changePersonReducer";
import {getNewListAction} from "../reducer/contactListReducer";


export const  ChangePerson=()=> {
    const person = useSelector(state => state.contacts.getMoreInfo)
    const list = useSelector(({contacts}) => contacts.contactList)
    const {name,email,phone,address,website,id} = person
    const dispatch = useDispatch()
    console.log(id)




    const getInfo = (e,index,name,email,phone,website)=>{
        e.preventDefault()
        list[index].name= name
        list[index].email=email
        list[index].phone=phone
        list[index].website=website
       console.log(list)





    // let data =e.target.elements
    //    dispatch(getNewListAction(id,data.name))
       /* dispatch(getNewPersonAction(data.name.value,data.email.value,data.city.value,data.phone.value,data.website.value))*/
       }

    return (
        <div>
            <form onSubmit={(e)=>

                getInfo(e,id,name,email,phone,address,website)}>
                <input defaultValue={name}  name="name" type="text"/>
                <input defaultValue={email} name="email" type="text"/>
               {/* <input  defaultValue={address.city} name="city"  type="text"/>*/}
                <input  defaultValue={phone} name="phone" type="text"/>
                <input defaultValue={website}  name="website" type="text"/>
                <button  type="submit" >Change person</button>
            </form>
        </div>
    );
}

export default ChangePerson;