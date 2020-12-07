const Employee = function (id, fname, lname, company, picurl, pdesc, prourl) {
  this.empid = id;
  this.firstName = fname;
  this.lastName = lname;
  this.company = company;
  this.email =
    this.firstName + "." + this.lastName + "@" + this.company + ".com";
  this.picUrl = picurl;
  this.altDesc = pdesc;
  this.profileUrl = prourl;
};

// let empArr = [];
var i = Trainees.length;
function createEmployee(fname, lname, company, picurl, pdesc, prourl) {
  Trainees[i] = new Employee(
    i + 1,
    fname,
    lname,
    company,
    picurl,
    pdesc,
    prourl
  );
  createNewCard(Trainees[i]);
  i++;
  console.log(Trainees);
}

// let a = new Date();
// const timestamp =
//   a.getMonth() +
//   "/" +
//   a.getDate() +
//   "/" +
//   a.getFullYear() +
//   " " +
//   a.getHours() +
//   ":" +
//   a.getMinutes() +
//   ":" +
//   a.getSeconds();
