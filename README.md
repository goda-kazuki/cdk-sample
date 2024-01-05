# sam-sample

## 移行要件

### 必須要件

- API Gateway + LambdaをベースとしたWeb APIの実装が容易であること
  - ？
- EventBridgeをトリガーとしたLambdaの実行が容易に実現できること
  - API Gateway
    - 容易・・？
  - スケジューラ
    - 容易・・？
  - Kinesis Data Streams
    - たぶん？
    - <https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events-readme.html#rule>
  - s3
    - たぶん？
    - <https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_events-readme.html#rule>
  - DynamoDB
    - たぶん？
    - <https://zenn.dev/collabostyle/articles/3ed9b3440c7d09>
  - Glue
    - ？
  - StepFunctions
    - ？
- CloudFormation等を利用したIaCが実現できること
  - OK
- 商用利用できること
  - OK
  - <https://github.com/aws/aws-cdk/blob/main/LICENSE>
- CI/CDパイプラインへの組み込みが容易であること
  - たぶん？
  - <https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/cdk_pipeline.html>
  - <https://cdkworkshop.com/ja/50-java/70-advanced-topics/100-pipelines.html>

### 尚良し

- 環境変数の取り扱いが容易であること（.env）
  - たぶんOK
  - <https://chaika.hatenablog.com/entry/2022/05/28/083000>
    - dotenv使う
- $ serverless inv？e でCLIから実行、$ serverless inv？e local みたいにローカルで実行といったことができるか？
  - SAM使って実装すればいける
  - `sam local inv？e HelloWorldFunction`
- Lambda@Edgeへのデプロイができる
  - たぶん？
  - <https://dev.classmethod.jp/articles/aws-cdk-i-tried-linking-lambda-edge-to-cloudfront-distribution/>
    - EdgeFunctionの箇所
- IaCのドライランができること
  - deployコマンド実行時に変更セットを確認することが可能

- スナップショットテストが実施できること
  - たぶんOK
  - <https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/testing.html>
  - 生成されたCloudFormationを前回保存したものと比較し、意図した変更になっているか確認する
