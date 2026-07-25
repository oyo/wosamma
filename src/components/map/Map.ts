import { N, Viewable } from '../../util/ui'
import { renderMap, showTrips } from './MapRender'
import './MarkerCluster.Default.css'
import './MarkerCluster.css'

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
