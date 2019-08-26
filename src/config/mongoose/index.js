import mongoose from 'mongoose';
import logger from '../../components/logger';
import { seed as mongooseSeed } from 'mongoose-plugin-seed';
import '../../api/plan/plan.model';

const configure = () => {
    return mongoose.connect(process.env.DB_URI).then(() => {
        mongoose.connection.once('open', () => {
            logger.info('Connected to MongoDB');
        });

        mongoose.connection.on('error', err => {
            logger.info('Error while connecting');
        });
    });
}

export const seed = () => {
    return configure().then(() => {
        return mongooseSeed().then(() => {
            logger.info('Seed Successful')
        }).catch(err => {
            console.log(err);
        });
    });
};