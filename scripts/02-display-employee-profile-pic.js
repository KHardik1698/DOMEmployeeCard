const employeeProfilePic = (employee) => {
  const markup = document.createElement("div");
  // markup.id = employee.empid;
  markup.classList.add("trainee-pic");
  let img = document.createElement("img");
  img.src = employee.picURL;
  img.alt = employee.altDesc;
  markup.appendChild(img);
  return markup;
};
