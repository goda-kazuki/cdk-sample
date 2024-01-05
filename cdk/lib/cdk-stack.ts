import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';
import { PythonFunction } from "@aws-cdk/aws-lambda-python-alpha"
import { aws_lambda, Stack, StackProps } from 'aws-cdk-lib';
import {
  RestApi,
  LambdaIntegration,
  IResource,
  MockIntegration,
  PassthroughBehavior,
  LambdaRestApi,
} from 'aws-cdk-lib/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const python_function = new PythonFunction(this, 'MyFirstFunction-goda', {
      entry: '../functions',
      index: 'sample.py',
      handler: 'handler',
      runtime: aws_lambda.Runtime.PYTHON_3_11,
      functionName: 'MyFirstFunction-goda',
      architecture: aws_lambda.Architecture.ARM_64,
    });

    const api = new RestApi(this, 'MyFirstApi-goda');

    const hello = api.root.addResource('hello');
    hello.addMethod('GET', new LambdaIntegration(python_function, {
      allowTestInvoke: false,
    }));
  }
}