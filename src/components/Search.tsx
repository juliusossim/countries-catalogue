import { useState } from 'react'
import { SearchType } from '../utils/types'
import {
  FlexBox,
  Box,
  StyledText,
  StyledSearch,
  StyledButton,
  BorderBottomBox,
} from './StyledComponents'

const Search = ({ filterCountry }: SearchType) => {
  const [state, setState] = useState('')
  return (
    <BorderBottomBox paddingLeft='10vw' paddingBottom='5vh' paddingRight='10vw' margin='30px'>
      <StyledText margin='20px' fontSize='32px'>
        {' '}
        Keyword{' '}
      </StyledText>
      <FlexBox>
        <Box paddingRight='5vw'>
          <StyledSearch
            data-testid='search'
            placeholder='search'
            width='70vw'
            height='40px'
            onChange={(e: any) => setState(e.target.value)}
          />
        </Box>
        <StyledButton data-testid='searchBtn' onClick={() => filterCountry(state)}>Search</StyledButton>
      </FlexBox>
    </BorderBottomBox>
  )
}
export default Search
