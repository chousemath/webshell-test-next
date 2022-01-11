import type { NextPage } from 'next'
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentContainer = styled.div`
  width: 100%;
  padding: 16px;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Webshell Test Next
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <ContentContainer>
        <Card sx={{ minWidth: '100%', mb: 1.5 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Native Alert Test
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              test
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              id="trigger-native-alert"
              size="small">Trigger Native Alert
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: '100%', mb: 1.5 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Native Camera Test
            </Typography>
            <Typography
              id="photo-url"
              sx={{ mb: 1.5 }}
              color="text.secondary">
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              id="show-camera-modal"
              size="small">Show Camera Modal
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: '100%', mb: 1.5 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Native Image Picker Test
            </Typography>
            <Typography
              id="gallery-url"
              sx={{ mb: 1.5 }}
              color="text.secondary">
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              id="open-image-picker"
              size="small">
              Show Image Picker
            </Button>
          </CardActions>
        </Card>
      </ContentContainer>

    </Container>
  )
}

export default Home
