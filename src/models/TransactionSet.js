import mongoose from "mongoose";

const TransactionSetSchema = mongoose.Schema({
	Agency: { type: String },
	Version: { type: String },
	TransactionSet: { type: String },
	FunctionalGroupID: { type: String },
	Description: { type: String },
	Release: { type: String }
}, {
	collection: 'TransactionSet'
})

const TransactionSet = mongoose.model('TransactionSet', TransactionSetSchema);

export { TransactionSet };