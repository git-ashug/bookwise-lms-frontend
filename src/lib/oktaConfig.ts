export const oktaConfig = {
  clientId: "0oak0xh39o0miM9Wu5d7",
  issuer: "https://dev-52782530.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
