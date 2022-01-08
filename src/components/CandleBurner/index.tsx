import React, { useState } from 'react'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import styled from 'styled-components'
import { ButtonConfirmed, ButtonError } from '../Button'
// import ProgressCircles from '../ProgressSteps'
// import { useApproveCallback, ApprovalState } from '../../hooks/useApproveCallback'
import { useBurnerContract, useCndlContract } from 'hooks/useContract'
import { ethers } from 'ethers'
import { BURNER_ADDRESS } from '../../constants'


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
  // const [attempting, setAttempting] = useState<boolean>(false)
  
  const burnerContract = useBurnerContract()
  const cndlContract = useCndlContract()

  // const [approval, approveCallback] = useApproveCallback(parsedAmount, stakingInfo.stakingRewardAddress)

  async function onApprove() {
    // setAttempting(true)
    // if (burnerContract && parsedAmount) {
    if (cndlContract) {
      // if (approval === ApprovalState.APPROVED) {
      await cndlContract.approve(BURNER_ADDRESS, ethers.constants.MaxUint256)
      // }
    }
  }

  async function onBurn() {
    // setAttempting(true)
    // if (burnerContract && parsedAmount) {
    if (burnerContract) {
      // if (approval === ApprovalState.APPROVED) {
      await burnerContract.burnWithMessage(
        ethers.utils.parseUnits(burnAmount, 18),
        messageInput
      )
      // }
    }
  }

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
        <RowBetween>
            {/* <ButtonConfirmed
              mr="0.5rem"
              onClick={onAttemptToApprove}
              confirmed={approval === ApprovalState.APPROVED || signatureData !== null}
              disabled={approval !== ApprovalState.NOT_APPROVED || signatureData !== null}
            > */}
            <ButtonConfirmed
              mr="0.5rem"
              // onClick={onAttemptToApprove}
              onClick={onApprove}
            >
              Approve
            </ButtonConfirmed>
            {/* <ButtonError
              disabled={!!error || (signatureData === null && approval !== ApprovalState.APPROVED)}
              error={!!error && !!parsedAmount}
              onClick={onStake}
            > */}
            <ButtonError
              onClick={onBurn}
            >
              {/* {error ?? 'Burn'} */}
              Burn
            </ButtonError>
          </RowBetween>
          {/* <ProgressCircles steps={[approval === ApprovalState.APPROVED || signatureData !== null]} disabled={true} /> */}
      </BottomSection>
    </Wrapper>
  )
}
