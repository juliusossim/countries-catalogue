// components
import Header from './components/Header'
import Search from './components/Search'
import { Loader, StyledLayout, StyledText } from './components/StyledComponents'
import CountryMap from './components/CountryMap'
import useApp from './hooks/useApp'

function App() {
  const { filterCountry, loading, data, state, error } = useApp()

  return (
    <StyledLayout>
      <Header />
      <Search filterCountry={filterCountry} />
      {error  && alert(error.message)}
      {loading ? (
        <Loader data-testid='loading' textAlign='center'>
          Loading ....
        </Loader>
      ) : (
        <CountryMap data-testid='list' countries={data?.countries?.length > 0 ? data?.countries : state} />
      )}
    </StyledLayout>
  )
}

export default App
