export type Point = [number, number, number]

export interface Vehicle {
  name?: string
  model: string
  build?: number
}

export interface Location {
  area: string
  base: string
  start: Point
}

export interface Trip {
  name: string
  date: [string, string]
  type: number
  team: number
  status: number
  location: Location
  vehicle: Vehicle
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
