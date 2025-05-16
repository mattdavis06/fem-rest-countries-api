export const fetchAllCountries = async () => {
  const baseUrl = process.env.COUNTRIES_API

  if (!baseUrl) {
    throw new Error('COUNTRIES_API env variable is not defined')
  }

  const res = await fetch(`${baseUrl}/all`, {
    next: { revalidate: 86400 }, // Cache for 1 day (Next.js 15 style)
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch countries: ${res.status}`)
  }

  const countries = await res.json()
  return countries
}
