import React, {useState,useEffect} from 'react'
import Card from './Card'
import PasswordModal from './PasswordModal';
import Loader from './Loader';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = ({isOpen, onClose, endpoint, transactionData, onSubmit}) => {
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serverPassword, setServerPassword] = useState(null);
  const navigate = useNavigate();

 

  useEffect(() => {
    axios.get("http://localhost:8000/passwords") // single password with id=1
      .then((res) => setServerPassword(res.data.value))
      .catch((err) => console.error("Error fetching password:", err));
  }, []);

  if (!isOpen) return null;
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 2. Handler for checkout
  const handleConfirm = async (password) => {
    
    
    

    setError("");
    setSuccess("");
    

    if (password !== serverPassword) {
      alert("❌ Wrong password!");
      return;
    }
    
    setLoading(true)

    setIsModalOpen(false);

    try {
      const response = await axios.post(endpoint, { transactionData, password });
      // axios parses JSON automatically
      setSuccess(response.data.message || "Payment successful!");
      onSubmit?.(response.data);
      onClose();

      navigate("/receipt", { state: { transaction: response.data } });
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setTimeout(() => setLoading(false), 2500);
    }
   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600/40 bg-opacity-40 z-50">
      <Card className="p-5 bg-white rounded-lg shadow-lg w-96 relative">
        {/* Close button for Checkout */}
        <button
        type='button'
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="">
      
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>

            {Object.entries(transactionData).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
            


            <button
              type='button'
              onClick={handleOpenModal}
              disabled={loading}
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
            Confirm 
            </button>
        
        </div>
      </Card>
      {loading && <Loader isLoading={loading} minTime={1200}/>}
      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        loading={loading}
      />
     

    </div>
  );
};

export default Checkout;
