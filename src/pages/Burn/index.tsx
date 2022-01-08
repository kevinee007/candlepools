import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import CandleBurner from '../../components/CandleBurner'
import { RowBetween } from '../../components/Row'
import { BurnTabs } from '../../components/NavigationTabs'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'

// import { JSBI } from '@uniswap/sdk'
// import { BIG_INT_ZERO } from '../../constants'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

// const DataRow = styled(RowBetween)`
//   ${({ theme }) => theme.mediaWidth.upToSmall`
// flex-direction: column;
// `};
// `

export default function Burn() {
  return (
    <PageWrapper gap="lg" justify="center">
      <BurnTabs active={'burn'} />
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>Candle Burner</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>Burn your CNDL with a message.</TYPE.white>
              </RowBetween>{' '}
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        {/* <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>
          <Countdown exactEnd={stakingInfos?.[0]?.periodFinish} />
        </DataRow> */}

        <PoolSection>
          <CandleBurner />
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
