import React,{useState,useEffect} from 'react'
import SwitchBtns from '../Components/SwitchBtns';
import AddsCard from '../Components/AddsCard';
import Card from '../Components/Card';
import Products from '../Components/Products';
import axios from "axios";
import Loader from '../Components/Loader';
import Checkout from '../Components/Checkout';

 const networkPrefixes = {
        mtn: ["0803","0806","0703","0706","0813","0810","0814","0816","0903","0906","0913","0916"],
        airtel: ["0802","0808","0708","0812","0701","0902","0907","0901","0912"],
        glo: ["0805","0807","0705","0815","0811","0905","0915"],
        "9mobile": ["0809","0818","0817","0909","0908"]
        };


const Data = () => {

    const defaultImage = "public/assets/logo.svg";

    useEffect(() => {
      axios.get("http://localhost:8000/networks")
        .then((res) => {
          setNetworks(res.data);
          setActiveNetwork(res.data[0]?.id || null); // default first network
        })
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
      axios.get("http://localhost:8000/phonelist")
        .then((res) => setPhoneList(res.data))
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
      axios.get("http://localhost:8000/dataplans")
        .then((res) => {
          setDataplans(res.data);
        })
        .catch((err) => console.error(err));
    }, []);

    
    
    const [networks, setNetworks] = useState([]);
    const [activeNetwork, setActiveNetwork] = useState(null);
    const [phonelist,setPhoneList] = useState([]);
    const [phoneValue, setPhoneValue] = useState("");
    const [dataplans, setDataplans] = useState([]);
    const currentNetwork = networks.find((network) => network.id === activeNetwork);
    const categories = currentNetwork? [...new Set(dataplans.filter((p) => p.network === currentNetwork.id)
      .map((p) => p.validity))]: [];
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataPrice, setDataPrice] = useState("");
    const filteredProducts = dataplans.filter((p) => p.network === activeNetwork &&
        (!activeCategory || p.validity === activeCategory)); 
    const [openCheckout, setOpenCheckout] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    
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
        }
    

    const handleProductSelect = (product) => {
       if (!phoneValue || phoneValue.length < 11) { 
        alert("Please enter a valid phone number ");
        return;
      }
       setDataPrice(product.price); 
       
       setSelectedProduct(product)
       setLoading(true);

       setTimeout(() => {
        setOpenCheckout(true);
        setLoading(false);
       }, 1000);

    };

    useEffect(() => {
        if (categories.length > 0) {
            if (!activeCategory || !categories.includes(activeCategory)) {
                setActiveCategory(categories[0]);
            } 
        }
    }, [activeNetwork, categories]);

    const mappedNetworks = networks.map(net => ({
        boxId: net.id,          
        image: net.logo,    
        name: net.name       
    }));
    
    const categoryItems = categories.map((cat) => ({
        id: cat,
        name: cat
    }));

    return (
        <div>
          <AddsCard />
          <form >
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
                    className="block w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                    <datalist id="options">
                        {phonelist.map((phone, index) => (
                            <option key={index} value={phone.phone} />
                        ))}
                    </datalist>
            </Card>
    
            <Card>
                <SwitchBtns
                items={categories}
                active={activeCategory}
                setActive={setActiveCategory}
                className= "h-auto w-full bg-gray-300 border-none mt-4"
                />
                {currentNetwork && (
                    <div className="p-3">
                        <Products products={filteredProducts} onSelect={handleProductSelect}/>
                    </div>
                )}

                <Loader isLoading={loading} minTime={1200} />
            </Card>
            <Checkout
            isOpen={openCheckout}
            onClose={() => setOpenCheckout(false)}
            endpoint="http://localhost:8000/transactions"
            transactionData={{ network:activeNetwork, phone:phoneValue, amount:dataPrice, bundle:selectedProduct?.name,}}
            onSubmit={(result) => {
                console.log("Transaction finished ✅", result);}}
            /> 
            </form>
        </div>
    )
  
}

export default Data
