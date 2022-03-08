import React from "react"

function NewStoreForm(onNewStore) {

function handleFormSubmit(event){
    event.preventDefault();

    const selectElement = event.target[]
}

    return(
        <form>
            <input type="text" id="name" placeholder="Store Name"/>
            <input type="text" id="image" placeholder="Image URL" />
            <input type="number" id="season" placeholder="Season" step="1"/>
            <input type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;