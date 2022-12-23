(() => {
  `use strict`;
  $(document).ready(() => {
    $(`.container-nav`).append(navbar);
    $(`.top-banner`).append(topBanner);
    $(`.search-button`).click((e) => {
      e.preventDefault();
      if ($(`.form-control`).val() === ``) {
        alert(`Please enter a pokemon name`);
      }

      const pokemon = $(`.form-control`).val().toLowerCase();
      $.get(`${url}${pokemon}`, (data) => {
        console.log(data);
        pokemonInfo(data);

        function pokemonTypes(data) {
          let types = [];
          for (let i = 0; i < data.types.length; i++) {
            let type = data.types[i].type.name;
            types.push(type);
          }
          types = types.join(` `);
          return types;
        }

        $(`.container-pokemon`).append(`
              ${pokeInfo.divO}
              ${pokeInfo.imgO}
              ${data.sprites.front_default}
              ${pokeInfo.imgC}
              ${pokeInfo.nameO}
              ${data.name}
              ${pokeInfo.nameC}
              ${pokemonTypes(data)}
              ${pokeInfo.typesO}
              ${pokeInfo.typesC}
              ${pokeInfo.divRO}
              ${pokeInfo.divRC}
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

  $(document).ready(() => {
    $(`.form-control`).keypress((e) => {
      if (e.which === 13) {
        $(`.search-button`).click();
      }
    });
  });

  // * close banner
  const closeBanner = () => {
    $(`.top-banner`).hide();
    $(`.navbar`).removeClass(`navbar-m`);
    $(`.pokemon-card`).removeClass(`pokemon-m`);
    $(`.container-info`).removeClass(`info-p`);
  };

  // * show/hide advanced search
  const advSearch = () => {
    $(`.advanced-search-toggler`).click((e) => {
      if (!$(`.wrapper-advanced-search`).hasClass(`search-open`)) {
        $(`.wrapper-advanced-search`).addClass(`search-open`);
      } else {
        $(`.wrapper-advanced-search`).removeClass(`search-open`);
      }
    });
  };
  advSearch();
})();
