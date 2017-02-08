var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax() {
  // Implement your code here
  for(var company in companySalesData){
    //console.log(company);
    var sales1 = companySalesData[company].sales;
    //console.log(tax);
    var totalsales = 0;
    for(sale = 0; sale < sales1.length; sale++){
      totalsales = (totalsales + sales1[sale]);
    //console.log(totalsales);
    }
    var abstotaltaxes = totalsales * salesTaxRates[companySalesData[company].province];
    console.log("Total Sales for " + companySalesData[company].name + " are:" + totalsales);
    console.log("Total Taxes for " + companySalesData[company].name + " are:" + abstotaltaxes);
    //console.log(salesTaxRates.companySalesData[company].province);
  }
  //console.log(totalsales);
}
calculateSalesTax();
//var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/