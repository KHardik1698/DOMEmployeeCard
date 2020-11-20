const employeePara = (employee) => {
  const markup = document.createElement("p");
  // markup.id = employee.empid;
  markup.classList.add("trainee-name");
  let a = document.createElement("a");
  a.href = employee.profileURL;
  a.target = "_blank";
  a.innerHTML = employee.firstName + " " + employee.lastName;
  markup.appendChild(a);
  markup.appendChild(document.createElement("br"));
  let span = document.createElement("span");
  span.innerHTML = employee.company;
  markup.appendChild(span);
  return markup;
};
