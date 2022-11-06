import React from 'react'
import gif from '../data/img/empty.gif'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    cartTotal,
    removeItem,
  } = useCart();

  const notify = () => toast("Cart Deleted Successfully");

  if(isEmpty){
    return(
     <div className='empty'>
         <h1>Your Shopping Cart is Empty...</h1>
         <img src={gif} alt="error" width="30%"/>
     </div>
    )
   }

  return (
    <>
       <div className='tableCart'>
             <div className='main-box'>
                    <table>
                         <tr>
                            <th>№</th>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                         </tr>

                         {items.map((fd,i)=>(
                             <tr>
                                 <td>{i+1}</td>
                                 <td><img src={fd.img} alt="error" width="100px" height="" /></td>
                                 <td>{fd.title}</td>
                                 <td>{fd.price*fd.quantity}$</td>
                                 <td className='quantity'><button onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-</button><span>{fd.quantity}</span><button onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+</button></td>
                                 <td><button className='btn-delete' onClick={()=>{notify(removeItem(fd.id))}}>Delete</button></td>
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
                             </tr>
                         ))}
                    </table>
                  <h1>Total Price:{cartTotal}$</h1>
             </div>
       </div>
    </>
  )
}

export default Cart