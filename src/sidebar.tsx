import Gamelist from "./gamelist"
import { GameProps } from "./types"

// Sidebar for the application
export default function Sidebar({
    gameName,
    deleteGame,
    updateGame
    }: GameProps) {
    return(
        <div className="container-fluid text-center d-flex flex-column">
            
            <h1 className="mt-4 mb-4">My Games</h1>
            
            <Gamelist
                gameName={gameName}
                deleteGame={deleteGame}
                updateGame={updateGame}
            />
        </div>
    )
}