"use strict";
(() => {
    $(document).ready(() => {
        $(`.git-svg`).click((e) => {
            e.preventDefault();
            console.log(`clicked`);
        });
    });
})();
// ? set the current dir by "cd siteRecreation/githubProfile"
// ? to compile run => "tsc -p githubProfile"
