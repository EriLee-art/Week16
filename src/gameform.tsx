import { ChangeEvent, MouseEvent, useState } from "react"
import addIcon from "./assets/plus-solid.svg"

type Props = {
    addGame: (priorityValue: number, gameName: string) => void
    setShowForm: (value:boolean) => void
}

export default function Gameform({ addGame }: Props) {

    const [inputValues, setInputValues] = useState({
        priority: 1,
        game: ""
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addGame(inputValues.priority, inputValues.game);
    }

    return (
        <>
            <form className="form-group">
                <label>Game Name</label>
                    <input type="text" name="game" placeholder="e.g.: Minecraft"
                        onChange={handleChange}
                        value={inputValues.game} />
                
                <label>Priority</label>
                <select
                    name="priority"
                    onChange={handleChange}
                    value={inputValues.priority}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br></br>
                <button type="button">Clear</button>
                <button type="submit" onClick={handleSubmit}>Submit <img src={addIcon} style={{ width: "1rem" }} /></button>
            </form>
        </>
    )
}