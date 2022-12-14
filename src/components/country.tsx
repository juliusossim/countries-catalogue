import { Prop } from '../utils/types'
import { FlexBox, Box, StyledText, PaddedText, StyledButton } from './StyledComponents'

const Country = ({ country }: Prop) => (
  <Box paddingLeft='10vw' paddingBottom='5vh' paddingRight='10vw' margin='30px'>
    <FlexBox>
      <Box>{country.emoji}</Box>
      <PaddedText>{country.name}</PaddedText>
    </FlexBox>
    <StyledText margin='20px'>{`Continent: ${country.continent?.name}`}</StyledText>
    <StyledButton>See Details ...</StyledButton>
  </Box>
)
export default Country
