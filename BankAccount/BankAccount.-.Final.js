var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var matchedAccount;

for(var i=0;i<accounts.lenth;i++)
{
	if(account[i].username===username)
			matchedAccount=accounts[i];
	}
	return matchedAccount;
}

function deposit(account,amount){

	if(typeof amount==='number')
	{
	account.balance+=amount;	
	}
	else console.log("oops")
	
}

function withdraw(account,amount){
	if(typeof amount==='number')
	{
	account.balance-=amount;	
	} 
	else console.log("oops")
}


function getBalance(account){

	return account.balance;
}

function createBalanceGetter(account)
{
	return function()
	{
		return account.balance;
	}
}

var ravs = createAccount(
{
	username: 'ravali',
	balance:0
});

deposit(ravs,100);
withdraw(ravs,30);
var sample= createBalanceGetter(ravs);
console.log(sample());

