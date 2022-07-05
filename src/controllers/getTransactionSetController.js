import { TransactionSet } from "../models/TransactionSet.js";
import generateResponse from "../helpers/genResponse.js"

export async function getTransactionSet(req, res) {

    const { agency, version, transactionSet } = req.body;
    const query = {
        Agency: agency,
        Version: version,
        TransactionSet: transactionSet
    };

    let response = null;

    try {
        const data = await TransactionSet.find(query);

        if (data.length > 0) {
            response = generateResponse(true, "found successfully", data);
        }
        else if (data.length === 0) {
            response = generateResponse(true, "No TransactionSet found", null);
        }
    }
    catch (err) {
        response = generateResponse(false, `there occured some error : ${err}`, null);
        res.status(500).send(response);
    }

    res.status(200).send(response);
}

