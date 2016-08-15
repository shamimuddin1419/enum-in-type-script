enum SalaryHead {
    // these are %
    Basic = 50,
    Houserent = 30,
    Medical = 10,
    Conveyance = 10
}
class SalaryCal {
    // let gross salary is 50000,Gross Salary will be given from IU in real wrold 
    Gross: number = 50000;
    // Calculate Basic from gross slary
    BasicSalary: number = (this.Gross * SalaryHead.Basic) / 100;
    // Calculate House Rent from gross slary
    Houserent: number = (this.Gross * SalaryHead.Houserent) / 100;
    // Calculate Medical from gross slary
    Medical: number = (this.Gross * SalaryHead.Medical) / 100;
    // Calculate Conveyance from gross slary
    Conveyance: number = (this.Gross * SalaryHead.Conveyance) / 100;

    // we can not modify enum valu without enum block
   // SalaryHead.Basic=60;

    constructor() {
        // Now we will check sum of salary head and gross are equal.
        if ((this.BasicSalary + this.Houserent + this.Medical + this.Conveyance) == this.Gross) {
            console.log("Both are equal");
        }
        else {
            console.log("Both are not equal");
        }
    }   
}

window.onload = () => {
    // Create class object 
    var val = new SalaryCal();
}
