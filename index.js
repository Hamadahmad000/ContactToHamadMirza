
// function sendemail(){
    
//     Email.send({
//         SecureToken : "b67b4943-f2af-4b25-b1b6-61616016021f",
//         To : 'pubgrocks.official1@gmail.com',
//         From : "mirzanawab696@gmail.com",
//         Subject : "new form inquery",
//         Body : "And this is the body",
        
//     }).then(
//         message => alert(message)
//         );
//     }

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    window.open('page2.html', '_parent');

  });
});

