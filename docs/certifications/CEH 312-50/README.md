# CEH 312-50

## Ethical Hacking

Ethics:  https://www.eccouncil.org/code-of-ethics/

## Information Security

### Fundamentals

- Authenticity
- Confidentiality
- Integrity
- Availability
- Non-repudiation

### Types of Attacks

- Passive attacks : also called sniffing or evesdropping attacks, attackers just intercepts the traffic

- Active attacks : Attackt to disrtup communication for example: DoS attacks, MITM attacks, Session Hijacking, SQL injection etc.

- Close-in attack : physically close to the target. social engineering, evesdropping, dumpster diving attack etc.

- Insider attack : from within the organization. For example : an employee planting a keylogger or stealing hardware

- Distribution attacks : attackers tamper with the source of software or hardware. Exampel : The SolarWinds Attack


## Understanding the Attackers

You need to think like an attacker and understand their methods.

### Hacking Fraemworks

### 1. Cyber Kill Chain Methodology

- A concept that illustrates how an attacker will typically go after an organization.
- Created by [Lockheed Martin](https://www.lockheedmartin.com/) 
- Divided into 7 main phases ( Intelligent Driven Defenses) for identificaton and prevention of attackers and their activities.
- Also acts as a **Framework for securing cyberspace based on the concept of Military Kill Chain**

#### Seven phases 

1. Reconnaissance

2. Weaponization

3. Delivery

4. Exploitation

5. Installation

6. Command and Control(C&C)

7. Action on Objectives


### 2. MITRE ATT@CK

[Mitre attack](https://attack.mitre.org/) This frame is bascially the documentation of  common tactics, techniques, and procedures.

- Tactic : The adversary's strategic goal or the reason behind taking certain actions.
            For example : to access a certain system, an adversary needs to obtain credentials.
- Techniques : The action an adversary takes to achieve a particular goal. For example: to get credential access, adversary has to dump the creds.

- Procedures: What adversary does to carry out the techniques or sub-techniques.


### 3. Diamond Model of Intrusion Analysis

This framework provides a structure for identifying correlated groups of events.

- provides a framework for developing more efficient methods of stopping attacks while increasing analytic productivity
- Consists of 4 basic features: 1. Adversary  2. Capability  3. Infrastructure  4. Victim 


