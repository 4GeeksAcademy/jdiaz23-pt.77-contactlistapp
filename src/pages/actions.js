// Update

const createAgenda = async () => {
let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23`,{
    method: "POST",
    headers: {"Content-type": "application/json" }

})   

    let data = await response.json()
    console.log("this is the createAgenda data ", data)
    if (!response.ok){
        console.log("createAgenda post failed")
    }else{
        getContacts()
    }
    
}

const getContacts = async () => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts`);
    let data = await response.json();
    console.log("this is the getContact data ", data)
    if (response = "Agenda \"jdiaz23\" doesn't exist.") {
    createAgenda()
}
}

const addContact = async () => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts`, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({ contact })
    })
}

const contact = 
{
    "name": name,
    "phone": phone,
    "email": email,
    "address": address
  }

const updateContact = async(formInputs)=>{
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts/${id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ formInputs })
    })
    // let data = await response.json()
    // console.log("This is the udateContact data", data)
    if(response.ok){
        const updateContact = await response.json()
        dispatch({type: "update_contact", contact: updateContact})
    }
}

const deleteContact = async (id) =>{
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jdiaz23/contacts/${id}' ` ,{
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    let data = await response.json()
    console.log("this is the deleteContact data ", data)
}

