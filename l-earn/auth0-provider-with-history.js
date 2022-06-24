import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth0Provider } from "@auth0/auth0-react"
import { AppState } from 'react-native'

const Auth0ProviderWithHistory = ({ children }) => {
 const navigate = useNavigate()
 const domain = process.env.REACT_APP_AUTH0_DOMAIN;
 const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

 const onRedirectCallback = (AppState) => {
  navigate(AppState?.returnTo|| window.location.pathname)
 }

 return (
  <auth0Provider
  domain = { domain }
  
  clientId = { clientId }
 
   redirectURl={window.location.origin}
   onRedirectCallback={onRedirectCallback}
  >
   {children}
 </auth0Provider>
 )


}

export default Auth0ProviderWithHistory