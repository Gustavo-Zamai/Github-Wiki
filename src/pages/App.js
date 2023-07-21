import gitLogo from '../assets/github-logo.png';

import { Container } from './styles';
import Input from '../components/Input';
function App() {
  return (

    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do Github' />
      <Input />
    </Container>
  );
}

export default App;
