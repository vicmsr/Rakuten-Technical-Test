import React from 'react';

interface DataProduct {
  brand: string,
  href: string,
  title: string,
  newPrice: string,
  usedPrice: string,
  image: string
}

export const Product: React.FC = () => {

  const data: DataProduct[] = [
    { 
      brand: "Apple",
      href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
      title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
      newPrice: "754 €",
      usedPrice: "720,99 €",
      image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
    },
  ];

  const dataMissing = data.every(product => (
    product.brand && product.href && product.title && product.newPrice && product.usedPrice && product.image
  ));

  if(!dataMissing) {
    return <>
      <h3 className='error_data'>We are unable to display the product due to missing data... </h3>
    </>
  }

  console.log(data);

  return (
    <>
      <div className='product_space'>
        <div className='product_container'>
        {data.map((product) => (
          <div key={product.image} className='product_info'>
            <a href={product.href}><img src={product.image} /></a>
            <div className='product_details'>
              <p className='product_brand'>{product.brand}</p>
              <p className='product_title'>{product.title}</p>
              <p className='product_newprice'>{product.newPrice}<span>Neuf</span></p>
              <p className='product_usedprice'>Occasion dès <span>{product.usedPrice}</span></p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};