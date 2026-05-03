export default function Form() {
    return (
        <form className="add-ingredient-form">
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
    )
}