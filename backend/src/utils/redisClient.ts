import { createClient } from 'redis';

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD
});

redisClient.on('error', err => console.log('Redis Client Error', err));

async function connectRedis() {
  await redisClient.connect();
}

connectRedis();

export default redisClient;