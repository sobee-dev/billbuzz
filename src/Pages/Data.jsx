import React,{useState,useEffect} from 'react'
import SwitchBtns from '../Components/SwitchBtns';
import AddsCard from '../Components/AddsCard';
import Card from '../Components/Card';
import Products from '../Components/Products';

 const networkPrefixes = {
        mtn: ["0803","0806","0703","0706","0813","0810","0814","0816","0903","0906","0913","0916"],
        airtel: ["0802","0808","0708","0812","0701","0902","0907","0901","0912"],
        glo: ["0805","0807","0705","0815","0811","0905","0915"],
        "9mobile": ["0809","0818","0817","0909","0908"]
        };


const Data = () => {

    const defaultImage = "public/assets/logo.svg";
    
    const items = [
        { image: "mtn.jpg", boxId: "mtn",productList:[
            {name:"2MB", price:99,  description:'2 days'},
            {name:"2MB", price:99,  description:'7 days'},
            {name:"2MB", price:99,  description:'30 days'},
            {name:"2MB", price:99,  description:'15 days'}
        ] },

        { image: "airtel.jpg", boxId: "airtel",productList:[
           
            { name: "100GB", price: 100, description:'1 week' },
            { name: "20GB", price: 500, description: '1 month'},
       ] },
        { image: "glo.jpg", boxId: "glo",productList:[
            {name:"10GB", price:99,description:'2 days'},
            {name:"10GB", price:99,description:'7 days'},
            {name:"10GB", price:99,description:'1 day'},
            {name:"10GB", price:99,description:'7 days'}
        ] },
        { image: "9mobile.jpg", boxId: "9mobile",productList:[
            {name:"5GB", price:199, description:'1 month'},
            {name:"5GB", price:199, description:'2 months'},
            {name:"5GB", price:199, description:'6 months'},
            {name:"5GB", price:199, description:'2 months'}
        ] },
    ];
    const [active, setActive] = useState(items[0]?.boxId || "");
    const currentBox = items.find((item) => item.boxId === active);
    const [phoneValue, setPhoneValue] = useState("");
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
            const foundBox = items.find((item) => item.boxId === detectedNetwork); 
            if (foundBox) {
                setActive(foundBox.boxId);
            }
        }
        }
    };



    const allProducts = currentBox?.productList || [];
    const categories = [...new Set(allProducts.map((p) => p.description))];
    const [activeCategory, setActiveCategory] = useState(null);
    const [dataValue, setDataValue] = useState("");
    useEffect(() => {
        if (categories.length > 0) {
            if (!activeCategory || !categories.includes(activeCategory)) {
                setActiveCategory(categories[0]);
            } 
        }
    }, [active, categories]);
    const filteredProducts = activeCategory? allProducts.filter((p) => p.description === activeCategory): allProducts; 
    
    const handleProductSelect = (product) => {
       if (!phoneValue) {
        alert("Please enter a phone number first");
        return;
       }
       setDataValue(product.price); 

      
      window.location.href = `/checkout?network=${active}&amount=${product.price}&phone=${phoneValue}`;
    };

    


    return (
        <div>
          <AddsCard />
          <form>
          <SwitchBtns
            items={items}
            active={active}
            setActive={setActive}
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
                    <option value="09090982734" />
                    <option value="09123451234" />
                    <option value="07032456120" />
                    </datalist>
            </Card>
    
            <Card>
                <SwitchBtns
                items={categories}
                active={activeCategory}
                setActive={setActiveCategory}
                className= "h-auto w-full bg-gray-300 border-none mt-4"
                />
                {currentBox && (
                    <div className="p-3">
                        <Products products={filteredProducts} onSelect={handleProductSelect}/>
                    </div>
                )}
            </Card>
            </form>
        </div>
    )
  
}

export default Data
