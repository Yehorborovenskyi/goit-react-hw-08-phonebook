import { FilterTitle, FilterInput, FilterDiv } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));
  const changeFilter = e => {
    handleFilterChange(e.currentTarget.value);
  };

  return (
    <FilterDiv>
      <FilterTitle style={{ fontFamily: 'Caveat', fontWeight: '600' }}>
        Find contacts by name:
      </FilterTitle>
      <FilterInput type="text" onChange={changeFilter} />
    </FilterDiv>
  );
};

export default Filter;