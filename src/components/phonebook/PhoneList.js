import styles from './phonebook.module.css';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts';

const AddPhoneList = () => {
  const { data } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(
    state => state.contactReducer.contacts.contacts.filter,
  );
  const getVisibleContact = () => {
    const normFilter = filter.toLowerCase();
    return data.filter(con => con.name.toLowerCase().includes(normFilter));
  };

  return (
    <>
      <Filter />
      <ul className={styles.PhoneList}>
        {data &&
          getVisibleContact().map(({ id, name, phone }) => (
            <li className={styles.PhoneList_list} key={id}>
              <span className={styles.PhoneList_item}>{name}:</span>
              <span className={styles.PhoneList_item}>{phone}</span>
              <button
                className={styles.PhoneList_button}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default AddPhoneList;
