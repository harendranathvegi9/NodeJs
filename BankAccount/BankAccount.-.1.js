var account = {
	balance:0
};
console.log(account.balance);
function deposit(account,amount){
	account.balance=account.balance+amount;
console.log("amount deposited is" + ' ' + account.balance);
}

function withdraw(account,amount){

	account.balance=account.balance-amount;
	console.log("amount remaining is" + ' ' + account.balance);

}

function getBalance(account){
	console.log(account.balance);

}

deposit(account,2000);
deposit(account,5000);
withdraw(account,3000);
getBalance(account);


