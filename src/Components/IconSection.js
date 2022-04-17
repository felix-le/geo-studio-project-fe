import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import SpaIcon from '@mui/icons-material/Spa';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { makeStyles } from '@mui/styles';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';

const data = [
  {
    id: 1,
    icon: <CarRepairIcon />,
    title: '18,571.1 km',
    subTitle: 'not driven by an average passenger vehicle',
  },
  {
    id: 2,
    icon: <SpaIcon />,
    title: '76.6',
    subTitle: 'tree seedlings grown for 10 years',
  },
  {
    id: 3,
    icon: <LightbulbIcon />,
    title: '174.0 ',
    subTitle: 'Incandescent lamps switched to LEDs',
  },
  {
    id: 4,
    icon: <RestoreFromTrashIcon />,
    title: '195.5',
    subTitle: 'trash bags of waste recycled instead of landfilled',
  },
  {
    id: 5,
    icon: <LocalGasStationIcon />,
    title: '1,956.7 L ',
    subTitle: 'of gasoline not consumed',
  },
  {
    id: 6,
    icon: <SettingsCellIcon />,
    title: '558,845.5',
    subTitle: 'smartphones not charged    ',
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
  cardTitle: {
    textAlign: 'center',
  },
}));
const BasicCard = ({ icon, title, subTitle }) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <div className={styles.cardHeader}>{icon}</div>
      <CardContent>
        <Typography variant='h3' component='div' className={styles.cardTitle}>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'></Typography>
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
