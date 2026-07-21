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

export interface SigninProfile {
  email: string
  name: string
  picture: string
}

export interface SigninResponse {
  profile: SigninProfile
}

export type ActionValue = string | Trip | Point | SigninResponse

export interface Action {
  code: number
  value?: ActionValue
}

export type ActionHandler = (action: Action) => void

export type SubscriptionHandling = {
  codes: number[]
  handler: ActionHandler
}
