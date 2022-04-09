import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useStyles } from './styles';
import {
  getCorporate,
  getCommunities,
  getForecasts,
} from '../../api/getDataApi';
import { PieChart } from 'react-minimal-pie-chart';
import useRequest from '../../hooks/useRequest';

const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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

export default function Diagrams() {
  const [value, setValue] = React.useState(0);

  const [comunities, setCommunities] = useState([]);
  const [corporate, setCorporate] = useState([]);
  const [forecasts, setForecasts] = useState([]);

  const styles = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(
    '🚀 ~ file: Diagrams.js ~ line 54 ~ Diagrams ~ comunities',
    comunities
  );

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

  useEffect(() => {
    fetchCommunitiesFn();
    fetchCorporateFn();
    fetchForecastsFn();
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.heading}>Visualize data</h1>
        <div className={styles.tabWrapper}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.paper',
              display: 'flex',
            }}
          >
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={value}
              onChange={handleChange}
              aria-label='Vertical tabs example'
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label='Communities' {...a11yProps(0)} />
              <Tab label='Corporates' {...a11yProps(1)} />
              <Tab label='Forecasts' {...a11yProps(2)} />
              <Tab label='Total CO2' {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
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
            </TabPanel>
            <TabPanel value={value} index={1}>
              Corporates
            </TabPanel>
            <TabPanel value={value} index={2}>
              Forecasts
            </TabPanel>
            <TabPanel value={value} index={3}>
              Total CO2
            </TabPanel>
          </Box>
        </div>
      </Container>
    </section>
  );
}
