import styled from 'styled-components'
import { device } from '../utils/responsive'
import { PropsType } from '../utils/types'

export const StyledText = styled.div`
  font-size: ${(props: PropsType) => props.fontSize || '16px'};
  font-family: 'Mogra', cursive;
  width: ${(props: PropsType) => props.width};
  text-align: ${(props: PropsType) => props.textAlign};
  align-items: center;
  margin-bottom: ${(props: PropsType) => props.margin};
  color: ${(props: PropsType) => props.textColor};
`
export const PaddedText = styled(StyledText)`
  padding: 10px;
`

export const Loader = styled(StyledText)`
  padding: 10px;
  animation: rotate(90);
`

export const StyledLayout = styled.section`
  max-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  width: 99vw;
  border: solid 1px;
`
export const Box = styled.div`
  align-items: center;
  padding-right: ${(props: PropsType) => props.paddingRight};
  padding-left: ${(props: PropsType) => props.paddingLeft};
  padding-bottom: ${(props: PropsType) => props.paddingBottom};
  margin-top: ${(props: PropsType) => props.margin};
  margin-bottom: ${(props: PropsType) => props.margin};
  padding: ${(props: PropsType) => props.padding};
`
export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
  align-items: center;
  padding: ${(props: PropsType) => props.padding};
  margin: ${(props: PropsType) => props.margin};
`

export const BorderBottomBox = styled(Box)`
  border-bottom: solid 1px;
`
export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Mogra', cursive;
  padding: 10px;
  min-width: 10vw;
  color: ${(props: PropsType) => props.color || (!props.noDefaults && '#fff')};
  border: ${(props: PropsType) => props.border || (!props.noDefaults && 'none')};
  background: ${(props: PropsType) => props.background || (!props.noDefaults && '#000')};
  &: hover {
    border: ${(props: PropsType) => props.border || (!props.noDefaults && 'solid 1px #de3')};
    border-radius: ${(props: PropsType) => props.borderRadius || (!props.noDefaults && '10px')};
    background: ${(props: PropsType) => props.hoverBackground || (!props.noDefaults && '#4e5133')};
    color: ${(props: PropsType) => props.hoverColor};
    transition: all 0.5s ease;
  }

  margin: ${(props: PropsType) => props.margin};
`
export const IconButton = styled(StyledButton)`
  border-radius: 50px;
  width: ${(props: PropsType) => props.size}rem;
  height: ${(props: PropsType) => props.size}rem;

  color: ${(props: PropsType) => props.color};
  border: ${(props: PropsType) => props.border};
  background: ${(props: PropsType) => props.background};
  &: hover {
    border: ${(props: PropsType) => props.border};
    background: ${(props: PropsType) => props.hoverBackground};
    color: ${(props: PropsType) => props.hoverColor};
  }

  margin: ${(props: PropsType) => props.margin};
`
export const StyledSearch = styled.input`
  min-width: ${(props: PropsType) => props.width};
  min-height: ${(props: PropsType) => props.height};
  color: ${(props: PropsType) => props.color};
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
  align-items: center;
  padding: auto;
  padding-left: 10px;
  position: relative;
  border: ${(props: PropsType) => props.border};
  background: ${(props: PropsType) => props.background};
  &: hover {
    border: ${(props: PropsType) => props.border};
    background: ${(props: PropsType) => props.hoverBackground};
    color: ${(props: PropsType) => props.hoverColor};
  }

  margin: ${(props: PropsType) => props.margin};
`
export const StyledCol = styled.div`
  color: ${(props: PropsType) => props.color};
  height: ${(props: PropsType) => props.height};
  border: ${(props: PropsType) => props.border};
  background: ${(props: PropsType) => props.background};
  background-image: url(${(props: PropsType) => props.backgroundImage});
  &: hover {
    border: ${(props: PropsType) => props.border};
    background: ${(props: PropsType) => props.hoverBackground};
    color: ${(props: PropsType) => props.hoverColor};
  }

  margin: ${(props: PropsType) => props.margin};
`
