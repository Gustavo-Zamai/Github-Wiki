import React from 'react'
import { ItemContainer } from './styles';

function ItemRepository() {
  return (
    <ItemContainer>
        <h3>Usuário</h3>
        <p>Descrição do repo</p>
        <a className='goTo' href='#'>Ver Repositório</a>
        <a className='remove' href='#'>Remover Repositório</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepository;