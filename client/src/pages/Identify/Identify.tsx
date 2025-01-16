import { FC } from 'react'
import PageHeader from 'components/PageHeader'
import { Box } from '@mui/material'
import i18n from 'i18next'

type IdentifyProps = {}

const Identify: FC<IdentifyProps> = () => {
  return (
    <>
      <PageHeader title={i18n.t('identify.title')} />
      <Box component="main"></Box>
    </>
  )
}

export default Identify
