import type { LatLngExpression } from 'leaflet'

export const config = {
  //INITIAL_VIEW: [41, 11] as LatLngExpression, // med sea
  INITIAL_VIEW: [33, -26] as LatLngExpression, // world
  INITIAL_ZOOM: 4,
  LINE_COLOR: '#0066aa',
}

export const TrackType = {
  HIKE: 1,
  BIKE: 2,
  MOBIKE: 3,
  DRIVE: 4,
  BOAT: 5,
  FLY: 6,
}
