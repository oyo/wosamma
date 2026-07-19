import { N, Viewable } from '../util/ui'
import { renderMap, showTrips } from './MapRender'

class MapSingle extends Viewable {
  constructor() {
    super()
    this.view = N('div', undefined, { class: 'map' })
  }
  render() {
    renderMap()
    void showTrips()
  }
}

export const Map = new MapSingle()
