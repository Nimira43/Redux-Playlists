import './styles.css'
import MoviePlaylist from './components/MoviePlayList'
import SongPlaylist from './components/SongPlayList'

export default function App() {
  const handleResetClick = () => {

  }

  return (
    <div className='container is-fluid'>
      <button 
        onClick={() => handleResetClick()}
        className='button is-danger'
      >
        Reset Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}