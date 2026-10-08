import "./style.css";

function App() {

  const songs = [
    "14 - Silent Sanctuary",
    "Star song - Rob deniel",
    "Totoong tayo - jin DC",
    "Tenchu - Esremborak",
    "Baka bukas - Angela ken"
  ];

  return (
    <div className="container">

      <div className="record">
        <div className="record-center"></div>
      </div>

      <h1>My Music Playlist</h1>

      <div className="playlist">

        {songs.map((song, index) => (
          <div className="song" key={index}>
            {index + 1}. {song}
          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
