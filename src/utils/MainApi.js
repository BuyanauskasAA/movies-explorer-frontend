const headers = { 'Content-Type': 'application/json' };
const baseUrl = 'https://api.diploma.buyanauskas.nomoredomainsicu.ru';

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
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

function signIn(userInfo) {
  return request('/signin', {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

function signOut() {
  return request('/signout', {
    method: 'POST',
    credentials: 'include',
    headers: headers,
  });
}

function getMovies() {
  return request('/movies', {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  });
}

function saveMovie(movieInfo) {
  return request('/movies', {
    method: 'POST',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(movieInfo),
  });
}

function deleteMovie(movieId) {
  return request(`/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: headers,
  });
}

function getUser() {
  return request('/users/me', {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  });
}

function updateUser(userInfo) {
  return request('/users/me', {
    method: 'PATCH',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(userInfo),
  });
}

export { signUp, signIn, signOut, getMovies, saveMovie, deleteMovie, getUser, updateUser };
