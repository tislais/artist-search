import parser from 'fast-xml-parser';

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
  const res = await fetch(`https://vast-thicket-01998.herokuapp.com/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}`);
  const text = await res.text();
  const json = parser.parse(text)

  const mungedData= {
    lyrics: json.GetLyricResult.Lyric,
    coverArt: json.GetLyricResult.LyricCovertArtUrl
  }

  console.log(mungedData);

  return mungedData;
}

