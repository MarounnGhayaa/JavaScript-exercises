const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];
/* O(1) * O(n) = O(n)
function generateReports(students){
    //O*(1)
    const reports = []
    //O(n) where n is the number of students
    for (const student of students) {
        const average = (student.scores[0] + student.scores[1] + student.scores[2])/3;
        //O(1)
        if (average >= 90) {
            grade = "A"
        }
        //O(1)
        else if (average >= 80) {
            grade = "B"
        }
        //O(1)
        else if (average >= 70) {
            grade = "C"
        }
        //O(1)
        else if (average >= 60) {
            grade = "D"
        }
        //O(1)
        else {
            grade = "F"
        }
        const report = { name: student.name, average: average, grade: grade };
        //O(1) because adding a report occurs without iterating through reports
        reports.push(report)
    }
    //O(1) because it's returning a variable 
    return reports
}
//O(1) printing
console.log(generateReports(students)) */

//Generating reports using .map and .forEach, O(n) * O(1) = O(n)
function generateReports(students) {
    //O(n)
    return students.map(student => {
        let total = 0;
        //O(1) because the scores number is fixed
        student.scores.forEach(score => {
            total += score;
        });
  
        const average = total / student.scores.length;
        if (average >= 90) {
            grade = "A"
        }
        //O(1)
        else if (average >= 80) {
            grade = "B"
        }
        //O(1)
        else if (average >= 70) {
            grade = "C"
        }
        //O(1)
        else if (average >= 60) {
            grade = "D"
        }
        //O(1)
        else {
            grade = "F"
        }
        //O(1)                
        return { name: student.name, average, grade };
    });
  }
  //O(1)
  console.log(generateReports(students));

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

function addTask() {
    const taskInput = document.getElementById("inputTask");
    if (taskInput.value != "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        const taskRow = document.getElementById("tasksTable");
        taskRow.appendChild(newTask);
        newTask.addEventListener("click", function() {
            newTask.classList.toggle("clicked-li");
        });
        taskInput.value = "";
    } else {
        alert("No tasks added.");
    }
}