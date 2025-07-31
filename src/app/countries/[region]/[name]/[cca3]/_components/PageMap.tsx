import Map from '@/components/layout/shared/Map/Map'
import { CountryTypes } from '@/types'

export function PageMap({ country }: { country: CountryTypes }) {
  return (
    <div className='h-60 w-full lg:col-span-2 lg:h-96'>
      <Map latlng={country.latlng} googleMapsUrl={country.maps.googleMaps} />
    </div>
  )
}
