import e from "express";
import request from "supertest";
import app from "../../index.js"
import { TransactionSet } from "../../models/TransactionSet.js"

it("to test a single resource of TransactionSet", async () => {

    const agencyData = new TransactionSet({
        Agency: "E",
        Version: "D  11B",
        TransactionSet: "CASINT",
        Description: "REQUEST FOR LEGAL ADMINISTRATION ACTION IN CIVIL PR",
        Release: "0"
    })

    const data = await agencyData.save();

    const response = await request(app)
        .post('/api/transactionSet/get')
        .send({ agency: 'E', version: "D  11B", transactionSet: "CASINT" })
        .expect(200)

    const testData = JSON.parse(response.text).data[0];
    console.log(testData);

    expect(testData._id).toEqual(data._id.toString());
    expect(testData.Agency).toEqual(data.Agency);
    expect(testData.Version).toEqual(data.Version);
    expect(testData.TransactionSet).toEqual(data.TransactionSet);
    expect(testData.Description).toEqual(data.Description);
    expect(testData.Release).toEqual(data.Release);

})