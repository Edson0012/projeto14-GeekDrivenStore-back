import {db} from "../database/db.js";
import bcrypt from 'bcrypt';
import { v4 as uuid} from "uuid";

export async function signUp (req , res){
    try{
        return res.send('ok')
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