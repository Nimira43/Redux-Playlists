import { createRandomSong } from '../data'

function SongPlaylist() {
  const songPlaylist = []
  const handleSongAdd = (song) => {

  }
  const handleSongRemove = (song) => {

  }
  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className='button btn-prime'
        >
          X
        </button>
      </li>
    )
  })

  return (
    <div className="content">
      <div className="table-header">
        <h3 className='subtitle is-3 light'>Song PlayList</h3>
        <div className="buttons">
          <button 
            onClick={() => handleSongAdd(createRandomSong())}
            className="button btn-prime"
          >
            Add Song
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  )
}

export default SongPlaylist