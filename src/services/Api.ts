const getUser = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`).then(response =>
    response.json()
  );
};

export { getUser };
