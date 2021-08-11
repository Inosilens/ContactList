const defaultState = {
  contactList: [],
  getMoreInfo: " ",
  newList: false,
  changeModActive: false,
};
const GET_CONTACTS = "GET_CONTACTS";
const GET_MORE_INFO = "GET_MORE_INFO";
const GET_NEW_LIST = "GET_NEW_LIST";
const SET_CHANGE_MODE = "SET_CHANGE_MODE";

export const contactListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contactList: action.payload };
    case GET_MORE_INFO:
      return { ...state, getMoreInfo: action.payload };
    case GET_NEW_LIST:
      return { ...state, modifiedList: action.changeActive };
    case SET_CHANGE_MODE:
      return { ...state, changeModActive: action.payload };

    default:
      return state;
  }
};

export const getContactAction = (payload) => ({
  type: GET_CONTACTS,
  payload,
});

export const getMoreInfoAction = (payload) => ({
  type: GET_MORE_INFO,
  payload,
});

export const getNewListAction = (changeActive) => ({
  type: GET_NEW_LIST,
  changeActive,
});

export const changeModActiveAction = (payload) => ({
  type: SET_CHANGE_MODE,
  payload,
});
