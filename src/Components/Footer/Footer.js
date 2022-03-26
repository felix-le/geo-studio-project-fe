import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
const Inform = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const BoxFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderLeft: `1px solid white`,
}));

const FooterImg = styled('img')(({ theme }) => ({
  maxWidth: '174px',
  maxHeight: '90px',
}));
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
    pic: 'https://www.parrysound.ca/images/error/errorImage.jpg',
  },
  {
    id: 4,
    href: '#',
    pic: 'https://www.parrysound.ca/images/error/errorImage.jpg',
  },
];

export default function Footer() {
  return (
    <footer>
      <Box sx={{ width: 1, bgcolor: 'primary.main' }}>
        <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
          <BoxFooter gridColumn='span 3' style={{ borderLeft: 'none' }}>
            <List>
              {informLinks.map(({ id, title, href }) => (
                <Inform key={id} href={href}>
                  {title}
                </Inform>
              ))}
            </List>
          </BoxFooter>
          <BoxFooter gridColumn='span 3'>
            <List>
              {siteLinks.map(({ id, title, href, pic }) => (
                <Inform key={id} href={href}>
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
              ))}
            </List>
          </BoxFooter>
          <BoxFooter gridColumn='span 3'>
            <Inform>xs=4</Inform>
          </BoxFooter>
          <BoxFooter gridColumn='span 3'>
            <Inform>xs=8</Inform>
          </BoxFooter>
        </Box>
      </Box>
    </footer>
  );
}
