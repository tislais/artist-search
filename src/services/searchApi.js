export const fetchArtists = async (search) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`);
  const json = res.json();
  return json;
}

export const fetchReleases = async (id) => {
  console.log(id)
  const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`);
  const json = await res.json();

  console.log(json)
  return json.releases;
}

