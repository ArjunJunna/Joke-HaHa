const btnNextJoke = document.querySelector('.btn');
const paraJoke = document.querySelector('.para');

var url = 'https://icanhazdadjoke.com/';

const jokes=()=>{
  fetch(url, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((obj) => (paraJoke.innerHTML = obj.joke))
    .catch(errorMessage);
}
const errorMessage=()=>{
  paraJoke.innerHTML =`Oops!!! I just ran out of jokes...Will come back to you in few minutes....`;
  alert(`Server down.Try later...`);
}

btnNextJoke.addEventListener('click', jokes);