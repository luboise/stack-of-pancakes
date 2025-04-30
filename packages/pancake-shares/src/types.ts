export interface User {
  username: string;
  password: string;
}

export function isUser(item: any): item is User {
  return (
    typeof item === "object" &&
    item !== null &&
    typeof item.username === "string" &&
    typeof item.password === "string"
  );
}
