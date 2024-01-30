import React, { useState,useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import styles from '../../components/Styles/FormStyles/FormStyle.module.css'
import DropDownCommon from 'src/components/Common-components/DropDownCommon'

import { searchCompanyGroupApiCall } from 'src/api/apiConfig'
import { useNavigate } from 'react-router-dom'
import Constants from 'src/constants/Constants'
const initialValuesone = {
  companyGroupName: '',
  description: '',
  status:'',
}
const CompanyGroupForm = () => {
  const navigate = useNavigate()
  const [apiData, setApiData] = useState(null)
  const [values, setValues] = useState(initialValuesone)
  const [validated, setValidated] = useState(false)
  const [message, setMessage] = useState('')
  const handleGetCompanyGroupApiCall = (response) => {
    setApiData(response)
  }
  useEffect(()=>{
     searchCompanyGroupApiCall(handleGetCompanyGroupApiCall, 'companyGroup/findAll')
   
  },[])

  const handleSubmitCheck = async (event) => {
    const form = event.currentTarget
    if (!values.companyGroupName || !values.status) {
      alert('please fill all the * required fields')
      setValidated(true)
    } else if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    } else {
      setValidated(false)
      const finalData = {
        ...values,
      }
    //  let AccessToken = localStorage.getItem('AccessToken')
    let FullURL=Constants.EORMURL+'companyGroup/save';
      let res = await fetch(FullURL, {
        method: 'POST',
        headers: {
          //Authorization: AccessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      })
  
      if (res.status === 200) {
        setValidated(false)
        setValues(initialValuesone)
        setMessage('Data saved successfully')
        setTimeout(function () {
          setMessage('')
        }, 2000)
        searchCompanyGroupApiCall(handleGetCompanyGroupApiCall, 'companyGroup/findAll')
      }
    }   
  
  }
  
//   function handleTypeFuncitonCompany(values) {
//     setValues((prevState) => ({
//       ...prevState,
//       companyId: values,
//     }))
//   }
  function handleInputChange(e) {
    const { name, value } = e.target
    let newValue = value.replace(/[^a-zA-Z0-9-\s]/g, '')
    if (newValue !== value) {
      alert('Should not contain symbols')
    }
    setValues({
      ...values,
      [name]: newValue,

    })
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="text-dark">
              <h5 className={styles.empSubHeader}>Company Group Form</h5>
            </CCardHeader>
            <CCardBody>
              <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmitCheck}
              >
                <CCol md={12}>
                  <CRow>
                    <CCol xs>
                      <CFormLabel htmlFor="resourceNo">
                        <strong>Company Group Name</strong>
                        <sup style={{ color: 'red', fontSize: '18px' }}>*</sup>
                      </CFormLabel>
                      <CFormInput
                        required
                        type="text"
                        placeholder="Company Group Name"
                        id="companyGroupName"
                        title="Enter only letter."
                        //pattern="[a-zA-Z0-9-\s]+"
                        name="companyGroupName"
                        value={values.companyGroupName}
                        onChange={handleInputChange}   
                      />
                    </CCol>
                    <CCol xs>
                      <CFormLabel htmlFor="resourceNo">
                        <strong>Description</strong>
                      </CFormLabel>
                      <CFormInput
                        type="text"
                        placeholder=" Description"
                        id="description"
                        title="Enter only letter."
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                        result
                      />
                    </CCol>
                    <CCol xs>
                <CFormLabel htmlFor="inputEmail4">
                  <strong>Status</strong>
                  <sup style={{ color: 'red', fontSize: '18px' }}>*</sup>
                </CFormLabel>
                <select
                      value={values.status}
                      required
                      name="status"
                      onChange={handleInputChange}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="">Select Status</option>
                      <option value="ACTIVE">ACTIVE</option>
                      <option value="INACTIVE">INACTIVE</option>
                    </select>
               </CCol>
              <CCol xs></CCol>
                  </CRow>
                </CCol>
              </CForm>
            </CCardBody>
            <CCardHeader className="text-dark p-3 border border-0">
              <CCol md={12} className="d-flex justify-content-left">
                {message ? (
                  <CButton disabled className={styles.btnColorDisabled}>
                    Data Saved &#10004;
                  </CButton>
                ) : (
                  <CButton className={styles.btnColor} onClick={handleSubmitCheck}>Create</CButton>
                )}
                <div className={styles.btnPadding}></div>
              </CCol>
            </CCardHeader>
          </CCard>
        </CCol>
       
      </CRow>
    </>
  )
}

export default CompanyGroupForm
