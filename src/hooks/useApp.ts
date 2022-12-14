import { CountriesType } from './../utils/types';
import { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash/debounce'
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
    // filterCountry();
    search !== '' ? setState(filterFront(search)) : setState(cachedData)
  }, [search])

  useEffect(() => {
    data?.countries?.length > 0 && handleStates()
  }, [loading])


  const handleStates = () => {
    data?.countries?.length >= 249 && setCachedData(data?.countries)
    setState(data?.countries)
  }
  const filterFront = (term: string) =>
    cachedData?.filter((country: CountryType) => country?.name?.toLocaleLowerCase()?.includes(term?.toLocaleLowerCase()))

  const filterCountry = () => refetch({ search: { eq: search } })

  const changeSearch = (e: any) => setSearch(e.target.value);

  const debouncedSearch = useMemo(
    () => debounce(changeSearch, 300)
  , []);


  return { loading, filterCountry, state, error, debouncedSearch }
}
export default useApp
