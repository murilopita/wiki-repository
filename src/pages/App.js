
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api}  from '../services/api';

import { Container } from './styles'

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  //Função de busca do repositório
  const handleSarchRepo = async () => {

  const {data} = await api.get(`repos/${currentRepo}`)

  if(data.id){

    const isExist = repos.find(repo => repo.id === data.id);
    
    if(!isExist) {
      setRepos(prev => [...prev, data]);
      setCurrentRepo('');
      return

    }
  }
  alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (id) => {
    setCurrentRepo(
      currentRepo.filter(current => {
        return current.id !== id;
      })
    )

  }

  return (
    <Container>
      <img src="https://img.icons8.com/sf-black-filled/72/FFFFFF/github.png" alt="Github logo"/>

      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSarchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}

    </Container>
  );
}

export default App;
