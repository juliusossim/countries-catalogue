import { CountriesType, CountryType } from '../utils/types'
import Country from './country'
import { Box, ScrollLayout } from './StyledComponents'

const CountryMap = ({ countries }: CountriesType) => {
  return (
    <ScrollLayout>
      {countries?.map((country: CountryType) => (
        <Country key={country?.code} country={country} />
      ))}
    </ScrollLayout>
  )
}
export default CountryMap
