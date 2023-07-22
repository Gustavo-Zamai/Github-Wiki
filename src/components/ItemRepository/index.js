import React from 'react'
import { ItemContainer } from './styles';

function ItemRepository({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);

  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        <a className='goTo' href={repo.html_url} target="_blank" rel='noreferrer'>Ver Repositório</a>
        <a className='remove' href='#'>Remover Repositório</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepository;