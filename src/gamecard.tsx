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
            <div className="d-flex m-2 justify-content-center align-items-center">
                <div className="fs-5">
                    {gameName.game}
                </div>
            
                {
                    /**Dropdown button from react-bootstrap that 
                     * updates priority*/
                }
                <div className="d-flex ms-3">
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
                </div>
                <div className="d-flex">
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteGame(gameName.id)}
                    >
                    <img src={trashIcon} style={{ width: "1rem" }}/>
                    </button>
                </div>
        </div>
    </>
    )
}