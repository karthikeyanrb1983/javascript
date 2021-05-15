let data =  [
    {
        "chargeAmount": 50,
        "chargeAmountUnit": "per hour",
        "currencyCode": "USD"
    },
    {
        "chargeAmount": 25,
        "chargeAmountUnit": "per month",
        "currencyCode": "USD"
    },
    {
         "chargeAmount": 50,
         "chargeAmountUnit": "per hour",
         "currencyCode": "USD"
    },
    {
         "chargeAmount": 25,
         "chargeAmountUnit": "per month",
         "currencyCode": "USD"
    }

];



let result = data.reduce(
    function (result, o) {
    var unit = o.chargeAmountUnit;
    if (!(unit in result)) {
        result.arr.push(result[unit] = { 
            chargeAmountUnit: unit, 
            chargeAmount: o.chargeAmount, 
            currencyCode: o.currencyCode 
        });
    } else {
        result[unit].chargeAmount += o.chargeAmount;
    }

    return result;
}, { arr: [] }).arr;

console.log(result);

