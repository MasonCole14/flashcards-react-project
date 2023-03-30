import React from "react";
import { useHistory } from "react-router-dom";

function AddCardsButton({ deckId }) {
    const history = useHistory() 

    return (
        <button 
            type="button"
            className="btn btn-dark mr-2"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
            >
                <span className="oi oi-plus" /> Add Cards
            </button>
    );
}

export default AddCardsButton;