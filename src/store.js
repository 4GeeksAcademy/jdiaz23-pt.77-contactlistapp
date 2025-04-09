import { useActionState } from "react";

export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_contacts':

      const { contacts } = action.payload

      return {
        ...store,
        contacts: action.payload
      };
    // case 'getContact':
    //   const {newContacts} =  action.payload;
    //   return {
    //     ...store,
    //     contacts: action.contacts || []
    //   }
    // default:
    //   throw Error('Unknown action.');
  }    
  if(action.type === "getContact"){
    return {
            ...store,
            contacts: action.contacts || []
          }
  }
}
