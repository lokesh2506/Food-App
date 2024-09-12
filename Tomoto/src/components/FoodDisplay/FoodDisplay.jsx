import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../StoreContext/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
// import { food_list } from '../../assets/assets' 

const FoodDisplay = ({category}) => {
    const{food_list}=useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-item-list">
            {food_list.map((item,index)=>{
              if(category==="All" || item.category===category){
                return  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
        </div>

    </div>
  )
}

export default FoodDisplay