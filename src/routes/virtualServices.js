const express = require("express")
const router = express.Router();

//middleware comes in

const {generateSubAccount, allSubAccounts, getSubAccount, updateSubAccount, getNigeriaBankCodes} = require("../controllers/virtualServices")

router.post("/generate", generateSubAccount);
router.get("/all-accounts", allSubAccounts);
router.get("/account", getSubAccount);
router.put("/update", updateSubAccount);
router.get("/banks", getNigeriaBankCodes)


module.exports = router;