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


#### Demo - Leveraging SSM Parameter Store in Lamda Functions


#### Demo - Deploying CloudFormation with IAM Capabilities



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


#### Demo - Reviewing Failed Tests in CodeBuild



## 4. Application Deployment with CodeDeploy  {#section-3}

## 5. Creating Deployment Pipelines {#section-4}