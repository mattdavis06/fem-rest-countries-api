export const formatPopulation = (pop: number) => {
  if (pop >= 1_000_000_000) {
    return `${(pop / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}b`
  } else if (pop >= 1_000_000) {
    return `${(pop / 1_000_000).toFixed(1).replace(/\.0$/, '')}m`
  } else if (pop >= 1_000) {
    return `${(pop / 1_000).toFixed(1).replace(/\.0$/, '')}k`
  } else {
    return pop.toString()
  }
}
