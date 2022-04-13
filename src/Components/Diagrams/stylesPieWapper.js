import { makeStyles } from '@mui/styles';

const stylesPieWapper = makeStyles((theme) => ({
  root: {
    padding: '10px',
    width: '100%',
  },
  pieDiagramWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export { stylesPieWapper };
