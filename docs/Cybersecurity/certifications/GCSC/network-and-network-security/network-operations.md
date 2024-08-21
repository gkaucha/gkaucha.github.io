---
sidebar_position: 2
---

# Network Operations


## About Network Protocols

A **network protocol** is a set of rules used by two or more devices on a network to describe the order of delivery and the structure of data. Network protocols serve as instructions that come with the information in the data packet. These instructions tell the receiving device what to do with the data.   

security analysts should still understand their associated security implications. Some protocols have vulnerabilities that malicious actors exploit. For example, a nefarious actor could use the Domain Name System (DNS) protocol, which resolves web addresses to IP addresses, to divert traffic from a legitimate website to a malicious website containing malware. 

### Categories of Network Protocols

1. Communication Protocols
   Communication protocols govern the exchange of information in network transmission. They dictate how the data is transmitted between devices and the timing of the communication. They also include methods to recover data lost in transit.  
    - **Transmission Control Protocol(TCP)**  
      This allows two devices to form a connection and stream data. TCP uses a three-way handshake process. First, the device sends a synchronize (SYN) request to a server. Then the server responds with a SYN/ACK packet to acknowledge receipt of the device's request. Once the server receives the final ACK packet from the device, a TCP connection is established. In the TCP/IP model, TCP occurs at the transport layer.  

    - **User Datagram Protocol (UDP)** 
       It is a connectionless protocol that does not establish a connection between devices before a transmission. This makes it less reliable than TCP. But it also means that it works well for transmissions that need to get to their destination quickly. For example, one use of UDP is for sending DNS requests to local DNS servers. In the TCP/IP model, UDP occurs at the transport layer.  

    - **Hypertext Transfer Protocol (HTTP)**   
      is an application layer protocol that provides a method of communication between clients and website servers. HTTP uses port 80. HTTP is considered insecure, so it is being replaced on most websites by a secure version, called HTTPS that uses encryption from SSL/TLS for communication. However, there are still many websites that use the insecure HTTP protocol. In the TCP/IP model, HTTP occurs at the application layer.  

    - **Domain Name System (DNS)**  
       It is a protocol that translates internet domain names into IP addresses. When a client computer wishes to access a website domain using their internet browser, a query is sent to a dedicated DNS server. The DNS server then looks up the IP address that corresponds to the website domain. DNS normally uses UDP on port 53. However, if the DNS reply to a request is large, it will switch to using the TCP protocol. In the TCP/IP model, DNS occurs at the application layer.



2. Management Protocols  
  Management protocols are used for monitoring and managing activity on a network. They include protocols for error reporting and optimizing performance on the network.  
    - **Simple Network Management Protocol (SNMP)** is a network protocol used for monitoring and managing devices on a network. SNMP can reset a password on a network device or change its baseline configuration. It can also send requests to network devices for a report on how much of the network’s bandwidth is being used up. In the TCP/IP model, SNMP occurs at the application layer.  

    - **Internet Control Message Protocol (ICMP)** is an internet protocol used by devices to tell each other about data transmission errors across the network. ICMP is used by a receiving device to send a report to the sending device about the data transmission. ICMP is commonly used as a quick way to troubleshoot network connectivity and latency by issuing the “ping” command on a Linux operating system. In the TCP/IP model, ICMP occurs at the internet layer.


3. Security Protocols  
  Security protocols are network protocols that ensure that data is sent and received securely across a network. Security protocols use encryption algorithms to protect data in transit.  
    - **Hypertext Transfer Protocol Secure (HTTPS)** is a network protocol that provides a secure method of communication between clients and website servers. HTTPS is a secure version of HTTP that uses secure sockets layer/transport layer security (SSL/TLS) encryption on all transmissions so that malicious actors cannot read the information contained. HTTPS uses port 443. In the TCP/IP model, HTTPS occurs at the application layer.  

    - **Secure File Transfer Protocol (SFTP)** is a secure protocol used to transfer files from one device to another over a network. SFTP uses secure shell (SSH), typically through TCP port 22. SSH uses Advanced Encryption Standard (AES) and other types of encryption to ensure that unintended recipients cannot intercept the transmissions. In the TCP/IP model, SFTP occurs at the application layer. SFTP is used often with cloud storage. Every time a user uploads or downloads a file from cloud storage, the file is transferred using the SFTP protocol.
  

