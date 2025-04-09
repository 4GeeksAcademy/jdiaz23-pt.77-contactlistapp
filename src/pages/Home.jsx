import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { getContacts } from "./actions.js";

export const Home = () => {
  const [ contacts, setContacts ] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(  () => {

    getContacts(dispatch)
 console.log("this is my current store", store.contacts)
 
  }, [])

// const fetchContacts = async () =>{
//   console.log("starting useEffect")
//   const contactsList = await getContacts()
//   console.log("this is my contact list", contactsList)
//   setContacts(contactsList)
//   dispatch({
//     type: "set_contacts",
//     payload: contactsList
//   })
 
// }

  return (
    <div className="text-center mt-5">
		{
			store.contacts.map((contact, id) => (
			<ContactCard key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} />
		))
		
		}
      
    </div>
  );
};
