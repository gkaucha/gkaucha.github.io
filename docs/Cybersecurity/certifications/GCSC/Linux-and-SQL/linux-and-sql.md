---
sidebar_position: 1
---

#  Operating Systems(OS)

Operating Systems(OS) make connections between applications and hardware to allow users to perform tasks.

Examples: Linux, ChromeOS, ChromiumOS, macOS, Windows, Android, iOS

**Legacy Operating System** are outdated but still being used. Even when OS are up to date, they are still vulnerable to attacks.

Resources on information on operating systems and their vulnerabilities:

- [Common Vulnerabilities and Exposures (CVE) Report for Ubuntu](https://ubuntu.com/security/cves)
- [Apple Security Updates](https://support.apple.com/en-us/HT201222)
- [Microsoft Security Response Center(MSRC)](https://msrc.microsoft.com/update-guide/vulnerability)
- [Google Cloud Security Bulletin](https://cloud.google.com/support/bulletins)


## Requests to the Operating System

### Booting the computer

1. When you boot, or turn on, your computer, either a BIOS or UEFI microchip is activated.
   he Basic Input/Output System (BIOS) is a microchip that contains loading instructions for the computer and is prevalent in older systems. The Unified Extensible Firmware Interface (UEFI) is a microchip that contains loading instructions for the computer and replaces BIOS on more modern systems.

2. The BIOS or UEFI microchips contain a variety of loading instructions for the computer to
   follow. For example, one of the loading instructions is to verify the health of the computer’s hardware.
   The last instruction from the BIOS or UEFI activates the **bootloader**.  The bootloader is a software program that boots the operating system. Once the operating system has finished booting, your computer is ready for use.

### Completing a task

Once computer has gone through the booting process, completing a task on a computer is a four-part process.

①　User(initiates Process) →　Application(program that users interact with)　→　Operating System(interpret the requesst and send to applicable components)　→　Hardware (processing)

②　User　←　Application　←　Operating System　←　Hardware 

## Resource Allocation via the OS

The OS handles resource and memory management to ensure the limited capacity of the computer system is used where it's needed most.  

A variety of programs, tasks, and processes are constantly competing for the resources of the central processing unit, or CPU. They all have their own reasons why they need memory, storage, and input/output bandwidth. The OS is responsible for ensuring that each program is allocating and de-allocating resources.  

All this occurs in your computer at the same time so that your system functions efficiently. 



## Virtualization Technology

A virtual machine (VM) is a virtual version of a physical computer.  Virtual machines are one example of virtualization. Virtual machines are one example of virtualization.  

**Virtualization** is the process of using software to create virtual representations of various physical machines.  Virtual systems are just code.  

For example,**Random Access Memory (RAM)** is a hardware component used for short-term memory. If a computer has 16GB of RAM, it can host three virtual machines so that the physical computer and virtual machines each have 4GB of RAM. Also, each of these virtual machines would have their own operating system and function similarly to a typical computer.  

### Benefits of virtual machines

- **Security** : virtualization can provide an isolated environment, or a sandbox, on the physical host machine. 

  __There are still some risks. For example, a malicious program can escape virtualization and access the host machine.__


- **Efficiency** : Virtual machines can also be an efficient and convenient way to perform security tasks. You can open multiple virtual machines at once and switch easily between them.


### Hypervisors

Hypervisor is a software that help users manage multiple virtual machines and connect the virtual and physical hardware. Hypervisors also help with allocating the shared resources of the physical host machine to one or more virtual machines.  

For example:  **Kernel-based Virtual Machine(KVM)** is an open-source hypervisor that is supported by most major Linux distributions.



### Other forms of Virtualization

For example, multiple virtual servers can be created from a single physical server.   
Virtual networks can also be created to more efficiently use the hardware of a physical network. 