### Other Network Protocols

Some protocols are assigned port numbers by the Internet Assigned Numbers Authority (IANA). These port numbers are included in the description of each protocol, if assigned. 

#### Network Address Translation (NAT)
In order for the devices with private IP addresses to communicate with the public internet, they need to have a single public IP address that represents all devices on the LAN to the public. ***For outgoing messages, the router can replace a private source IP address with its public IP address and perform the reverse operation for responses***. This process is known as Network Address Translation (NAT).   

It generally requires a router or firewall to be specifically configured to perform NAT. NAT is a part of layer 2 (internet layer) and layer 3 (transport layer) of the TCP/IP model.


-  Dynamic Host Configuration Protocol (DHCP)  
    DHCP is an application layer protocol used on a network to configure devices. It works with the router to assign a unique IP address to each device and provide the addresses of the appropriate DNS server and default gateway for each device. DHCP servers operate on UDP port 67 while DHCP clients operate on UDP port 68.  

- Address Resolution Protocol (ARP)  
  A device’s IP address may change over time, but its MAC address is permanent because it is unique to a device's network interface card. The MAC address is used to communicate with devices within the same network, but sometimes, the MAC address is unknown. This is why the Address Resolution Protocol (ARP) is needed. ARP is mainly a network access layer protocol in the TCP/IP model used to translate the IP addresses that are found in data packets into the MAC address of the hardware device.   

  Each device on the network performs ARP and keeps track of matching IP and MAC addresses in an ARP cache. ARP does not have a specific port number since it is a layer 2 protocol and port numbers are associated with the layer 7 application layer.  

- Telnet  
  Telnet is an application layer protocol that is used to connect with a remote system. Telnet sends all information in clear text. It uses command line prompts to control another device similar to secure shell (SSH), but Telnet is not as secure as SSH. Telnet can be used to connect to local or remote devices and uses TCP port 23.   

- Secure shell (SSH)  
  Secure shell protocol (SSH) is used to create a secure connection with a remote system. This application layer protocol provides an alternative for secure authentication and encrypted communication. SSH operates over the TCP port 22 and is a replacement for less secure protocols, such as Telnet.  

- Post Office Protocol (POP)  
  Post office protocol (POP) is an application layer (layer 4 of the TCP/IP model) protocol used to manage and retrieve email from a mail server. POP3 is the most commonly used version of POP. Many organizations have a dedicated mail server on the network that handles incoming and outgoing mail for users on the network. User devices will send requests to the remote mail server and download email messages locally.   
  
  If you have ever refreshed your email application and had new emails populate in your inbox, you are experiencing POP and internet message access protocol (IMAP) in action. Unencrypted, plaintext authentication uses TCP/UDP port 110 and encrypted emails use Secure Sockets Layer/Transport Layer Security (SSL/TLS) over TCP/UDP port 995.  When using POP, mail has to finish downloading on a local device before it can be read. After downloading, the mail may or may not be deleted from the mail server, so it does not guarantee that a user can sync the same email across multiple devices.   

- Internet Message Access Protocol (IMAP)  
  IMAP is used for incoming email. It downloads the headers of emails and the message content. The content also remains on the email server, which allows users to access their email from multiple devices. IMAP uses TCP port 143 for unencrypted email and TCP port 993 over the TLS protocol. Using IMAP allows users to partially read email before it is finished downloading. Since the mail is kept on the mail server, it allows a user to sync emails across multiple devices.   

