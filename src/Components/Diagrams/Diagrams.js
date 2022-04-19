import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useStyles } from './styles';
import {
  getCorporate,
  getCommunities,
  getForecasts,
  getTotal,
} from '../../api/getDataApi';
import useRequest from '../../hooks/useRequest';
import PieChartComponents from './PieChartComponents';
import { stylesPieWapper } from './stylesPieWapper';
import BarChart from './BarChart';
import LineCharts from './LineCharts';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = stylesPieWapper();
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={classes.pieDiagramWrapper}>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const comunityLabels = [
  {
    id: 1,
    label: 'commercial',
    title: 'Commercial & Institutional',
  },
  {
    id: 2,
    label: 'industrial',
    title: 'Industrial',
  },
  {
    id: 3,
    label: 'offroad',
    title: 'Off-Road Transport',
  },
  {
    id: 4,
    label: 'onroad',
    title: 'On-Road Transport',
  },
  {
    id: 5,
    label: 'residential',
    title: 'Residential',
  },
  { id: 6, label: 'waste', title: 'Waste', color: '#a02ab2' },
  {
    id: 7,
    label: 'water',
    title: 'Waterborne Transport',
  },
];
const corporateLabels = [
  // Buildings & Facilities	Water & Wastewater	Streetlights	Fleet	Waste
  // building fleet name:  street: waste: water:

  {
    id: 1,
    label: 'building',
    title: 'Buildings & Facilities',
  },
  {
    id: 2,
    label: 'water',
    title: 'Water & Wastewater',
  },
  {
    id: 3,
    label: 'street',
    title: 'Streetlights',
  },
  {
    id: 4,
    label: 'fleet',
    title: 'Fleet',
  },
  {
    id: 5,
    label: 'waste',
    title: 'Waste',
  },
];

const forecastLabels = [
  {
    id: 1,
    label: 'co2',
    title: 'CO2',
  },
];

const totalLabels = [
  {
    id: 1,
    label: 'totalco2',
    title: 'Total CO2',
  },
];

export default function Diagrams() {
  const [value, setValue] = React.useState(0);

  const [communities, setCommunities] = useState([]);

  const [corporate, setCorporate] = useState([]);

  const [forecasts, setForecasts] = useState([]);

  const [total, setTotal] = useState([]);

  const styles = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchCommunities = useRequest({ request: getCommunities });

  async function fetchCommunitiesFn() {
    try {
      const data = await fetchCommunities.execute();
      setCommunities(data.data);
    } catch (e) {
      console.log('🚀 ~  fetchStudentFn ~ e', e);
    }
  }

  // Do the same with the Corporate
  const fetchCorporate = useRequest({ request: getCorporate });
  async function fetchCorporateFn() {
    try {
      const data = await fetchCorporate.execute();
      setCorporate(data.data);
    } catch (e) {
      console.log('🚀 ~  fetchStudentFn ~ e', e);
    }
  }

  // Do the same with the forecasts
  const fetchForecasts = useRequest({ request: getForecasts });
  async function fetchForecastsFn() {
    try {
      const data = await fetchForecasts.execute();
      setForecasts(data.data);
    } catch (e) {
      console.log('🚀 ~  fetchStudentFn ~ e', e);
    }
  }
  // Do the same with the total
  const fetchTotal = useRequest({ request: getTotal });
  async function fetchTotalFn() {
    try {
      const data = await fetchTotal.execute();
      setTotal(data.data);
    } catch (e) {
      console.log('🚀 ~  fetchStudentFn ~ e', e);
    }
  }

  useEffect(() => {
    fetchCommunitiesFn();
    fetchCorporateFn();
    fetchForecastsFn();
    fetchTotalFn();
  }, []);
  const colours = ['036639', 'A5A5A5', 'A2231D', '3F888F', '5D9B9B'];
  const getResults = (data, labels) => {
    const result = [];
    labels.map(({ label, title }) => {
      data.map((item, i) => {
        if (item[label]) {
          const newObj = {
            title: item['name'],
            value: parseInt(item[label]),
            color: `#${colours[i]}`,
            type: title,
          };
          result.push(newObj);
        }
      });
    });
    return result;
  };
  const communityResults = getResults(communities, comunityLabels);

  const corporateResults = getResults(corporate, corporateLabels);
  const forecastResults = getResults(forecasts, forecastLabels);
  const totalResults = getResults(total, totalLabels);

  const getBarChartData = (data) => {
    const result = [];
    // get all labels in object in data array
    if (data.length > 0) {
      const labels = Object.keys(data[0]).slice(1);
      // get all values in object in data array
      let arr = data.map((obj) => {
        // remove first element of array
        return Object.values(obj).slice(1);
      });
      const newArr = arr.map((item) => {
        // conver each element in item to number
        // if cannot conver to number, return its value

        return item.map((value) => {
          if (value === '0') {
            return 0;
          } else if (!Number(value)) {
            return value;
          } else {
            return Number(value);
          }
        });
      });
      //concat labels and arr
      result.push(labels, ...newArr);
    }
    return result;
  };

  const communityBarChartData = getBarChartData(communities);
  const corporateBarChartData = getBarChartData(corporate);
  const forecastsBarChartData = getBarChartData(forecasts);
  const totalBarChartData = getBarChartData(total);

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.heading}>Total Emissions</h1>
        <div className={styles.tabWrapper}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={value}
              onChange={handleChange}
              aria-label='Vertical tabs example'
              className={styles.tabs}
            >
              <Tab
                label='Communities'
                {...a11yProps(0)}
                className={styles.tab}
              />
              <Tab label='Corporate' {...a11yProps(1)} className={styles.tab} />
              <Tab label='Forecasts' {...a11yProps(2)} className={styles.tab} />
              <Tab label='Total CO2' {...a11yProps(3)} className={styles.tab} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <PieChartComponents
                data={communityResults}
                labels={comunityLabels}
              />
              <BarChart newData={communityBarChartData} title='Communities' />
              <LineCharts newData={communityBarChartData} title='Communities' />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PieChartComponents
                data={corporateResults}
                labels={corporateLabels}
              />
              <BarChart newData={corporateBarChartData} title='Corporate' />
              <LineCharts newData={corporateBarChartData} title='Corporate' />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <PieChartComponents
                data={forecastResults}
                labels={forecastLabels}
              />
              <BarChart newData={forecastsBarChartData} title='Forecasts' />
              <LineCharts newData={forecastsBarChartData} title='Forecasts' />
            </TabPanel>
            <TabPanel value={value} index={3}>
              {/* total, totalBarChartData */}
              <PieChartComponents data={totalResults} labels={totalLabels} />
              {/* totalBarChartData */}
              <BarChart newData={totalBarChartData} title='Total' />
              <LineCharts newData={totalBarChartData} title='Total' />
            </TabPanel>
          </Box>
        </div>
      </Container>
    </section>
  );
}
