import mongoose from 'mongoose';
import logger from '../../components/logger';

const connection = mongoose.createConnection('mongodb+srv://aviv:aviv78909@challenge-08lhr.mongodb.net/db');

connection.on('connected',  () => {
    logger.info('Connected to db');
})

connection.on('disconnected',  () => {
    logger.info('Disconnected from db');
})