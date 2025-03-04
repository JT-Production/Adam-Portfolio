import { useEffect } from 'react';



const Loader = () => {

    
useEffect(() => {
    const loader = document.querySelector('.loader-wrapper') as HTMLElement;
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
}, []);
  return (
    <div className="loader-wrapper">
       < div className="loader">
      <div className="box">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 94 94"
            className="svg"
          >
         
          </svg>
        </div>
      </div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
    </div>    
  )
}

export default Loader