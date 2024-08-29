import { getSession, signIn, signOut } from 'next-auth/client';

export const authOptions = {
  providers: [
    // Example: Google OAuth
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session(session, user) {
      // Add user id to session
      session.user.id = user.id;
      return session;
    },
  },
};

export const login = async (email, password) => {
  await signIn('credentials', { email, password });
};

export const logout = async () => {
  await signOut();
};