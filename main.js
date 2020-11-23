function getDogImage(userInput) {
fetch
(` https://dog.ceo/api/breed/${userInput}/images/random/1`).then(response => response.json()).then(responseJson => displayResults(responseJson)).catch(error => console.log(error));
}

function displayResults(responseJson){
  console.log(responseJson);

  $('.results').html('<h2>How cute are these dogs!</h2>');

  for (let dog of responseJson.message) {
    $('.results').append(
      `<img src="${dog}" class="results-img" width="200" height="auto">`);
  }
 
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $(event.currentTarget).find('input').val();
    getDogImage(userInput);
  });
}


function main() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
}

$(main)