var SalaryHead;
(function (SalaryHead) {
    // these are %
    SalaryHead[SalaryHead["Basic"] = 50] = "Basic";
    SalaryHead[SalaryHead["Houserent"] = 30] = "Houserent";
    SalaryHead[SalaryHead["Medical"] = 10] = "Medical";
    SalaryHead[SalaryHead["Conveyance"] = 10] = "Conveyance";
})(SalaryHead || (SalaryHead = {}));
var SalaryCal = (function () {
    // we can not modify enum valu without enum block
    // SalaryHead.Basic=60;
    function SalaryCal() {
        // let gross salary is 50000,Gross Salary will be given from IU in real wrold 
        this.Gross = 50000;
        // Calculate Basic from gross slary
        this.BasicSalary = (this.Gross * SalaryHead.Basic) / 100;
        // Calculate House Rent from gross slary
        this.Houserent = (this.Gross * SalaryHead.Houserent) / 100;
        // Calculate Medical from gross slary
        this.Medical = (this.Gross * SalaryHead.Medical) / 100;
        // Calculate Conveyance from gross slary
        this.Conveyance = (this.Gross * SalaryHead.Conveyance) / 100;
        // Now we will check sum of salary head and gross are equal.
        if ((this.BasicSalary + this.Houserent + this.Medical + this.Conveyance) == this.Gross) {
            console.log("Both are equal");
        }
        else {
            console.log("Both are not equal");
        }
    }
    return SalaryCal;
}());
window.onload = function () {
    // Create class object 
    var val = new SalaryCal();
};
//# sourceMappingURL=SalaryCal.js.map