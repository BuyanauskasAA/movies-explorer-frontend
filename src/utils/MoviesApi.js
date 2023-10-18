export const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';

export function getMoviesList() {
  return fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(`Ошибка ${response.status}`);
  });
}
