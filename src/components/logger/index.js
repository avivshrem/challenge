"use strict";

import bunyan from "bunyan";
import bformat from 'bunyan-format';

const format = (str) => bformat(str);

export default bunyan.createLogger({
    name: 'challenge',
    src: true,
    serializers: {
        req: bunyan.stdSerializers.req,
        err: bunyan.stdSerializers.err
    },
    streams: [
        {
            stream: format(),
            level: process.env.LOG_LEVEL
        }
    ]
})