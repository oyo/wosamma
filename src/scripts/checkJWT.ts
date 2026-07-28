import * as jose from 'jose'

const JWKS_URL = 'https://www.googleapis.com/oauth2/v3/certs'
const issuer = 'https://accounts.google.com'
const audience = '767980757983-q8stfp386su47n708upqme7nrvuc4ur7.apps.googleusercontent.com'

const args = process.argv.slice(2)

if (args.length === 0) {
  console.log('usage:\n  vp run check-jwt <token>')
  process.exit(1)
}

const jwt = args[0]

try {
  const JWKS = jose.createRemoteJWKSet(new URL(JWKS_URL))
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, JWKS, {
    issuer,
    audience,
  })
  console.log(protectedHeader)
  console.log(payload)
} catch {
  console.log('token invalid')
}
