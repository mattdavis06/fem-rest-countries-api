export type Params = {
  params: {
    name: string
  }
}

export interface CountryTypes {
  cca3: string
  region: string
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  population: number
  capital?: string
}
