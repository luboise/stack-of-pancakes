import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { getUser } from "./user.controller";

import express from "express";
import { Router } from "express";

import serverless from "serverless-http";
import { generateToken } from "./auth";

const app = express();

const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

app.use(express.json());

const router = Router();

app.use("/api/v1", router);

// router.post("/users", async (req, res) => {
//   const { userId, name } = req.body;
//   if (typeof userId !== "string") {
//     res.status(400).json({ error: '"userId" must be a string' });
//   } else if (typeof name !== "string") {
//     res.status(400).json({ error: '"name" must be a string' });
//   }
//
//   const params = {
//     TableName: USERS_TABLE,
//     Item: { userId, name },
//   };
//
//   try {
//     const command = new PutCommand(params);
//     await docClient.send(command);
//     res.json({ userId, name });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Could not create user" });
//   }
// });

router.post("/login", async (req, res) => {
  const body = JSON.parse(req.body);
  const username: string | undefined = body.username;
  const password: string | undefined = body.password;

  if (username === undefined || password === undefined) {
    res.status(400).json({ error: "Invalid login format." });
    return;
  }

  const user = await getUser(docClient, username);

  if (user === null) {
    res.status(401).json({ error: "No user was found by that username." });
    return;
  }

  if (password !== user.password) {
    res.status(401).json({ error: "Invalid password." });
    return;
  }

  const token = generateToken({ username });
  res.json({ token });
});

// app.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

exports.handler = serverless(app);