- Simple Mail Transfer Protocol  
  Simple Mail Transfer Protocol (SMTP) is used to transmit and route email from the sender to the recipient’s address. SMTP works with Message Transfer Agent (MTA) software, which searches DNS servers to resolve email addresses to IP addresses, to ensure emails reach their intended destination. SMTP uses TCP/UDP port 25 for unencrypted emails and TCP/UDP port 587 using TLS for encrypted emails. The TCP port 25 is often used by high-volume spam. SMTP helps to filter out spam by regulating how many emails a source can send at a time.  



| **Protocol** | **Port**                                     |
|--------------|----------------------------------------------|
| DHCP         | UDP port 67 (servers)                        |
|              | UDP port 68 (clients)                        |
| ARP          | None                                         |
| Telnet       | TCP port 23                                  |
| SSH          | TCP port 22                                  |
| POP3         | TCP/UDP port 110 (unencrypted)               |
|              | TCP/UDP port 995 (encrypted, SSL/TLS)        |
| IMAP         | TCP port 143 (unencrypted)                   |
|              | TCP port 993 (encrypted, SSL/TLS)            |
| SMTP         | TCP/UDP port 25 (unencrypted)                |
| SMTPS        | TCP/UDP port 587 (encrypted, TLS)            |



### Wireless Protocols

Wi-Fi refers to a set of standards that define communication for wireless LANs. Wi-Fi is a marketing term commissioned by the Wireless Ethernet Compatibility Alliance (WECA). WECA has since renamed their organization Wi-Fi Alliance.   

Wi-Fi standards and protocols are based on the 802.11 family of internet communication standards determined by the Institute of Electrical and Electronics Engineers (IEEE). So, as a security analyst, you might also see Wi-Fi referred to as IEEE 802.11.  

Wi-Fi communications are secured by wireless networking protocols. Wireless security protocols have evolved over the years, helping to identify and resolve vulnerabilities with more advanced wireless technologies.


#### Wired Equivalent Privacy (WEP)
WEP was developed in 1999 and is the oldest of the wireless security standards. It was designed to provide users with the same level of privacy on wireless network connections as they have on wired network connections.   

WEP is largely out of use today. It’s now considered a high-risk security protocol.  



#### Wi-FI Protected Access (WPA)

Wi-Fi Protected Access (WPA) was developed in 2003 to improve upon WEP, address the security issues that it presented, and replace it. WPA was always intended to be a transitional measure so backwards compatibility could be established with older hardware.  

The flaws with WEP were in the protocol itself and how the encryption was used. WPA addressed this weakness by using a protocol called **Temporal Key Integrity Protocol (TKIP)**. WPA encryption algorithm uses larger secret keys than WEPs, making it more difficult to guess the key by trial and error.  

WPA also includes a message integrity check that includes a message authentication tag with each transmission. If a malicious actor attempts to alter the transmission in any way or resend at another time, WPA’s message integrity check will identify the attack and reject the transmission.  

Despite the security improvements of WPA, it still has vulnerabilities. Malicious actors can use a key reinstallation attack (or KRACK attack) to decrypt transmissions using WPA. Attackers can insert themselves in the WPA authentication handshake process and insert a new encryption key instead of the dynamic one assigned by WPA. If they set the new key to all zeros, it is as if the transmission is not encrypted at all.  

Because of this significant vulnerability, WPA was replaced with an updated version of the protocol called WPA2.  


#### WPA2 & WPA3

##### WPA2  
The second version of Wi-Fi Protected Access—known as WPA2—was released in 2004. WPA2 improves upon WPA by using the Advanced Encryption Standard (AES). WPA2 also improves upon WPA’s use of TKIP. WPA2 uses the Counter Mode Cipher Block Chain Message Authentication Code Protocol (CCMP), which provides encapsulation and ensures message authentication and integrity. Because of the strength of WPA2, it is considered the security standard for all Wi-Fi transmissions today. WPA2, like its predecessor, is vulnerable to KRACK attacks. This led to the development of WPA3 in 2018.   


  **Personal**  
  WPA2 personal mode is best suited for home networks for a variety of reasons. It is easy to implement, initial setup takes less time for personal than enterprise version. The global passphrase for WPA2 personal version needs to be applied to each individual computer and access point in a network. This makes it ideal for home networks, but unmanageable for organizations.   

  **Enterprise**  
  WPA2 enterprise mode works best for business applications. It provides the necessary security for wireless networks in business settings. The initial setup is more complicated than WPA2 personal mode, but enterprise mode offers individualized and centralized control over the Wi-Fi access to a business network. This means that network administrators can grant or remove user access to a network at any time. Users never have access to encryption keys, this prevents potential attackers from recovering network keys on individual computers.

