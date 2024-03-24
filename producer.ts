import { Queue } from "bullmq";
import { uniqueNamesGenerator, names, Config } from "unique-names-generator";

const config: Config = {
  dictionaries: [names],
};

const notificationQueue: Queue = new Queue("email-queue", {
  connection : {host: '127.0.0.1', port : 6379}
});

type Email = {
  email: string;
  subject: string;
  body: string;
};

async function addQueue(): Promise<void> {
  const characterName: string = uniqueNamesGenerator(config); // Assuming 'config' is defined somewhere
  const emailTemplate: Email = {
    email: `${characterName}@gmail.com`,
    subject: `Hello ${characterName}`,
    body: `Hello ${characterName}, How are you?`,
  };

  const emailAddedToQueue = await notificationQueue.add(
    `Send email to ${characterName}`,
    emailTemplate
  ); // Assuming 'notificationQueue' is defined somewhere
  console.log("Email Added to Queue with id : " + emailAddedToQueue.id);
}

addQueue();
