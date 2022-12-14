import { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash/debounce'
import { CountryType } from '../utils/types'
// gql
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../utils/queries'
/* eslint-disable  @typescript-eslint/no-explicit-any */

const useApp = () => {
  const [state, setState] = useState([])
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES)

  const [cachedData, setCachedData] = useState([])
  const [search, setSearch] = useState('')

  // update state with cached data or with eager filter results
  useEffect(() => {
   search === '' ? setState(cachedData) : setState(filterFront(search)) 
  }, [search])

  // cache data, update state with query or filter results.
  useEffect(() => {
    handleStates();
   }, [data])

  const handleStates = () => {
    data?.countries?.length >= 249 && setCachedData(data?.countries) // set cached when whole
    setState(data?.countries)
  }
  // filter cached data at the front
  const filterFront = (term: string) =>
    cachedData?.filter((country: CountryType) =>
      country?.name?.toLocaleLowerCase()?.includes(term?.toLocaleLowerCase()),
    )

  // query by search term
  const filterCountry = () => refetch({ search: { eq: search } })

  const changeSearch = (e: any) => setSearch(e.target.value) // set search term

  const debouncedSearch = useMemo(
    // set search term after 3 seconds of inactivity
    () => debounce(changeSearch, 300),
    [],
  )

  return { loading, filterCountry, state, error, debouncedSearch } // expose for usage
}
export default useApp