#### WPA3 

WPA3 is a secure Wi-Fi protocol and is growing in usage as more WPA3 compatible devices are released. These are the key differences between WPA2 and WPA3:  

  - WPA3 addresses the authentication handshake vulnerability to KRACK attacks, which is present in WPA2. 
  - WPA3 uses Simultaneous Authentication of Equals (SAE), a password-authenticated, cipher-key-sharing agreement. This prevents attackers from downloading data from wireless network connections to their systems to attempt to decode it.
  - WPA3 has increased encryption to make passwords more secure  by using 128-bit encryption, with WPA3-Enterprise mode offering optional 192-bit encryption.


## System identification


### Firewall
A firewall is a network security device that monitors traffic to and from your network. It either allows traffic or it blocks it based on a defined set of security rules. A firewall can use port filtering, which blocks or allows certain port numbers to limit unwanted communication. For example, it could have a rule that only allows communications on port 443 for HTTPS or port 25 for email and blocks everything else. These firewall settings will be determined by the organization's security policy.  

#### Types of Firewall

- A hardware firewall is considered the most basic way to defend against threats to a network. A hardware firewall inspects each data packet before it's allowed to enter the network.  

- A software firewall performs the same functions as a hardware firewall, but it's not a physical device. Instead, it's a software program installed on a computer or on a server. If the software firewall is installed on a computer, it will analyze all the traffic received by that computer. If the software firewall is installed on a server, it will protect all the devices connected to the server. A software firewall typically costs less than purchasing a separate physical device, and it doesn't take up any extra space. But because it is a software program, it will add some processing burden to the individual devices.  

- Cloud service providers offer firewalls as a service, or FaaS, for organizations. Cloud-based firewalls are software firewalls hosted by a cloud service provider. Organizations can configure the firewall rules on the cloud service provider's interface, and the firewall will perform security operations on all incoming traffic before it reaches the organization’s onsite network. Cloud-based firewalls also protect any assets or processes that an organization might be using in the cloud.  


#### States of Firewall

- **Stateful** : Stateful refers to a class of firewall that keeps track of information passing through it and proactively filters out threats. A stateful firewall analyzes network traffic for characteristics and behavior that appear suspicious and stops them from entering the network.  

- **Stateless** : Stateless refers to a class of firewall that operates based on predefined rules and does not keep track of information from data packets. A stateless firewall only acts according to preconfigured rules set by the firewall administrator. The rules programmed by the firewall administrator tell the device what to accept and what to reject. A stateless firewall doesn't store analyzed information. It also doesn't discover suspicious trends like a stateful firewall does. For this reason, stateless firewalls are considered less secure than stateful firewalls.


#### Next Generateion Firewall (NGFW)  
Not only does an NGFW provide stateful inspection of incoming and outgoing traffic, but it also performs more in-depth security functions like deep packet inspection and intrusion protection. Some NGFWs connect to cloud-based threat intelligence services so they can quickly update to protect against emerging cyber threats.


### Virtual Private Networks (VPNs)  

A virtual private network, also known as a VPN, is a network security service that changes your public IP address and hides your virtual location so that you can keep your data private when you're using a public network like the internet.  

VPNs also encrypt your data as it travels across the internet to preserve confidentiality. A VPN service performs encapsulation on your data in transit.  
**Encapsulation** is a process performed by a VPN service that protects your data by wrapping sensitive data in other data packets.  

