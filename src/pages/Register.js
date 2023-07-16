import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { register, clearAuthError } from 'redux/auth/operations';
import { useEffect } from 'react';

export default function Register() {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthError);

  useEffect(() => {
    if (status === 'Request failed with status code 400') {
      toast.success(
        'You or someone else is already registered with such data!'
      );
      dispatch(clearAuthError());
    }
  }, [status, dispatch]);

  const onRegister = data => {
    dispatch(register(data));
  };

  return (
    <div>
      <title>Registration</title>

      <RegisterForm onData={onRegister} />
    </div>
  );
}
