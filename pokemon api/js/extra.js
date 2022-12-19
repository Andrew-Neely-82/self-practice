const url = `https://pokeapi.co/api/v2/pokemon/`;
const log = (data) => console.log(data);

const navbar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-m">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <svg class="pokeball-brand" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Pokéball" x="0px" y="0px" viewBox="0 0 595.3 594.1" style="enable-background: new 0 0 595.3 594.1" xml:space="preserve">
          <g id="Pokéball_1_">
          <g id="Colours">
          <path fill="#fff" d="M297.6,380.9c-40.4,0-74.1-28.6-82.1-66.6H81.1c9.5,110.5,102.2,197.2,215.1,197.2    s205.7-86.7,215.1-197.2H379.7C371.7,352.4,338,380.9,297.6,380.9z" />
          <path id="Shadow_Down" fill="#252525" d="M345.6,505.9c89.6-21,157.7-97.7,165.7-191.6h-53C453,399.5,408.3,471.7,345.6,505.9z" />
          <path fill="#fff" d="M347.1,297L347.1,297C347,297,347,297,347.1,297c-0.1-6.1-1.2-11.9-3.2-17.3    c-7-18.8-25.1-32.1-46.3-32.1s-39.3,13.4-46.3,32.1c-2,5.4-3.1,11.2-3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0    c0,6.1,1.1,11.9,3.1,17.3c7,18.8,25.1,32.1,46.3,32.1c21.2,0,39.3-13.4,46.3-32.1C346,309,347.1,303.1,347.1,297    C347.1,297,347.1,297,347.1,297z" />
          <path fill="#f00" d="M297.7,213.2c40.4,0,74.1,28.6,82.1,66.6h134.4C504.7,169.2,412,82.5,299,82.5S93.4,169.2,83.9,279.7    h131.7C223.6,241.7,257.3,213.2,297.7,213.2z" />
          <path id="Shadow_Up" fill="#500" d="M458.3,279.7h55.8c-8.2-95.5-78.6-173.3-170.5-192.6C407.4,120.8,452.9,193.7,458.3,279.7z" />
          </g>
          <path id="Line" d="M299,82.5c113,0,205.7,86.7,215.1,197.2H379.7c-8-38-41.7-66.6-82.1-66.6c-40.4,0-74.1,28.6-82.1,66.6H83.9   C93.4,169.2,186.1,82.5,299,82.5z M343.9,279.7c2,5.4,3.1,11.2,3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0c0,6.1-1.1,11.9-3.1,17.3   c-7,18.8-25.1,32.1-46.3,32.1c-21.2,0-39.3-13.4-46.3-32.1c-2-5.4-3.1-11.2-3.1-17.3c0,0,0,0,0,0h-0.1c0,0,0,0,0,0   c0-6.1,1.1-11.9,3.1-17.3c7-18.8,25.1-32.1,46.3-32.1S336.9,261,343.9,279.7z M296.2,511.6c-113,0-205.7-86.7-215.1-197.2h134.4   c8,38,41.7,66.6,82.1,66.6s74.1-28.6,82.1-66.6h131.7C501.9,424.8,409.2,511.6,296.2,511.6z M297.6,41.3   C156.4,41.3,41.9,155.8,41.9,297s114.5,255.7,255.7,255.7S553.4,438.3,553.4,297S438.9,41.3,297.6,41.3z" />
        </g>
      </svg>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="pokedex.html">PokeDex</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="search d-flex">
        <button class="clear-button" type="submit">Clear</button>
        <input class="form-control" type="search" placeholder="Search by name or #" aria-label="Search" />
        <button class="search-button" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</nav>`;

const topBanner = `<div class="top-banner-info">
                    <span>Powered by <a href="https://www.pokeapi.co" target="_blank">pokeapi.co</a></span>
                   </div>
                   <div class="top-banner-close">
                    <button class="close-top-banner">x</button>
                   </div>`

const svg = {
  type: `
  <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50.463 50.463" style="enable-background:new 0 0 50.463 50.463;" xml:space="preserve">
		<path  d="M47.923,29.694c0.021-0.601-0.516-1.063-0.901-1.515c-0.676-2.733-2.016-5.864-3.961-8.971    C39.942,14.23,31.688,6.204,28.553,4.966c-0.158-0.062-0.299-0.097-0.429-0.126c-0.313-1.013-0.479-1.708-1.698-2.521    c-3.354-2.236-7.099-2.866-9.578-1.843c-2.481,1.023-3.859,6.687-1.19,8.625c2.546,1.857,7.583-1.888,9.195,0.509    c1.609,2.396,3.386,10.374,6.338,15.473c-0.746-0.102-1.514-0.156-2.307-0.156c-3.406,0-6.467,0.998-8.63,2.593    c-1.85-2.887-5.08-4.806-8.764-4.806c-3.82,0-7.141,2.064-8.95,5.13v22.619h4.879l1.042-1.849    c3.354-1.287,7.32-4.607,10.076-8.147C29.551,44.789,47.676,36.789,47.923,29.694z"/>

