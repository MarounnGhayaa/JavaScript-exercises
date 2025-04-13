const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];
function generateReports(students){
    const reports = []
    for (const student of students) {
        const avg = (student.scores[0] + student.scores[1] + student.scores[2])/3;
        if (avg >= 90) {
            grade = "A"
        }
        else if (avg >= 80) {
            grade = "B"
        }
        else if (avg >= 70) {
            grade = "C"
        }
        else if (avg >= 60) {
            grade = "D"
        }
        else {
            grade = "F"
        }
        const report = { name: student.name, average: avg, grade: grade };
        reports.push(report)
    }
    return reports
}
console.log(generateReports(students))

class BankAccount {
    constructor (ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.initialBalance = initialBalance;
    }

    deposit(amount){
        this.initialBalance += amount;
    }

    withdraw(amount){
        if (this.initialBalance >= amount) {
            this.initialBalance -= amount
        }
        else {
            console.log("Insufficient balance")
        }
    }

    transferTo(anotherAccount, amount){
        if (this.initialBalance >= amount) {
            this.initialBalance -= amount
            anotherAccount.deposit(amount)
        }
        else {
            console.log("Insufficient balance")
        }
    }

    getSummary() {
        return this.ownerName + "'s balance is $" + this.initialBalance;
    }    
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
acc1.transferTo(acc2, 200); 
console.log(acc1.getSummary()); // John's balance is $300 
console.log(acc2.getSummary()); // Sara's balance is $500 