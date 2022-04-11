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
- [Application Deployment with CodeDeploy](#section-3)
- [Creating Deployment Pipelines](#section-4)


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



## 3. Application Deployment with CodeDeploy  {#section-3}


## 4. Creating Deployment Pipelines {#section-4}