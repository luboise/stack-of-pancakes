import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

import { USERS_TABLE } from "./globals";
import { User, isUser } from "@monorepo/pancake-shares";

export const getUser = async (
  docClient: DynamoDBDocumentClient,
  username: string,
): Promise<User | null> => {
  const params = {
    TableName: USERS_TABLE,
    Key: { username },
  };

  try {
    const command = new GetCommand(params);
    const { Item } = await docClient.send(command);

    if (Item) {
      return isUser(Item)
        ? { username: Item.username, password: Item.password }
        : null;
    } else {
      console.error(`Could not find user with username ${username}`);
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
