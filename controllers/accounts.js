const accounts = require('../data/accounts');

async function getAllAccounts(pageSize, page){    
    return accounts.getAllAccounts(pageSize, page);
}

async function getAccount(id){
    return accounts.getAccount(id);
}
async function getAccountsByLimit(limit) {
    return accounts.getAccountsByLimit(limit);
}

module.exports = {getAllAccounts, getAccount, getAccountsByLimit};