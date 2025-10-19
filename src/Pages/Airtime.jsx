import React,{useState,useEffect} from 'react'
import AddsCard from '../Components/AddsCard'
import SwitchBtns from '../Components/SwitchBtns'
import Card from '../Components/Card';
import Products from '../Components/Products';
import axios from "axios";
import Checkout from '../Components/Checkout';
import Loader from '../Components/Loader';

const networkPrefixes = {
        mtn: ["0803","0806","0703","0706","0813","0810","0814","0816","0903","0906","0913","0916"],
        airtel: ["0802","0808","0708","0812","0701","0902","0907","0901","0912"],
        glo: ["0805","0807","0705","0815","0811","0905","0915"],
        "9mobile": ["0809","0818","0817","0909","0908"]
        };

const Airtime = () => {

     useEffect(() => {
      axios.get("http://localhost:8000/networks")
        .then((res) => {
          setNetworks(res.data);
          setActiveNetwork(res.data[0]?.id || null); // default first network
        })
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
      axios.get("http://localhost:8000/airtimeplans")
        .then((res) => setAirtimePlans(res.data))
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
      axios.get("http://localhost:8000/phonelist")
        .then((res) => setPhoneList(res.data))
        .catch((err) => console.error(err));
    }, []);


    const defaultImage = "/assets/logo.svg";
    
    
    const [phoneValue, setPhoneValue] = useState("")
    const [airtimeValue, setAirtimeValue] = useState("");
    const [networks, setNetworks] = useState([]);
    const [airtimePlans, setAirtimePlans] = useState([]);
    const [activeNetwork, setActiveNetwork] = useState(networks[0]?.id || "");
    const [phonelist,setPhoneList] = useState([]);
    const [openCheckout, setOpenCheckout] = useState(false);
    const [loading, setLoading] = useState(false);
    const currentNetwork = networks.find((network) => network.id === activeNetwork);

    const handleProductSelect = (product) => {
       if (!phoneValue) {
        alert("Please enter a phone number first");
        return;
       }
       setAirtimeValue(product.price); 

       setLoading(true);
      
       setTimeout(() => {
        setOpenCheckout(true);
        setLoading(false);
       }, 1000);
    };

    const handleOpenCheckout = async() => {
      if (!phoneValue || phoneValue.length < 11) { 
        alert("Please enter a valid phone number ");
        return;
      }
      if (!airtimeValue) {
        alert("Please enter an amount");
        return;
      }

      setLoading(true);
      
      setTimeout(() => {
        setOpenCheckout(true);
        setLoading(false);
      }, 1500);
      
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhoneValue(value);

        // Strip non-digits
        let digits = value.replace(/\D/g, "");

          // Convert +234 / 234 to local 0xxxxxxxxxx
        if (digits.startsWith("234")) {
            digits = "0" + digits.slice(3);
        }
       

        if (digits.length >= 4) {
            const prefix = digits.slice(0, 4);
            let detectedNetwork = "";

        

            Object.entries(networkPrefixes).forEach(([network, prefixes]) => {
                if (prefixes.includes(prefix)) {
                detectedNetwork = network;
                }
            });

        // if network detected, set its box active
        if (detectedNetwork) {
            const foundBox = networks.find((network) => network.name.toLowerCase() === detectedNetwork); 
            if (foundBox) {
                setActiveNetwork(foundBox.id);
            }
        }
        }
    };

  const mappedNetworks = networks.map(net => ({
    boxId: net.id,          
    image: net.logo,    
    name: net.name       
  }));

  return (
    <div>
      <AddsCard className="mb-5"/>
      <form>
      <SwitchBtns 

        items={mappedNetworks}
        active={activeNetwork}
        setActive={setActiveNetwork}
        defaultImage={defaultImage}
      />
      <Card>
         <input
          list="options"
          id="optionsInput"
          value={phoneValue}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          className="block w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
         <datalist id="options">
          {phonelist.map((phone, index) => (
            <option key={index} value={phone.phone} />
          ))}
         </datalist>
        <p className="mt-2 text-sm text-gray-600">Selected: {phoneValue}</p>  
      </Card>
      <Card>

          {currentNetwork && (
            <div className="p-2">
                <Products 
                products={airtimePlans}
                onSelect={handleProductSelect}/>
            </div>
            )}
   
        <input
          name='airtimeInput'
          id="airtimeInput"
          placeholder="Enter amount"
          value={airtimeValue}
          onChange={(e) => setAirtimeValue(e.target.value)}
          className="block w-1/2 mx-6 p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-gray-300"
        />
       
        
        <Checkout
          isOpen={openCheckout}
          onClose={() => setOpenCheckout(false)}
          endpoint="http://localhost:8000/transactions"
          transactionData={{ network:activeNetwork, phone:phoneValue, amount:airtimeValue }}
        /> 
        <div className='flex items-center mb-10'>
        <button
          type="button"
          onClick={handleOpenCheckout} 
          className='mt-4 mb-2 max-w-1/2 mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50'
        >
           Proceed to Pay
        </button>
        </div>
        <Loader isLoading={loading} minTime={1200} />
      </Card>
      
      </form>
    </div>
  )
}

export default Airtime
