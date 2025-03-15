import trashIcon from "./assets/trash-solid.svg"
import editIcon from "./assets/pen-solid.svg"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

// Properties for the props passed down from Gamelist
type AddedProps = {
    gameName: {
        id: number,
        priority: number,
        game: string
    },
    deleteGame: (id: number) => void
    updateGame: (id:number, property:string, newValue:number) => void
}

//Renders the game in a small card for the game list

// Returns the order of the the game alongside the game's name and two buttons for editing and deleting
export default function Gamecard( {gameName, deleteGame, updateGame}: AddedProps ) {

    return(
    <>
        <div>
            {gameName.game}
            
                {
                    /**Dropdown button from react-bootstrap that 
                     * updates priority*/
                }
                <DropdownButton
                    drop="end"
                    id="dropdown-classic-button"
                    variant="success"
                    title=<img
                        src={editIcon}
                        style={{ width: "1rem" }}
                    />
                >
                    <Dropdown.Item
                        href="#/action-1"
                        onClick={() => updateGame(gameName.id, "priority", 1)}
                    >
                        Priority 1
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="#/action-2"
                        onClick={() => updateGame(gameName.id, "priority", 2)}
                    >
                        Priority 2
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="#/action-3"
                        onClick={() => updateGame(gameName.id, "priority", 3)}
                    >
                        Priority 3
                    </Dropdown.Item>
                </DropdownButton>
                
                <button
                    className="btn btn-danger ms-2 p-1"
                    onClick={() => deleteGame(gameName.id)}
                >
                <img src={trashIcon} style={{ width: "1rem" }}/>
            </button>
        </div>
    </>
    )
}