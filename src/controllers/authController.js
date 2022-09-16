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
                cep: user.cep,
                rdn: user.rdn,
                phone: user.phone
        })

        return res.sendStatus(201)
    }catch(err){
        return res.status(500).send('error no servidor')
    }
};

export async function signIn (req , res){
    try{
        return res.send('ok')
    }catch(err){
        return res.status(500).send('error no servidor')
    }
};