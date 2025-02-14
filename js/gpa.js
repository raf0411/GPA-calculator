const totalSemesters = document.getElementById("total-semesters");
const result = document.getElementById("result");
const addBtn = document.getElementById("add-btn");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const errorLbl = document.getElementById("error-lbl");
const semesterBox = document.querySelector(".semester-box");

totalSemesters.value = "";

let semester1;
let semester2;
let semester3;
let semester4;
let semester5;
let semester6;
let semester7;
let semester8;
let totalSemestersVal;

function addSemesterInput(totalSemesters) {
  errorLbl.textContent = "";
  semesterBox.innerHTML = "";

  if (totalSemesters === "") {
    errorLbl.textContent = "Total Semesters is empty!";
    return;
  }

  if (totalSemesters < 1 || totalSemesters > 8) {
    errorLbl.textContent = "Total Semesters must be between 1 and 8";
    return;
  }

  totalSemestersVal = totalSemesters;

  for (let i = 1; i <= totalSemesters; i++){
    semesterBox.innerHTML += `
      <div class="form-group">
        <label for="semester-${i}">Semester ${i}</label>
        <input type="number" name="semester-${i}" id="semester-${i}" class="input secondary-input" placeholder="Total GPS">
      </div>`;
  }
}

function calculateGPA() {
  errorLbl.textContent = "";

  if (totalSemesters.value === "") {
    errorLbl.textContent = "Please add semesters!";
    return;
  }

  let totalPoints = 0;

  for (let i = 1; i <= totalSemestersVal; i++) {
    const semesterInput = document.getElementById(`semester-${i}`);
    const semesterValue = parseFloat(semesterInput.value) || 0;

    if (semesterValue < 0 || semesterValue > 4) {
      errorLbl.textContent = "GPS must be between 0 and 4!";
      return;
    }

    totalPoints += semesterValue;
  }

  let resultVal = totalPoints / totalSemestersVal;

  result.textContent = `Result : ${resultVal.toFixed(2)}`;
}

function clearValues() {
  totalSemesters.value = "";
  semesterBox.innerHTML = "";
  result.textContent = "Result : 0";
}

addBtn.addEventListener("click", () => {addSemesterInput(totalSemesters.value);});

submitBtn.addEventListener("click", () => {calculateGPA();});

clearBtn.addEventListener("click", () => {clearValues();});