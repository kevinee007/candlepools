import React, { useState } from 'react'
import { AutoColumn } from '../Column'
// import { RowBetween } from '../Row'
import styled from 'styled-components'
// import { StyledInternalLink } from '../../theme'
import { ButtonPrimary } from 'components/Button'

// import { TYPE } from '../../theme'
// import { CardNoise, CardBGImage } from './styled'

// const StatContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   gap: 12px;
//   margin-bottom: 1rem;
//   margin-right: 1rem;
//   margin-left: 1rem;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//   display: none;
// `};
// `

const Wrapper = styled(AutoColumn)<{ showBackground: boolean; bgColor: any }>`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  position: relative;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '1')};
  background: ${({ theme, bgColor, showBackground }) =>
    `radial-gradient(91.85% 100% at 1.84% 0%, ${bgColor} 0%, ${showBackground ? theme.white : theme.bg5} 100%) `};
  color: ${({ theme, showBackground }) => (showBackground ? theme.white : theme.text1)} !important;

  ${({ showBackground }) =>
    showBackground &&
    `  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);`}
`

// const TopSection = styled.div`
//   display: grid;
//   grid-template-columns: 48px 1fr 120px;
//   grid-gap: 0px;
//   align-items: center;
//   padding: 1rem;
//   z-index: 1;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     grid-template-columns: 48px 1fr 96px;
//   `};
// `

const BottomSection = styled.div<{ showBackground: boolean }>`
  padding: 12px 16px;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '0.4')};
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  z-index: 1;
`

const Input = styled.input`
  font-size: 14px;
  border-radius: 12px;
  width: auto;
  outline: none;
  text-align: left;
`

export default function CandleBurner() {
  const [messageInput, setMessageInput] = useState('')
  const [burnAmount, setBurnAmount] = useState('')

  return (
    <Wrapper showBackground={true} bgColor={'#506485'}>
      <BottomSection showBackground={true}>
        <Input
          placeholder={'Write your message here...'}
          value={messageInput}
          onChange={e => setMessageInput(e.target.value)}
        />
      </BottomSection>
      <BottomSection showBackground={true}>
        <Input placeholder={'CNDL to Burn'} value={burnAmount} onChange={e => setBurnAmount(e.target.value)} />
      </BottomSection>
      <BottomSection showBackground={true}>
        <ButtonPrimary padding="8px" borderRadius="8px">
          Burn
        </ButtonPrimary>
      </BottomSection>
    </Wrapper>
  )
}
