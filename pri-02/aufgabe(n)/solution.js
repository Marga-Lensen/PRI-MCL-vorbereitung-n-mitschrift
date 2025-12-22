class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, productName, productPrice) {
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
    constructor(name, money) {
        super(name);
        this.money = money;
    }

    buyFrom(employee) {
        if (this.money >= employee.productPrice) {
            employee.sellProduct();
            this.money -= employee.productPrice;
        }
    }
}
