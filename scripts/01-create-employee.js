const Employee = function (id, fname, lname, company, picurl, pdesc, prourl) {
  this.empid = id;
  this.firstName = fname;
  this.lastName = lname;
  this.company = company;
  this.email =
    this.firstName + "." + this.lastName + "@" + this.company + ".com";
  this.picUrl = picurl;
  this.picDescription = pdesc;
  this.profileUrl = prourl;
};

let empArr = [];
var i = 0;
function createEmployee(fname, lname, company, picurl, pdesc, prourl) {
  empArr[i] = new Employee(i + 1, fname, lname, company, picurl, pdesc, prourl);
  i++;
  console.log(empArr);
}
