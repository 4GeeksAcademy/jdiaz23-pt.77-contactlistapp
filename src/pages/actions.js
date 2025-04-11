export const createAgenda = async (dispatch, payload) => {
let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23`,{
    method: "POST",
    headers: {"Content-type": "application/json" }

})

    let data = await response.json(dispatch, payload)
    console.log("this is the createAgenda data ", data)

    getContacts(dispatch)
    
}
export const getContacts = async (dispatch) => {
    
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts`);
    let data = await response.json();
    console.log("this is the getContact data ", data)
    dispatch({
        type: "set_contacts",
        payload: data.contacts
      })
    return data.contacts

}

export const addContact = async (dispatch, payload) => {
    const contact = 
{
    "name": payload.name,
    "phone": payload.phone,
    "email": payload.email,
    "address": payload.address
  }
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts`, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify( contact )
    })
    console.log("check here", response)
    // getContacts(dispatch)
}

export const updateContact = async(contact)=>{
    // let formInputs= payload.formInputs
    try{
        console.log("this is my CONTACT ", contact)
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts/${contact.id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ 
            "name" :contact.name,
            "phone": contact.phone,
            "email": contact.email,
            "address": contact.address,
        })
    })
    const user = await response.json()
}catch(error){
        console.log(error)
    }
    // let data = await response.json()
    // console.log("This is the udateContact data", data)
    // if(response.ok){
    //     const updateContact = await response.json()
    //     dispatch({type: "update_contact", contact: updateContact})
    // }
    // getContacts(dispatch)
}

export const deleteContact = async (id) =>{
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts/${id}' ` ,{
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    let data = await response.json()
    console.log("this is the deleteContact data ", data)
    getContacts(dispatch)
}





