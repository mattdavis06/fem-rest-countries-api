export type Params = {
  params: {
    name: string
  }
}

export interface CountryTypes {
  cca3: string
  region: string
  subregion: string
  name: {
    common: string
    official: string
    nativeName: [
      {
        official: string
      },
    ]
  }
  currencies: [
    {
      name: string
      symbol: string
    },
  ]
  languages: string
  area: number
  car: {
    side: string
    signs: string
  }
  tld: string
  flags: {
    svg: string
  }
  flag: string
  population: number
  capital?: string
  timezones: [timezone: string]
  startOfWeek: string
  latlng: [number, number]
  maps: {
    googleMaps: string
  }
  borders?: string[]
}
