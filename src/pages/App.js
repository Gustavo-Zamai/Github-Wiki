import gitLogo from '../assets/github-logo.png';

import { Container } from './styles';

function App() {
  return (

    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do Github' />
    </Container>
  );
}

export default App;
