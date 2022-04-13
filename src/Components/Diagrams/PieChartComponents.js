import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { makeStyles } from '@mui/styles';
import { sumBy } from 'lodash';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  singlePie: {
    width: '50%',
    padding: '5%',
    textAlign: 'center',
  },

  titlePercentageWrapper: {
    display: 'flex',
    marginTop: '30px',
    textAlign: 'center',
    '@media (max-width: 1000px)': {
      flexWrap: 'wrap',
    },
  },
  titlePercentage: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '10px',
    '@media (max-width: 1000px)': {
      fontSize: '0.8rem',
    },
  },
}));
const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
};
function percentage(partialValue, totalValue) {
  if (partialValue == 0) {
    return;
  }
  return ((100 * partialValue) / totalValue).toFixed(2);
}
const PieShow = ({ data, total }) => {
  const styles = useStyles();
  return (
    <>
      <PieChart
        label={({ dataEntry }) => {
          const percenShow = percentage(dataEntry.value, total);
          if (!percenShow) {
            return;
          }
          return `${percenShow}%`;
        }}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        data={data}
      />

      {data.length > 0 && (
        <div className={styles.titlePercentageWrapper}>
          {data.map((pie, i) => {
            const { color, value } = pie;
            return (
              <React.Fragment key={i}>
                {value === 0 ? null : (
                  <span
                    style={{ color: `${color}` }}
                    className={styles.titlePercentage}
                  >
                    {pie.title}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};

const PieChartComponents = ({ data, labels }) => {
  const groupedData = [];
  const styles = useStyles();
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
            const total = sumBy(item, 'value');

            return (
              <div key={index} className={styles.singlePie}>
                <h1>{item[0]['type']}</h1>
                {item.length > 0 && <PieShow data={item} total={total} />}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default PieChartComponents;
