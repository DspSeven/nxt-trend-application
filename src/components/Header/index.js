// Write your JS code here
import './index.css'

const Header = () => {
  console.log('Header page')
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <button type="button">Logout</button>
      </div>
    </div>
  )
}
export default Header
