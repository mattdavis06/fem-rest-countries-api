'use client'

import L, { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { renderToStaticMarkup } from 'react-dom/server'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

export type MapProps = {
  latlng: LatLngTuple
  googleMapsUrl: string
}

const Map = ({ latlng, googleMapsUrl }: MapProps) => {
  const { theme } = useTheme()
  // Render PinIcon to static SVG markup
  const svgString = encodeURIComponent(
    renderToStaticMarkup(
      <MapPin className='fill-bg-light text-bg-dark size-12 cursor-auto' />,
    ),
  )

  // Create a DivIcon with SVG as HTML content
  const customIcon = L.divIcon({
    className: '', // Clear any default class names
    html: `<div>${decodeURIComponent(svgString)}</div>`,
    iconAnchor: [24, 24], // Adjust icon anchor to center the icon
    popupAnchor: [0, -24], // Adjust popup anchor to position the popup above the icon
  })

  return (
    <Link href={googleMapsUrl} target='_blank' className='h-full w-full'>
      <MapContainer
        className='h-full w-full shadow'
        center={latlng}
        zoom={4}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        zoomControl={false}
        keyboard={false}
        touchZoom={false}
        attributionControl={false}
      >
        <Marker position={latlng} icon={customIcon}></Marker>
        <TileLayer
          url={
            theme === 'light'
              ? 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
              : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          }
        />
      </MapContainer>
    </Link>
  )
}

export default Map
