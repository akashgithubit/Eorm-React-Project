import React, { useEffect, useState } from "react";
import {
  CRow,
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CCardLink,
  CCardText,
  CCol,
} from "@coreui/react";
import styles from "../../dist/styles/DashboardStyles/DashboardStyles.module.css";
import RunningNotifications from "../../pages/dashboard/RunningNotification";
import { FaBalanceScale, FaChartLine, FaSlack, FaOpenid } from "react-icons/fa";
import PolicyLinks from "../../pages/dashboard/PolicyLinks";
const TopMiniCard = (val) => {
  const [values, setValues] = useState([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         const accessToken = localStorage.getItem('AccessToken')
  //         const res = await fetch('http://localhost:8080/api/v1/leave_statistics', {
  //             method: 'GET',
  //             headers: {
  //                 Authorization: accessToken,
  //                 'Content-Type': 'application/json',
  //             },
  //         })
  //         if (res.status === 200) {
  //             const data = await res.json()
  //             setValues(data)
  //         } else {
  //         }
  //     }
  //     fetchData()
  // }, [val])
  return (
    <div className={styles.TopMiniCardBG} style={{ paddingTop: "20px" }}>
      <CRow>
        <CCol sm={8}>
          <CRow>
            <CCol sm={3} lg={3} style={{ height: "100px" }}>
              <div className={styles.bgclr1}>
                <label className={styles.ttl1count}>
                  20
                  <sub style={{ paddingLeft: "30px" }}>
                    {/* <FaBalanceScale style={{color:"grey" ,fontSize:"35px"}} /> */}
                  </sub>
                </label>
                {/* <p className={styles.ttlValue1}>{values[0] && values[0].leaveBalance}</p> */}
                <p className={styles.ttl1}>Leave Balance</p>
              </div>
            </CCol>
            <CCol sm={3} lg={3} style={{ height: "100px" }}>
              <div className={styles.bgclr2}>
                <label className={styles.ttl1count}>
                  10
                  <sub style={{ paddingLeft: "30px" }}>
                    {/* <FaChartLine style={{color:"grey" ,fontSize:"35px"}} /> */}
                  </sub>
                </label>
                {/* <p className={styles.ttlValue1}>{values[0] && values[0].leaveBalance}</p> */}
                <p className={styles.ttl1}>Leave Taken</p>
              </div>
            </CCol>
            <CCol sm={3} lg={3} style={{ height: "100px" }}>
              <div className={styles.bgclr3}>
                <label className={styles.ttl1count}>
                  2
                  <sub style={{ paddingLeft: "30px" }}>
                    {/* <FaSlack style={{color:"grey" ,fontSize:"35px"}} /> */}
                  </sub>
                </label>
                {/* <p className={styles.ttlValue1}>{values[0] && values[0].leaveBalance}</p> */}
                <p className={styles.ttl1}>Leave Applied</p>
              </div>
            </CCol>
            <CCol sm={3} lg={3} style={{ height: "100px" }}>
              <div className={styles.bgclr4}>
                <label className={styles.ttl1count}>
                  12
                  <sub style={{ paddingLeft: "30px" }}>
                    {/* <FaOpenid style={{color:"grey" ,fontSize:"35px"}} /> */}
                  </sub>
                </label>
                {/* <p className={styles.ttlValue1}>{values[0] && values[0].leaveBalance}</p> */}
                <p className={styles.ttl1}>Punch Discrepancy</p>
              </div>
            </CCol>
          </CRow>
          <br></br>
          <CRow sm={12} >
            <PolicyLinks />
          </CRow>
        </CCol>
        <CCol sm={4}>
          <RunningNotifications />
        </CCol>
      </CRow>
    </div>
  );
};

export default TopMiniCard;
