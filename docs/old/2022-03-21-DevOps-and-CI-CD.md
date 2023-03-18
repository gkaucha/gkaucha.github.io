---
layout: post 
title:  Continuous Delivery and Automation on AWS
categories: DevOps
comments: 
image:
---

DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).
( Source : https://en.wikipedia.org/wiki/DevOps )

<!--continue-->

- [Designing a Source Control Strategy with CodeCommit](#section-1)
- [Infrastructure as Code](#section-2)
- [Building and Testing](#section-3)
- [Application Deployment with CodeDeploy](#section-4)
- [Creating Deployment Pipelines](#section-5)


## 1. Designing a Souce Control Strategy with CodeCommit {#section-1}

### What is CI/CD?

![Continuous Interation / Continuous Delivery[Deployment] ](/assets/images/ci_cd.png "CI/CD")



### Version Control Systems

Version control systems help keep track and manage code changes over time and help resolve conflicts when merging
code together.

2 Types of VCS :

1. Distributed VCS : for example: mercurial, git
2. Centralized VCS : for example : Subversion(SVN), CVS, Perforce


### Git Essentials

Remotes : where code lives in repository in remote(not in our local machine)

Local Repositories : repository on our local machine

Staging Area : New changes to the local repository are added to staging area ready to be committed.

#### Git Commands
```
$ git --version
$ git init
$ git status
$ git add .
$ git commit -m "commit message"
$ git log
```

#### Forks and Branches

##### Forking use case

- Open SOurce Projects
- Propose changes with no permissions
- Ingegrates well with pull request
- Sync fork and original remote

##### Fork Naming

- Upstream : Original remote repository
- Origin : The fork you are working on and own in your account

![Forking](/assets/images/forking.png "Forking")


##### Pull Requests

- Ingegrated with repository hosting tools (Github, CodeCommit)
- can trigger automated builds, test code and report results
- conversation and code review

##### Branches and Feature Branching

![Feature Branching](/assets/images/branches-1.png "Feature Branching")

After we merge the changes, the pull request can be closed.
And then the feature branch can also be removed from the remote.
We can then **pull** the changes in the main branch and delete the feature branch on the local as well.

![Feature Branching](/assets/images/branches-2.png "After Feature Branching")

##### Benefits of Feature Branching

- History of changes will be tied to the specific new feature.
- We can "squash" commits when ready to make clean history.
- Pull requests can be focues on new features.
- Usually merged into main all at once


#### Git Workflows

A simple git workflow would be working on same branch (main or master) without the need to work on teams and multiple branches.

But when we have to maintain the mutliple versions of the same software, then we are going to neeed Git Workflow as it support such changes and maintenance.

![Git Flow](/assets/images/git-flow.png "Git flow")

Although Git flow if great for maintianing multiple versions of software, it is more complicated and was popularized before web.  So the creater of git workflow, Vincent Driessen, himself proposed another workflow; **Github Flow** is well suited for web development.


##### Why Github Flow

In Github flow, instead of having one main branch, we will have multiple feature branches on which we put pull request to merge into that branch.


![Feature Branching](/assets/images/branches-1.png "Feature Branching")

- Popular option for web development.
- Encourages best practices with frequent smaller changes.
- Well suited to CI/CD pipelines


#### Benefits of Repository Hosting Tools

- Manage the infrastructure hosting your code
- User and team management
- Permission management
- CI/CD tooling and testing workflow
- Code review and pull request approval workflows


##### Working with AWS code commit

![Aws Code Commit](/assets/images/aws-code-commit.png "AWS Code Commit")

####  (Demo) Creating a code commit user and repository, push first commit, and implemment Git Workflow in CodeCommit

Creating a CodeCommit User and Repository

- Create a Codecommit repository
- Create a IAM user for CodeCommit
- Create group, assign necessary permissions like PowerUserAcces and AWSCodeCommitPowerUser
- Generate  user credentials
- Establish SSH Connection to local machine
- Cloning a repository to our machine
- Make changes to repository and push to origin
- [ Git Workflow ] Create feature branch, make necessary changes, commit push changes to remote, create pull request and merge pull request.


## 2. Infrastructure as Code {#section-2}

Infrastructure as Code is the practice of managing application infrastructure by describing and versioning it in code rather than through  other more manual methods.

### Infrastructure as Code Benefits

- Cost Management
- Reproducibility
- Security

#### Cost Management

- Cost allocation for all resources
- Cost estimates for each stack
- No staranded leftover resources
- Policy compliance
- Less reduntant work

#### Reproducibility

![Reproducibility](/assets/images/reproducibility.png "reproducibility")

##### Benefits of Reproducibility

- No UI to make mistake
- No series of commands to run correctly
- Use one configuration file and deploy
- Parameterize accross regions or stages


#### Security

- Templates can be reviewed by other developers
- Create approved resuable templates
- Limited ways of changing infrastructure
- Audits can foucs on IaC changes and app logs


### AWS CloudFormation Essentials

#### AWS CloudFormation Essentials

- Cloudformation is a AWS service that allows us to manage our cloud resources using IaC.
- It allows us to use JSON or YAML syntax to describe all the resources that we want to create in AWS.
- It also allows us to extend the default CloudFromation syntax that we have with custom AWS lamda function that could create some custom resources.

#### Cloud Formation Basic Concepts

- Templates
- Stacks
- Resources

#### Tools to Create CloudFormation Code

- AWS CDK
- AWS SAM
- 3rd party frameworks

#### CloudFormation and Other Deployment Tools

- AWS Cloud Formation
  : Controlling the state of your infrastructure by describing every single cloud resource in code

- AWS Cloud Development Kit (CDK)
  : Controlling your infrastructure using high-level or low-level constructs that consists of one or more cloud resources.

- AWS Serverless Application Model (SAM)
  : Developing and deploying AWS lamda based applications

- AWS CodeDeploy
  : Deploying application code to different compute services with nuanced rollout strategies


#### Permissions for CloudFormation Deployments

- Make sure to have permissions to work with CloudFormation
- Also permissions for all the services touched by CloudFormation

#### Security for CloudFormation with CI/CD

- Build pipelines using CloudFormation carry lots of permissions
- Have isolated and inaccessible build environments if possible
- Secure the pipeline and how to modify it or its permissions
- Secure the git workflows that trigger build pipelines

#### Demo - Deploying CloudFormation Stacks with the AWS Console

- Write our own stack in the CloudFormation designer
- Review the CloudFormation console and resource creation process
- Update the CloudFormation stack and redeploy
- Deploy a stack from the AWS CLI

#### Demo - Deploying CloudFormation Stacks with the AWS CLI

- Setup aws cli and use both AWS console and AWS cli to create, update and delete clodformation stacks.

- Because we have only created AWS resources using CloudFormation, when we delete these stacks, we don't have 
to worry about anything being left behind from everything we've just done.

#### Demo - Leveraging SSM Parameter Store in Lamda Functions

- Leveraging Parameter store in Lamda functions
  : It allows us to add secrets inside of the Simple Systems Manager(SSM) Parameter Store 
  : We can then reference parameters from inside of applications that run our code like AWS Lamda.
  : Then we can test the Lamda function with Parameter Store

==>  lamda-template.yml
```
AWSTemplateFormatVersion: '2010-09-09'
Description: Example Lambda Function CloudFormation Template using SSM
Resources:
  LambdaRole:
    Type: AWS::IAM::Role
    Properties:
      RoleName: simple-ssm-lambda-role
      AssumeRolePolicyDocument:
        Statement:
          - Action:
            - sts:AssumeRole
            Effect: Allow
            Principal:
              Service:
              - lambda.amazonaws.com
        Version: 2012-10-17
      Policies:
        - PolicyDocument:
            Statement:
              - Action:
                  - ssm:getParameter
                Effect: Allow
                Resource: "*"
          PolicyName: get-ssm-parameter
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/AWSLambdaExecute
  ParameterStoreLambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      Runtime: python3.7
      Handler: index.handler
      Role:
        Fn::GetAtt:
          - LambdaRole
          - Arn
      Code:
        ZipFile: |
          import boto3
          ssm = boto3.client('ssm')
          def get_site_color():
              site_color = ssm.get_parameter(
                  Name='siteColor',
                  WithDecryption=True
              )['Parameter']['Value']
              return site_color
          def handler(event, context):
              return {
                  "statusCode": 200,
                  "body": get_site_color()
              }
```

Using AWS Cli:

```
# First, we need to create the SSM Parameter in AWS that we want to use
aws ssm put-parameter --name siteColor --value purple --type SecureString

# Then, we can get the parameter back at any time
# Either from the CLI or later from inside CloudFormation
aws ssm get-parameter --name siteColor 

# Because we ran it with "SecureString" as the data type which encrypted
# the data for us when we stored it

# To decrypt the data when we fetch it we can use this command:
aws ssm get-parameter --name siteColor --with-decryption

# To update the parameter:
aws ssm put-parameter --name siteColor --value red --type SecureString --overwrite

# To delete the parameter:
aws ssm delete-parameter --name siteColor
```

#### Demo - Deploying CloudFormation with IAM Capabilities


```
# First, make sure you are in the same directory as the stack file
# Then, run this command to deploy the Lambda stack:
aws cloudformation deploy --template-file lambda-template.yml --stack-name demo-lambda-stack \
--capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM

# To look for the deployed Lambda function you can run:
aws lambda list-functions

# To then invoke the function, use this command but 
# replace the name of the function to match yours

aws lambda invoke --function-name ParameterStoreLambdaFunction-ABC123 result-file.txt

# To delete the stack, you can run this command:
aws cloudformation delete-stack --stack-name demo-lambda-stack
```

## 3. Building and Testing  {#section-3}

#### What is AWS CodeBuild?

CodeBuild helps us in the following:

1. Compile Code
2. Run tests
3. Produce deployment artifacts

#### Benefits of Using CodeBuild

- Fully managed by AWS
  : No build server to keeps tabs on
  : No need to patch or version build software

- Preconfigured environments
  : Different operating systems
  : Various language runtimes


#### CodeBuild Concepts

- Build project
  : This essentially contains all the information that we need to create an environment where we build our code.

- Build Environment
  : Build environment can be oprating system and the language runtime

- Build spec
  : This helps us determine what to do during the CodeBuild process, when we run specific commands, when we install specific software,
    and when we output particular artifacts. These are all configured inside **Build Spec** files

 ![CodeBuild Visaulized](/assets/images/codebuild-visualized.png "codebuild")
 <!-- ![CodeBuild Visaulized](/assets/images/codebuild-visualized-01.png "codebuild") -->
 ![CodeBuild Visaulized](/assets/images/codebuild-visualized-02.png "codebuild")

Code Build keeps tabs of everything that's happening inside of the build environment, and it'll send logs from the entire process inside of 
the build environment to CloudWatch Logs. It'll also store lots of those informations inside of the AWS CodeBuild console as well.

### Build Sepc Files

#### Build Spec file sections

- Environment variables
- Phases 
- Reports 
- Artifacts

##### Phases 

Purpose of phases section
- control the flow of the build process
- Structure and execute build commands

Example phases
- Install
- Pre-build
- Build
- Post-build

##### Reports

Puprose of reports section
- Define reports to be generated
- Configure testing frameworks and output locations

##### Artifacts

Purpose of Artificats section
- Configure and define output artifacts
- Completely Optional
- E.g. Python builds vs. Java Builds


#### Demo - Automated Testing with AWS CodeBuild

- Review a Flask application with tests
- Add code to CodeCommit repository
- Configure CodeBuild for the repo
- Trigger both successful and failed tests

#### Demo - Reviewing Failed Tests in CodeBuild



## 4. Application Deployment with CodeDeploy  {#section-4}

A managed AWS service that automates application deployment to different AWS compute services.

#### Deployment Destinations

- EC2
- On-premises instances
- Lambda functions
- Amazon ECS and Fargate


#### What can be Deployed?

- Code
- Serverless functions
- Configuration files
- Packages
- Executables
- Media Files

#### Benefits of Using CodeDeploy

- Automate deployments
  : Multiple deployment types
  : Customizations to deployment

- Deployment speed
  : Minimize or eliminate downtime
  : Run concurrent deployments

- Avoid errors
  : Standarize deployments
  : Configure rollbacks
  : Eliminate manual deployment errors

#### Picking Deployment Tools

- CodeDeploy - EC2, on-premises, Lambda, ECS/Fargate
- CloudFormation and AWS CDK - Cloud infrastructure deployments
- CodePipeline - More complex build pipelines with discrete steps


### AWS CodeDeploy Concepts

1. Application : The application is the larger container for all the configuration that we use when we're working with CodeDeploy
2. Compute platform : Is either something like EC2, AWS Lambda or the Amazon ECS service or evn on-premises serves.

#### Deployment Configuration

Deployment rules
- Success or failure conditions

Deployment types
- All at once
- Blue/Green

#### Deployment Groups

Compute Platform
- EC2 instances or auto scaling groups
- On-premises instances
- Lambda function versions
- ECS tasks

Other Configuration
- Rollbacks
- Triggers
- Alarms

#### Revisions

- Lambda : AppSpec file
- ECS : AppSpec file
- EC2/On-premises: Archive with AppSpec file and code


#### Repositories

- Amazon S3
- Github
- Bitbucket

#### Permissions

Service Role
- Role used by CodeDeploy to deploy the application

IAM Instance Profile
- Used by EC2 instances to access where applications are stored.

IAM Roles and Policies
- How EC2 and other services get additional AWS permissions



### Deployment Types: In-place Deployments

Deployment Destinations for EC2
- Instances
- Auto Scaling groups

In-place Deployments (EC2/On-premises)

![In-Place Deployment](/assets/images/in-place-deployment.png "in-place deployment")

### Deployment Types: Blue/green Deployments

#### Blue/Green Deployment Traffic Shifting
- Canary
- Linear
- All-at-once

#### Blue/Green Deployment with AWS Lamda

1. We sent traffic to the first version of the lambda function(the blue version)
2. We get the revision and we create a new Lambda function with that revision. (the green version)
![Blue/Green Deployment with AWS Lambda](/assets/images/blue-green-deploy-aws-lambda-01.png)


3. We then start switching over traffic to the green version of the application (version 2)
4. We will eventually phase out version 1 and remove the Lambda function.
![Blue/Green Deployment with AWS Lambda](/assets/images/blue-green-deploy-aws-lambda-02.png)


** Same goes for the deployment with EC2 and ECS

#### Blue/Green Deployments with EC2

![Blue/Green Deployment with EC2](/assets/images/blue-green-deployment-01.png "blue/green deployment")

After the testing has been successfully completed, the traffic is shifted with any of the above shifting methods.

![Blue/Green Deployment with EC2](/assets/images/blue-green-deployment-02.png "blue/green deployment")


#### Blue/Green Deployment with ECS

![Blue/Green Deployment with ECS](/assets/images/blue-green-deploy-ecs-01.png "blue/green ecs")
![Blue/Green Deployment with ECS](/assets/images/blue-green-deploy-ecs-02.png "blue/green ecs")
![Blue/Green Deployment with ECS](/assets/images/blue-green-deploy-ecs-03.png "blue/green ecs")



#### Benefits of Blue/Green Deployments

- No interruptions - Switch traffic from the load balancer
- Easy rollbacks - Switch back to the previous version easily
- Tests and Alarams


### AppSpec Files

Application Specification or "AppSpec" files are YAML or JSON formatted files that help manage CodeDeploy deployments.

#### AppSpec File Contents - ECS

- ECS service
- Container name
- Port details
- Lambda function validation tests
- Lifecycle details

// appspec.yml 
```
version: 0.0
Resources:
- TargetService:
    Type: AWS::ECS::Service
    Properties:
      TaskDefinition: "<task-definition-arn>"
      LoadBalancerInfo: 
        ContainerName: "SampleApplicationName"
        ContainerPort: 80

Hooks:
  - BeforeInstall: "<function-name>"
  - AfterInstall: "<function-name>"
  - AfterAllowTestTraffic: "<function-name>"
  - BeforeAllowTraffic: "<function-name>"
  - AfterAllowTraffic: "<function-name>"
```

#### AppSpec File Contents - AWS Lambda

- Lambda function deployment version details
- Lambda function validation tests

```
version: 0.0
Resources:
  - myLambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      Name: "myLambdaFunction”
      Alias: "myLambdaFunctionAlias”
      CurrentVersion: "1”
      TargetVersion: "2"
Hooks:
  - BeforeAllowTraffic: "<function-name>”
  - AfterAllowTraffic: "<function-name>"
```

#### AppSpec File Contents - EC2/On-premises

- Source file destination mappings
- Custom permissions for deployed files
- Custom scripts to run with deployment lifecycle 

```
version: 0.0
os: linux
files:
  - source: Config/config.txt
    destination: /webapps/Config
  - source: source
    destination: /webapps/myApp

Hooks:
  BeforeInstall:
    - location: Scripts/UnzipResourceBundle.sh
    - location: Scripts/UnzipDataBundle.sh
  AfterInstall:
    - location: Scripts/RunResourceTests.sh
      timeout: 180
  ApplicationStart:
    - location: Scripts/RunFunctionalTests.sh
      timeout: 3600
  ValidateService:
    - location: Scripts/MonitorService.sh
  timeout: 3600
     runas: codedeployuser
```

### AppSpec Hooks

- EC2/On-premises : link to scripts to run during deployment lifecycle events
- Lambda and ECS deployments : References to Lambda validation Functions

#### Lifecycle Hooks - Lambda Deployments

![lifecycle hooks lambda](/assets/images/lifecycle-hooks-lamda.png)

#### Lifecycle Hooks - ECS

![lifecycle hooks ECS](/assets/images/lifecycle-hooks-ecs.png)

![lifecycle hooks ECS](/assets/images/lifecycle-hooks-ecs-01.png)

#### Lifecycle Hooks - In-place deployments

![lifecycle hooks in-place](/assets/images/lifecycle-hooks-in-place-deploy.png)


#### Lifecycle Hooks - Blue/Green with EC2

![Lifecycle hooks EC2](/assets/images/lifecycle-hooks-blue-green-ec2.png)



### Deploying ECS applications with CodeDeploy

- Create AWS network infrastructure
- Create an ECS cluster
- Congigure CodeDeploy
- Deploy all-at-once with CodeDeploy
- Deploy linearly with CodeDeploy

#### All-at-once deployment with CodeDeploy
![all-at-once deploy with codedeploy](/assets/images/first-deploy-codedeploy.png "all-at-once deploy")


#### Linear Deploy with CodeDeploy
![linear deploy with codedeploy](/assets/images/linear-shift-codedeploy.png "linear deploy")

#### Demo 

- Creating AWS Infrastructure
- Creating ECS Resources
- First deployment with CodeDeploy
- Linear Deployment with CodeDeploy
- Cleaning up our AWS Resources


## 5. Creating Deployment Pipelines {#section-5}


### What is AWS CodePipeline?

CodePipeline is an AWS Service that helps automate the steps of your CI/CD pipelines.

- Can be used to Automate Software releases and  have mutiple processes with more than one step, using more than one tool to do it.
- Helps to combine different build tools like AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy
- Helps visualize progress of pipeline across build stages.

#### AWS CodePipeline Concepts

- Pipelines
- Stages
- Transitions
- Actions
- Artifacts

![AWS CodePipelines](/assets/images/code-pipeline.png)

### CodePipeline Actions and Artifacts

#### CodePipeline Action Types

- Source
  : Source code: BitBucket, CodeCommit, Github
  : Amazon ECR
  : Amazon S3
- Build
  : AWS CodeBuild
  : Jenkins
- Test
  : AWS CodeBuild
  : Jenkins
  : AWS DeviceFarm
  : Ghost Inspector
  : StormRunner Load
  : Runscope
- Deploy
  : AWS COdeDeploy
  : Amazon S3
  : AWS CloudFormation
  : Alexa Skills Kit
  : ECS
- Approval
  : Human approval step with optional push notifications
- Invoke
  : Integrate AWS Lambda or AWS SetpFunctions for custom logic


  ### Demo Creating a CodePipeline Pipeline in ElasticBean Application

- Create and configure the source stage
- Create and build and test stage
- Create deployment stage
- Trigger and test our pipeline


___

### What's Next?

#### Integration tools
- AWS Lambda
- Serverless Framework

#### Cost Optimization

#### Fundamental AWS Services

  