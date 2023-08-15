//write your code here to make the tests pass
class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager {
  constructor(name) {
    this.employees = [];
    this.name = name;
  }
  hireEmployee(name) {
    let newEmp = new Employee(name);
    this.employees.push(newEmp);
  }
  askEmployeesToWork(office) {
    for (let emp of this.employees) {
      emp.work(office);
    }
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }
  hireCleaner(name) {
    let newCleaner = new Cleaner(name);
    this.cleaners.push(newCleaner);
  }
  hireManager(name) {
    let newMan = new Manager(name);
    this.managers.push(newMan);
  }
  startWorkDay() {
    for (let manager of this.managers) {
      manager.askEmployeesToWork(this);
    }
    for (let cleaner of this.cleaners) {
      cleaner.clean();
    }
  }
}
