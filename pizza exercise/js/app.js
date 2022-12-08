(() => {
  `use strict`;
  $(document).ready(() => {
    $(`#next-1`).click(() => {
      $(`#nav-profile-tab`).click();
    });
    $(`#previous`).click(() => {
      $(`#nav-home-tab`).click();
    });
    $(`#next-2`).click(() => {
      $(`#nav-contact-tab`).click();
    });
    $(`#previous-2`).click(() => {
      $(`#nav-profile-tab`).click();
    });
  });
})();
