var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var matchedAccount;

	accounts.forEach(function(account){
		if(account.username===username)
		{
			matchedAccount=account;
			
		}
	});
	return matchedAccount;
}

function deposit(account,amount){
	account.balance+=amount;
}

function withdraw(account,amount){
	account.balance-=amount;
}
function getBalance(account){

	return account.balance;
}

var ravsAccount = createAccount({
	username:'ravs',
	balance: 0

});

deposit(ravsAccount,100);
console.log(getBalance(ravsAccount));

withdraw(ravsAccount,50);
console.log(getBalance(ravsAccount));