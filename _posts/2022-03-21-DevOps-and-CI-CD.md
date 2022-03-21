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