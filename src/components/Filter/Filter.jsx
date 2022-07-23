import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/contacts-action';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  console.log(filter);
  return (
    <label>
      Find contact by name
      <input
        style={{
          display: 'block',
          marginTop: '5px',
        }}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={evt => dispatch(actions.filterContact(evt.target.value))}
      />
    </label>
  );
};
export default Filter;
