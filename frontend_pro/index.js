function Student(firstName, lastName, yearOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;

  this.attedance = [];
  this.grades = [];

  this.getAge = function() {
    return 2024 - this.yearOfBirth;
  }

  this.addGrade = function(grade) {
    this.grades.push(grade);
  }

  this.getAverageGrade = function() {
    let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  this.present = function() {
    if(this.attedance.length >= 25) return;
    this.attedance.push(true);
  }

  this.absent = function() {
    if(this.attedance.length >= 25) return;
    this.attedance.push(false);
  }

  this.summary = function() {
    const averageGrade = this.getAverageGrade();

    let countOfPresent = 0;
    for (let i = 0; i < this.attedance.length; i++) {
      if (this.attedance[i] === true) countOfPresent++;
    }

    const percentOfAttedance = countOfPresent / this.attedance.length;

    if(averageGrade >= 90 && percentOfAttedance >= 0.9) {
      return "Great Job! Molodec :)";
    } else if (averageGrade >= 90 && percentOfAttedance < 0.9 || averageGrade < 90 && percentOfAttedance >= 0.9) {
      return "Good, but could be better";
    } else {
      return "Rediska";
    }
    return "No result";
  }
}

const alice = new Student('Alice', 'Alicenko', 1995);
console.log(alice.getAge());
alice.present();
alice.absent();
alice.present();
alice.present();
alice.absent();
alice.present();
alice.present();
alice.present();
alice.absent();
alice.absent();
alice.addGrade(100);
alice.addGrade(90);
alice.addGrade(85);
alice.addGrade(95);
alice.addGrade(75);
console.log(alice.summary());

const john = new Student('John', 'Johnenko', 1999);
console.log(john.getAge());
john.present();
john.present();
john.present();
john.absent();
john.present();
john.absent();
john.present();
john.present();
john.present();
john.absent();
john.addGrade(95);
john.addGrade(90);
john.addGrade(100);
john.addGrade(90);
john.addGrade(80);
console.log(john.summary());

const vadym = new Student('Vadym', 'Harmash', 2003);
console.log(vadym.getAge());
vadym.present();
vadym.present();
vadym.present();
vadym.present();
vadym.present();
vadym.present();
vadym.present();
vadym.present();
vadym.addGrade(100);
vadym.addGrade(95);
vadym.addGrade(90);
vadym.addGrade(85);
vadym.addGrade(100);
console.log(vadym.summary());
