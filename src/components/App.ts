import { N, Viewable } from '../util/ui'
import { Map } from './Map'
import { ButtonBar } from './ui/ButtonBar'

class AppSingle extends Viewable {
  constructor() {
    super()
    this.view = N('div', [Map, ButtonBar], { class: 'app' })
  }
  render() {
    Map.render()
  }
}

export const App = new AppSingle()
