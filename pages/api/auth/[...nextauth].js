import NextAuth from "next-auth"
import SportifyProvider from 'next-auth/providers/spotify'

const scopes = [
    
]

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Spotifyprovider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)