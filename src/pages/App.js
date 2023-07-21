import gitLogo from '../assets/github-logo.png';

import { Container } from './styles';
import Input from '../components/Input';
import ItemRepository from '../components/ItemRepository';


function App() {
  return (

    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do Github' />
      <Input />
      <ItemRepository />
    </Container>
  );
}

export default App;
