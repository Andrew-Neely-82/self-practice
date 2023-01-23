"use strict";
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
(0, jquery_1.default)(document).ready(() => {
    (0, jquery_1.default)(`.git-svg`).click((e) => {
        e.preventDefault();
        console.log(`clicked`);
    });
});
// ? set the current dir by "cd siteRecreation/githubProfile"
// ? to compile run => "tsc -p githubProfile"
