import { Act } from '../../../state/action'
import { N, Viewable } from '../../../util/ui'
import { Button } from './Button'
import { SigninButton } from './SigninButton'
import './style.css'

const GlobeButton = new Button('globe', Act.VIEW_GLOBE, 'view globe')
const UploadButton = new Button('upload', Act.UPLOAD_TRACK, 'import track')
const UserButton = new SigninButton('signin', Act.SIGNIN, 'sign in')

class ButtonBarSingle extends Viewable {
  constructor() {
    super()
    this.view = N('div', [GlobeButton, UploadButton, UserButton], { class: 'button-bar' })
  }
}

export const ButtonBar = new ButtonBarSingle()
