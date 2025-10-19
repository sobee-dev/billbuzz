import React,{useState,useEffect} from 'react'

function Loader({ isLoading, minTime = 1000 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;

    if (isLoading) {
      setShow(true);
    } else {
      // Wait at least `minTime` before hiding loader
      timer = setTimeout(() => {
        setShow(false);
      }, minTime);
    }

    return () => clearTimeout(timer);
  }, [isLoading, minTime]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600/40 bg-opacity-40 z-70">
      <div className="relative flex items-center justify-center">
    
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        
   
        <div className="absolute w-20 h-20 rounded-full border-4 border-green-300 opacity-70 animate-ping"></div>

       
        <img
          src="/assets/dstv.jpg" 
          alt=" Logo"
          className="absolute w-8 h-8"
        />
      </div>
    </div>
  );
}

export default Loader;