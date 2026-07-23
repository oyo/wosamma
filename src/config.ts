import type { LatLngExpression } from 'leaflet'

export const config = {
  //INITIAL_VIEW: [41, 11] as LatLngExpression, // med sea
  INITIAL_VIEW: [33, -26] as LatLngExpression, // world
  INITIAL_ZOOM: 4,
  LINE_COLOR: '#0066aa',
}

export const TrackType = {
  HIKING: 1,
  BIKING: 2,
  MOTORBIKE: 3,
  DRIVING: 4,
  SAILING: 5,
  FLYING: 6,
}
