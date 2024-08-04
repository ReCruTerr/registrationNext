import { users } from "@/app/users";
import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import email from "next-auth/providers/email";
import GoogleProvider from 'next-auth/providers/google'
interface I_credentials {
    email:string,
    password:string
}

export const AuthCoingig:NextAuthConfig = {
    providers:[
        GoogleProvider({
            clientId:'154503547821-cn6vuq6iggr25pne03s51ra0j95ne5pk.apps.googleusercontent.com',
            clientSecret:'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'
        }),
        CredentialsProvider({
            credentials:{
                email:{label: "email", type: "email", required:true},
                password:{label:'password', type:'password', required:true}
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) return null
                const currentUser = users.find(user => user.email === credentials.email)
                console.log(currentUser);
                if (currentUser && currentUser.password === credentials.password) {
                    const {password, ...userWithoutPas} = currentUser
                    return userWithoutPas as User
                }
                return null
              },
              
        })
    ],
    pages: {
        signIn:'SignIn'
    }
}

export const {handlers,signIn,signOut,auth} = NextAuth(AuthCoingig)