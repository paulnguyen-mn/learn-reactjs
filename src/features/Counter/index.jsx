import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    // const action = decrease(); // action creator
    dispatch(decrease());
  };

  return (
    <div className={styles.count}>
      Counter: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
