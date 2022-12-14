import {
  BorderBottomBox,
  FlexBox,
  PaddedText,
  StyledText,
} from './StyledComponents'

const Header = () => (
  <BorderBottomBox>
    <FlexBox>
      <FlexBox>
        <PaddedText>ooo</PaddedText>
      </FlexBox>
      <StyledText fontSize='32px' textAlign='center' width='90vw'>
        Countries Catalogue
      </StyledText>
    </FlexBox>
  </BorderBottomBox>
)
export default Header
