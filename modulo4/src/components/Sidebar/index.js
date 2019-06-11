import React from 'react'

import { Container, NewPlayList, Nav } from './styles'

import AddPlayListIcon from '../../assets/images/add_playlist.svg'

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seu dayly mix</a>
        </li>
        <li>
          <a href="">Tocados recentimente</a>
        </li>
        <li>
          <a href="">Álbuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos locais</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>
            PlayList
          </span>
        </li>
        <li>
          <a href="">Top 100 rock</a>
        </li>
      </Nav>
    </div>

    <NewPlayList>
      <img src={AddPlayListIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlayList>
  </Container>
)

export default Sidebar
