import { useEffect, useState } from "react";
import axios from "axios";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {

  // const [products, setProducts] = useState([]);
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  // const [in_stock, setInStock] = useState(false);

  // useEffect(() => {

  //   axios
  //     .get("http://127.0.0.1:8000/products")
  //     .then((response) => {
  //       setProducts(response.data);
  //     });

  // }, []);




// const handleSubmit = (e) => {
//   e.preventDefault();
  
//   axios.post("http://127.0.0.1:8000/products", {
//     name: name,
//     price: price,
//     description: description,
//     in_stock: in_stock
//   }).then((response) => {
//     setProducts([...products, response.data]);
//   });

//   }

  return (
//    <div style={{ 
//   width: '100%', 
//   padding: '20px', 
//   boxSizing: 'border-box',
//   fontFamily: 'system-ui, -apple-system, sans-serif',
//   backgroundColor: '#f8f9fa',
//   minHeight: '100vh'
// }}>

//   {/* 1. ADD PRODUCT FORM (TOP - FULL WIDTH) */}
//   <div style={{
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto 30px auto',
//     padding: '24px',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//     boxSizing: 'border-box'
//   }}>
//     <h1 style={{ 
//       marginTop: 0, 
//       marginBottom: '20px', 
//       color: '#212529', 
//       fontSize: '22px',
//       fontWeight: '600'
//     }}>Add New Product</h1>
    
//     <form onSubmit={(e) => { handleSubmit(e) }} style={{ 
//       display: 'grid', 
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
//       gap: '16px',
//       alignItems: 'end'
//     }}>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//         <label style={{ fontSize: '13px', fontWeight: '600', color: '#495057' }}>Product Name</label>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           onChange={(e) => { setName(e.target.value) }} 
//           style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', width: '100%', boxSizing: 'border-box' }}
//         />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//         <label style={{ fontSize: '13px', fontWeight: '600', color: '#495057' }}>Price (₹)</label>
//         <input 
//           type="number" 
//           placeholder="Price" 
//           onChange={(e) => { setPrice(e.target.value) }} 
//           style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', width: '100%', boxSizing: 'border-box' }}
//         />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//         <label style={{ fontSize: '13px', fontWeight: '600', color: '#495057' }}>Description</label>
//         <input 
//           type="text" 
//           placeholder="Description" 
//           onChange={(e) => { setDescription(e.target.value) }} 
//           style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '14px', width: '100%', boxSizing: 'border-box' }}
//         />
//       </div>

//       <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '40px' }}>
//         <input 
//           type="checkbox" 
//           id="in_stock" 
//           onChange={(e) => { setInStock(e.target.checked) }} 
//           style={{ width: '18px', height: '18px', cursor: 'pointer' }}
//         />
//         <label htmlFor="in_stock" style={{ fontSize: '14px', fontWeight: '500', color: '#212529', cursor: 'pointer' }}>
//           In Stock
//         </label>
//       </div>

//       <button 
//         type="submit" 
//         style={{ 
//           padding: '11px', 
//           backgroundColor: '#0d6efd', 
//           color: '#fff', 
//           border: 'none', 
//           borderRadius: '6px', 
//           fontSize: '14px', 
//           fontWeight: '600', 
//           cursor: 'pointer',
//           height: '40px'
//         }}
//       >
//         Add Product
//       </button>
//     </form>
//   </div>

//   {/* 2. PRODUCTS LIST TABLE (BOTTOM - FULL WIDTH W/ SCROLLER) */}
//   <div style={{ 
//     width: '100%',
//     maxWidth: '1200px', 
//     margin: '0 auto',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//     padding: '24px',
//     boxSizing: 'border-box'
//   }}>
//     <h1 style={{ color: '#212529', fontSize: '22px', fontWeight: '600', marginTop: 0, marginBottom: '20px' }}>Products List</h1>
    
//     {/* Scrollable Container Wrapper */}
//     <div style={{ 
//       width: '100%', 
//       maxHeight: '400px',     /* Controls the vertical height before scrolling kicks in */
//       overflowY: 'auto',       /* Enables vertical scrolling */
//       overflowX: 'auto',       /* Enables horizontal scrolling if screen gets too narrow */
//       border: '1px solid #dee2e6',
//       borderRadius: '6px'
//     }}>
//       <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', textAlign: 'left' }}>
//         <thead style={{ 
//           position: 'sticky',   /* Keeps the header fixed at the top while scrolling */
//           top: 0, 
//           backgroundColor: '#f8f9fa', 
//           zIndex: 1 
//         }}>
//           <tr style={{ borderBottom: '2px solid #dee2e6' }}>
//             <th style={{ padding: '14px 16px', fontWeight: '600', color: '#495057', fontSize: '14px' }}>Product Name</th>
//             <th style={{ padding: '14px 16px', fontWeight: '600', color: '#495057', fontSize: '14px' }}>Price</th>
//             <th style={{ padding: '14px 16px', fontWeight: '600', color: '#495057', fontSize: '14px' }}>Description</th>
//             <th style={{ padding: '14px 16px', fontWeight: '600', color: '#495057', fontSize: '14px', width: '120px', textAlign: 'center' }}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr 
//               key={product.id} 
//               style={{ 
//                 borderBottom: '1px solid #efefef',
//                 backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa'
//               }}
//             >
//               <td style={{ padding: '14px 16px', color: '#212529', fontSize: '14px', fontWeight: '500' }}>{product.name}</td>
//               <td style={{ padding: '14px 16px', color: '#212529', fontSize: '14px', fontWeight: '600' }}>₹{product.price}</td>
//               <td style={{ padding: '14px 16px', color: '#6c757d', fontSize: '14px' }}>{product.description || '-'}</td>
//               <td style={{ padding: '14px 16px', textAlign: 'center' }}>
//                 <span style={{
//                   padding: '4px 10px',
//                   borderRadius: '12px',
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   display: 'inline-block',
//                   backgroundColor: product.in_stock ? '#d1e7dd' : '#f8d7da',
//                   color: product.in_stock ? '#0f5132' : '#842029'
//                 }}>
//                   {product.in_stock ? 'In Stock' : 'Out of Stock'}
//                 </span>
//               </td>
//             </tr>
//           ))}
//           {products.length === 0 && (
//             <tr>
//               <td colSpan="4" style={{ padding: '40px', textAlign: 'center', color: '#6c757d', fontSize: '14px' }}>
//                 No products added yet.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>
<>
{/* <Register /> */}
<Login />
</>
  );
}

export default App;