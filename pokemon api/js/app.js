(() => {
  `use strict`;
  $(document).ready(() => {
    $(`.form-control`).on(`keyup`, function () {
      // when the user search for a pokemon, use const url to pull info from the api, info will be displayed in .container-pokemon
      const url = `https://pokeapi.co/api/v2/pokemon/${$(this).val()}`;
      $.get(url, (data) => {
        console.log(data);
        $(`.container-pokemon`).html(`
              ${html.divO}
              ${html.nameO}
              ${data.name}
              ${html.nameC}
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
      });
    });
  });
})();
