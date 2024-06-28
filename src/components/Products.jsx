import { normalItem } from '../data/data'
import './List.css'

const Products = () => {
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR'
  }).format(value);

  // const saleValue = (oldPrice, newPrice) => {
  //   return Math.round(((oldPrice - newPrice) / newPrice) * 100)
  // }

  const firstHalfList = normalItem.filter(item => item.firstHalf === true)
  const normalPriceList = firstHalfList.map(item => (
    <div key={item.id} className="list-item pb-3 text-center">
        <img src={item.img} alt={item.name} />
        <div className="span">
            <span className="product-brand">{item.brand}</span>
            <span className="lead product-name">{item.name}</span>
            <span className="lead">{numberFormat(item.price)}</span>
        </div>
    </div>
  ))  

  // const saleList = saleItem.map(item => (
  //   <div key={item.id} className="list-item pb-3 text-center">
  //       <div className="sale-price">
  //         <span>{saleValue(item.oldPrice, item.newPrice)}%</span>
  //         <span>OFF</span>
  //       </div>
  //       <img src={item.img} alt={item.name} />
  //       <div className="span">
  //           <span className="product-brand">{item.brand}</span>
  //           <span className="lead product-name">{item.name}</span>
  //           <span className="lead current-price">{numberFormat(item.newPrice)}</span>
  //           <span className="old-price">{numberFormat(item.oldPrice)}</span>
  //       </div>
  //   </div>
  // ))  

  return (
    <div className="list container-sm justify-content-sm-center">
      <h3 className="fw-bold text-center">Products</h3>
      <div className="list-grid d-flex flex-wrap justify-content-center">
        {normalPriceList}
        {/* {saleList} */}
      </div>
      <div className="list-grid flex-wrap text-center">
        <a href="/" className="global-btn btn btn-lg btn-secondary m-3">See All Products</a>
      </div>
    </div>
  )
}

export default Products
