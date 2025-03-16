import { useState } from "react"
import Gamedisplay from "./gamedisplay"
import Sidebar from "./sidebar"
import Topbar from "./topbar"

export default function App() {

  // Array containing all the games
  const gameName = [
    {
      id: 0,
      priority: 1,
      game: `Red Dead Redemption 2`
    },
    {
      id: 1,
      priority: 1,
      game: `Hollow Knight: SilkSong`
    },
    {
      id: 2,
      priority: 1,
      game: `Elden Ring: Shadow of the Erdtree`
    },
    {
      id: 3,
      priority: 2,
      game: `A Hat In Time`
    },
    {
      id: 4,
      priority: 2,
      game: `Halo Infinite`
    },
    {
      id: 5,
      priority: 2,
      game: `Grand Theft Auto: 6`
    },
    {
      id: 6,
      priority: 3,
      game: `Call of Duty: Black Ops 6`
    },
    {
      id: 7,
      priority: 3,
      game: `The Legend of Zelda: Echoes of Wisdom`
    },
    {
      id: 8,
      priority: 3,
      game: `Pokemon Legends: Z-A`
    }
  ]

  // Base state for gameName to be interacted with
  const [games, setGames] = useState(gameName);

  // TEST function to add a Game to the array
  const addGame = (priorityValue: number, gameName: string) => {
    const newGame = {
      id: games.length ? games[games.length - 1].id + 1 : 0,
      priority: priorityValue,
      game: gameName
    }
    
    setGames([...games, newGame])
  }
  
  // Delete function to delete a game from the state
  const deleteGame = (idToDelete:number) => {
    setGames( games.filter( game => game.id !== idToDelete) )
  }
  
  // Update function to change which Priority a game is set in
  const updateGame = (idToUpdate:number, property:string, newValue:number) => {
    setGames(games.map( game => (
      game.id !== idToUpdate ? game : {
        ...game,
        [property]: newValue
      }
    )))
  }

  return(
    <div className="container-fluid row">
        <div className="row">
        <Topbar />
        </div>
      <div className="container-xl h-100 col-lg-4">
        <Sidebar
          gameName={games}
          deleteGame={deleteGame}
          updateGame={updateGame}
        />
      </div>
      <div className="col">
        <div className="row h-100 align-items-center">
          <Gamedisplay
            addGame={addGame} />
        </div>
      </div>  
    </div>
  )
}