import { Prop } from '../utils/types'
import { FlexBox, Box, StyledText, PaddedText, StyledButton } from './StyledComponents'

const Country = ({ country }: Prop) => (
  <Box paddingLeft='10vw' paddingBottom='5vh' paddingRight='10vw' margin='30px'>
    <FlexBox>
      <Box>{country.emoji}</Box>
      <PaddedText fontSize='20px'>{country.name}</PaddedText>
    </FlexBox>
  <PaddedText>
  <FlexBox>
   <StyledText>Continent</StyledText>
    <StyledText fontSize='20px' paddingLeft='10px'>{country.continent?.name}</StyledText>
   </FlexBox>
  </PaddedText>

    <StyledButton>See Details ...</StyledButton>
  </Box>
)
export default Country
