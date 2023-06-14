import { MongoClient } from 'mongodb'
import getConfig from 'next/config'

const { mongoURI, mongoDB } = getConfig().serverRuntimeConfig

const dbClientPromise = new MongoClient(mongoURI).connect()

const dbClient = await dbClientPromise

const db = dbClient.db(mongoDB)

export { db, dbClient, dbClientPromise }
