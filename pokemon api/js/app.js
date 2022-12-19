(() => {
  `use strict`;
  $(document).ready(() => {
    $(`.search-button`).click((e) => {
      e.preventDefault();
      const pokemon = $(`.form-control`).val();
      $.get(`${url}${pokemon}`, (data) => {
        console.log(data);
        $(`.container-pokemon`).empty();


        pokemonInfo(data);
        $(`.container-pokemon`).append(`
              ${html.divO}
              ${html.nameO}
              ${data.name}
              ${html.nameC}
              ${html.imgO}
              ${data.sprites.front_default}
              ${html.imgC}
              ${html.typeO}
              ${data.types[0].type.name}
              ${html.typeC}
              ${html.heightO}
              ${data.height}
              ${html.heightC}
              ${html.weightO}
              ${data.weight}
              ${html.weightC}
              ${html.buttons}
              ${html.divC}
        `);
        pokemonInfo(data);
      });
    });
  });
})();
