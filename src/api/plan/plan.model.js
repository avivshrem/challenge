import mongoose from 'mongoose';
import { addSeed } from 'mongoose-plugin-seed';

let PlanSchema = new mongoose.Schema({
    name: String,
    orderPercent: Number,
    signPercent: Number,
    places: Number
});

let Plan = mongoose.model('Plan', PlanSchema);

addSeed(Plan, {
    seed: () => {
        return [
            {
                name: 'כלי דם',
                orderPercent: 30,
                signPercent: 60,
                places: 100
            },
            {
                name: 'ברכיים',
                orderPercent: 40,
                signPercent: 50,
                places: 80
            },
            {
                name: 'מוח',
                orderPercent: 50,
                signPercent: 40,
                places: 90
            },
            {
                name: 'פלסטיקה',
                orderPercent: 60,
                signPercent: 30,
                places: 70
            }
        ]
    }
});

export default Plan;