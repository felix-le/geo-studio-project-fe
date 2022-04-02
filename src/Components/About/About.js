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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
