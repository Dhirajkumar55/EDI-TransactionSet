import request from "supertest";
import app from "../../index.js";
import { TransactionSet } from "../../models/TransactionSet.js"

it("to test a multiple resources of TransactionSet", async () => {

    await new TransactionSet({
        Agency: "X",
        Version: "006042",
        TransactionSet: "250",
        FunctionalGroupID: "PV",
        Description: "PURCHASE ORDER SHIPMENT MANAGEMENT DOCUMENT",
        Release: "0"
    }).save()

    await new TransactionSet({
        Agency: "X",
        Version: "006042",
        TransactionSet: "283",
        FunctionalGroupID: "TE",
        Description: "TAX OR FEE EXEMPTION CERTIFICATION",
        Release: "0"
    }).save()

    const response = await request(app)
        .post('/api/transactionSet/getAll')
        .send({ agency: 'X', version: "006042" })
        .expect(200)

    const testData = JSON.parse(response.text).data;

    expect(testData.length).toEqual(2);

})