import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { createAgenda } from "./actions.js";

export const Home = () => {
  const [ contacts, setContacts ] = useState([]);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
	setContacts(store.contacts)
  }, [store.contacts]);

  return (
    <div className="text-center mt-5">
		{
			contacts?.legnth > 0 
			? contacts.map((contact, index) => (
			<ContactCard key={index} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} />
		))
		: <h1>Make New Friends</h1>
		}
      
    </div>
  );
};
