export const createAgenda = async (dispatch, payload) => {
let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23`,{
    method: "POST",
    headers: {"Content-type": "application/json" }

})   

    let data = await response.json(dispatch, payload)
    console.log("this is the createAgenda data ", data)

    getContacts(dispatch)
    
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts`);
    let data = await response.json();
    console.log("this is the getContact data ", data)
    if (response = "Agenda \"jdiaz23\" doesn't exist.") {
            createAgenda()
}
dispatch({
    type: "getContact",
    payload: {newContacts: data.contacts }
})
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
    getContacts(dispatch)
}

export const updateContact = async(dispatch, payload)=>{
    let formInputs= payload.formInputs
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts/${payload.id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ formInputs})
    })
    // let data = await response.json()
    // console.log("This is the udateContact data", data)
    if(response.ok){
        const updateContact = await response.json()
        dispatch({type: "update_contact", contact: updateContact})
    }
    getContacts(dispatch)
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

