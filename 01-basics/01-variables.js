var accountPassword = "54321"
let accountEmail = "mdabdussamad33@gmail.com"
const accountId = 12356
accountCity = "Birgunj"
let accountState;

accountPassword = "333333" 
accountEmail = "test@gmail.com"
// accountId = 5 

/* Note: This is not allow because it is define as const. */
accountCity = "Kathmandu";

//console.log(accountId);

console.table([accountPassword, accountEmail,accountId, accountCity]);

/*
Note: It is better to not use var
because of issue in block scope 
and functional scope
*/