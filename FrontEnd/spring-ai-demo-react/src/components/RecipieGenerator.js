import React, { useState } from "react";




function RecipieGenerator() {

    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipie, setRecipie] = useState('');


        const createRecipie = async()=>{
            try {
           
                const response = await fetch(`http://localhost:8080/recipie-creator?ingredients=${ingredients}dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`)
                const data = await response.text();
                console.log(data);
                setRecipie(data);
                
            } catch (error) {
                console.error("Error generating recipie: ", error)
                
            }
        };


    return (
        <div>
            <h2>Generate recipie</h2>
            <input 
                type="text"
                value={ingredients}
                onChange={(e)=>setIngredients(e.target.value)}
                placeholder="Enter ingredients (comma separated)"
            />

            <input 
                type="text"
                value={cuisine}
                onChange={(e)=>setCuisine(e.target.value)}
                placeholder="Enter Cuisine"
            />

            <input 
                type="text"
                value={dietaryRestrictions}
                onChange={(e)=>setDietaryRestrictions(e.target.value)}
                placeholder="Enter dietary restriction"
            />
        <button onClick={createRecipie}>Create Recipie</button>

        <div className="output">
            <pre className="recipe-text">{recipie}</pre>
        </div>

        </div>  
    );
}

export default RecipieGenerator