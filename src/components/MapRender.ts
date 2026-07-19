import L, { type LatLngExpression } from 'leaflet'
import { Map } from './Map'
import { getBBox, parse, simplify, type TrkPoint } from 'trackutil'
import { config } from '../config'
import type { Trip } from '../types'
import { getAnchorIcon, getMarkerIcon } from '../util/map'
import { Act, subscribe } from '../state/action'

// status: 0 = missing, 1 = incomplete, 2 = full, 3 = reconstructed
const StatusColor = ['cc0000', 'ffaa00', '008800', '004488']

let map: L.Map
let tripsLayer = new L.FeatureGroup()
let trackLayer = new L.FeatureGroup()

const mapViewAll = (): L.Map => {
  trackLayer.clearLayers()
  map.fitBounds(tripsLayer.getBounds())
  return map
}

subscribe([Act.VIEW_GLOBE], mapViewAll)

export const renderMap = () => {
  map = L.map(Map.getView() as HTMLElement)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map.setView(config.INITIAL_VIEW, config.INITIAL_ZOOM))
  tripsLayer.addTo(map)
  trackLayer.addTo(map)
  return map
}

export const showTrack = async (trip: Trip) => {
  const input = await fetch(`./tracks/${trip.name}/track.csv`)
  const text = await input.text()
  const tracks = parse(text)
  const output = simplify(tracks, 0.000005) as TrkPoint[][]
  const bbox = getBBox(output)
  map.fitBounds([
    [bbox.min.lat, bbox.min.lon],
    [bbox.max.lat, bbox.max.lon],
  ])
  trackLayer.clearLayers()
  output.map((track) => {
    const line = track.map((p) => [p.lat, p.lon]) as LatLngExpression[]
    L.polyline(line).setStyle({ color: config.LINE_COLOR }).addTo(trackLayer)
    //L.marker(line[0], { alt: 'start' }).addTo(trackLayer)
    L.marker(line[line.length - 1], { icon: getAnchorIcon('000000'), alt: 'end' }).addTo(trackLayer)
  })
}

export const showTripMarker = (trip: Trip) => {
  const start = L.marker(trip.place.location.reverse() as LatLngExpression, {
    icon: getMarkerIcon(StatusColor[trip.status]),
  })
    .on('click', () => {
      void showTrack(trip)
    })
    .addTo(tripsLayer)
  return start
}

export const showTrips = async () => {
  const response = await fetch('./tracks/meta.json')
  const json = (await response.json()) as Trip[]
  tripsLayer.clearLayers()
  json.map(showTripMarker)
  mapViewAll()
  return map
}
