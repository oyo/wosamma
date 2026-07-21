import { trigger } from '../../../state/action'
import { addEvents, N, Viewable } from '../../../util/ui'

export class Button extends Viewable {
  constructor(name: string, code: number, title: string) {
    super()
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
}
