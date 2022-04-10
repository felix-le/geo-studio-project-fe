import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
};

const PieShow = ({ data }) => {
  return (
    <>
      <PieChart
        label={({ dataEntry }) => {
          return `${dataEntry.value} ${dataEntry.title}`;
        }}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        data={data}
      />
    </>
  );
};

const PieChartComponents = ({ data, labels }) => {
  const groupedData = [];

  labels.map((label) => {
    if (data.length > 0) {
      groupedData.push(data.filter((item) => item['type'] == label.title));
    }
  });

  return (
    <>
      {groupedData.length > 0 && (
        <>
          {groupedData.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item[0]['type']}</h1>
                {item.length > 0 && <PieShow data={item} />}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default PieChartComponents;
