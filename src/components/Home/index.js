// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('Home Page')
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>Clothes That Get You Noticed</h1>
          <p>
            Fashion is part of the daily air and it does not quit help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in revolution.Your fashion makes you been seen and heard
            that way are you so. so, celebrate the seasons new and exciting
            fashion in your own way
          </p>
          <button type="button">Shop Now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  )
}
export default Home
