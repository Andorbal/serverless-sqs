import { APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const sqs = new AWS.SQS();

const handler = async (): Promise<APIGatewayProxyResult> => {
  const sqsPayload = {
    MessageBody: JSON.stringify({ name: "foo", value: "bar" }),
    QueueUrl: process.env.SQS_OPERATIONS_QUEUE || "",
  };

  console.dir(sqsPayload, { depth: null });

  await sqs.sendMessage(sqsPayload).promise();
  return { statusCode: 200, body: "Hello!" };
};

export { handler };
