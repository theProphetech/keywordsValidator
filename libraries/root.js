"use strict";
import { switchPages, goHomePage } from "./hideSection.js";
import { checkKeyWords as validatekeywords } from "./validate.js";
const getStartedBtn = document.querySelector(".getStarted--btn");
const herosection = document.querySelector("#hero--section");
const validationwrapper = document.querySelector("#validator--wrapper");
const homepage = document.querySelector(".goHome--linkContainer>a");

switchPages(getStartedBtn, herosection, validationwrapper);
/* The redirect to the home page */
goHomePage(homepage, herosection, validationwrapper);

/* Below is the code for the text vaidator */

// validatekeywords()