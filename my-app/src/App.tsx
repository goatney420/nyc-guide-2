import './App.css';
import Weather from './weather';
import { food, FoodItem } from './data/food-data'; 
import { drink, DrinkItem } from './data/drink-data';
import {activity, ActivityItem } from './data/activity-data';

function App() {
  return (
    <div className="landing">

      <div className='header'>
        <h1>squids nyc guide</h1>
        <p>a resouce i can share to with freinds and family so they stop bugging me about what to do and where to go</p>
      </div>
      
      <img className='landing-img' src="images/landing img.JPG"></img> 

      <div className="main-content">
        <div className='grid 1'>
        <h2>food</h2>
        <ul>
          {food.map((item: FoodItem, index: number) => (
            <li key={index}>
              <span>{item.name}</span>
               {item.fav && <span className="fav">top pick</span>}
            </li>
          ))}
        </ul>
        </div>

        <div className='grid 2'>
          <h2>beverages</h2>
          <ul>
            {drink.map((item: DrinkItem, index: number) => (
              <li key={index}>
                <span className='li-name'>{item.name}</span>
                {item.fav && <span className="fav">top pick</span>}
                {item.alc && <span className="alc">alcohol</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className='grid 3'>
          <h2>activities</h2>
        <ul>
          {activity.map((item: ActivityItem, index: number) => (
            <li key={index}>
              <span>{item.name}</span>
               {item.price && <span className="price">free</span>}
            </li>
          ))}
        </ul>
        <Weather />
        </div>
      </div> 
    </div>
  );
}

export default App;