MAC and IP address of the destination device is contained in the header and footer of a data packet. This is a security threat because it shows the IP and virtual location of your private network. You could secure a data packet by encrypting it to make sure your information can't be deciphered, but then network routers won't be able to read the IP and MAC address to know where to send it to. This means you won't be able to connect to the internet site or the service that you want.   

Encapsulation solves this problem while still maintaining your privacy. VPN services encrypt your data packets and encapsulate them in other data packets that the routers can read. This allows your network requests to reach their destination, but still encrypts your personal data so it's unreadable while in transit. A VPN also uses an encrypted tunnel between your device and the VPN server. The encryption is unhackable without a cryptographic key, so no one can access your data.


### VPN protocols: Wireguard and IPSec
The main purpose of a VPN is to create a secure connection between a computer and a network. Additionally, a VPN allows trusted connections to be established on non-trusted networks. ***VPN protocols determine how the secure network tunnel is formed.*** Different VPN providers provide different VPN protocols.

A VPN protocol is similar to a network protocol: It’s a set of rules or instructions that will determine how data moves between endpoints.   

#### Remote access and site-to-site VPNs

Individual users use remote access VPNs to establish a connection between a personal device and a VPN server. Remote access VPNs encrypt data sent or received through a personal device. The connection between the user and the remote access VPN is established through the internet.  

Enterprises use site-to-site VPNs largely to extend their network to other networks and locations. This is particularly useful for organizations that have many offices across the globe. IPSec is commonly used in site-to-site VPNs to create an encrypted tunnel between the primary network and the remote network. One disadvantage of site-to-site VPNs is how complex they can be to configure and manage compared to remote VPNs.  

#### WireGuard VPN vs. IPSec VPN 

##### WireGuard VPN
WireGuard is a high-speed VPN protocol, with advanced encryption, to protect users when they are accessing the internet. It’s designed to be simple to set up and maintain. WireGuard can be used for both site-to-site connection and client-server connections. WireGuard is relatively newer than IPSec, and is used by many people due to the fact that its download speed is enhanced by using fewer lines of code.   

WireGuard is also open source, which makes it easier for users to deploy and debug. This protocol is useful for processes that require faster download speeds, such as streaming video content or downloading large files.

##### IPSec VPN  
IPSec is another VPN protocol that may be used to set up VPNs. Most VPN providers use IPSec to encrypt and authenticate data packets in order to establish secure, encrypted connections. Since IPSec is one of the earlier VPN protocols, many operating systems support IPSec from VPN providers.

### Security zones
ecurity zones are a segment of a network that protects the internal network from the internet. They are a part of a security technique called network segmentation that divides the network into segments. Each network segment has its own access permissions and security rules. Security zones control who can access different segments of a network. Security zones act as a barrier to internal networks, maintain privacy within corporate groups, and prevent issues from spreading to the whole network.   

One example of network segmentation is a hotel that offers free public Wi-Fi. The unsecured guest network is kept separate from another encrypted network used by the hotel staff.  


:::info
Additionally, an organization's network can be divided into **subnetworks, or subnets**, to maintain privacy for each department in a organization. For instance, at a university, there may be a faculty subnet and a separate students subnet. If there is contamination on the student's subnet, network administrators can isolate it and keep the rest of the network free from contamination.
:::

An organization's network is classified into two types of security zones.  

1. ***The Uncontrolled Zone***, which is any network outside of the organization's control, like the internet.

2. ***The Controlled Zone***: which is a subnet that protects the internal network from the uncontrolled zone. There are several types of networks within the controlled zone. On the outer layer is the ***demilitarized zone, or DMZ***, which contains public-facing services that can access the internet. This includes **web servers**, **proxy servers** that host websites for the public, and **DNS servers** that provide IP addresses for internet users. It also includes **email and file servers** that handle external communications. The DMZ acts as a network perimeter to the internal network.   
The **internal network** contains private servers and data that the organization needs to protect.   
Inside the internal network is another zone called the **restricted zone**. The restricted zone protects highly confidential information that is only accessible to employees with certain privileges.
  
