import { CountriesType, CountryType } from '../utils/types'
import Country from './country'
import { Box } from './StyledComponents'

const CountryMap = ({ countries }: CountriesType) => {
  return (
    <Box>
      {countries?.map((country: CountryType) => (
        <Country key={country?.code} country={country} />
      ))}
    </Box>
  )
}
export default CountryMap
