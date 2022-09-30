import { useEffect, useState } from "react";
import { app } from "../../config/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth, TwitterAuthProvider } from "firebase/auth";
import { User } from "firebase/auth";
export const TwitterLogin = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const auth = getAuth(app);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
  }, [auth]);

  const logout = () => {
    console.log("logout");
  };

  const uiConfig = {
    singinFlow: "popup",
    signInSucessUrl: "/",
    signInOptions: [TwitterAuthProvider.PROVIDER_ID],
  };
  return (
    <>
      <h1>Welcome to My Awesome App</h1>
      {loading ? (
        <>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      )}
    </>
  );
};
