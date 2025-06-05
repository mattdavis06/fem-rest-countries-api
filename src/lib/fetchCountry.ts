import { CountryTypes } from '@/types'

export const fetchCountryByCode = async (
  code: string,
): Promise<CountryTypes | null> => {
  try {
    const res = await fetch(`${process.env.COUNTRIES_API}/alpha/${code}`)

    if (!res.ok) {
      throw new Error('Failed to fetch country')
    }

    const data = await res.json()
    return data[0] // The API returns an array
  } catch (error) {
    console.error('Error fetching country:', error)
    return null
  }
}
