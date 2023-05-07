import { ArrowCircleLeft } from '@mui/icons-material';
import { Box, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        height:"100%",
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid style={{
            display:"flex",
            flexDirection:"row",
            marginLeft:"25%",
          }}>
            <img
              src="../../public/404.jpg"
              alt=""
              width="1500vw"
              height="1500vh"
            />
          </Grid>
          <Grid style={{
            display:"flex",
            flexDirection:"row",
            marginLeft:"105%",
          }}>
            <Button href="/" style={{
                paddingLeft:"12px"
            }}>
                <ArrowCircleLeft/>
                Accueil
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}