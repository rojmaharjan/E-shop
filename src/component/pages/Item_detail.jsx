import React from 'react'
import { useParams } from 'react-router-dom'
import Items from '../../data/Items'

function Item_detail() {
  let {item_id} =useParams()

  let find_item=Items.find((fi)=>item_id==fi.id)
  console.log(find_item)
return (
  <>
  <div className="container">
      <h1>Item Details Here</h1>
      <div className="container">
          <div className="row">
          <div className="col-3">
          <img className='card-img-top' src={find_item.image} alt="" />
          </div>
          <div className="col">
              <h2>Title:{find_item.item_name} </h2>
              <h2>Description: {find_item.description} </h2>
              <h2>Catagory: {find_item.catagory} </h2>
              <h2>Price: {find_item.price} </h2>
          </div>
              
          </div>
          
      </div>
  </div>
    
  </>
)
}

export default Item_detail