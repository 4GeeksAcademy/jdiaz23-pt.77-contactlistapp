import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, useNavigate} from "react-router-dom";


export const UpdateContact = () => {

  const {store, dispatch, updateContact} =useGlobalReducer()
  const params = useParams()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    nameInput: "",
		emailInput: "",
		phoneInput: "",
		addressInput: "",
    id: ""
  })

  function updateContacts(e) {
		e.preventDefault()
    console.log("this is the inputvalue", inputValue)
    const updatedContact = {...inputValue}
		updateContact(updatedContact)
			.then(() => navigate("/"))}
  useEffect(()=>{
    console.log("Params ID:", params.id)
    const contactData = store.contacts.find((contact)=>{
      return contact.id.toString()===params.id
      
    })
    if (contactData) {
      const currentUrl = window.location.href;
      const parts = currentUrl.split("/");
      const contactId = parts[-1];
      console.log("ryan", contactId)
			setInputValue({
				nameInput: contactData.name || "",
				emailInput: contactData.email || "",
				phoneInput: contactData.phone || "",
				addressInput: contactData.address || "",
				id: params.id || ""
			});
		}
    console.log("this is the contactdata", contactData)
	}, [store.contacts])
  
    return (
      <div className="container">
      <h1 className="text-center mt-3">Create New Contact</h1>
      <div className="text-center mt-3">
        <form className="row g-3">
          <div className="col-12">
            <label for="name" className="form-label">
              Full Name
            </label>
            <input
              onChange={(e) =>
                setInputValue((previous)=>({
                  ...previous, nameInput: event.target.value
                }))
              }
              type="text"
              value={inputValue.nameInput}
              className="form-control"
              placeholder="Full Name"
              id="name"
            />
          </div>
          <div className="col-12">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              onChange={(e) =>
                setInputValue((previous)=>({
                  ...previous, phoneInput: event.target.value
                }))
              }
              type="text"
              value={inputValue.phoneInput}
              className="form-control"
              placeholder="12457890"
              id="phone"
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              onChange={(e) =>
                setInputValue((previous)=>({
                  ...previous, emailInput: event.target.value
                }))
              }
              type="email"
              value={inputValue.emailInput}
              className="form-control"
              placeholder="Enter Email"
              id="inputEmail4"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={(e) =>
                setInputValue((previous)=>({
                  ...previous, addressInput: event.target.value
                }))
              }
              type="text"
              value={inputValue.addressInput}
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address"
            />
          </div>

          <div className="col-12">
            <label for="button"></label>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => updateContacts(e)}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    );
}; 