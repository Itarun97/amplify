import { defineFunction } from '@aws-amplify/backend';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "ap-south-1" });

export const sayHello = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'say-hello',
  entry: './handler.ts'
});