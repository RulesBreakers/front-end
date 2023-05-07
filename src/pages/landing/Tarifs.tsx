import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  GlobalStyles,
  Grid,
  Typography,
  Button,
  CardActions,
  IconButton,
} from '@mui/material';
import { landingLayoutPart } from '.';
import { Sx } from '../../common/types';
import { Star } from '@mui/icons-material';
import { TMessageType, useNotify } from '../../common/hooks';
import { yellow } from '@mui/material/colors';

const tiers = [
  {
    title: 'Gratuit',
    price: '0',
    description: [
      '10 requêtes possible par jour',
      'Pas de stockage de rêves',
      'Help center access',
      'downtime 3h par jour',
    ],
    buttonText: 'Soumettre',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Puissant interprétateur de rêve',
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
      'Help center access',
    ],
    buttonText: 'Soumettre',
    buttonVariant: 'outlined',
  },
];

const textContainer: Sx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '5rem',
};

function PricingContent() {
  const { open } = useNotify();

  const aroundCorner = () => {
    open({
      message: 'Fonctionnalité à venir',
      type: TMessageType.warning,
      timeout: 3000,
    });
  };

  return (
    <Box
      sx={{ ...landingLayoutPart, flexDirection: 'column', marginTop: 20 }}
      id='section_tarif'
    >
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <Box sx={textContainer}>
        <Typography
          component='div'
          variant='h6'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Tarifs
        </Typography>
        <Typography
          variant='body1'
          align='center'
          color='text.secondary'
          component='p'
          width='50rem'
        >
          On veut tous connaître la signification de nos rêves depuis notre
          tendre enfance. Cette fois IA ONYRIX de l'industrie des rêves à fait
          un grand pas dans le monde et offre ses services suivantes :
        </Typography>
      </Box>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {tiers.map(tier => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={{ height: '400px', cursor: 'pointer' }}>
                <CardHeader
                  title={tier.title}
                  subheader={
                    <Typography fontSize='12px'>{tier.subheader}</Typography>
                  }
                  titleTypographyProps={{ align: 'center' }}
                  action={
                    tier.title === 'Pro' ? (
                      <IconButton>
                        <Star sx={{ color: yellow[600] }} />
                      </IconButton>
                    ) : null
                  }
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: theme =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                    height: '80px',
                  }}
                />
                <CardContent sx={{ height: '200px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography
                      component='h2'
                      variant='h3'
                      color='text.primary'
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant='h6' color='text.secondary'>
                      /mois
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component='li'
                        variant='body2'
                        align='center'
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={aroundCorner}
                    fullWidth
                    sx={{ padding: 1.5 }}
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
    </Box>
  );
}

export default function Tarifs() {
  return <PricingContent />;
}
