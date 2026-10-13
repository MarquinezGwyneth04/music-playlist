
import "./style.css";

const songs = [
  { title: "Ikaw Lamang", album: "Fuchsiang Pag-Ibig", year: "2007" },
  { title: "Kundiman", album: "Fuchsiang Pag-Ibig", year: "2007" },
  { title: "Rebound", album: "Fuchsiang Pag-Ibig", year: "2007" },
  { title: "Sandali Lang", album: "Fuchsiang Pag-Ibig", year: "2007" },
  { title: "Kismet", album: "Fuchsiang Pag-Ibig", year: "2007" },
  { title: "Hiling", album: "Mistaken For Granted", year: "2009" },
  { title: "Sa'yo", album: "Monodramatic", year: "2013" },
  { title: "Bumalik Ka Na Sa'kin", album: "Monodramatic", year: "2013" },
  { title: "Pasensya Ka Na", album: "Langit. Luha.", year: "2015" },
  { title: "Di Na Kita Mahal", album: "Langit. Luha.", year: "2015" },
  { title: "Mawala Ka", album: "Langit. Luha.", year: "2015" },
  { title: "Kahit Pa", album: "Langit. Luha.", year: "2015" },
];

const albums = [
  {
    name: "Fuchsiang Pag-Ibig",
    year: "2007",
    image: "https://coverartarchive.org/release/1083011e-9918-440d-a303-66ff32348bd9/front-500",
  },
  {
    name: "Mistaken For Granted",
    year: "2009",
    image: "https://placehold.co/300x300/57414e/ffffff?text=Mistaken+For+Granted",
  },
  {
    name: "Monodramatic",
    year: "2013",
    image: "https://placehold.co/300x300/443d52/ffffff?text=Monodramatic",
  },
  {
    name: "Langit. Luha.",
    year: "2015",
    image: "https://placehold.co/300x300/353d46/ffffff?text=Langit.+Luha.",
  },
];

function App() {
  return (
    <div className="app">

      <main className="content">
        <header className="top">
          <div>
            <p className="small-title">YOUR OPM CORNER</p>
            <h1>Silent Sanctuary</h1>
            <p className="subtitle">
              A little place for your favorite songs.
            </p>
          </div>
          <div className="profile">gsm</div>
        </header>

        <section className="featured">
          <div className="featured-info">
            <p>FEATURED ALBUM</p>
            <h2>Fuchsiang Pag-Ibig</h2>
            <span>Silent Sanctuary · 2007</span>
            <p className="description">
              Old favorites that never get old.
            </p>
          </div>
          <img
            src={albums[0].image}
            alt="Fuchsiang Pag-Ibig album cover"
          />
        </section>

        <section className="albums-section">
          <h2>Albums & collections</h2>
          <div className="album-grid">
            {albums.map((album) => (
              <div className="album-card" key={album.name}>
                <img src={album.image} alt={album.name} />
                <h3>{album.name}</h3>
                <p>Silent Sanctuary · {album.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="songs-section">
          <h2>Favorite songs</h2>
          <p className="section-subtitle">
            A collection of Silent Sanctuary songs
          </p>

          <div className="table-head">
            <span>#</span>
            <span>SONG TITLE</span>
            <span>ALBUM</span>
            <span>YEAR</span>
          </div>

          {songs.map((song, index) => {
            const album = albums.find((item) => item.name === song.album);
            return (
              <div className="song-row" key={song.title}>
                <span className="song-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="song-title">
                  <img
                    src={album?.image || albums[0].image}
                    alt=""
                  />
                  <div>
                    <strong>{song.title}</strong>
                    <small>Silent Sanctuary</small>
                  </div>
                </div>

                <span className="song-album">{song.album}</span>
                <span className="song-year">{song.year}</span>
              </div>
            );
          })}
        </section>

        <footer>MADE WITH ♡ FOR SILENT SANCTUARY</footer>
      </main>
    </div>
  );
}

export default App;

