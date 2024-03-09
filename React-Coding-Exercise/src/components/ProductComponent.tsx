import React, { useEffect, useState } from "react";

export const Product = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('product.json')
    .then(res => res.json())
    .then((result => {
      setData(result);
      console.log(result);
    }))
  }, []);

  return <>
  <div>
    <h3>Test</h3>
  </div>
  </>
  
}