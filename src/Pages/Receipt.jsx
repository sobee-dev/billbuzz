import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../Components/Card";

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const transaction = location.state?.transaction;

  if (!transaction) {
    return (
      <div className="p-5">
        <h2>No transaction found</h2>
        <button 
          onClick={() => navigate("/")} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

   const flatTransaction = {
    ...transaction.transactionData, // spread the nested object
    message: transaction.message,
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Transaction Receipt</h2>
       {Object.entries(flatTransaction).map(([key, value]) => (
          <p key={key} className="mb-2">
            <strong className="capitalize">{key}:</strong> {value}
          </p>
        ))}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Done
        </button>
      </Card>
    </div>
  );
};

export default Receipt;