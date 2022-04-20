const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = event.target[0].value
        //const input = document.querySelector('input#searchByID');


        console.log(input);

        fetch(`http://localhost:3000/movies/${input}`).then(res => res.json()).
        then(json => {
            console.log(json)
            const h4 = movieDetails.querySelector('h4')
            const p = movieDetails.querySelector('p')
            h4.textContent = json.title
            p.textContent = json.summary
        })

      });
  }
  
  document.addEventListener('DOMContentLoaded', init);