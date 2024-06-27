import Express, { query } from "express";
import env from "dotenv";
import pg from "pg";
import bodyParser from "body-parser"
import passport from "passport";
import session from "express-session";
import  {Strategy}  from "passport-local";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import {compressBase64, decompressBase64} from "./utility/Base64SizeRed.js";

const app = Express();
const port = 3000;
const saltRounds = 10;
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Nutrify",
    password: "Wannepain2008",
    port: 5432
});

// Use cookie parser
app.use(cookieParser());

// Increase the limit for JSON body parser to 50MB
app.use(bodyParser.json({ limit: '50mb' }));

// Increase the limit for URL-encoded body parser to 50MB
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Allow sending cookies from the client
}));

// Configure session
app.use(session({
    secret: "QWERTY",
    resave: false,
    saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport session serialization and deserialization
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(id, cb) {
    // Fetch user from the database based on id
    // For example:
    cb(null, user)
});

db.connect((err)=>{
    console.log(err);
})

export async function getWeeklyRecipes(id) {
    try {
        const result = await db.query("SELECT monday, tuesday, wednesday, thursday, friday, saturday, sunday FROM weekly_recipes WHERE user_id = $1", [id]);
        if( result.rows.length !== 0 ){
            return result.rows;
        } else{
            return false
        }
    } catch (error) {
        console.log(error);
        return error;
    }
 }

export async function updateWeeklyRecipes(id) {
    const userData = checkUserExist(id)
}

async function checkUserExist(id) {
    try {
        const result = await db.query("SELECT * FROM user_nutri_info WHERE user_id = $1", [id]);
        if (result.rows.length > 0) {
            return result.rows[0];
        } else {
            return {message: 'user not found', status: 404} 
        }
    } catch (error) {
        console.log(error);
    }
}