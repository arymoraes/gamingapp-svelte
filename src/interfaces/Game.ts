export interface GameRawI {
   name: string,
   url: string,
   image: string,
}

export interface GameI extends GameRawI {
   id: number,
   categories: [],
   rank: [],
}