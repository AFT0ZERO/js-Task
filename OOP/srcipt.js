//task 1 2 3
class Car {
    constructor(Make,Model)
    {
        this.make = Make;
        this.model=Model;
        start()
        {
            console.log(`the car has started`);
        }
    }
}
let carOne = new Car("bmw","x5");

//task 4
class ElectricCar extends Car{
   constructor(Make,Model,Battery_size)
   {
    super(Make,Model);
    this.battery_size = Battery_size;
   }
}

//task 5 6
class Account{
    #balance;
    constructor(Balance)
    {
        this.#balance=Balance;
    }
    deposit(amount)
    {
        this.#balance+=amount;
    } 
    withdraw(amount)
    {
       if(this.#balance<amount)console.log("you do not have money");
       else  this.#balance-=amount;
    }
    getBalance()
    {
        return this.#balance;
    }
    setBalance(Balances)
    {
        this.#balance=Balances;
    }
}
let acc = new Account(2000);
