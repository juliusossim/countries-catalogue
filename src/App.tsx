// components
import Header from './components/Header'
import Search from './components/Search'
import { Loader, StyledLayout } from './components/StyledComponents'
import CountryMap from './components/CountryMap'
import useApp from './hooks/useApp'

function App() {
  const { filterCountry, loading, state, error, debouncedSearch } = useApp()

  return (
    <StyledLayout>
      <Header />
      <Search filterCountry={filterCountry} debouncedSearch={debouncedSearch} />

      {error  && alert(error.message)}
      {loading ? (
        <Loader data-testid='loading' textAlign='center'>
          Loading ....
        </Loader>
      ) : (
        <CountryMap data-testid='list' countries={state} />
      )}
    </StyledLayout>
  )
}

export default App
