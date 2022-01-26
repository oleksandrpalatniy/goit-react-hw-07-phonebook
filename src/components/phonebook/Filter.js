import { useDispatch } from 'react-redux';
import * as actions from '../../redux/contactActions';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(actions.filterCon(event.currentTarget.value));
  };
  return (
    <label>
      {' '}
      Find contacts by name:
      <input type="text" onChange={changeFilter} />
    </label>
  );
};

export default Filter;
