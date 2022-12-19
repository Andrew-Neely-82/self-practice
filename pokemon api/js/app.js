(() => {
  `use strict`;
  $(document).ready(() => {
    $(`.container-nav`).append(navbar);
    $(`.top-banner`).append(topBanner);
    $(`.search-button`).click((e) => {
      e.preventDefault();
      const pokemon = $(`.form-control`).val();
      $.get(`${url}${pokemon}`, (data) => {
        console.log(data);
        pokemonInfo(data);
        $(`.container-pokemon`).append(`
              ${pokeInfo.divO}
              ${pokeInfo.nameO}
              ${data.name}
              ${pokeInfo.nameC}
              ${pokeInfo.imgO}
              ${data.sprites.front_default}
              ${pokeInfo.imgC}
              ${pokeInfo.typeO}
              ${data.types[0].type.name}
              ${pokeInfo.typeC}
              ${pokeInfo.heightO}
              ${data.height}
              ${pokeInfo.heightC}
              ${pokeInfo.weightO}
              ${data.weight}
              ${pokeInfo.weightC}
              ${pokeInfo.buttons}
              ${pokeInfo.divC}
        `);
        pokemonInfo(data);
      });
    });
    $(`.close-top-banner`).click((e) => {
      e.preventDefault();
      closeBanner();
    });
    $(`.clear-button`).click((e) => {
      e.preventDefault();
      $(`.container-pokemon`).empty();
    });
  });

  const closeBanner = () => {
    $(`.top-banner`).hide();
    $(`.navbar`).removeClass(`navbar-m`);
    $(`.pokemon-card`).removeClass(`pokemon-m`);
  };
})();