</svg>`,
  height: `
    <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
      <path d="M181.25,0h-62.5c-3.456,0-6.25,2.794-6.25,6.25v287.5c0,3.456,2.794,6.25,6.25,6.25h62.5c3.456,0,6.25-2.794,6.25-6.25    V6.25C187.5,2.794,184.706,0,181.25,0z M175,287.5h-50V275h12.5c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25H125V250h25    c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25h-25V225h12.5c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25H125V200    h25c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25h-25V175h12.5c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25H125    V150h25c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25h-25V125h12.5c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25    H125V100h25c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25h-25V75h12.5c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25    H125V50h25c3.456,0,6.25-2.794,6.25-6.25s-2.794-6.25-6.25-6.25h-25v-25h50V287.5z"/>
    </svg>`,
  weight: `
    <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 315 315" enable-background="new 0 0 315 315">
      <path d="M264.007,0H50.993C22.875,0,0,22.875,0,50.993v213.014C0,292.125,22.875,315,50.993,315h213.014   C292.125,315,315,292.125,315,264.007V50.993C315,22.875,292.125,0,264.007,0z M50.993,14h213.014   C284.405,14,301,30.595,301,50.993V91.83h-56.773c-24.047,0-30.855,10.063-36.862,18.94c-6.428,9.499-13.074,19.322-49.866,19.322   c-36.791,0-43.438-9.822-49.865-19.322c-6.007-8.878-12.815-18.94-36.863-18.94H14V50.993C14,30.595,30.595,14,50.993,14z    M264.007,301H50.993C30.595,301,14,284.405,14,264.007V105.83h56.77c16.617,0,20.059,5.087,25.269,12.786   c7.68,11.351,17.238,25.477,61.46,25.477c44.223,0,53.781-14.126,61.461-25.477c5.21-7.699,8.651-12.786,25.267-12.786H301v158.177   C301,284.405,284.405,301,264.007,301z"/>
      <path d="m127.082,97.148c1.212,2.296 3.595,3.733 6.191,3.733h17.336c0.008,0 0.016,0.002 0.023,0.002 0.009,0 0.017-0.002 0.025-0.002h31.068c2.597,0 4.98-1.438 6.191-3.733l24.226-45.915c1.418-2.689 0.939-5.986-1.187-8.16-0.68-0.697-17.107-17.073-53.455-17.073s-52.775,16.376-53.457,17.073c-2.126,2.174-2.605,5.471-1.187,8.16l24.226,45.915zm-.816-51.557l4.2,15.653c0.839,3.126 3.667,5.188 6.757,5.188 0.6,0 1.211-0.078 1.818-0.241 3.733-1.002 5.948-4.841 4.946-8.575l-4.29-15.987c3.262-0.632 6.855-1.117 10.803-1.387v15.758c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-15.759c3.947,0.27 7.542,0.755 10.803,1.386l-4.29,15.988c-1.002,3.734 1.213,7.573 4.946,8.575 0.608,0.163 1.218,0.241 1.818,0.241 3.09,0 5.918-2.062 6.757-5.188l4.201-15.656c3.566,1.476 6.324,3.01 8.294,4.289l-19.524,37.005h-7.502l-5.996-15.114c-1.076-2.715-3.678-4.477-6.646-4.418-2.92,0.059-5.496,1.923-6.465,4.678l-5.223,14.854h-8.179l-19.522-37c1.976-1.282 4.733-2.817 8.294-4.29z"/>
    </svg>`,
};
const pokeInfo = {
  divO: `<div class="pokemon-card pokemon-m ">`,
  divC: `</div>`,
  nameO: `<h1 class="name">`,
  nameC: `</h1>`,
  imgO: `<img class="img" src="`,
  imgC: `" alt="pokemon image">`,
  typeO: `<span class="type">${svg.type} `,
  typeC: `</span>`,
  heightO: `<span class="height">${svg.height} `,
  heightC: `</span>`,
  weightO: `<span class="weight">${svg.weight} `,
  weightC: `</span>`,
  buttons: `<button class="btn btn-primary">Add to team</button>`,
};

