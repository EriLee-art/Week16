import Gamecard from "./gamecard"
import { GameProps } from "./types"

// Creates an ordered list of games for the sidebar
export default function Gamelist( {gameName, deleteGame, updateGame}: GameProps ) {

    const spacing = `mb-4 mt-1 pt-2`

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
            <h4 className={spacing}>Game Priority 1</h4>
            <div>
                {priority1.map( g => (
                    <Gamecard
                        key={g.id}
                        gameName={g}
                        deleteGame={deleteGame}
                        updateGame={updateGame}
                    />
                ))}
            </div>

            <h4 className={spacing}>Game Priority 2</h4>
            <div>
                {priority2.map( g => (
                    <Gamecard
                        key={g.id}
                        gameName={g}
                        deleteGame={deleteGame}
                        updateGame={updateGame}
                    />
                ))}
            </div>                

            <h4 className={spacing}>Game Priority 3</h4>
            <div>
                {priority3.map( g => (
                    <Gamecard
                        key={g.id}
                        gameName={g}
                        deleteGame={deleteGame}
                        updateGame={updateGame}
                    />
                ))}
            </div>
        </>
    )
}