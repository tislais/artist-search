export const fetchArtists = async (search) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`);
  const json = res.json();
  console.log(json);
  return json;
}
