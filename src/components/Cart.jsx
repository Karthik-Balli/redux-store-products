import { useSelector } from 'react-redux'

const Cart = () => {
  const items = useSelector(state => state.cart.items)
  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart