import { SQSEvent } from "aws-lambda";

const handler = async (event: SQSEvent): Promise<void> => {
  console.log("===================== HANDLING SQS EVENT");
  event.Records.forEach(x => console.dir(x, { depth: null }));
};

export { handler };
