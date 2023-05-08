import NextAuth from "next-auth"
import SportifyProvider from 'next-auth/providers/spotify'

const scopes = [
    "user-read-email"-
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-currently-playing",
    "user-modify-playback-state",
].join(",")

const params = {
    scope: scopes,
}

const query = new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Spotifyprovider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/Login",
  },
  callbacks: {
    
  }
}
export default NextAuth(authOptions)