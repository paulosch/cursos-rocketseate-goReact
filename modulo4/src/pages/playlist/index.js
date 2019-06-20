import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails'
import Loading from '../../components/Loading'

import { Container, Header, SongList } from './styles'
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = props => {
  const dispatch = useDispatch()
  const { data: playlist, loading } = useSelector(
    state => state.playlistDetails
  )
  const { id } = props.match.params

  useEffect(() => {
    dispatch(PlaylistDetailsActions.getPlaylistDetailsRequest(id))
  }, [dispatch, id])

  const renderDetails = () => {
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Titulo</th>
            <th>Artista</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    )
  }

  return loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    renderDetails()
  )
}

Playlist.protoTypes = {
  math: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }).isRequired,
  playlistDetails: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string
        })
      )
    }),
    loading: PropTypes.bool
  }).isRequired
}

export default Playlist
