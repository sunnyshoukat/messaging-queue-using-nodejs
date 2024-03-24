# Messaging Queue Using Node.js

This project demonstrates how to implement a messaging queue using Node.js with TypeScript and BullMQ.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- TypeScript (installed globally)
- Docker (for running Redis server)

## Getting Started

### Step 1: Set Up Redis Server

Start by setting up a Redis server. In this project, we use BullMQ, which is built on Redis. If you're using Docker, you can pull the Redis image and run it with the following command:

```bash
docker run -itd -p 6379:6379 redis
```

### Step 2: Install Dependencies

After setting up Redis, navigate to the project directory and install the dependencies:

```bash
npm install
```

### Step 3: Compile TypeScript

To compile TypeScript and test the project, you need to install the `node-ts` package globally:

```bash
npm install -g node-ts
```

### Step 4: Run Producer and Worker

To produce a message to the queue, run the following command:

```bash
node-ts producer.ts
```

To process messages from the queue, run the following command:

```bash
node-ts worker.ts
```

---

This README provides clear step-by-step instructions for setting up and running the project. It ensures that users can easily understand how to get started with your messaging queue implementation using Node.js.

