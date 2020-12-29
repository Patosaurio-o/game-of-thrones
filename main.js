$(document).ready(function() {
  $('img').on('click', function(){
    let casaID = $(this).attr('id');
    $.get(`https://www.anapioficeandfire.com/api/houses/${casaID}`, function(infoCasa) {
      let nombreCasa = infoCasa.name;
      let words = infoCasa.words;
      let titulo = ''; 
      if(words == ''){
        words = 'sin informacion.'
      }
      if(infoCasa.titles == ''){
        titulo = 'sin informacion'
      }
      for(let i=0;i<infoCasa.titles.length;i++){
        titulo += ` ${infoCasa.titles[i]}`;
        if(i == infoCasa.titles.length-1){
          titulo += '.';
        }
        else {
          titulo += ',';
        }
      }
      $('#lista').html(`
        <h3>Detalles de la casa</h3>
        <p><b>Mombre:</b> ${nombreCasa}</p>
        <p><b>Palabras:</b> ${words}</p>
        <p><b>Titulos:</b> ${titulo}</p>
      `);
    });
    return false;
  });
});