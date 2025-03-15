export type GameName = {
    id: number
    priority: number
    game: string
}[]

export type GameProps = {
    gameName: GameName
    deleteGame: (id: number) => void
    updateGame: (id:number, property:string, newValue:number) => void
}