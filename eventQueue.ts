import { QueueEvents } from 'bullmq';

const queueEvents = new QueueEvents('email-queue');

queueEvents.on('completed', ({ jobId }) => {
  console.log(`done email-queue id : ${jobId}`);
});

queueEvents.on(
  'failed',
  ({ jobId, failedReason }: { jobId: string; failedReason: string }) => {
    console.error(`error email-queue id : ${jobId} - Failure Reason ${failedReason}`);
  },
);