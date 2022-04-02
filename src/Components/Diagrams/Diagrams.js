import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const useStyles = makeStyles({
  root: {},
  digramsWrapper: {
    background: '#D2C9B1',
  },
  tabWrapper: {
    background: 'white',
  },
  tabList: {
    background: '#D2C9B1',
  },
});

const Tab = styled(TabUnstyled)`
  font-family: sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: '#D2C9B1';
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  display: flex;
  justify-content: center;
  color: black;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: '#D2C9B1',
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function Diagrams() {
  const styles = useStyles();
  return (
    <div className={styles.digramsWrapper}>
      <Container>
        <TabsUnstyled defaultValue={0} className={styles.tabWrapper}>
          <TabsList className={styles.tabList}>
            <Tab>Carling</Tab>
            <Tab>McKellar</Tab>
            <Tab>Seguin</Tab>
            <Tab>TOA</Tab>
            <Tab>TOPS</Tab>
          </TabsList>
          <TabPanel value={0}>First content</TabPanel>
          <TabPanel value={1}>Second content</TabPanel>
          <TabPanel value={2}>Third content</TabPanel>
          <TabPanel value={3}>4 content</TabPanel>
          <TabPanel value={4}>5 content</TabPanel>
        </TabsUnstyled>
      </Container>
    </div>
  );
}
