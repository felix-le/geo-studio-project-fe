import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import SpaIcon from '@mui/icons-material/Spa';
import { makeStyles } from '@mui/styles';

const data = [
  {
    id: 1,
    icon: <CarRepairIcon />,
    title: '18,571.1 km',
    subTitle: 'Total distance',
  },
  {
    id: 2,
    icon: <SpaIcon />,
    title: 'title 2',
    subTitle: 'sdflkjdfkdl',
  },
  {
    id: 3,
    icon: <CarRepairIcon />,
    title: 'title 3',
    subTitle: 'Total distance 3',
  },
  {
    id: 4,
    icon: <CarRepairIcon />,
    title: 'title 4',
    subTitle: 'Total distance 4',
  },
  {
    id: 5,
    icon: <CarRepairIcon />,
    title: 'title 5',
    subTitle: 'Total distance 5',
  },
  {
    id: 6,
    icon: <CarRepairIcon />,
    title: 'title 6',
    subTitle: 'Total distance 6',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    background: '#D2C9B1',
    padding: '60px 0',
  },
  cardHeader: {
    width: '100%',
    minHeight: '100px',

    '& svg': {
      width: '100%',
      maxHeight: '200px',
      height: '100%',
      color: 'white',
    },
  },
  card: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {},
  },
  cardWrapper: {
    width: 'calc(30% - 20px)',
    margin: '10px',

    [theme.breakpoints.down('md')]: {
      width: 'calc(50% - 20px)',
      margin: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
      margin: '10px',
    },
  },
}));
const BasicCard = ({ icon, title, subTitle }) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <div className={styles.cardHeader}>{icon}</div>
      <CardContent>
        <Typography variant='h3' component='div'>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          adjective
        </Typography>
        <Typography variant='body2'>{subTitle}</Typography>
      </CardContent>
    </Card>
  );
};

function IconSection() {
  const styles = useStyles();
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {data.map((item) => (
            <div key={item.id} className={styles.cardWrapper}>
              <BasicCard
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default IconSection;
