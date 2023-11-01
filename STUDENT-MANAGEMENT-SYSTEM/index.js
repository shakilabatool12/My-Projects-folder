var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.coursesEnrolled = [];
        this.balance = 0;
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.enroll = function (course) {
        this.coursesEnrolled.push(course);
    };
    Student.prototype.viewBalance = function () {
        return this.balance;
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Paid tuition fee: $".concat(amount));
    };
    Student.prototype.showStatus = function () {
        console.log("Roll No.: ".concat(this.rollNo));
        console.log("Name: ".concat(this.name));
        console.log("Courses Enrolled: ", this.coursesEnrolled.join(", "));
        console.log("Balance: $".concat(this.balance));
    };
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    StudentManagementSystem.prototype.enrollStudent = function (studentRollNo, course) {
        var student = this.findStudentByRollNo(studentRollNo);
        if (student) {
            student.enroll(course);
            console.log("".concat(student.name, " enrolled in ").concat(course, "."));
        }
        else {
            console.log("Student with Roll No. ".concat(studentRollNo, " not found."));
        }
    };
    StudentManagementSystem.prototype.viewStudentBalance = function (studentRollNo) {
        var student = this.findStudentByRollNo(studentRollNo);
        if (student) {
            console.log("Student balance for ".concat(student.name, ": $").concat(student.viewBalance()));
        }
        else {
            console.log("Student with Roll No. ".concat(studentRollNo, " not found."));
        }
    };
    StudentManagementSystem.prototype.payStudentTuition = function (studentRollNo, amount) {
        var student = this.findStudentByRollNo(studentRollNo);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log("Student with Roll No. ".concat(studentRollNo, " not found."));
        }
    };
    StudentManagementSystem.prototype.showStudentStatus = function (studentRollNo) {
        var student = this.findStudentByRollNo(studentRollNo);
        if (student) {
            student.showStatus();
        }
        else {
            console.log("Student with Roll No. ".concat(studentRollNo, " not found."));
        }
    };
    StudentManagementSystem.prototype.findStudentByRollNo = function (studentRollNo) {
        return this.students.find(function (student) { return student.rollNo === studentRollNo; });
    };
    return StudentManagementSystem;
}());
// Usage
var studentSystem = new StudentManagementSystem();
var student1 = new Student("John Doe", 10000);
var student2 = new Student("Jane Smith", 10001);
studentSystem.addStudent(student1);
studentSystem.addStudent(student2);
