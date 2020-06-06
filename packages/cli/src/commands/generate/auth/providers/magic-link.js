export const config = {
  imports: [`import { Magic } from 'magic-sdk'`],
  init: 'const m = new Magic(process.env.MAGICLINK_PUBLIC)',
  authProvider: {
    client: 'm',
    type: 'magic.link',
  },
}

export const packages = ['magic-sdk']

export const notes = [
  'To get your application keys, go to https://dashboard.magic.link/login ',
  'Then navigate to the API keys add them to your .env config options.',
  'See: https://redwoodjs.com/docs/authentication#for-magiclink',
]
