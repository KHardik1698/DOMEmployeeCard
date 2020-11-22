const divRoot = document.getElementById("root");

Trainees.forEach((employee) => {
  const divBox = document.createElement("div");
  divBox.classList.add("employee-div");
  divBox.id = employee.empid;
  const profile = employeeProfilePic(employee);
  const para = employeePara(employee);
  divRoot.appendChild(divBox);
  divBox.appendChild(profile);
  divBox.appendChild(para);
});
