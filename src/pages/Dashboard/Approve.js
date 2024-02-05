import React from 'react'
import { useEffect } from 'react'
//import Approve from '../pages/Approve/Approve'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalFooter,
  CModalBody,
} from '@coreui/react'
import Constants from '../../constants/Constants'
import { useState } from 'react'
import styles from '../../dist/styles/FormStyles/FormStyle.module.css'
import '@coreui/coreui/dist/css/coreui.min.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { sizeWidth } from '@mui/system'
import { RiContactsBookLine } from 'react-icons/ri'
function Approve() {
  const [visible, setVisible] = useState(false)
  const [isEdit, setIsEdit] = useState(true)
  const [data, setData] = useState([]);
  console.log('Approval Data',data)
  useEffect(()=>{
    setVisible(true)
 }, []);
 useEffect(()=>{
 if (visible===true){
    const fetchData = async () => {
        let employeesUrl = Constants.EORMURL + 'approval/findAllEmployeeWithInitialEntry';
      
        try {
          const response = await fetch(employeesUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const jsonData = await response.json(); 
          console.log('jsonData', JSON.stringify(jsonData, null, 2));
          setData(jsonData); 
        } catch (error) {
    
          console.error('Error fetching data:', error);
         
        }
      };
      fetchData();
    }
}, [visible]);

// const fetchData = async () => {
//   let Employees= Constants.EORMURL+'approval/findAllEmployeeWithInitialEntry'
//   try {
   
//     const jsonData = await Employees.json();
//     setData(jsonData);
//   } catch (error) {
//   }
// };
// fetchData();
// Rest of your component logic
const handleApprove= async(id)=>{
    const finalData = {
         employeeId:id,
         isApprove:true
      }
     //let AccessToken = localStorage.getItem('AccessToken')
      let Fullurl= Constants.EORMURL+'approveEmployee/'+finalData.employeeId+'?'+'isApprove='+finalData.isApprove
      let res = await fetch(Fullurl, {
        method: 'post',
        headers: {
         //Authorization: AccessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      })
      .catch(function(error){
      });
        // setValidated(false)
      if (res.status === 200) {
        setVisible(!visible) 
      } else {
        
    }
}
  return (
    <>
    <CModal onLoad={() => setVisible(!visible)}
   size="xl"
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle id="LiveDemoExampleLabel">Employee Approval List</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CTable>
  <CTableHead>
    <CTableRow>
    
      <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Middle Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
      <CTableHeaderCell scope="col">phone number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Action</CTableHeaderCell>

    </CTableRow>
  </CTableHead>
   <CTableBody>
  {data.map((item) => (
          <CTableRow key={item.id}>
            <CTableHeaderCell style={{ fontWeight:'normal' }} scope="col">{item.firstName}</CTableHeaderCell>
            <CTableHeaderCell style={{ fontWeight:'normal' }} scope="col">{item.middleName}</CTableHeaderCell>
            <CTableHeaderCell style={{ fontWeight:'normal' }} scope="col">{item.lastName}</CTableHeaderCell>
            <CTableHeaderCell style={{ fontWeight:'normal' }} scope="col">{item.emailIdOfficial}</CTableHeaderCell>
            <CTableHeaderCell style={{ fontWeight:'normal' }} scope="col">{item.primaryMobileNo}</CTableHeaderCell>
            <CTableDataCell><CButton className={styles.btnColor} onClick={() => handleApprove(item.id)}>Approve</CButton></CTableDataCell>
            {/* Add more cells for additional columns */}
          </CTableRow>
        ))}
  </CTableBody> 
</CTable>
      </CModalBody>
      <CModalFooter>
        
      </CModalFooter>
    </CModal>

  </>
  )
}

export default Approve