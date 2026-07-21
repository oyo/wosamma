import { Act, subscribe, trigger } from '../../../state/action'
import type { Action, SigninResponse } from '../../../types'
import { addEvents, N } from '../../../util/ui'
import { Button } from './Button'

export class SigninButton extends Button {
  constructor(name: string, code: number, title: string) {
    super(name, code, title)
    subscribe([Act.SIGNIN_RESPONSE], this.updateIcon.bind(this))
    this.view = addEvents(
      N('button', N('img', undefined, { src: `img/icon/${name}.svg` }), {
        class: `${name}-button`,
        title,
      }),
      {
        click: () => trigger({ code }),
      },
    )
  }
  updateIcon(action: Action) {
    if (!action.value) return
    ;(this.getView().firstChild as HTMLImageElement).src = (
      action.value as SigninResponse
    ).profile.picture
  }
}
