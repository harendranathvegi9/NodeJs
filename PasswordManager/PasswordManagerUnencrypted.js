console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')

.command('create','craetes the user info',function(yargs){
	yargs.options({
		name:{
			demand:true,
			alias: 'n',
			description: 'Your first name is here:',
			type: 'string'
		},
		username:{
			demand: true,
			alias: 'u',
			description:'Your user name is here:',
			type: 'string'
		},
		password:{
			demand:true,
			alias:'p',
			description: 'your password',
			type: 'string'
		}

	}).help('help');
})

.command('get','get user info',function(yargs){
	yargs.options({
		name:{
			demand:true,
			alias: 'n',
			description: 'Your first name is here:',
			type: 'string'
		}

	}).help('help');

})

.help('help')
.argv;

var command = argv._[0];
//account.name 
//account.username user12!
//account.password password123

function createAccount(account){
	var accounts = storage.getItemSync('accounts');

	if(typeof accounts==='undefined'){
		accounts=[];
	}
	accounts.push(account);
	storage.setItemSync('accounts',accounts)

	return account;
}

function getAccount(accountName){

	var accounts=storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function(account){
		if(account.name===accountName){
			matchedAccount=account;
		}
	});
	return matchedAccount;

}



console.log(argv);

if(command==='create' && typeof argv.name!='undefined' && typeof argv.username!='undefined' && typeof argv.password!='undefined'){
var createdAccount = 
createAccount({
	name:argv.name,
	username:argv.username,
	password:argv.password

});

console.log('Account created');
console.log(createdAccount);

} else if (command==='get'){
var fetchedAccount=getAccount(argv.name);

if(typeof fetchedAccount==='undefined'){
	console.log("Account not found");

}else{
	console.log("Account found");
	console.log(fetchedAccount);
}
}