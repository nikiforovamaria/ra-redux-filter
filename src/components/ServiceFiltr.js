import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtrServiceField } from '../actions/actionCreators.js';

export default function ServiceFiltr(props) {
  const item = useSelector((state) => state.serviceFiltr);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {value} = event.target;
    dispatch(filtrServiceField(value));
  };

  return (
    <div className='filter'>
      <span>Фильтр </span>
      <input name='value' onChange={handleChange} value={item.value} />
    </div>
  );
}