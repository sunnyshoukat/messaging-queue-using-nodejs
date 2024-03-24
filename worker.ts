import { Job, Worker } from "bullmq";

const sendEmail = () : Promise<any> => new Promise((res, rej) => setTimeout(res, 5 * 1000))

const worker = new Worker("email-queue", async (job: Job) :Promise<void> => {
    console.log(`Email rec Id ${job.id}`);
    console.log(`Email is processing...`);
    console.log(`Send Email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent.");
}, {
    connection : {host: '127.0.0.1', port : 6379}
  });

  