import CallAIButton from "./CallAIButton.jsx"
import RecipeFromAI from "./RecipeFromAI.jsx"

export default function Ingredients({ ingredients }) {

    
    const ingredientItems = ingredients.map((item, index)=>(
        <li key={index}>{item}</li>
    ))



    return (
        <>
            <section className="ingredients-section">
                <h2>Ingredients on hand:</h2>

                <ul className="ingredients-list" aria-live="polite">
                    {ingredientItems}
                </ul>

                {ingredients.length > 3 && <CallAIButton />}

            </section>
            <section>
                <RecipeFromAI />
            </section>
        </>
    )
}