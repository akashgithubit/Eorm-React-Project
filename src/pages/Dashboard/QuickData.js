import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from '../../dist/styles/FormStyles/FormStyle.module.css'
import { padding } from '@mui/system';
const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
 
};
export default function BasicBars() {
  return (
   
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }]}
      width={400}
      height={180}
      //padding={{ top: 0, right: 0, bottom: 100, left: 0 }}
    />
   
  );
}