import { Input } from './Filter.styled';
import { getFilterValue } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilterAction } from '../../redux/filterSlice';

const Filter = () => {
  const { filter } = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };

  return (
    <label>
      <Input
        type="text"
        name="search"
        placeholder="Search..."
        value={filter}
        onChange={filterChange}
      />
    </label>
  );
};
export default Filter;
