export interface CountriesType {
  countries: CountryType[]
}

export interface CountryType {
  name: string
  code: string
  currency: string
  emoji: SVGAElement
  continent: ContinentType
}
export interface Prop {
  country: CountryType
}
export interface SearchType {
  filterCountry: Function
}

export interface ContinentType {
  code: string
  name: string
}

export interface PropsType {
  textColor: string
  paddingTop: string
  paddingBottom: string
  paddingLeft: string
  paddingRight: string
  width: string
  height: string
  fontSize: string
  padding: string
  margin: string
  color: string
  background: string
  hoverBackground: string
  backgroundImage: string
  size: string
  border: string
  hoverColor: string
  textAlign: string
  noDefaults: boolean
  borderRadius: string
}
