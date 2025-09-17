import React, {useState, useEffect} from 'react'
import SwitchBtns from '../Components/SwitchBtns';
import Card from '../Components/Card';
import Products from '../Components/Products'



const Tv = () => {
  const defaultImage = "public/assets/logo.svg";
  const items = [
        { image: "dstv.jpg", boxId: "dstv",productList:[
            {name:"Combo", price:1000,  description:'standard'},
            {name:"jumbo", price:9934,  description:'premium'},
            {name:"combo", price:949,  description:'standard'},
            {name:"jumbo", price:919,  description:'premium'}
        ] },

        { image: "gotv.jpg", boxId: "gotv",productList:[
           
            { name: "basic", price: 100, description:' standard' },
            { name: "standard", price: 500, description: ' basic'},
       ] },
        { image: "startimes.jpg", boxId: "startimes",productList:[
            {name:"10GB", price:99,description:'premium'},
            {name:"10GB", price:99,description:'standard'},
            {name:"10GB", price:99,description:'standard'},
            {name:"10GB", price:99,description:'premium'}
        ] }
        
  ];
   const [active, setActive] = useState(items[0]?.boxId || "");
  const currentBox = items.find((item) => item.boxId === active);
  const [smartCardValue, setSmartCardValue] = useState("")
  const [subscriptionValue, setSubscriptionValue] = useState("");
  const handleSmartCardChange = (e) => {
    const value = e.target.value;
    setSmartCardValue(value);
  }
  
  const allProducts = currentBox?.productList || [];
  const categories = [...new Set(allProducts.map((p) => p.description))];
  const [activeCategory, setActiveCategory] = useState(null);
      useEffect(() => {
          if (categories.length > 0) {
              if (!activeCategory || !categories.includes(activeCategory)) {
                  setActiveCategory(categories[0]);
              } 
          }
      }, [active, categories]);
  const filteredProducts = activeCategory? allProducts.filter((p) => p.description === activeCategory): allProducts; 
  const handleCheckout = () => {
      if (!smartCardValue) { 
        alert("Please enter a smartcard number first");
        return;
      }
      if (!subscriptionValue) {
        alert("Please enter an amount");
        return;
      }

      // ✅ do the redirect here only
      window.location.href = `/checkout?provider=${active}&amount=${subscriptionValue}&smartcard=${smartCardValue}`;
  };
  const handleProductSelect = (product) => {
       if (!smartCardValue) {
        alert("Please enter a smartcard number first");
        return;
       }
       setSmartCardValue(product.price); 

      
      window.location.href = `/checkout?provider=${active}&amount=${product.price}&smartcard=${smartCardValue}`;
  };  

  return (
    <div>
      <form>
        <SwitchBtns
            items={items}
            active={active}
            setActive={setActive}
            defaultImage={defaultImage}
        />
      
        <Card>
                <h1 className='p-3'>SmartCard Number: </h1>
                <input
                    list="options"
                    id="optionsInput"
                    value={smartCardValue}
                    onChange={handleSmartCardChange}
                    placeholder="Enter your Smartcard Number"
                    className="block w-full p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                    <datalist id="options">
                    <option value="u9090982734" />
                    <option value="e9123451234" />
                    <option value="703245q6120" />
                    </datalist>
        </Card>
        <Card className={'pt-3'}>
          <div className='flex'>
            <input
              name='subscriptionInput'
              id="subscriptionInput"
              placeholder="Enter amount"
              value={subscriptionValue}
              onChange={(e) => setSubscriptionValue(e.target.value)}
              className="block mt-3 w-1/2 mx-6 p-2 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-gray-300"
            />
            <button onClick={handleCheckout} className='bg-blue-500 px-2 rounded-3xl text-white font-bold'>Proceed</button>
          </div>

          <SwitchBtns
                items={categories}
                active={activeCategory}
                setActive={setActiveCategory}
                className= "h-auto w-full bg-gray-200 border-none"
                
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

export default Tv
