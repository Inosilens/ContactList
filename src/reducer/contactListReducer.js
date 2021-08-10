const defaultState= {
    contactList : [],
    loading: false,
    getMoreInfo : " "


}
const GET_CONTACTS = "GET_CONTACTS"
const SET_LOADING = "SET_LOADING"
const GET_MORE_INFO = "GET_MORE_INFO"
const GET_NEW_LIST = "GET_NEW_LIST"

export const contactListReducer = (state = defaultState,action)=>{
    switch (action.type){
        case GET_CONTACTS :
            return {...state,contactList : action.payload}
        case SET_LOADING :
            return {...state,loading : action.payload}
        case GET_MORE_INFO :
            return {...state,getMoreInfo: action.payload}
        case GET_NEW_LIST :
            return {...state, contactList: [state.contactList.map((item,i)=> {
                if(item[i]===action.index){
                    item[action.index].name = action.firstName
                    return item[action.index]
                }else {
                   return item
                }

                    }

                )]



            }




        default: return state
    }


}

export const setLoadingAction = (payload) => ({
    type:SET_LOADING,
    payload
})
export const getContactAction = (payload) =>({
    type:GET_CONTACTS,
        payload
})

export const getMoreInfoAction = (payload)=> ({
    type : GET_MORE_INFO ,
    payload
})

export const getNewListAction = (index,firstName)=>({
    type :GET_NEW_LIST,
    index, firstName
})