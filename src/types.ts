export type Point = [number, number, number]

export interface Boat {
  name: string
  model: string
  build: number
}

export interface Place {
  sea: string
  base: string
  location: Point
}

export interface Trip {
  name: string
  date: [string, string]
  crew: number
  status: number
  place: Place
  boat: Boat
  desc?: string
}

export type ActionValue = Trip | Point | string

export interface Action {
  code: number
  value?: ActionValue
}

export type ActionHandler = (action: Action) => void
