# Spotify Clone with NextJS using Tailwind CSS, NextJS Middleware, NextAuth and Spotify API

This is a Spotify clone built with NextJS using Tailwind CSS for styling, NextJS Middleware for server-side authentication, NextAuth for client-side authentication, and the Spotify API for data retrieval.

![image](https://github.com/CodeKaito/NextJS-Spotify/assets/57111980/5565d858-6932-478e-ba08-9aefbe9ded29)


[Live Demo](https://spotify-clone-nextjs.vercel.app/)

## Getting Started

Follow the below instructions to get the project up and running on your local machine for development and testing purposes..

### Prerequisites

- Node.js (version 10 or higher)
- Spotify Developer Account (to obtain `CLIENT_ID` and `CLIENT_SECRET`)

### Installing

1. Clone the repository:

```
git clone https://github.com/<your-github-username>/spotify-clone-nextjs.git
```

2. Change to the project directory:

```
cd spotify-clone-nextjs
```

3. Install dependencies:

```
npm install
```

4. Create an `.env.local` file in the root of the project with the following contents:

```
CLIENT_ID=<your-client-id>
CLIENT_SECRET=<your-client-secret>
```

5. Launch the development build

```
npm run dev
```

## Features

This Spotify clone includes the following features:

- Server-side authentication using NextJS Middleware and OAuth2
- Client-side authentication using NextAuth to manage tokens and user information
- Search for songs, albums, and artists
- Display album and artist details, including track listings and related artists
- Play preview audio of tracks
- Responsive design using Tailwind CSS

## Built With

- [NextJS](https://nextjs.org/) - React framework for server-side rendering and static websites
- [Tailwind CSS](https://tailwindcss.com/) - CSS utility framework for styling
- [NextJS Middleware](https://github.com/hoangvvo/next-connect) - Middleware for NextJS serverless functions
- [NextAuth](https://next-auth.js.org/) - Authentication library for NextJS
- [Spotify API](https://developer.spotify.com/documentation/web-api/) - API for retrieving Spotify data

## Acknowledgments

- [Spotify Clone with React JS](https://github.com/tech-with-tim/spotify-clone) - Original project idea by Tech With Tim
- [Blog post on NextAuth.js and Spotify](https://gagan.vercel.app/blog/next-auth-with-spotify-authentication/) - Article on using NextAuth.js with Spotify authentication

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
