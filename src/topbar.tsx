import Gamerandom from "./gamerandom";

// Contains the JSX/button for randomly selecting a game from the GameList, using GameRandom
export default function Topbar() {
    return(
        <div className="container-fluid text-center">
            <h1 className="mt-3 mb-4">BACKLOG SELECTOR</h1>
            <Gamerandom />
        </div>
    )
}