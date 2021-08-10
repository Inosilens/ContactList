const defaultState= {
person : {
    name : "",
    email:"",
    city:"",
    phone:"",
    website:""
}


}
const GET_NEW_PERSON = "GET_NEW_PERSON"


export const changePersonReducer = (state = defaultState,action)=>{
    switch (action.type){
        case GET_NEW_PERSON :
            return {
                name : action.name,
                email : action.email,
                phone : action.phone,
                address : action.address,
                website : action.website,

            }




        default: return state
    }


}

export const getNewPersonAction = (name,email,phone,address,website) => ({
    type:GET_NEW_PERSON,
    name,email,phone,address,website
})
