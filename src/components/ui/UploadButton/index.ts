import { Act, trigger } from '../../../state/action'
import { addEvents, N, Viewable } from '../../../util/ui'
import './style.css'

class UploadButtonSingle extends Viewable {
  constructor() {
    super()
    this.view = addEvents(N('button', '⥣', { class: 'upload-button', title: 'upload track' }), {
      click: () =>
        trigger({
          code: Act.UPLOAD_TRACK,
        }),
    })
  }
}

export const UploadButton = new UploadButtonSingle()
