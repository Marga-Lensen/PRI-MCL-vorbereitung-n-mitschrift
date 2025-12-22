export {}

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    productName: string;
    productPrice: number;
    moneyEarned: number;

    constructor(name: string, productName: string, productPrice: number) {
        super(name);
        this.productName = productName;
        this.productPrice = productPrice;
        this.moneyEarned = 0;
    }

    sellProduct() {
        console.log(`${this.name}: Thank you`);
        this.moneyEarned += this.productPrice;
    }
}

class Customer extends Person {
    money: number;

    constructor(name: string, money: number) {
        super(name);
        this.money = money;
    }

    buyFrom(employee: Employee) {
        if (this.money >= employee.productPrice) {
            employee.sellProduct();
            this.money -= employee.productPrice;
        }
    }
}

// Create instances
const xerxes = new Employee("Xerxes", "Apple", 5);
const xiao = new Employee("Xiao", "Banana", 3);
const xander = new Employee("Xander", "Cherry", 2);

const alice = new Customer("Alice", 104);
const adam = new Customer("Adam", 81);
const arno = new Customer("Arno", 51);

// Simulate transactions
while (alice.money >= xerxes.productPrice) {
    alice.buyFrom(xerxes);
}

while (adam.money >= xiao.productPrice) {
    adam.buyFrom(xiao);
}

while (arno.money >= xander.productPrice) {
    arno.buyFrom(xander);
}

// Print results
console.log(`Alice's remaining money: ${alice.money}`);
console.log(`Adam's remaining money: ${adam.money}`);
console.log(`Arno's remaining money: ${arno.money}`);

console.log(`Xerxes's total money earned: ${xerxes.moneyEarned}`);
console.log(`Xiao's total money earned: ${xiao.moneyEarned}`);
console.log(`Xander's total money earned: ${xander.moneyEarned}`);