import Gameform from "./gameform"

// Displays the game that was chosen via random chance

type Props = {
    addGame: (priorityValue: number, gameName: string) => void
    setShowForm: (value:boolean) => void
    showForm: boolean
}


export default function Gamedisplay( { addGame, setShowForm } : Props) {
    return(
        <div className="container-fluid text-center flex-grow-1 d-flex flex-column">

            <h2>GAMING BACKLOG PICKER</h2>
            
            <Gameform addGame={addGame} setShowForm={setShowForm} />

        </div>

    )
}