import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const tiers = [
  {
    title: 'Gratuit',
    price: '0',
    description: [
      '10 requêtes possible par jour',
      'Pas de stockage de rêves',
      'Help center access',
      'downtime 3h par jour'
    ],
    buttonText: 'Soumettre',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Puissance interprétateur de rêve',
    price: '45',
    description: [
      '100 requêtes faisable en un jour',
      '10 GB de stockage d"historique',
      'Help center access',
    ],
    buttonText: 'Soumettre',
    buttonVariant: 'contained',
  },
  {
    title: 'Beta',
    price: '20',
    description: [
      '50 requêtes possible par jour',
      'Historiques stockés',
      'Help center access'
    ],
    buttonText: 'Soumettre',
    buttonVariant: 'outlined',
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container 
      disableGutters 
      maxWidth="sm" 
      component="main" 
      id="section_tarif"
      sx={{ pt: 8, pb: 6 }} 
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Tarifs
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          On veut tous connaître la signification de nos rêves depuis notre tendre enfance.
          Cette fois IA ONYRIX de l'industrie des rêves à fait un grand pas dans le monde 
          et offre ses services suivantes : 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Tarifs() {
  return <PricingContent />;
}