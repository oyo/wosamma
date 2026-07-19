import L from 'leaflet'
import anchor from '../assets/icons/anchor.svg'
import marker from '../assets/icons/marker.svg'

export const ICON = {
  ANCHOR: anchor,
  MARKER: marker,
}

export const getAnchorIcon = (color: string = '808080') =>
  new L.Icon({
    iconUrl: anchor.replace('808080', color),
    iconAnchor: [7.5, 3],
    popupAnchor: [7.5, -20],
  })

export const getMarkerIcon = (color: string = '808080') =>
  new L.Icon({
    iconUrl: marker.replace('808080', color),
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconAnchor: [15, 40],
    popupAnchor: [15, -40],
    shadowSize: [40, 40],
  })
