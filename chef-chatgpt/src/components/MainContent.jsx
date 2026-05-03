import React from "react"

import Form from "./sub-components/Form.jsx"
import Ingredients from "./sub-components/Ingredients.jsx"
import RecipeFromAI from "./sub-components/RecipeFromAI.jsx"

export default function MainContent() {
    const [ingredients, setIngredients] = React.useState([])

    return (
        <section className="main-content">
            <Form />
            <Ingredients ingredients={ingredients} />
            <RecipeFromAI />
        </section>
    )
}