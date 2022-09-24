import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const productsGenerator = (quantity) => {
  const items = [];
  for (let i = 1; i < quantity; i++) {
    items.push({
      id: i,
      P_name: `Item name ${i}`,
      p_image: `image ${i}`,
      category: `category ${i}`,
      p_price: `prize ${i}`,
      vendor: `vendor ${i}`,
      p_stock: `stock ${i}`,
      unit: `unit ${i}`,
      re_order: `reorder ${i}`,
      discount: `discount ${i}`,
      gst: `gst ${i}`,
    });
  }
  return items;
};

const products = productsGenerator(100);

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },

  {
    dataField: "P_name",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "p_image",
    text: "Product Image",
    sort: true,
  },
  {
    dataField: "category",
    text: "Product Category",
    sort: true,
  },
  {
    dataField: "p_price",
    text: "Product Price",
  },
  {
    dataField: "vendor",
    text: "Vendor",
    sort: true,
  },

  {
    dataField: "p_stock",
    text: "Product Stock",
    sort: true,
  },
  {
    dataField: "unit",
    text: "Product Unit",
    sort: true,
  },
  {
    dataField: "re_order",
    text: "Re_order",
    sort: true,
  },
  {
    dataField: "gst",
    text: "GST",
    sort: true,
  },
];
export default function Inventory() {
  return (
    <div className="App">
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </div>
  );
}
