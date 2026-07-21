import { Act, subscribe, trigger } from '../state/action'
import { OidcClient } from 'oidc-client-ts'
import type { SigninResponse } from '../types'
import { authSettings } from './authSettings'

export let authData: undefined | SigninResponse = undefined

export const auth = async (): Promise<SigninResponse | void> =>
  new Promise((resolve) => {
    const client = new OidcClient(authSettings)
    const signin = () => {
      console.log('signin')
      const optionalArgs = {
        state: { bar: 15 },
      }
      client
        .createSigninRequest(optionalArgs)
        .then((req) => {
          console.log('signin request', req)
          location.replace(req.url)
        })
        .catch((err) => {
          console.error(err)
          resolve()
        })
    }

    if (!location.search || new URLSearchParams(location.search).get('state') === undefined)
      resolve()

    client
      .processSigninResponse(location.href)
      .then((response) => {
        console.log(response)
        authData = response as SigninResponse
        trigger({
          code: Act.SIGNIN_RESPONSE,
          value: authData,
        })
        resolve(authData)
      })
      .catch((err) => {
        if (err.toString() === 'Error: No matching state found in storage') signin()
        else {
          console.log(err)
          resolve()
        }
      })

    subscribe([Act.SIGNIN], signin)
  })
