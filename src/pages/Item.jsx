import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({cimg,ctitle,allproduct,cprice}) => {
  const {addItem} = useCart();
  const notify = () => toast("Cart Added Successfully");
  return (
    <>
       <div className='cart'>
             <div className='photo'>
                   <img src={cimg} alt="error" width="100%" height="250px"/>
                   <p>{cprice}$</p>
             </div>
             <div className='title'>
                   <h1>{ctitle}</h1>
             </div>
             <div className='price'>
                   <button onClick={()=>(notify(addItem(allproduct)))}>Add to Cart</button>
                   <ToastContainer 
                      position="top-center"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                   />
             </div>
       </div>
    </>
  )
}

export default Item