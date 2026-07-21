const oidcConfig = {
  google: {
    // https://accounts.google.com/.well-known/openid-configuration
    authority: 'https://accounts.google.com',
    client_id: 'GOOGLE_CLIENT_ID',
    client_secret: 'GOOGLE_CLIENT_SECRET',
    metadata: {
      issuer: 'https://accounts.google.com',
      authorization_endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      userinfo_endpoint: 'https://openidconnect.googleapis.com/v1/userinfo',
      token_endpoint: 'https://oauth2.googleapis.com/token',
    },
  },
  github: {
    authority: 'https://github.com/login/oauth/authorize',
    client_id: 'GITHUB_CLIENT_ID',
    client_secret: 'GITHUB_CLIENT_SECRET',
    metadata: {
      issuer: 'https://github.com',
      authorization_endpoint: 'https://github.com/login/oauth/authorize',
      userinfo_endpoint: 'https://api.github.com/user',
      end_session_endpoint: 'https://github.com/logout',
      token_endpoint: 'https://github.com/login/oauth/access_token',
    },
  },
}

export const authSettings = {
  ...oidcConfig.google,

  redirect_uri: location.origin + location.pathname,
  post_logout_redirect_uri: location.origin + location.pathname,
  response_type: 'code',
  scope: 'openid email profile',
  response_mode: 'query' as 'query' | 'fragment' | undefined,
  filterProtocolClaims: true,
}
