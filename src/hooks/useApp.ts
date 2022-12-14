import { useEffect, useState } from 'react'
import { CountryType } from '../utils/types'
// gql
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../utils/queries'

const useApp = () => {
  const [state, setState] = useState([])
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES)

  const [cachedData, setCachedData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    search !== '' ? setState(filterFront(search)) : setState(cachedData)
  }, [search])

  useEffect(() => {
    data?.countries?.length > 0 && setCachedData(data.countries)
  }, [loading])

  const filterFront = (term: string) =>
    cachedData?.filter((country: CountryType) => country?.name?.includes(term))

  const filterCountry = (term: string) => {
    setSearch(term)
    refetch({ search: { eq: term } })
  }

  return { data, loading, filterCountry, state, error }
}
export default useApp
