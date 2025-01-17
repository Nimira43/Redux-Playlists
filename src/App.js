import './styles.css'
import SongPlaylist from './components/SongPlaylist'
import MoviePlaylist from './components/MoviePlaylist'

export default function App() {
  const handleResetClick = () => {

  }

  return (
    <div className='container is-fluid'>
      <button 
        onClick={() => handleResetClick()}
        className='button btn-prime'
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