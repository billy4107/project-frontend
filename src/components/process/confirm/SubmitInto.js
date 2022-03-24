// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/esm/Button';
// import { useParams } from 'react-router-dom';
// import "./SubmitInto.css"

// const SubmitInto = (props) => {
//     const { onBgClick } = props;

//     const { proid } = useParams();

//     const [mushroomname, setMushroomname] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [netweight, setNetweight] = useState('');
//     const [code, setCode] = useState('');

//     const editProcessed = async (event) => {
//         event.preventDefault();
//         // window.location.reload()
//         await axios.post(`http://localhost:3001/warehouse`, {
//             proid: proid,
//             mushroomname: mushroomname,
//             quantity: quantity,
//             netweight: netweight,
//             code: code
//         });
//         onSetPageAdd(proid);
//     }

//     const getProcessedById = async (proid) => {
//         const response = await axios.get(`http://localhost:3001/processed/${proid}`);
//         // console.log(response);
//         setMushroomname(response.data.mushroomname);
//         setQuantity(response.data.quantity);
//         setNetweight(response.data.netweight);

//     };

//     useEffect(() => {
//         if (proid) {
//             getProcessedById(proid);
//         }
//     }, [proid])

//     const onSetPageAdd = async (proid) => {
//         await axios.patch(`http://localhost:3001/processed/sid5/${proid}`);
//         await window.location.reload();
//     };

//     useEffect(() => {
//         makeid(10);
//     }, [])

//     function makeid(length) {
//         let result = '';
//         let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let charactersLength = characters.length;
//         for (let i = 0; i < length; i++) {
//             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         return setCode(result);
//     }

//     return (
//         <div className="view-table">
//             <div className="view-table-bg" onClick={onBgClick} />
//             <div className="view-table-content">
//                 <div className="view-header">
//                     <h3>Confirm</h3>
//                 </div>
//                 <form className="view-from form-input row" onSubmit={editProcessed} >

//                     <div className="col columnview">
//                         <label className="form-label col-md-12">Code</label>
//                         <input type="text" className="form-control" value={code} disabled />
//                     </div>

//                     <div className="col columnview">
//                         <label className="form-label col-md-12">Mushroom Name</label>
//                         <input type="text" className="form-control" value={mushroomname} disabled />
//                     </div>

//                     <div className="col columnview">
//                         <label className="form-label col-md-12">Quantity</label>
//                         <input type="text" className="form-control" value={quantity} disabled />
//                     </div>

//                     <div className="col columnview">
//                         <label className="form-label col-md-12">Net Weight</label>
//                         <input type="text" className="form-control" value={netweight} disabled />
//                     </div>

//                     <Button className="buttonto" variant="primary" type="submit" >
//                         Save
//                     </Button>
//                     <Button className="buttonto" variant="danger" onClick={onBgClick}>
//                         Close
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SubmitInto;
