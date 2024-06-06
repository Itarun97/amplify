import { Handler } from "aws-cdk-lib/aws-lambda";
import { SESClient } from "@aws-sdk/client-ses";
import { SendEmailCommand } from "@aws-sdk/client-ses";


export const handler: Handler = async (event: {
  emailid: string,
  body: string,
  subject: string
}) => {
    // TODO implement
    try{
    const email= event.emailid;
    const bodytext= event.body;
    const subject=event.subject;
    
    const ses = new SESClient({ region: "ap-south-1" });
     const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [email]
      },
      Message: {
        Body: {
          Text: { Data: bodytext },
        },
  
        Subject: { Data: subject },
      },
      Source: "tarun621997@gmail.com",
    });
     await ses.send(command);
    
    return "ok";
    }
    catch(errorMessage){
    
    return "not ok";
    }
  };