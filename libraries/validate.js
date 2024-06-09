"use strict";
/* selecting the input elements */
const textsArea = document.getElementById("text-env");
const validateArea = document.getElementById("validate--env");
const keywords = document.getElementById("keywords--env");
const validateBtn = document.querySelector(".validate--btn");

function checkKeyWords() {
  /*  assign a textsArea value to a variable */

  let textsAreaValue = ("" + textsArea.value).trim();
  console.log(textsAreaValue);
  /* working on splitting  the keywords */
  let separator = ",";
  let keywordsArr = ("" + keywords.value).split(separator);
  console.log(keywordsArr);
  let span = document.createElement("span");
  span.className = "highlight";
  keywordsArr.forEach((value, index, arr) => {
    if (value.trim() === "") {
      return;
    }
    value.trim();
    let regex = new RegExp(value, "gi");
    span.textContent = value;
    if (regex.test(textsAreaValue)) {
      textsAreaValue = textsAreaValue.replace(regex, (match) => {
        console.log(match);
        return ` ${span.outerHTML}  `;
      });
      // console.log(replaceValue);
    }
  });
  console.log(textsAreaValue);
  validateArea.innerHTML = textsAreaValue;
  validateArea.style.lineHeight = '30px'
}

// checkKeyWords();
validateBtn.addEventListener("click", checkKeyWords);

export { checkKeyWords };
