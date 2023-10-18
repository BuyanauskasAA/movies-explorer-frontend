const headers = { 'Content-Type': 'application/json' };
const baseUrl = 'https://api.diploma.buyanauskas.nomoredomainsicu.ru';

function request(path, options) {
  return fetch(`${baseUrl}${path}`, options).then(checkResponse);
}

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка ${response.status}`);
}

function signUp(userInfo) {
  request('/signup', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

function signIn(userInfo) {
  request('/signin', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

function signOut() {
  request('/signout', {
    method: 'POST',
    headers: headers,
  });
}

function getMovies() {
  request('/movies', {
    method: 'GET',
    headers: headers,
  });
}

function saveMovie(movieInfo) {
  request('/movies', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(movieInfo),
  });
}

function deleteMovie(movieId) {
  request(`/movies/${movieId}`, {
    method: 'DELETE',
    headers: headers,
  });
}

function getUser() {
  request('/users/me', {
    method: 'GET',
    headers: headers,
  });
}

function updateUser(userInfo) {
  request('/users/me', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

export { signUp, signIn, signOut, getMovies, saveMovie, deleteMovie, getUser, updateUser };
