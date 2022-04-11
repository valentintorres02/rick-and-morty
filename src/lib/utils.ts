import { RibbonProps } from "antd/lib/badge/Ribbon";

/**
 * Get an environment variable by name. This function will throw
 * if the variable is not present. It will always return a string otherwise.
 *
 * @throws
 * @param key string
 * @returns string
 */
export function env(key: string): string {
  if (!key.startsWith("REACT_APP_")) {
    throw new Error(
      `All environment variables must be prefixed with 'REACT_APP_'. You should use 'REACT_APP_${key}' instead of '${key}'.`
    );
  }
  const value = process.env[key];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `Missing or empty environment variable: '${key}'. Maybe you forgot to add it to your dotenv file.`
    );
  }
  return value;
}

export const DEFAULT_CHARACTERS_CARD = 8;

export type Status = "Alive" | "Dead" | "unknown";

export function getBadgeColor(status: Status): RibbonProps["color"] {
  switch (status) {
    case "Alive":
      return "blue";
    case "Dead":
      return "volcano";
    default:
      return "magenta";
  }
}
