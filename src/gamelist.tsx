import Gamecard from "./gamecard"
import { GameProps } from "./types"

// Creates an ordered list of games for the sidebar
export default function Gamelist( {gameName, deleteGame, updateGame}: GameProps ) {


    // Set of functions for mapping out specific priority games
    const priority1 = gameName.filter(g =>
        g.priority === 1
    );
    
    const priority2 = gameName.filter( g =>
        g.priority === 2
    );
    
    const priority3 = gameName.filter( g =>
        g.priority === 3
    );

    return(
        <>
            <div className="row">
                <h4>Game Priority 1</h4>
                <div className="overflow-y-auto" style={{height: "200px"}}>
                    {priority1.map( g => (
                        <Gamecard
                            key={g.id}
                            gameName={g}
                            deleteGame={deleteGame}
                            updateGame={updateGame}
                        />
                    ))}
                </div>
            </div>

            
            <div className="row">
                <h4>Game Priority 2</h4>
                <div className="overflow-y-auto" style={{height: "200px"}}>
                    {priority2.map( g => (
                        <Gamecard
                            key={g.id}
                            gameName={g}
                            deleteGame={deleteGame}
                            updateGame={updateGame}
                        />
                    ))}
                </div>
            </div>

            <div className="row">
                <h4>Game Priority 3</h4>
                <div className="overflow-y-auto" style={{height: "200px"}}>
                    {priority3.map( g => (
                        <Gamecard
                            key={g.id}
                            gameName={g}
                            deleteGame={deleteGame}
                            updateGame={updateGame}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}