import mongoose from 'mongoose';
import { addSeed, seed as mongooseSeed } from 'mongoose-plugin-seed';

let PlanSchema = new mongoose.Schema({
    name: String,
    ordersPercent: Number,
    signPercent: Number,
    places: Number
});

let Plan = mongoose.model('Plan', PlanSchema);

addSeed(Plan, {
    seed: function () {
        return [
            {
                name: 'כלי דם',
                ordersPercent: 30,
                signPercent: 50,
                places: 100
            },
            {
                name: 'ברכיים',
                ordersPercent: 30,
                signPercent: 50,
                places: 100
            },
            {
                name: 'מוח',
                ordersPercent: 30,
                signPercent: 50,
                places: 100
            },
            {
                name: 'פלסטיקה',
                ordersPercent: 30,
                signPercent: 50,
                places: 100
            }
        ]
    }
});

mongooseSeed().then(() => {
    logger.info('Seed Successful')
}).catch(err => {
    console.log(err);
});

export default Plan;