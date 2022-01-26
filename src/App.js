import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/phonebook/Form';
import AddPhoneList from './components/phonebook/PhoneList';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Form />
        <AddPhoneList />
      </Provider>
    </>
  );
}
