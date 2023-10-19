const headers = { 'Content-Type': 'application/json' };
// const baseUrl = 'https://api.diploma.buyanauskas.nomoredomainsicu.ru';
const baseUrl = 'http://localhost:3001';

function request(path, options) {
  return fetch(`${baseUrl}${path}`, options).then(checkResponse);
}

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response.status);
}

function signUp(userInfo) {
  return request('/signup', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

function signIn(userInfo) {
  return request('/signin', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

function signOut() {
  return request('/signout', {
    method: 'POST',
    headers: headers,
  });
}

function getMovies() {
  return request('/movies', {
    method: 'GET',
    headers: headers,
  });
}

function saveMovie(movieInfo) {
  return request('/movies', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(movieInfo),
  });
}

function deleteMovie(movieId) {
  return request(`/movies/${movieId}`, {
    method: 'DELETE',
    headers: headers,
  });
}

function getUser() {
  return request('/users/me', {
    method: 'GET',
    headers: headers,
  });
}

function updateUser(userInfo) {
  return request('/users/me', {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

export { signUp, signIn, signOut, getMovies, saveMovie, deleteMovie, getUser, updateUser };
