const divRoot = document.getElementById("root");

Trainees.forEach((employee) => {
  const divBox = document.createElement("div");
  divBox.style = "border: 1px solid black";
  const profile = employeeProfilePic(employee);
  const para = employeePara(employee);
  divRoot.appendChild(divBox);
  divBox.appendChild(profile);
  divBox.appendChild(para);
});
