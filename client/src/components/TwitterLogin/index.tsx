import React, { useEffect, useState } from 'react';
import { auth } from '../../../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, TwitterAuthProvider, User } from 'firebase/auth';

export const TwitterLogin = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
  }, [auth]);

  const logout = () => {
    console.log('logout');
  };

  const uiConfig = {
    singinFlow: 'popup',
    signInSucessUrl: '/',
    signInOptions: [TwitterAuthProvider.PROVIDER_ID],
  };
  return (
    <>
      <h1>Tweetify Dashboard App</h1>
      {!loading ? (
        <>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      )}
    </>
  );
};
