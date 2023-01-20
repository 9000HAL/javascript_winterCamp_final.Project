var studentName = document.querySelector(".student").innerHTML;

var schoolName = document.querySelector("h3").innerHTML;

var bestGrade = document.querySelector(".grade-2").innerHTML;

var newData = {
  studentName: "John Doe",
  schoolName: "Code School",
  bestGrade: "A+"
};

document.querySelector('.student').innerHTML = newData.studentName;

document.querySelector('h3').innerHTML = newData.schoolName;

document.querySelector('.grade-2').innerHTML = newData.bestGrade;















