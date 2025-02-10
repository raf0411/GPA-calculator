const totalCredits = document.getElementById("total-credits");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");

const credits1 = document.getElementById("credits-1");
const gradeWeight1 = document.getElementById("grade-weight-1");
const credits2 = document.getElementById("credits-2");
const gradeWeight2 = document.getElementById("grade-weight-2");
const credits3 = document.getElementById("credits-3");
const gradeWeight3 = document.getElementById("grade-weight-3");
const credits4 = document.getElementById("credits-4");
const gradeWeight4 = document.getElementById("grade-weight-4");
const credits5 = document.getElementById("credits-5");
const gradeWeight5 = document.getElementById("grade-weight-5");
const credits6 = document.getElementById("credits-6");
const gradeWeight6 = document.getElementById("grade-weight-6")
const credits7 = document.getElementById("credits-7");
const gradeWeight7 = document.getElementById("grade-weight-7");
const credits8 = document.getElementById("credits-8");
const gradeWeight8 = document.getElementById("grade-weight-8");

const errorLbl = document.getElementById("error-lbl");
const result = document.getElementById("result");

let credits1Val = 0;
let credits2Val = 0;
let credits3Val = 0;
let credits4Val = 0;
let credits5Val = 0;
let credits6Val = 0;
let credits7Val = 0;
let credits8Val = 0;

let gradeWeight1Val = 0;
let gradeWeight2Val = 0;
let gradeWeight3Val = 0;
let gradeWeight4Val = 0;
let gradeWeight5Val = 0;
let gradeWeight6Val = 0;
let gradeWeight7Val = 0;
let gradeWeight8Val = 0;

function calculateGPS() {
  errorLbl.textContent = "";

  if (totalCredits.value === "") {
    errorLbl.textContent = "Total Course is Empty!";
    return;
  }

  
}

submitBtn.addEventListener("click", () => {
  calculateGPS();
});
