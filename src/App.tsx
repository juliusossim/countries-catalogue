// components
import Header from './components/Header'
import Search from './components/Search'
import CountryMap from './components/CountryMap'
// styled components
import { Loader, StyledLayout } from './components/StyledComponents'
// hooks
import useApp from './hooks/useApp'

function App() {
  const { filterCountry, loading, state, error, debouncedSearch } = useApp()

  return (
    <StyledLayout>
      <Header />
      <Search filterCountry={filterCountry} debouncedSearch={debouncedSearch} />
      {/* conditional rendering */}
      {error && alert(error.message)}
      {loading ? (
        <Loader data-testid='loading' textAlign='center'>
          Loading ....
        </Loader>
      ) : (
        <CountryMap data-testid='list' countries={state} /> // country list
      )}
    </StyledLayout>
  )
}

export default App
