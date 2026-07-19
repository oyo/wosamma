import { N, Viewable } from '../util/ui'
import { Map } from './Map'
import { UploadButton } from './ui/UploadButton'
import { ViewButton } from './ui/ViewButton'

class AppSingle extends Viewable {
  constructor() {
    super()
    this.view = N('div', [Map, ViewButton, UploadButton], { class: 'app' })
  }
  render() {
    Map.render()
  }
}

export const App = new AppSingle()
