import type { Action, ActionHandler } from '../types'

type Subscription = Record<number, Set<ActionHandler>>

export const Act = {
  SIGNIN: 1,
  SIGNIN_RESPONSE: 2,
  VIEW_GLOBE: 3,
  UPLOAD_TRACK: 4,
}

const subscriber: Subscription = Object.values(Act).reduce(
  (a: Subscription, c: number) => ((a[c] = new Set()), a),
  {} as Subscription,
)

export const subscribe = (codes: number[], newHandler: ActionHandler) =>
  codes.forEach((code) => subscriber[code].add(newHandler))

export const trigger = (action: Action) => {
  //console.log(action)
  subscriber[action.code].forEach((s) => s(action))
}
