import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import styles from '../../dist/styles/DashboardStyles/DashboardStyles.module.css';

function CalenderViewTwo() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-100 mx-auto" >
       <Calendar className={styles.Calendar} onChange={onChange} value={value} />
    </div>
    
  );
}

export default CalenderViewTwo;
