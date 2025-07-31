'use client'

import dynamic from 'next/dynamic'
import type { MapProps } from './Map'

const Map = dynamic(() => import('./Map'), {
  ssr: false,
}) as React.ComponentType<MapProps>

export default Map
