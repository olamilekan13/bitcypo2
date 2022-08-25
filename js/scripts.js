$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      const person1Input = $("input#subject").val();
      const person2Input = $("#phrase").val();
      const animalInput= $("input#text").val();
    //   const exclamationInput = $("input#exclamation").val();
    //   const verbInput = $("input#verb").val();
    //   const nounInput = $("input#noun").val();
  console.log(person1Input);
  console.log(person2Input);
  console.log(animalInput);
    

  
    });
  });