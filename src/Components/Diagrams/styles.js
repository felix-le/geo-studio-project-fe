import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},

  section: {
    padding: '60px 0',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabWrapper: {},
  tabs: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tab: {
    fontSize: '1.25rem !important',
    fontWeight: 'bold !important',
  },
}));

export { useStyles };
