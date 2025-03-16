// Button that randomly chooses a game for the user to play
// First chooses from priority, if none in priority1, moves to priority2 and so on

export default function Gamerandom() {
    return( 
        <>
            <div>
                <p>Click to Randomly Select a game from your game list!</p>
                <button className="btn btn-outline-primary" onClick={() => alert("I'm Walking here!")}>
                        Select Game
                </button>
            </div>
    </>
    )
}