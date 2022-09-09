const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fname = form.name.value;
  date = form.date.value;
  ftitle = form.feedback.value;
  feedback = form.feedbacktext.value;
  gender = form.gender.value;
  check = form.checkbox;
  check_arr = [];
  check.forEach((item) => {
    if (item.checked) {
      check_arr.push(item.value);
    }
  });
  console.log({
    fname: fname,
    date: date,
    ftitle: ftitle,
    feedback: feedback,
    gender: gender,
    check: check_arr,
  });
});
