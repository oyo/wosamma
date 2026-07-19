import { Act, trigger } from '../../../state/action'
import { addEvents, N, Viewable } from '../../../util/ui'
import './style.css'

class ViewButtonSingle extends Viewable {
  constructor() {
    super()
    this.view = addEvents(
      N('button', N('img', undefined, { src: 'img/icon/earth.svg' }), {
        class: 'button view-button',
      }),
      {
        click: () =>
          trigger({
            code: Act.VIEW_GLOBE,
          }),
      },
    )
  }
}

export const ViewButton = new ViewButtonSingle()
