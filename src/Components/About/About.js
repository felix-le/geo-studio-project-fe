import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import map from '../assets/images/map.png';
const useStyles = makeStyles({
  root: {},
  section: {
    paddingTop: '30px',
    paddingBottom: '30px',
    background: '#D2C9B1',
  },
  imgWrapper: {
    maxWidth: 500,
    maxHeight: 540,
    margin: '0 auto',
    padding: 5,
    background: '#fff',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
});

function About() {
  const styles = useStyles();
  return (
    <section className={styles.section}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
            <h1>Parry Sound</h1>
            <p>
              Parry Sound is a town in Ontario, Canada, located on the eastern
              shore of the sound after which it is named. Parry Sound is located
              160 km (99 mi) south of Sudbury and 225 km (140 mi) north of
              Toronto. It is a single tier government located in the territorial
              District of Parry Sound which has no second tier County, Regional
              or District level of government. Parry Sound is a popular cottage
              country region for Southern Ontario residents. It also has the
              world's deepest natural freshwater port
            </p>
            <p>
              During the early part of the 20th century, the area was a popular
              subject for the many scenic art works of Tom Thomson and members
              of the Group of Seven. There was a slight decline in economic
              activity shortly after World War I with J.R. Booth's construction
              of a rival town, Depot Harbour on nearby Parry Island, but this
              setback was overcome through later developments in tourism and
              commerce, and the accidental destruction by fire of the entire
              town of Depot Harbour on August 14, 1945.
            </p>

         
          </Grid>
          <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
            <div className={styles.imgWrapper}>
              <img src={map} alt='' className={styles.img} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default About;
