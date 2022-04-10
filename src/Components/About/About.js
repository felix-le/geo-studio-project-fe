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

            <p>
              The body of water that gives the town its name was surveyed and
              named by Captain (later Admiral) Henry Wolsey Bayfield in the 19th
              century, in honour of the Arctic explorer Sir William Edward
              Parry. In 1857, the modern townsite was established near the
              Ojibwa village of Wasauksing ("shining shore") at the mouth of the
              Seguin River. The post office was established in 1865.[3] Parry
              Sound was incorporated as a town in 1887. In the late 19th
              century, rail service was established, making the town an
              important depot along the rail lines to Western Canada.
            </p>

            <p>
              In 1916, a cordite factory was established in the nearby town of
              Nobel for the Imperial Munitions Board. In the late 1920s and
              early 1930s, an explosives and munitions factory was also built at
              Nobel, making Parry Sound an important part of both the First
              World War and the Second World War effort.
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
