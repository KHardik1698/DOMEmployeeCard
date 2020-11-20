const employeeProfilePic = (employee) => {
  const markup = document.createElement("div");
  markup.classList.add("trainee-pic");
  let img = document.createElement("img");
  img.src = employee.picUrl;
  img.alt = employee.altDesc;
  markup.appendChild(img);
  return markup;
};
