export const fetchArtists = async (search) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`);
  const json = await res.json();
  return json;
}

export const fetchReleases = async (id) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`);
  const json = await res.json();

  return json.releases;
}

export const fetchRecordings = async (id) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
  const json = await res.json();

  return json.recordings;
}

export const fetchSong = async (artist, title) => {
  const res = await fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}`);
  return res;
}
