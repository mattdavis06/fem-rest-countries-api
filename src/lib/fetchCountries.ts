import { COUNTRIES_API, COUNTRY_FIELDS } from '@/constants/urls'

export const fetchCountries = async () => {
  const res = await fetch(`${COUNTRIES_API}/all?fields=${COUNTRY_FIELDS}`, {
    next: { revalidate: 86400 }, //* Cache for 1 day
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch countries: ${res.status}`)
  }

  const countries = await res.json()
  return countries
}
