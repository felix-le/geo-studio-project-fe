import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
};

const PieChartComponents = () => {
  return (
    <PieChart
      label={({ dataEntry }) => {
        return `${dataEntry.value} ${dataEntry.title}`;
      }}
      labelStyle={{
        ...defaultLabelStyle,
      }}
      data={[
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
      ]}
    />
  );
};

export default PieChartComponents;
