const totalSemesters = document.getElementById("total-semesters");
const result = document.getElementById("result");
const addBtn = document.getElementById("add-btn");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const errorLbl = document.getElementById("error-lbl");
const semesterBox = document.querySelector(".semester-box");

let semester1;
let semester2;
let semester3;
let semester4;
let semester5;
let semester6;
let semester7;
let semester8;
let totalSemestersVal;

addBtn.addEventListener("click", () => {
  addSemesterInput(totalSemesters.value);
});

submitBtn.addEventListener("click", () => {
  calculateGPA();
});

clearBtn.addEventListener("click", () => {
  clearValues();
});

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
  if (totalSemesters.value === "") {
    errorLbl.textContent = "Please add semesters!";
    return;
  }

  if (totalSemesters === 1) {
    semester1 = document.getElementById('semester-1').value;
  } else if (totalSemesters === 2) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
  } else if (totalSemesters === 3) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
    semester3 = document.getElementById('semester-3').value;
  } else if (totalSemesters === 4) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
    semester3 = document.getElementById('semester-3').value;
    semester4 = document.getElementById('semester-4').value;
  } else if (totalSemesters === 5) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
    semester3 = document.getElementById('semester-3').value;
    semester4 = document.getElementById('semester-4').value;
    semester5 = document.getElementById('semester-5').value;
  } else if (totalSemesters === 6) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
    semester3 = document.getElementById('semester-3').value;
    semester4 = document.getElementById('semester-4').value;
    semester5 = document.getElementById('semester-5').value;
    semester6 = document.getElementById('semester-6').value;
  } else if (totalSemesters === 7) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
    semester3 = document.getElementById('semester-3').value;
    semester4 = document.getElementById('semester-4').value;
    semester5 = document.getElementById('semester-5').value;
    semester6 = document.getElementById('semester-6').value;
    semester7 = document.getElementById('semester-7').value;
  } else if (totalSemesters === 8) {
    semester1 = document.getElementById('semester-1').value;
    semester2 = document.getElementById('semester-2').value;
    semester3 = document.getElementById('semester-3').value;
    semester4 = document.getElementById('semester-4').value;
    semester5 = document.getElementById('semester-5').value;
    semester6 = document.getElementById('semester-6').value;
    semester7 = document.getElementById('semester-7').value;
    semester8 = document.getElementById('semester-8').value;
  }

  let totalPoints = 0;
  for (let i = 1; i <= totalSemestersVal; i++) {
    const semesterInput = document.getElementById(`semester-${i}`);
    const semesterValue = parseFloat(semesterInput.value) || 0;
    totalPoints += semesterValue;
  }

  let resultVal = totalPoints / totalSemestersVal;

  result.textContent = `Result : ${resultVal}`;
}

function clearValues() {
  totalSemesters.value = "";
  semesterBox.innerHTML = "";
  result.textContent = "Result : 0";
}