import { useDispatch } from 'react-redux'
import {addToCart } from '../features/cartSlice'
const Home = () => {
  const dispatch = useDispatch();
  const products = [
    {id: 1, name: "Mobile 1"},
    {id: 2, name: "Mobile 2"},
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}
            <button onClick={() => handleAddToCart(product)} >Add to cart</button>
            </li>
          ))}
        </ul>
      </h2>
    </div>
  )
}

export default Home