const pokemonInfo = (info) => {
  const name = (data) => (info.name = info.name.charAt(0).toUpperCase() + info.name.slice(1));
  function typeSVG(data) {
    for (let i = 0; i < info.types.length; i++) {
      if (info.types[i].type.name === `bug`) {
        info.types[i].type.name = `<img class="svgType bug" src="icons/bug.svg">`;
      } else if (info.types[i].type.name === `dark`) {
        info.types[i].type.name = `<img class="svgType dark" src="icons/dark.svg">`;
      } else if (info.types[i].type.name === `dragon`) {
        info.types[i].type.name = `<img class="svgType dragon" src="icons/dragon.svg">`;
      } else if (info.types[i].type.name === `electric`) {
        info.types[i].type.name = `<img class="svgType electric" src="icons/electric.svg">`;
      } else if (info.types[i].type.name === `fairy`) {
        info.types[i].type.name = `<img class="svgType fairy" src="icons/fairy.svg">`;
      } else if (info.types[i].type.name === `fighting`) {
        info.types[i].type.name = `<img class="svgType fighting" src="icons/fighting.svg">`;
      } else if (info.types[i].type.name === `fire`) {
        info.types[i].type.name = `<img class="svgType fire" src="icons/fire.svg">`;
      } else if (info.types[i].type.name === `flying`) {
        info.types[i].type.name = `<img class="svgType flying" src="icons/flying.svg">`;
      } else if (info.types[i].type.name === `ghost`) {
        info.types[i].type.name = `<img class="svgType ghost" src="icons/ghost.svg">`;
      } else if (info.types[i].type.name === `grass`) {
        info.types[i].type.name = `<img class="svgType grass" src="icons/grass.svg">`;
      } else if (info.types[i].type.name === `ground`) {
        info.types[i].type.name = `<img class="svgType ground" src="icons/ground.svg">`;
      } else if (info.types[i].type.name === `ice`) {
        info.types[i].type.name = `<img class="svgType ice" src="icons/.svg">`;
      } else if (info.types[i].type.name === `normal`) {
        info.types[i].type.name = `<img class="svgType normal" src="icons/normal.svg">`;
      } else if (info.types[i].type.name === `poison`) {
        info.types[i].type.name = `<img class="svgType poison" src="icons/poison.svg">`;
      } else if (info.types[i].type.name === `psychic`) {
        info.types[i].type.name = `<img class="svgType psychic" src="icons/psychic.svg">`;
      } else if (info.types[i].type.name === `rock`) {
        info.types[i].type.name = `<img class="svgType rock" src="icons/rock.svg">`;
      } else if (info.types[i].type.name === `steel`) {
        info.types[i].type.name = `<img class="svgType steel" src="icons/steel.svg">`;
      } else if (info.types[i].type.name === `water`) {
        info.types[i].type.name = `<img class="svgType water" src="icons/water.svg">`;
      }
    }
  }
  const height = (data) => (info.height = `${info.height}m`);
  const weight = (data) => (info.weight = `${info.weight}kg`);
  name();
  typeSVG();
  height();
  weight();
};
