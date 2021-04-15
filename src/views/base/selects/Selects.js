import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react'
import CSelect from '../../../components/CSelect'
import { DocsLink } from 'src/reusable'

const ProgressBar = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <CCard>
        <CCardHeader>
          Single Select
          <DocsLink name="CProgressBar"/>
        </CCardHeader>
        <CCardBody>
          <CSelect
            options={options}
          />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Multiple Select
          <DocsLink name="CProgressBar"/>
        </CCardHeader>
        <CCardBody>
          <CSelect
            isMulti={true}
            options={options}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default ProgressBar
