import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'email', placeholder: 'john@doe.com' },
            password: { label: 'Password', type: 'password' },
        },

        async authorize(credentials, req) {
          if (!credentials) return null
          const items = await prisma.Admin.findUnique({
            where: { email: credentials.email },
          })

          if (
            items &&
            (await bcrypt.compare(credentials.password, items.password))
          ) {
            return {
              id: items.id,
              username: items.username,
              email: items.email
            }
          } else {
            throw new Error('Invalid email or password')
          }
        },
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, items }) => {
      if (items) {
        token.id = items.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session.items) {
        session.items.id = token.id
      }
      return session
    }
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }