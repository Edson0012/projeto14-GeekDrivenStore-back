import {db} from "../database/db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid} from "uuid";

export async function signUp (req , res){
    try{
        const user  = req.body;
        const confirmUser = await db.collection('users').findOne({email: user.email});
        if (confirmUser){
           return res.sendStatus(409) 
        }

        const passwordHash = bcrypt.hashSync(user.password, 10)

        await db.collection('users').insertOne({
                name: user.name,
                email: user.email,
                password: passwordHash,
        })

        return res.sendStatus(201)
    }catch(err){
        return res.status(500).send('error no servidor')
    }
};

export async function signIn (req , res){
    try{
        const { email, password } = req.body;
        const user = await db.collection("users").findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = uuid();
          const email = user.email;
          const name = user.name;
          const cep = user.cep;
          const rdn = user.rdn;
          const phone = user.phone;

          await db.collection("sessions").insertOne({
            email,
            token,
          });
  
         return res.status(200).send({email, token, name, cep, rdn, phone });
        } else {
          return res.status(401).send("Email ou senha incorretos!");
        }
    }catch(err){
        return res.status(500).send('error no servidor')
    }
};