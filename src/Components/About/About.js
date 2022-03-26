import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},
  section: {
    paddingTop: '30px',
    paddingBottom: '30px',
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
          <Grid item xs={12} md={6}>
            <h1>Parry Sound</h1>
            <p>
              {' '}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
              quas aspernatur ex quasi quae, eius distinctio enim odit nisi
              pariatur sequi debitis sit quos, aliquid corrupti? Reiciendis, aut
              assumenda? Distinctio.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.imgWrapper}>
              <img
                src='https://source.unsplash.com/random/400x400'
                alt=''
                className={styles.img}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default About;
