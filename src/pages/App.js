import {useState} from 'react';
import gitLogo from '../assets/github-logo.png';

import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepository from '../components/ItemRepository';


function App() {

  const [repos, setRepos] = useState([]);
  
  return (

    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do Github' />
      <Input />
      <Button />
      <ItemRepository />
    </Container>
  );
}

export default App;
