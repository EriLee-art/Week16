import Gameform from "./gameform"

// Displays the form the user will use

type Props = {
    addGame: (priorityValue: number, gameName: string) => void
}


export default function Gamedisplay( { addGame } : Props) {
    return(
        <div className="container-fluid text-center flex-grow-1 d-flex flex-column">

            <h1 className="m-5">GAMING BACKLOG PICKER</h1>
            
            <h2 className="m-4">Add Games</h2>
            <Gameform addGame={addGame} />

        </div>

    )
}