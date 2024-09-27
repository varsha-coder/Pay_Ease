import db from "@repo/db/client";
import CredentialProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions={
    providers:[
        CredentialProvider({
            name:'Credentials',
            credentials:{
                phone:{label:'phone number', type:'text',placeholder:'123456'},
                password:{label:'password', type:"password"}
            },
            async authorize(credentials:any){

                const hashedPassword= await bcrypt.hash(credentials.password, 10);
                const existingUser= await db.user.findFirst({
                    where:{
                        Number:credentials.phone
                    }
                });

                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if(passwordValidation){
                      return {
                        id:existingUser.id.toString(),
                        name:existingUser.name,
                        email:existingUser.Number
                      }

                    }
                     return null;
                }
                 try{
                     const user= await db.user.create({
                        data:{
                             Number:credentials.phone,
                             password:hashedPassword
                        }
                     });
                   return {
                    id:user.id.toString(),
                    name:user.name,
                    email:user.Number
                   }  
                 }
                 catch(e){
                    console.error(e);
                 }
                  return null
            }
        })
    ],

    secret:process.env.JWT_SECRET||"secret",
    callbacks:{
        async session ({token,session}:any){
            session.user.id=token.sub

            return session
        }
    }

}