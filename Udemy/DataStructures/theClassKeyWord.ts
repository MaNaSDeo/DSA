interface IStudent {
  firstName: string;
  lastName: string;
  birthYear?: number;
  lateCount?: number;
  fullName: () => string;
  updateLateCount: () => string;
  updateScore: (score: number) => number[];
}
class Student implements IStudent {
  firstName: string;
  lastName: string;
  birthYear?: number;
  lateCount: number;
  scores: number[];

  constructor(firstName: string, lastName: string, year: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = year;
    this.lateCount = 0;
    this.scores = [];
  }
  fullName() {
    return `${this.firstName}'s full name is ${this.firstName} ${this.lastName}.`;
  }
  updateLateCount() {
    this.lateCount += 1;
    if (this.lateCount > 3) return `You are expelled!`;
    return `${this.firstName} ${this.lastName} has been late ${this.lateCount} till now.`;
  }
  updateScore(score: number) {
    this.scores?.push(score);
    return this.scores;
  }
  calculateAverage() {
    const totalSum = this.scores.reduce((acc, cv) => acc + cv, 0);
    const avg = totalSum / this.scores.length;
    return avg;
  }
  static EnrollStudents() {
    return "Let's enroll students now!";
  }
}

const manasStudent = new Student("Manas", "Kumar", 1994);

console.log(manasStudent.fullName());
console.log(manasStudent.updateLateCount());
console.log(manasStudent.updateLateCount());
console.log(manasStudent.updateLateCount());
console.log(manasStudent.updateLateCount());
console.log(manasStudent.updateScore(75));
console.log(manasStudent.updateScore(79));
console.log(manasStudent.updateScore(95));
console.log(manasStudent.updateScore(85));
console.log(manasStudent.updateScore(77));
console.log(manasStudent.updateScore(100));
console.log(manasStudent.calculateAverage());
console.log(Student.EnrollStudents());
