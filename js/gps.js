const totalCredits = document.getElementById("total-credits");
const totalCourses = document.getElementById("total-courses");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const addBtn = document.getElementById("addBtn");
const coursesHTML = document.querySelector(".courses-container");

let credits1 = document.getElementById("credits-1");
let gradeWeight1 = document.getElementById("grade-weight-1");
let credits2 = document.getElementById("credits-2");
let gradeWeight2 = document.getElementById("grade-weight-2");
let credits3 = document.getElementById("credits-3");
let gradeWeight3 = document.getElementById("grade-weight-3");
let credits4 = document.getElementById("credits-4");
let gradeWeight4 = document.getElementById("grade-weight-4");
let credits5 = document.getElementById("credits-5");
let gradeWeight5 = document.getElementById("grade-weight-5");
let credits6 = document.getElementById("credits-6");
let gradeWeight6 = document.getElementById("grade-weight-6")
let credits7 = document.getElementById("credits-7");
let gradeWeight7 = document.getElementById("grade-weight-7");
let credits8 = document.getElementById("credits-8");
let gradeWeight8 = document.getElementById("grade-weight-8");

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

function addCourseInput() {
  let errorLbl = "";
  let totalCoursesVal = totalCourses.value;

  if (totalCoursesVal === "") {
    errorLbl.textContent = "Please input your total courses!";
    return;
  }

  for (let i = 1; i <= totalCoursesVal; i++){
    coursesHTML.innerHTML += `          
          <div class="form-group">
            <label for="course">Courses ${i}</label>
            <div class="inner-form-course">
              <input class="credits-input" type="number" name="credits" id="credits-${i}" placeholder="Total Credits">
              <span>&#215;</span>
              <input class="grade-weight-input" type="number" name="grade-weight" id="grade-weight-${i}" placeholder="Grade Weight">
            </div>
          </div>`;
  }
}

function calculateGPS() {
  errorLbl.textContent = "";
  let totalCourseCreditsVal = totalCredits.value;

  if (totalCourseCreditsVal === "") {
    errorLbl.textContent = "Please input your total course credits!";
    return;
  }

  if (totalCredits.value === "") {
    errorLbl.textContent = "Total Course is Empty!";
    return;
  }

  let totalGPS = ((credits1Val * gradeWeight1) + (credits2Val * gradeWeight2) + 
                  (credits3Val * gradeWeight3) + (credits4Val * gradeWeight4) +
                  (credits5Val * gradeWeight5) + (credits6Val * gradeWeight6) +
                  (credits7Val * gradeWeight7) + (credits8Val * gradeWeight8)) / totalCourseCreditsVal;
  
  result.textContent = totalGPS;
}

addBtn.addEventListener("click", () => {addCourseInput();});
submitBtn.addEventListener("click", () => {calculateGPS();});
