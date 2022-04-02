import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { Container, Typography } from '@mui/material';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import CoffeeAddictsLogo from '../assets/images/CoffeeAddictsLogo.png';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Inform = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const FooterImg = styled('img')(({ theme }) => ({
  maxWidth: '174px',
  maxHeight: '90px',
}));
const useStyles = makeStyles({
  root: {},
  footerWrapper: {
    background: '#4AAEE4',
    '& .MuiContainer-root': {
      padding: '0px',
    },
  },

  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
    },
  },

  footerItem: {
    borderLeft: `1px solid white`,
    padding: '0 24px',
    width: '100%',
    '@media (max-width: 1024px)': {
      padding: 0,
      border: 'none',
    },
  },
  teamInform: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '@media (max-width: 1024px)': {
      '& p': {
        margin: 0,
      },
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 16px',
      img: {
        maxHeight: '64px',
      },
    },
  },
  formControl: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    border: 'none',
    '&:focus': {
      border: 'none',
    },
    padding: '5px',
  },
  button: {
    border: 'none',
    padding: '0',
    background: 'inherit',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      fontSize: '25px',
      color: 'white',
    },
  },
  footerContact: {
    marginTop: '15px',
    '@media (max-width: 1024px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    marginTop: 10,
    '& li': {
      listStyle: 'none',
      marginRight: '10px',
    },
  },
  IconWrapper: {
    '& svg': {
      color: 'white',
    },
  },
  imgWrapperHidden: {
    '@media (max-width: 1024px)': {
      display: 'none !important',
    },
  },
  marginResponHidden: {
    '@media (max-width: 1024px)': {
      marginTop: '-20px !important',
    },
  },
});

// Data
const informLinks = [
  {
    id: 1,
    title: 'Contact',
    href: '#',
  },
  {
    id: 2,
    title: 'Accessibility',
    href: '#',
  },
  {
    id: 3,
    title: 'Privacy',
    href: '#',
  },
  {
    id: 4,
    title: 'Terms of Use',
    href: '#',
  },
  {
    id: 5,
    title: '(416) 123 4567',
    href: '#',
  },
];

const siteLinks = [
  {
    id: 1,
    title: 'https://www.gbbr.ca/',
    href: '#',
  },
  {
    id: 2,
    title: 'https://www.parrysound.ca/',
    href: '#',
  },
  {
    id: 3,
    href: '#',
    pic: logo1,
  },
  {
    id: 4,
    href: '#',
    pic: logo2,
  },
];

const socialIcons = [
  {
    id: 1,
    href: '#',
    icon: <InstagramIcon />,
  },
  {
    id: 2,
    href: '#',
    icon: <FacebookIcon />,
  },
  {
    id: 3,
    href: '#',
    icon: <LinkedInIcon />,
  },
];

export default function Footer() {
  const styles = useStyles();

  const [inputValue, setInputValue] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <footer className={styles.footerWrapper}>
      <Container>
        <Box className={styles.footerContent}>
          <div
            className={styles.footerItem}
            style={{ border: 'none', padding: '0' }}
          >
            <List>
              {informLinks.map(({ id, title, href }) => (
                <ListItem key={id}>
                  <Inform key={id} href={href}>
                    {title}
                  </Inform>
                </ListItem>
              ))}
            </List>
          </div>
          <div className={`${styles.footerItem} ${styles.marginResponHidden}`}>
            <List>
              {siteLinks.map(({ id, title, href, pic }) => (
                <ListItem
                  key={id}
                  className={pic ? styles.imgWrapperHidden : ''}
                >
                  <Inform href={href} style={{ width: '100%' }}>
                    {title || ''}
                    {pic && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100%',
                        }}
                      >
                        <FooterImg src={pic} alt={title} />
                      </Box>
                    )}
                  </Inform>
                </ListItem>
              ))}
            </List>
          </div>
          <div className={`${styles.footerItem} ${styles.marginResponHidden}`}>
            <div className={styles.teamInform}>
              <div className={styles.teamInform__textWrapper}>
                <p>Dashboard Created By: </p>
                <p>CoffeeAddicts.ca </p>
              </div>
              <img src={CoffeeAddictsLogo} alt='CoffeeAddicts.ca' />
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerContact}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formControl}>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    onChange={(e) => setInputValue(e.target.value)}
                    className={styles.input}
                  />
                  <button
                    type='submit'
                    value='Submit'
                    className={styles.button}
                  >
                    <EmailIcon />
                  </button>
                </div>
              </form>
              <ul className={styles.socialIcons}>
                {socialIcons.map(({ id, href, icon }) => (
                  <li key={id}>
                    <a href={href} className={styles.IconWrapper}>
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Box>
      </Container>
    </footer>
  );
}
