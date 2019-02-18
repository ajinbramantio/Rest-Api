axios
  .get('https://api.github.com/users/ajinbramantio')
  .then(response => {
    // Response is already in JSON format
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
