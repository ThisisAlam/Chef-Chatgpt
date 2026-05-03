export default function Form({addIngredient}) {
    function handleSubmit(e){
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        props.addIngredient(newIngredient)
        e.currentTarget.reset()
    }
    
    return (
        <>
            <form onClick={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>
                    + Add ingredient
                </button>
            </form>
            <hr />
        </>
    )
}