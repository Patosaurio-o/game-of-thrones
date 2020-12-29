$(document).ready(function() {
  for(let i=0;i<=500;i++){
    $.get(`https://www.anapioficeandfire.com/api/houses/${i}`, function(infoCasa) {
      let nombreCasa = infoCasa.name;
      $('#lista').append(`<p>${nombreCasa}, ${i}</p>`);
    });
  }
});