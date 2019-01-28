var nameInput = document.querySelector('.dog-name-input');
var submitButton = document.querySelector('.button1')
var someDogs = document.querySelector('.dog-name')

submitButton.addEventListener('click', function(){
  someDogs.innerText = nameInput.value;
  nameInput.value = '';
})

// nameInput.addEventListener('keyup',function(event){
//     if (event.keyCode === 13);
//   someDogs.innerText = nameInput.value;
//   nameInput.value = '';
// });