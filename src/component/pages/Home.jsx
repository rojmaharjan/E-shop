import React from 'react'
import Catagory from '../../data/Catagory';
import Items from '../../data/Items';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>    
    <section>
    <div className="container">
                    <h3 className='text-center fs-1 text-secondary bg-body-tertiary'> Our Product</h3>
                    <div className="row">
                        <div className="col-2">
                            <div className='categories'>
                                <div className='bg-dark text-white fs-3 text-center rounded'>CATEGORIES</div>
                                {Catagory.map((cat)=>
                                <div className='py-1 px-2'><ul><li><a href="#">{cat}</a></li></ul></div>


                                    )

                                }

                            </div>
                        </div>
                        
                        {Items.map((item)=>                        

                        <Link to={`/item_detail/${item.id}`} className="col-2 d-flex ">
                            <div className="card" style={{ width: '18rem' }}>
                            
                                <div key={item.id}>
                                    <img src={item.image} className="card-img-top" alt={item.item_name} />
                                    <div className="card-body">
                                        <p>Name: {item.item_name}</p>
                                        <p>Des: {item.description}</p>
                                        <p>Price: $ {item.price}</p>
                                    </div>

                                </div>
                                    
                            </div>
                        </Link>
                        
                            )
                            

                        }
                        


                    </div>
                    
                </div>


</section>
      
    </>
  )
}

export default Home
