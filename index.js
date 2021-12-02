const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: '2bd626ff',
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  console.log(response.data.Search);
  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async (e) => {
  const movies = await fetchData(e.target.value);
  for (const movie of movies) {
    const div = document.createElement('div');

    div.innerHTML = `
    <img src="${movie.Poster}" />
    <h1>${movie.Title} (${movie.Year})</h1>
    `;

    document.querySelector('#target').appendChild(div);
  }
};
input.addEventListener('input', debounce(onInput, 500));
