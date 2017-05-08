const token = '7c302fe95d12925ec8284508d2c914aec5f91cd4'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
