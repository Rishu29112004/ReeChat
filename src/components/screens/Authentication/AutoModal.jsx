import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import PopModal from '../../custom/PopModal';

const AuthModal = ({ onCancel }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <PopModal
      heading={isLogin ? "Login Section" : "Sign-Up Section"}
      onCancel={onCancel}
      Component={
        isLogin ? (
          <Login onSwitch={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitch={() => setIsLogin(true)} />
        )
      }
    />
  );
};

export default AuthModal;
