const axios = require("axios").default;

async function validateMeterNumber(meterNumber, disco, meterType) {
  disco = disco.toUpperCase();
  meterType = meterType.toUpperCase();
  const data = JSON.stringify({
    meter_number: meterNumber,
    disco: disco,
    type: meterType,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.put(
    `${process.env.VELOXBASEURL}/energy`,
    data,
    config
  );

  return response;
}

async function getDiscos(meterNumber, disco, meterType) {
  disco = disco.toUpperCase();
  meterType = meterType.toUpperCase();
  const data = JSON.stringify({
    meter_number: meterNumber,
    disco: disco,
    type: meterType,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.get(
    `${process.env.VELOXBASEURL}/energy/discos`,
    data,
    config
  );

  return response;
}

async function getRequery(queryId, meterNumber, disco, meterType) {
  queryId = queryId.toUpperCase();
  disco = disco.toUpperCase();
  meterType = meterType.toUpperCase();
  const data = JSON.stringify({
    meter_number: meterNumber,
    disco: disco,
    type: meterType,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.get(
    `${process.env.VELOXBASEURL}/energy/requery/${queryId}`,
    data,
    config
  );

  return response;
}

async function buyEnergy(meterNumber, disco, meterType, amount, phoneNumber) {
  queryId = queryId.toUpperCase();
  disco = disco.toUpperCase();
  meterType = meterType.toUpperCase();
  const data = JSON.stringify({
    meter_number: meterNumber,
    disco: disco,
    type: meterType,
    amount: amount,
    phone: phoneNumber,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.post(
    `${process.env.VELOXBASEURL}/energy`,
    data,
    config
  );

  return response;
}

async function getDataPlans(telco) {
  telco = telco.toUpperCase();

  const data = JSON.stringify({
    telco,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.post(
    `${process.env.VELOXBASEURL}/airtime/data/plans`,
    data,
    config
  );

  return response;
}

async function getTelcos() {
  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.get(
    `${process.env.VELOXBASEURL}/airtime/telcos`,
    config
  );

  return response;
}

async function buyAirtime(telco, amount, phoneNumber) {
  telco = telco.toUpperCase();
  const data = JSON.stringify({
    telco,
    amount,
    phoneNumber,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.post(
    `${process.env.VELOXBASEURL}/airtime`,
    data,
    config
  );

  return response;
}

async function buyData(telco, amount, phoneNumber) {
  telco = telco.toUpperCase();
  const data = JSON.stringify({
    telco,
    amount,
    phoneNumber,
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "X-requested-with": "XMLHttpRequest",
      Authorization: `${process.env.VELOXAUTHTOKEN}`,
    },
  };
  const response = await axios.post(
    `${process.env.VELOXBASEURL}/airtime/data`,
    data,
    config
  );

  return response;
}

async function getDstvPlans() {
    const config = {
        headers: {
          "Content-type": "application/json",
          "X-requested-with": "XMLHttpRequest",
          Authorization: `${process.env.VELOXAUTHTOKEN}`,
        },
      };
      const response = await axios.get(
        `${process.env.VELOXBASEURL}/cable/mutichoice/dstv`,
        config
      );
    
      return response;
}

async function validateDstvCustomer(smartCardNo) {
    const data = JSON.stringify({
        smartcard: smartCardNo,
        service: "dstv"
      });
    
      const config = {
        headers: {
          "Content-type": "application/json",
          "X-requested-with": "XMLHttpRequest",
          Authorization: `${process.env.VELOXAUTHTOKEN}`,
        },
      };
      const response = await axios.post(
        `${process.env.VELOXBASEURL}/cable/multichoice/validate`,
        data,
        config
      );
    
      return response;
}

async function buyDstvPlan(smartCardNo, amount, customerName, productCode, period) {
    const data = JSON.stringify({
        smartcard: smartCardNo,
        amount,
        customer_name: customerName,
        product_code: productCode,
        period,
        service: "dstv"
      });
    
      const config = {
        headers: {
          "Content-type": "application/json",
          "X-requested-with": "XMLHttpRequest",
          Authorization: `${process.env.VELOXAUTHTOKEN}`,
        },
      };
      const response = await axios.post(
        `${process.env.VELOXBASEURL}/cable/multichoice/vend`,
        data,
        config
      );
    
      return response;
}

async function validateStartimesCustomer(smartCardNo) {
    const data = JSON.stringify({
        smartcard: smartCardNo,
      });
    
      const config = {
        headers: {
          "Content-type": "application/json",
          "X-requested-with": "XMLHttpRequest",
          Authorization: `${process.env.VELOXAUTHTOKEN}`,
        },
      };
      const response = await axios.post(
        `${process.env.VELOXBASEURL}/cable/startimes/validate`,
        data,
        config
      );
    
      return response;
}

async function buyStartimesPlan(smartCardNo, amount, phoneNumber, bouquet, productCode) {
    bouquet = bouquet.toUpperCase();
    productCode = productCode.toUpperCase();

    const data = JSON.stringify({
        smartcard: smartCardNo,
        amount,
        phone: phoneNumber,
        bouquet,
        productCode
      });
    
      const config = {
        headers: {
          "Content-type": "application/json",
          "X-requested-with": "XMLHttpRequest",
          Authorization: `${process.env.VELOXAUTHTOKEN}`,
        },
      };
      const response = await axios.post(
        `${process.env.VELOXBASEURL}/cable/startimes/validate`,
        data,
        config
      );
    
      return response;
}

module.exports = { validateMeterNumber, getDiscos, getRequery, buyEnergy };
