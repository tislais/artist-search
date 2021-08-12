import parser from 'fast-xml-parser';

export const fetchArtists = async (search, page) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=100`);
  const json = await res.json();
  return json.artists.slice((page - 1) * 10, page * 10);
}

export const fetchReleases = async (id, page) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`);
  const json = await res.json();
  return json.releases.slice((page - 1) * 5, page * 5);
}

export const fetchRecordings = async (id) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
  const json = await res.json();

  return json.recordings;
}

export const fetchSong = async (artist, title) => {
  const res = await fetch(`https://vast-thicket-01998.herokuapp.com/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}`);
  const text = await res.text();
  const json = parser.parse(text)

  const mungedData = {
    lyrics: json.GetLyricResult.Lyric,
    coverArt: json.GetLyricResult.LyricCovertArtUrl
  }

  return mungedData;
}

export const isImage = async (id) => {
  const res = await fetch(`http://coverartarchive.org/release/${id}/front`);
  if (res.status === 200) {
    return true;
  } else {
    return null;
  }
}
