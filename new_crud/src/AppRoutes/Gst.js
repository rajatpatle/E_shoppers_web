// import axios from "axios";
// //import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// // import { registerUser } from "../Database/DBService";

// function Gst() {
//   // const [data, setData] = useState();
//   const { register, handleSubmit, reset } = useForm();
//   // console.log({ data });

//   // const getRegisterUser = (userObj) => {
//   //   registerUser(userObj);
//   //   reset();
//   // };


//   const onSubmit = (data) => {
//     console.log("submit called");
//     axios.post("url", data).then(() => {});
//   };

//   // useEffect(()=>{
//   //   axios.get(url).then((res)=>{
//   //     setData = res.data()
//   //   })
//   // },[])

//   return (
//     <>
//       <h1 className="text-primary">Add GST </h1>
//       <div className="row col-md-4">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div class="mb-3">
//             <label class="form-label">gst_id</label>
//             <input
//               type="text"
//               class="form-control"
//               placeholder="gst_id"
//               {...register("gst_id")}
//             />
//           </div>

//           <div class="mb-3">
//             <label class="form-label">category</label>
//             <input
//               type="text"
//               class="form-control"
//               placeholder="category "
//               {...register("category")}
//             />
//           </div>
//           <div class="mb-3">
//             <label class="form-label">igst</label>
//             <input
//               type="text"
//               class="form-control"
//               placeholder="igst"
//               {...register("igst")}
//             />
//           </div>
//           <div class="mb-3">
//             <label class="form-label">hsn_code</label>
//             <input
//               type="text"
//               class="form-control"
//               placeholder="hsn_code"
//               {...register("hsn_code")}
//             />
//           </div>
//           <div class="mb-3 text-center">
//             <input
//               type="submit"
//               class="btn btn-outline-success"
//               value="Add GST"
//               onClick={handleSubmit(onSubmit)}
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Gst;