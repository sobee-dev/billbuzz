import React, {useState} from 'react'
import AddsCard from '../Components/AddsCard'
import WalletCard from '../Components/WalletCard'
import Card from '../Components/Card'
import { useLocation } from "react-router-dom";
import PasswordModal from '../Components/PasswordModal';

const Checkout = () => {
  const location = useLocation();

  // 1. Parse query params from URL
  const queryParams = new URLSearchParams(location.search);
  const network = queryParams.get("network");
  const amount = queryParams.get("amount");
  const phone = queryParams.get("phone");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  // 2. Handler for checkout
  const handleConfirm = async (password) => {
    setLoading(true);
    setError("");
    setSuccess("");
    setIsModalOpen(false);

    try {
       const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          network,
          amount,
          phone,
          password, // ✅ send password to backend
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process checkout");
      }

      const data = await response.json();
      setSuccess(data.message || "Payment successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <WalletCard />
      <Card className="p-4 flex  justify-center">
        <div className="">
      
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>

            <div className="mb-2">
            <p>
                <strong>Network:</strong> {network}
            </p>
            <p>
                <strong>Amount:</strong> ₦{amount}
            </p>
            <p>
                <strong>Phone:</strong> {phone}
            </p>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}

            <button
            onClick={handleOpenModal}
            disabled={loading}
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
            {loading ? "Processing..." : "Confirm "}
            </button>
        
        </div>
      </Card>
      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
      <AddsCard />

    </div>
  )
}

export default Checkout
