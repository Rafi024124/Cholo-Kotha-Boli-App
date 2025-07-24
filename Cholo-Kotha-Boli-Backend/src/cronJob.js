import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import { YourModel } from './models/YourModel.js';

dotenv.config();
await connectDB();

console.log("Running scheduled task...");

// Example task: delete old messages
await YourModel.deleteMany({
  createdAt: { $lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } // older than 7 days
});

console.log("Task completed.");
process.exit(0); // end the process
