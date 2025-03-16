import { ChangeEvent, MouseEvent, useState } from "react"
import addIcon from "./assets/plus-solid.svg"

type Props = {
    addGame: (priorityValue: number, gameName: string) => void
}

// Form the user uses

export default function Gameform({ addGame }: Props) {

    // State for currently inputted values from the form to be handled by handleSubmit
    const [inputValues, setInputValues] = useState({
        priority: "...",
        game: ""
    })

    // Clears the form by returning the setInputValues state back to default
    const clearForm = () => {
        setInputValues({
            priority: "...",
            game: ""
        })
    }
    
    // Handles the changes caused by users inputting information into the form
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    // Handles the submitting of information from the form before resetting the state back to default
    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addGame(parseInt(inputValues.priority), inputValues.game);
        clearForm()
    }

    return (
        <>
            <form className="form-group container">
                <div className="row">
                    <span className="mb-3 col-sm-10">
                        <label className="form-label d-flex flex-row fs-4">Game Name</label>
                        <input className="form-control form-control-lg d-flex flex-row"
                            type="text"
                            name="game"
                            placeholder="e.g.: Minecraft"
                            onChange={handleChange}
                            value={inputValues.game} />
                    </span>
                    
                    <span className="col-sm-2">
                        <label className="form-label d-flex flex-row fs-4">Priority</label>
                        <select
                            className="form-select form-select-lg"
                            name="priority"
                            onChange={handleChange}
                            value={inputValues.priority}>
                            <option defaultValue={"..."}>...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </span>
                </div>
                <button type="button" className="btn btn-outline-secondary btn-lg m-3" onClick={clearForm}>Clear</button>
                <button type="submit" className="btn btn-outline-success btn-lg m-3" onClick={handleSubmit}>Submit <img src={addIcon} style={{ width: "1rem" }} /></button>
            </form>
        </>
    )
}