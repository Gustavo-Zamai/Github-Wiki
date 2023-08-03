import { useState } from 'react';
import gitLogo from '../assets/github-logo.png';

import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepository from '../components/ItemRepository';
import { api } from '../services/api';


function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)
    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }
    alert('Repositório já adicionado na lista!');
  }

  const handleRemoveRepo = (id) => {
    const newRepos = [...repos]
    const index = newRepos.findIndex(item => item.id === id)
    newRepos.splice(index, 1)

    setRepos(newRepos)
  }

  return (

    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo do Github' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepository handleRemoveRepo={handleRemoveRepo} repo={repo} />)}

    </Container>
  );
}

export default App;
