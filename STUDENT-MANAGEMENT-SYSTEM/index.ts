class Student {
    name: string;
    rollNo: number;
    coursesEnrolled: string[] = [];
    balance: number = 0;
  
    constructor(name: string, rollNo: number) {
      this.name = name;
      this.rollNo = rollNo;
    }
  
    enroll(course: string): void {
      this.coursesEnrolled.push(course);
    }
  
    viewBalance(): number {
      return this.balance;
    }
  
    payTuition(amount: number): void {
      this.balance -= amount;
      console.log(`Paid tuition fee: $${amount}`);
    }
  
    showStatus(): void {
      console.log(`Roll No.: ${this.rollNo}`);
      console.log(`Name: ${this.name}`);
      console.log("Courses Enrolled: ", this.coursesEnrolled.join(", "));
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  class StudentManagementSystem {
    students: Student[] = [];
  
    addStudent(student: Student): void {
      this.students.push(student);
    }
  
    enrollStudent(studentRollNo: number, course: string): void {
      const student = this.findStudentByRollNo(studentRollNo);
      if (student) {
        student.enroll(course);
        console.log(`${student.name} enrolled in ${course}.`);
      } else {
        console.log(`Student with Roll No. ${studentRollNo} not found.`);
      }
    }
  
    viewStudentBalance(studentRollNo: number): void {
      const student = this.findStudentByRollNo(studentRollNo);
      if (student) {
        console.log(`Student balance for ${student.name}: $${student.viewBalance()}`);
      } else {
        console.log(`Student with Roll No. ${studentRollNo} not found.`);
      }
    }
  
    payStudentTuition(studentRollNo: number, amount: number): void {
      const student = this.findStudentByRollNo(studentRollNo);
      if (student) {
        student.payTuition(amount);
      } else {
        console.log(`Student with Roll No. ${studentRollNo} not found.`);
      }
    }
  
    showStudentStatus(studentRollNo: number): void {
      const student = this.findStudentByRollNo(studentRollNo);
      if (student) {
        student.showStatus();
      } else {
        console.log(`Student with Roll No. ${studentRollNo} not found.`);
      }
    }
  
    findStudentByRollNo(studentRollNo: number): Student | undefined {
      return this.students.find((student) => student.rollNo === studentRollNo);
    }
  }
  
  // Usage
  const studentSystem = new StudentManagementSystem();
  
  const student1 = new Student("John Doe", 10000);
  const student2 = new Student("Jane Smith", 10001);
  
  studentSystem.addStudent(student1);
  studentSystem.addStudent(student2);
  