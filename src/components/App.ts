import { N, Viewable } from '../util/ui'
import { Map } from './Map'
import { ViewButton } from './ui/ViewButton'

class AppSingle extends Viewable {
  constructor() {
    super()
    this.view = N('div', [Map, ViewButton], { class: 'app' })
  }
  render() {
    Map.render()
  }
}

export const App = new AppSingle()
