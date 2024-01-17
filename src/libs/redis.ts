import Redis from 'ioredis';
import crypto from 'crypto';

const redis =
  process.env.REDIS_PORT && process.env.REDIS_URL
    ? new Redis({
        port: parseInt(process.env.REDIS_PORT || '', 10),
        host: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
        tls: process.env.REDIS_SSL_ENABLED && process.env.REDIS_SSL_ENABLED != 'false' ? {} : undefined
      })
    : undefined;

export default redis;
