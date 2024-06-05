import { defineFunction } from '@aws-amplify/backend';

export const sayHello = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'say-hello',
  entry: './handler.ts'
});