const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  }
  throw new Error('Unable to fetch puzzle.');
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all');
  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  }
  throw new Error('Unable to fetch country details.');
};

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=717468159353db');
  if (response.status === 200) {
    return response.json();
  }
  throw new Error('Unable to fetch location data.');
};

export { getPuzzle as default };
