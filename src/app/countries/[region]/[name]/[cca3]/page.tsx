import BackBtn from '@/components/layout/shared/BackBtn'
import { fetchCountryByCode } from '@/lib/fetchCountry'
import { notFound } from 'next/navigation'
import { PageContent, PageHeader, PageMap } from './_components'

type CountryPageProps = {
  params: {
    cca3: string
  }
}

export default async function CountryPage({
  params,
}: {
  params: Promise<CountryPageProps['params']>
}) {
  const { cca3 } = await params
  const decodedCode = decodeURIComponent(cca3)
  const country = await fetchCountryByCode(decodedCode)

  if (!country) {
    notFound()
  }

  return (
    <section>
      <BackBtn />
      <div className='pt-10'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <PageHeader country={country} />
          <PageContent country={country} />
          <PageMap country={country} />
        </div>
      </div>
    </section>
  )
}
