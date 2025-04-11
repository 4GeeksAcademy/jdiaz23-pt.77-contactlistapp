import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";


export const Home = () => {
  const [ contacts, setContacts ] = useState([]);
  const { store, dispatch, createAgenda } = useGlobalReducer();

  useEffect(  () => {

    createAgenda()
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
const contactItems = store.contacts.map((contact, id) => ( 
  <ContactCard key={contact.id} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} id={contact.id} />
))
  return (
    <div className="text-center mt-5 col d-flex-column justify-content-center">
		
      
		{contactItems}
		
		
      
    </div>
  );
};





// to show new contacts first 
// {store.contacts
//   ?.slice()
//   .reverse()
//   .map((contact) => (
//     <ContactCard contact={contact} key={contact.id} />
//   ))}