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


  let signin:SignIn = (newUser: User) => {
    setUser(newUser);
  };

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

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = (props: { children: React.ReactNode }) => {
  const children = props.children;
  let auth:any = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
