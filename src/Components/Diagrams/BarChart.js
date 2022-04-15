import React from 'react';
import { Chart } from 'react-google-charts';

const BarChart = ({ newData, title }) => {
  const options = {
    title: `Total Co2 of ${title}`,
    chartArea: { width: '50%' },
    isStacked: true,
    hAxis: {
      title: 'Total Co2',
      minValue: 0,
    },
    vAxis: {
      title: 'Name',
    },
  };
  return (
    <Chart
      chartType='BarChart'
      width='100%'
      height='400px'
      data={newData}
      options={options}
    />
  );
};

export default BarChart;
