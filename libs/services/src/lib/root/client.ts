const fetchDataFromAPI = (endpoint?: string, method = 'GET', body = null) => {
  const apiUrl = 'https://randomuser.me/api/';
  const url = `${apiUrl}/${endpoint}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
};
