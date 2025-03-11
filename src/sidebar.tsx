import Gamelist from "./gamelist"
import addIcon from "./assets/plus-solid.svg"

// Properties for the props passed down from App
type AddedProps = {
    gameName: {
        id: number, priority: number, order: number, game: string
    }[],
    addGame: () => void
    deleteGame: (id: number) => void
    updatePriority: (id:number, priority:number) => void
}

// Sidebar for the application
export default function Sidebar({
    gameName,
    addGame,
    deleteGame,
    updatePriority
    }: AddedProps) {
    return(
        <div className="container-fluid text-center d-flex flex-column">
            
            <h1 className="mt-4 mb-4">My Games</h1>
            
            {
                // Creates a button for adding a game to the game priority lists
            }
            
            <button
                className="btn btn-outline-primary mb-5 mt-3"
                onClick={addGame}>
                Add Game 
                <img
                    className="ms-1"
                    style={{ width: "1rem" }}
                    src={addIcon}
                />
            </button>
            
            <Gamelist
                gameName={gameName}
                deleteGame={deleteGame}
                updatePriority={updatePriority}
            />
        </div>
    )
}