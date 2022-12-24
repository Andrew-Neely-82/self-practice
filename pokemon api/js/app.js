// (() => {
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

const selFilter = () => {
  var filteredArray = [];
  $(`.adv-search-btn`).click((e) => {
    let filterTarget = $(e.target).attr(`class`);
    let typeClass = filterTarget.split(` `);
    $(e.target).toggleClass(`sel-filter`);
    if ($(`.${typeClass[1]}`).hasClass(`sel-filter`)) {
      filteredArray.push(typeClass[1]);
    } else {
      filteredArray.splice(filteredArray.indexOf(typeClass[1]), 1);
    }
    console.log(filteredArray);
  });
  $(`.reset`).click(() => {
    $(`.adv-search-btn`).removeClass(`sel-filter`);
    filteredArray = [];
    $(`.container-pokemon`).empty();
  });
  $(`.search-filtered`).click(() => {
    urlType = `https://pokeapi.co/api/v2/type/`;
    for (let i = 0; i < filteredArray.length; i++) {
      $.get(`${urlType}${filteredArray[i]}`, (data) => {
        console.log(data);
        for (let i = 0; i < data.pokemon.length; i++) {
          $.get(`${data.pokemon[i].pokemon.url}`, (data) => {
            let filteredPokemon = [];
            let pokemonID = data.id;
          });
        }
      });
    }
  });
};
selFilter();

// })();
