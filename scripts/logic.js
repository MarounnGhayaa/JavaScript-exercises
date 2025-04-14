const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];
//O(1) * O(n) = O(n)
function generateReports(students){
    //O*(1)
    const reports = []
    //O(n) where n is the number of students
    for (const student of students) {
        const avg = (student.scores[0] + student.scores[1] + student.scores[2])/3;
        //O(1)
        if (avg >= 90) {
            grade = "A"
        }
        //O(1)
        else if (avg >= 80) {
            grade = "B"
        }
        //O(1)
        else if (avg >= 70) {
            grade = "C"
        }
        //O(1)
        else if (avg >= 60) {
            grade = "D"
        }
        //O(1)
        else {
            grade = "F"
        }
        const report = { name: student.name, average: avg, grade: grade };
        //O(1) because adding a report occurs without iterating through reports
        reports.push(report)
    }
    //O(1) because it's returning a variable 
    return reports
}
//O(1) printing
console.log(generateReports(students))

class BankAccount {
    //O(1)
    constructor (ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.initialBalance = initialBalance;
        this.history = [];
    }
    //O(1)
    deposit(amount){
        this.initialBalance += amount;
        this.history.push("Deposited $" + amount)
    }
    //O(1)
    withdraw(amount){
        if (this.initialBalance >= amount) {
            this.initialBalance -= amount
            this.history.push("Withdrew $" + amount);
        }
        else {
            console.log("Insufficient balance")
        }
    }
    //O(1)
    transferTo(anotherAccount, amount){
        if (this.initialBalance >= amount) {
            this.initialBalance -= amount
            anotherAccount.deposit(amount)
            this.history.push("Transferred $"+ amount + " to " + anotherAccount.ownerName);
        }
        else {
            console.log("Insufficient balance")
        }
    }
    //O(1)
    getSummary() {
        return this.ownerName + "'s balance is $" + this.initialBalance;
    }

    //O(1) * O(n) = O(n)
    printHistory() {  
        //O(1)        
        console.log(this.ownerName + "'s History: ");
        //O(n) where n is the number of strings added to the array "history"
        for (const transaction of this.history) { 
            console.log(transaction);
        }
    }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
acc1.transferTo(acc2, 200); 
console.log(acc1.getSummary()); // John's balance is $300, O(1)
console.log(acc2.getSummary()); // Sara's balance is $500, O(1) 
acc1.printHistory();