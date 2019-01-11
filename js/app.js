document.addEventListener('DOMContentLoaded', () => {
  const playlistInput = document.querySelector('#playlist-input');
  playlistInput.addEventListener('submit', handlePlaylistInputSubmit);
});

const handlePlaylistInputSubmit = function (event) {
  event.preventDefault();

  const playlistItem = createPlaylistItem(event.target);
  const playlist = document.querySelector('#my-playlist');
  playlist.appendChild(playlistItem);

  event.target.reset();

}

const createPlaylistItem = function (form){
  const playlistItem = document.createElement('li')
  playlistItem.classList.add('playlist-item');

  const artist = document.createElement('h2')
  artist.textContent = form.artist.value
  playlistItem.appendChild(artist);

  const title = document.createElement('h3')
  title.textContent = form.title.value
  playlistItem.appendChild(title);

  const genre = document.createElement('p')
  genre.textContent = form.genre.value
  playlistItem.appendChild(genre);

  return playlistItem

}
