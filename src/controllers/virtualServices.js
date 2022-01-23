const {
  generateVirtualAccount,
  getVirtualAccounts,
  getVirtualAccount,
  updateVirtualAccount,
  getBankCode,
  makeTransfer,
} = require("../services/virtualAccountService");

exports.generateSubAccount = async (req, res) => {
  const { accountName, email, phoneNumber, country } = req.body;
  console.log(req.body)

  try {
    const response = await generateVirtualAccount(
      accountName,
      email,
      phoneNumber,
      country
    );
  
    res.send(response.data)
  } catch(error) {
    res.send(error)
  }
};

exports.allSubAccounts = async(req, res) => {
  try {
    const accounts = await getVirtualAccounts();
    res.send(accounts.data)
  } catch(error) {
    res.send(error)
  }
}

exports.getSubAccount = async(req, res) => {
  try {
    //define sub account
    // const subAccountId = ;
    const account = await getVirtualAccount(subAccountId);
    res.send(account.data);
  } catch(error) {
    res.send(error);
  }

}

exports.updateSubAccount = async(req, res) => {
  //customerData is gotten from the DB
  const customerData = {}
  const {accountName, email, phoneNumber} = customerData;
  try {
    const result = await updateVirtualAccount(accountName, email, phoneNumber);
    res.send(result.data)
  } catch(error) {
    res.send(error)
  }

}

exports.getNigeriaBankCodes = async(req, res) => {
  try {
    const bankCodes = await getBankCode("NGN");
    res.send(bankCodes.data)
  } catch(error) {
    res.send(error)
  }

}