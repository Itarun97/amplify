{
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