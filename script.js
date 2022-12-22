const atomBtn = document.getElementById('atomBtn')

let work = false;

atomBtn.addEventListener('click',()=>{
    let text = "Ciddisən ?";
      if (confirm(text) == true) {
        console.log('Salam')
        text = "You pressed OK!";
      } else {
       console.log("Sagol");
       text = "You canceled!";
      }
})