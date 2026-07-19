import type { Action, ActionHandler } from '../types'

type Subscription = Record<number, Set<ActionHandler>>

export const Act = {
  VIEW_GLOBE: 1,
  VIEW_MEDITERRANEAN: 2,
  UPLOAD_TRACK: 3,
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
