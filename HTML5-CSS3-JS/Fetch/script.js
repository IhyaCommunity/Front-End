
// GET

const URL = 'https://httpbin.org/get?say=welcome';

fetch(URL).then((response) => {

  return response.json();

}).then((data) => {

  console.log(data);

});


// POST

// var data = {
//   name: 'Nameless',
//   message: 'Some message...'
// };

// var init = {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
// };

// fetch('https://httpbin.org/post', init)
//   .then(response => response.json())
//   .then((json) => {
//     let data = JSON.parse(json.data);
//     console.log(data);
//   })
//   .catch(error => console.error('Error:', error.message));
