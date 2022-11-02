import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
export const AuthContext = createContext("UserContext");

export interface User {
  id: string;
  email: string;
  password: string;
}

export type SignIn = (user: User) => void;

export type SignOut = () => void;

export interface UseAuth {
  signIn: SignIn;
  signOut: SignOut;
  user: User | null;
}

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const children = props.children;
  const [user, setUser] = useState<User | null>(null);
  const [acceptLogout, setAcceptLogout] = useState(false);
  useEffect(() => {
    setAcceptLogout(false);
    signout();
  }, [acceptLogout]);

  // method for login
  let signin:SignIn = (newUser: User) => {
    setUser(newUser);
  };

  // method for logout
  let signout:SignOut = () => {
    setUser(null);
  };
  let value = { user: user, signin, signout };
  return (
    // @ts-ignore
    <AuthContext.Provider value={value}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

// the hook to use the validation context
// for
// 1. signin the user in,
// 2. signing the user out or
// 3. getting the uses's immediate login info
export const useAuth = () => {
  return useContext(AuthContext);
};

// wrap components that needs to be protected with this component
export const RequireAuth = (props: { children: React.ReactNode }) => {
  const children = props.children;
  let auth:any = useAuth();
  let location = useLocation();

  // if the user is not logged in, redirect to the login page
  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
