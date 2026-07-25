import L from 'leaflet'
import anchor from '../assets/icons/anchor.svg'
import marker from '../assets/icons/marker.svg?raw'
import bike from '../assets/icons/bike.svg?raw'
import mobike from '../assets/icons/mobike.svg?raw'
import boat from '../assets/icons/boat.svg?raw'

const icon = ['', '', bike, mobike, '', boat].map((i) =>
  i
    .replace(/^\s*<svg\s+[^>]+>\s*/, '')
    .replace(/\s*<\/svg>\s*$/, '')
    .replace(/808080/g, '000000'),
)

export const typeMarker = (
  type: number,
) => `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40">
<g transform="translate(8.8,8.8)scale(0.15)">
  ${icon[type]}
</g>
  ${marker}
</svg>`

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

export const getMarkerIcon = (type: number, color: string = '808080') =>
  new L.Icon({
    iconUrl: `data:image/svg+xml,${encodeURIComponent(typeMarker(type).replace('818181', color))}`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconAnchor: [15, 40],
    popupAnchor: [15, -40],
    shadowSize: [40, 40],
  })
