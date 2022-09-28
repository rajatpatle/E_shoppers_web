import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { registerUser } from "../Database/DBService";

function AddInventory1() {
  // const [data, setData] = useState();
  const { register, handleSubmit, reset } = useForm();
  // console.log({ data });

  // const getRegisterUser = (userObj) => {
  //   registerUser(userObj);
  //   reset();
  // };


  const onSubmit = async(data) => {
    console.log("submit called",data);
    return await axios.post("http://127.0.0.1:8000/product/", data).then(() => {});
  };

 
  // useEffect(()=>{
  //   axios.get(url).then((res)=>{
  //     setData = res.data()
  //   })
  // },[])

  return (
    <>

      <h1 className="text-primary">Add Product </h1>
      <div className="row col-md-4">
        <form onSubmit={handleSubmit(onSubmit)} enctype = "multipart/form-data">

          <div class="mb-3">
            <label class="form-label">p_id</label>
            <input
              type="number"
              class="form-control"
              placeholder="product_id"
              {...register("p_id")}
            />
          </div>
          {/* <div class="mb-3">
            <label class="form-label">p_name</label>
            <input
              type="text"
              class="form-control"
              placeholder="product name "
              {...register("p_name")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">category</label>
            <input
              type="text"
              class="form-control"
              placeholder="category "
              {...register("category")}
            />
          </div> */}
          {/* <div class="mb-3">
            <label class="form-label">p_img</label>
            <input
              type="file"
              class="form-control"
              placeholder="p_img"
              {...register("p_img")}
            />
          </div> */}
          {/* <div class="mb-3">
            <label class="form-label">p_price</label>
            <input
              type="number"
              class="form-control"
              placeholder="product price"
              {...register("p_price")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">vendor</label>
            <input
              type="text"
              class="form-control"
              placeholder="vendor"
              {...register("vendor")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">product</label>
            <input
              type="text"
              class="form-control"
              placeholder="product"
              {...register("product")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">product_stock</label>
            <input
              type="number"
              class="form-control"
              placeholder="product_stock"
              {...register("product_stock")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">unit</label>
            <input
              type="text"
              class="form-control"
              placeholder="unit"
              {...register("unit")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">reorder_level</label>
            <input
              type="number"
              class="form-control"
              placeholder="reorder_level"
              {...register("reorder_level")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">discount</label>
            <input
              type="number"
              class="form-control"
              placeholder="discount"
              {...register("discount")}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">gst</label>
            <input
              type="number"
              class="form-control"
              placeholder="gst"
              {...register("gst")}
            /> */}
          {/* </div> */}
          <div class="mb-3 text-center">
            <input
              type="submit"
              class="btn btn-outline-success"
              value="Add Inventory"
             
              onClick={handleSubmit(onSubmit)}
            />
          </div>

        </form>
      </div>

    </>
  );
}

export default AddInventory1;