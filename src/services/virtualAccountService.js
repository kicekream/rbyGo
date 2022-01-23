const axios = require("axios").default;
const dotenv = require("dotenv");
dotenv.config();

const baseURL =
  process.env.NODE_ENV === "dev"
    ? process.env.FINCRASANDBOX
    : process.env.FINCRALIVE;
const businessId = process.env.NEWFINCRABUSINESSID;

async function generateVirtualAccount(
  accountName,
  email,
  phoneNumber,
  country
) {
  const data = {
    name: accountName,
    email: email,
    mobile: phoneNumber,
    country: country,
  }

  const config = {
    headers: {
      "Content-type": "application/json",
      "api-key": `${process.env.FINCRAAPIKEY}`,
    },
  };
  const response = await axios.post(
    `${baseURL}/profile/business/${businessId}/sub-accounts`,
    data,
    config
  );

  return response;
}

async function getVirtualAccounts() {
  const config = {
    headers: {
      "Content-type": "application/json",
      "api-key": `${process.env.FINCRAAPIKEY}`,
    },
  };

  try {
    const response = await axios.get(
      `${baseURL}/profile/business/${businessId}/sub-accounts`,
      config
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getVirtualAccount(subAccountId) {
  const config = {
    headers: {
      "Content-type": "application/json",
      "api-key": `${process.env.FINCRAAPIKEY}`,
    },
  };
  const response = await axios.get(
    `${baseURL}/profile/business/${businessId}/sub-accounts/${subAccountId}`,
    config
  );
  return response;
}

async function updateVirtualAccount(accountName, email, phoneNumber) {
  const data = JSON.stringify({
    name: accountName,
    email: email,
    mobile: phoneNumber,
  });
  const config = {
    headers: {
      "Content-type": "application/json",
      "api-key": `${process.env.FINCRAAPIKEY}`,
    },
  };
  const response = await axios.get(
    `${baseURL}/profile/business/${businessId}/sub-accounts/${subAccountId}`,
    config
  );
  return response;
}

async function getBankCode(currency) {
  const config = {
    headers: {
      "Content-type": "application/json",
      "api-key": `${process.env.FINCRAAPIKEY}`,
    },
  };

  try {
    const response = await axios.get(
      `${baseURL}/core/banks?currency=${currency}`,
      config
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function makeTransfer(
  sourceCurrency,
  destinationCurrency,
  amount,
  business,
  description,
  customerReference,
  beneficiary,
  paymentDestination
) {
  const data = JSON.stringify({
    sourceCurrency,
    destinationCurrency,
    amount,
    business,
    description,
    customerReference,
    beneficiary,
    paymentDestination,
  });
  const config = {
    headers: {
      "Content-type": "application/json",
      "api-key": `${process.env.FINCRAAPIKEY}`,
    },
  };
  const response = await axios.post(
    `${baseURL}/disbursements/payouts/`,
    config
  );
  return response;
}

module.exports = {
  generateVirtualAccount,
  getVirtualAccounts,
  getVirtualAccount,
  updateVirtualAccount,
  getBankCode,
  makeTransfer,
};

/* function printCodes() {
  getVirtualAccounts().then((result) => console.log(result.data));
}

printCodes(); */
//payouts