Ideally, the DMZ is situated between two firewalls. One of them filters traffic outside the DMZ, and one of them filters traffic entering the internal network. This protects the internal network with several lines of defense. If there's a restricted zone, that too would be protected with another firewall. This way, attacks that penetrate into the DMZ network cannot spread to the internal network, and attacks that penetrate the internal network cannot access the restricted zone.  

 As a security analyst, you may be responsible for regulating access control policies on these firewalls. Security teams can control traffic reaching the DMZ and the internal network by restricting IPs and ports. For example, an analyst may ensure that only HTTPS traffic is allowed to access web servers in the DMZ.

  

### Subnetting and CIDR

Creating security zones is one example of a networking strategy called subnetting.  

#### Subnetting
Subnetting is the subdivision of a network into logical groups called subnets. It works like a network inside a network. Subnetting divides up a network address range into smaller subnets within the network. These smaller subnets form based on the IP addresses and network mask of the devices on the network.  

 Subnetting creates a network of devices to function as their own network. This makes the network more efficient and can also be used to create security zones. If devices on the same subnet communicate with each other, the switch changes the transmissions to stay on the same subnet, improving speed and efficiency of the communications.  


#### Classless Inter-Domain Routing notation for subnetting  
Classless Inter-Domain Routing (CIDR) is a method of assigning subnet masks to IP addresses to create a subnet. Classless addressing replaces classful addressing. Classful addressing was used in the 1980s as a system of grouping IP addresses into classes (Class A to Class E). Each class included a limited number of IP addresses, which were depleted as the number of devices connecting to the internet outgrew the classful range in the 1990s. Classless CIDR addressing expanded the number of available IPv4 addresses.   

CIDR allows cybersecurity professionals to segment classful networks into smaller chunks. CIDR IP addresses are formatted like IPv4 addresses, but they include a slash (“/’”) followed by a number at the end of the address, This extra number is called the IP network prefix.  For example, a regular IPv4 address uses the 198.51.100.0 format, whereas a CIDR IP address would include the IP network prefix at the end of the address, 198.51.100.0/24. This CIDR address encompasses all IP addresses between 198.51.100.0 and 198.51.100.255. The system of CIDR addressing reduces the number of entries in routing tables and provides more available IP addresses within networks. You can try converting CIDR to IPv4 addresses and vice versa through an online conversion tool, like 
[IPAddressGuide](https://www.ipaddressguide.com/cidr), for practice and to better understand this concept.



### Proxy Server
A proxy server is a server that fulfills the request of a client by forwarding them on to other servers. The proxy server is a dedicated server that sits between the internet and the rest of the network. When a request to connect to the network comes in from the internet, the proxy server will determine if the connection request is safe. The proxy server is a public IP address that is different from the rest of the private network. This hides the private network's IP address from malicious actors on the internet and adds a layer of security.  

When a client receives an HTTPS response, they will notice a distorted IP address or no IP address rather than the real IP address of the organization's web server. A proxy server can also be used to block unsafe websites that users aren't allowed to access on an organization's network. A proxy server uses temporary memory to store data that's regularly requested by external servers. This way, it doesn't have to fetch data from an organization's internal servers every time. This enhances security by reducing contact with the internal server.


#### Types of Proxy Server

**Forward Proxy Server**  
A forward proxy server regulates and restricts a person with access to the internet. The goal is to hide a user's IP address and approve all outgoing requests. In the context of an organization, a forward proxy server receives outgoing traffic from an employee, approves it, and then forwards it on to the destination on the internet.  

**Rever Proxy Server**  
A reverse proxy server regulates and restricts the internet access to an internal server. The goal is to accept traffic from external parties, approve it, and forward it to the internal servers. This setup is useful for protecting internal web servers containing confidential data from exposing their IP address to external parties. 

**Email Proxy Server**  
An email proxy server is another valuable security tool. It filters spam email by verifying whether a sender's address was forged. This reduces the risk of phishing attacks that impersonate people known to the organization.

