import { LoginForm } from 'components/LoginForm/LoginForm';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logIn, clearAuthError } from 'redux/auth/operations';
import { useEffect } from 'react';

export default function Login() {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthError);

  useEffect(() => {
    if (status === 'Request failed with status code 400') {
      toast.error(
        'You have entered an incorrect email address or password, or you have not yet registered!'
      );
      dispatch(clearAuthError());
    }
  }, [status, dispatch]);

  const onRegister = data => {
    dispatch(logIn(data));
  };

  return (
    <div>
      <title>Login</title>

      <LoginForm onData={onRegister} />
    </div>
  );
}
