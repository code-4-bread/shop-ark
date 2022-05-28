import Body from './components/Body';
import Header from './components/Header';
import { Container } from '@mui/material'

function App() {
  return (
    <Container maxWidth='xl'>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
