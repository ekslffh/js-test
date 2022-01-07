class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getNormalInfo() {
    return `${this.name} (${this.age})`;
  }
}
class Student extends Person {
  constructor(name, age, score) {
    super(name, age);
    this.score = score;
  }
  getNormalInfo() {
    return `${this.name} (${this.age})`;
  }
}
const p = new Person("James", 23);
console.log(p);
const s = new Student("Amy", 17, 90);
console.log(s.getNormalInfo());
