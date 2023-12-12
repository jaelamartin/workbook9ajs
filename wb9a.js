class Employee{

// the constructor function is called when we create 
// employee objects using the new keyword
constuctor(id, firstName, lastName, jobTitle, payRate) {

    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

}

// The displayInto()method

displayIntro() {
    console.log(
        "Hi I'm" + this.firstName + " " + this.lastName + 
        "and i am a " + this.jobTitle;)

    }
       
let employee1 = new Employee("1","Ezra","Aiden","Theater Teacher","38.46");
let employee = new Employee("2","Elisha","Aslan","Game programmer","43.27");

console.log ;{
    "Hi I'm" + this.firstName + " " + this.lastName + 
    "and i am a " + this.jobTitle;

}