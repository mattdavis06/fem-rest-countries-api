import { COUNTRIES_API } from '@/constants/urls'

export const fetchAllCountries = async () => {
  const res = await fetch(`${COUNTRIES_API}/all`, {
    next: { revalidate: 86400 }, //* Cache for 1 day
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch countries: ${res.status}`)
  }

  const countries = await res.json()
  return countries
}
