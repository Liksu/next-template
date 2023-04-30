import { MongoClient } from 'mongodb'
import getConfig from 'next/config'

const { mongoURI, mongoDb } = getConfig().serverRuntimeConfig

const dbClientPromise = new MongoClient(mongoURI, {
    keepAlive: true,
}).connect()

const dbClient = await dbClientPromise

const db = dbClient.db(mongoDb)

export { db, dbClient, dbClientPromise }
