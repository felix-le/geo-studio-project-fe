import React from 'react';
import { Chart } from 'react-google-charts';

const LineCharts = ({ newData, title }) => {
  const options = {
    title: `Total Co2 of ${title}`,
    curveType: 'function',
    legend: { position: 'bottom' },
  };
  return (
    <Chart
      chartType='LineChart'
      width='100%'
      height='400px'
      data={newData}
      options={options}
    />
  );
};

export default LineCharts;
