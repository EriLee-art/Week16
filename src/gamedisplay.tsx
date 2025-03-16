import Gameform from "./gameform"

// Displays the game that was chosen via random chance

type Props = {
    addGame: (priorityValue: number, gameName: string) => void
}


export default function Gamedisplay( { addGame } : Props) {
    return(
        <div className="container-fluid text-center flex-grow-1 d-flex flex-column">

            <h1 className="m-5">GAMING BACKLOG PICKER</h1>
            
            <Gameform addGame={addGame} />

        </div>

    )
}