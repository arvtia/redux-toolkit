import axios from 'axios';
import { setCart } from './cartSlice';
import { getUserId } from './user';

export const loadCart = () => async dispatch => {
  const userId = getUserId();
  try {
    const res = await axios.get(`http://localhost:5000/cart/${userId}`);
    dispatch(setCart(res.data));
  } catch (err) {
    console.warn('No cart found for this user yet.');
  }
};