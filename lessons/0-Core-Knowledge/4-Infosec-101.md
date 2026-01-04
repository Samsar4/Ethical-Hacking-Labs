# <u>Introduction to Information Security & Penetration Testing</u>

> ⚠️ This module is fully theoretical and was extracted from [CEH Study Guide](https://github.com/Samsar4/CEH-v10-Study-Guide/) repo. Here you'll find some basic terms in 'InfoSec world'.


## <u> Fundamental Security Concepts </u>
The whole principle is to avoid **Theft, Tampering and Disruption** of the systems through **CIA Triad** (Confidentiality, Integrity and Availability).

<p align="center">
<img width="50%" src="https://i.ytimg.com/vi/AJTJN4wDBM8/hqdefault.jpg">
</p>

- **Confidentiality**
Keeping systems and data from being accessed, seen, read to anyone who is not authorized to do so.

- **Integrity**
Protect the data from modification or deletion by unauthorized parties, and ensuring that when authorized people make changes that shouldn't have been made the damage can be undone.

- **Availability**
Systems, access channels, and authentication mechanisms must all be working properly for the information they provide and protect to be available when needed.

**Note:** *In addition, other properties, such as authenticity, accountability, non-repudiation and reliability can also be involved. (ISO/IEC 27000:2009)*

- **Auditing & Accountability**
Basically keep tracking of everthing, like, who's been logging in when are they loggin in whose access this data.

- **Non-Repudiation**
Non-repudiation is the assurance that someone cannot deny the validity of something. Non-repudiation is a legal concept that is widely used in information security and refers to a service, which provides proof of the origin of data and the integrity of the data.

### **Security, Functionality and Usability balance**

There is an inter dependency between these three attributes. When **security goes up, usability and functionality come down**. Any organization should balance between these three qualities to arrive at a balanced information system.

<p align="center">
<img width="50%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f14455ed4def635e1bc93b85657f43dbbf4a3127/triad2.png">
</p>

## <u>Types of Hackers</u>

<p align="center">
<img width="50%" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/types-hacker.JPG">
</p>

> - **Black Hat** - Hackers that seek to perform malicious activities.
> - **Gray Hat** - Hackers that perform good or bad activities but do not have the permission of the organization they are hacking against.
> - **White Hat** - Ethical hackers; They use their skills to improve security by exposing vulnerabilities before malicious hackers.

**Script Kiddie / Skiddies** - Unskilled individual who uses malicious scripts or programs, such as a web shell, developed by others to attack computer systems and networks and deface websites. 

**State-Sponsored Hacker** - Hacker that is hired by a government or entity related.

**Hacktivist** - Someone who hacks for a cause; political agenda.

**Suicide Hackers** - Are hackers that are not afraid of going jail or facing any sort of punishment; hack to get the job done.

**Cyberterrorist** - Motivated by religious or political beliefs to create fear or disruption.

## <u>Hacking Vocabulary</u>

- **Hack value** - Perceived value or worth of a target as seen by the attacker.
- **Vulnerability** - A system flaw, weakness on the system (on design, implementation etc).
- **Threat** - Exploits a vulnerability.
- **Exploit** - Exploits are a way of gaining access to a system through a security flaw and taking advantage of the flaw for their benefit.
- **Payload** - Component of an attack; is the part of the private user text which could also contain malware such as worms or viruses which performs the malicious action; deleting data, sending spam or encrypting data.
- **Zero-day attack** - Attack that occurs before a vendor knows or is able to patch a flaw.
- **Daisy Chaining / Pivotting** - It involves gaining access to a network and /or computer and then using the same information to gain access to multiple networks and computers that contains desirable information. 
- **Doxxing** - Publishing PII about an individual usually with a malicious intent.
- **Enterprise Information Security Architecture** (EISA) - determines the structure and behavior of organization's information systems through processes, requirements, principles and models.

## <u> Threat Categories </u>
* **Network Threats**
  - Information gathering
  - Sniffing and eavesdropping
  - DNS/ARP Poisoning
  - MITM (Man-in-the-Middle Attack)
  - DoS/DDoS
  - Password-based attacks
  - Firewall and IDS attack
  - Session Hijacking

* **Host Threats**
  - Password cracking
  - Malware attacks
  - Footprinting
  - Profiling
  - Arbitrary code execution
  - Backdoor access
  - Privilege Escalation
  - Code Execution

* **Application Threats**
  - Injection Attacks
  - Improper data/input validation
  - Improper error handling and exeception management
  - Hidden-field manipulation
  - Broken session management
  - Cryptography issues
  - SQL injection
  - Phishing
  - Buffer Overflow
  - Information disclosure
  - Security Misconfigurations

## <u> Attack Vectors </u>
*Path by which a hacker can gain access to a host in order to deliver a payload or malicious outcome*

- **APT - Advanced Persistent Threats**
  - An advanced persistent threat is a stealthy threat actor, typically a nation state or state-sponsored group, which gains unauthorized access to a computer network and remains undetected for an extended period; Typically uses zero day attacks.
- **Cloud computing / Cloud based technologies**
  - Flaw in one client's application cloud allow attacker to access other client's data
- **Viruses, worms, and malware**
  - Viruses and worms are the most prevalent networking threat that are capable of infecting a network within seconds.
- **Ransomware**
  - Restricts access to the computer system's files and folders and demands an online ransom payment to the attacker in order to remove the restrictions.
- **Mobile Device threats**
- **Botnets**
  - Huge network of compromised systems used by an intruder to perform various network attacks
- **Insider attacks**
    - Disgruntled employee can damage assets from inside.
    - Huge network of compromised hosts. (used for DDoS).

- **Phishing attacks**
- **Web Application Threats**
  - Attacks like SQL injection, XSS (Cross-site scripting)...
- **IoT Threats**


## <u>Attack Types</u>
### 1. Operating System
*Attacks targeting OS flaws or security issues inside such as guest accounts or default passwords.*
>  - **Vectors**: Buffer overflows, Protocol Implementations, software defects, patch levels, authentication schemes

### 2. Application Level
*Attacks on programming code and software logic.*
>  - **Vectors**: Buffer overflows, Bugs, XSS, DoS, SQL Injection, MitM

### 3. Misconfiguration
*Attack takes advantage of systems that are misconfigured due to improper configuration or default configuration.*

>  - **Examples**: Improper permissions of SQL users; Access-list permit all

### 4. Shrink-Wrap Code
*Act of exploiting holes in unpatched or poorly-configured software.*
>  - **Examples**: Software defect in version 1.0; DEfect in example CGI scripts; Default passwords 

## <u>Vulnerabilities</u>

- **CVSS - Common Vulnerability Scoring System** [[+]](https://nvd.nist.gov/vuln-metrics/cvss)
  - Places numerical score based on severity
  - ![cvss](https://3.bp.blogspot.com/-5V1cb_wTvsk/Wl78iF4Sd8I/AAAAAAAAF7U/KmK4pMXi54YworDgh4uI8aZtHgy0bbznQCLcBGAs/s1600/CVSS.png
  )
- **CVE – Common Vulnerabilities and Exposures** [[+]](https://cve.mitre.org/)
  - Is a list of publicly disclosed vulnerabilities and exposures that is maintained by MITRE.
  - ![cve](https://i0.wp.com/gbhackers.com/wp-content/uploads/2016/10/cve.png?resize=486%2C408&ssl=1)
- **NVD - National Vulnerability Database**  [[+]](https://nvd.nist.gov/)
  -  is a database, maintained by NIST, that is fully synchronized with the MITRE CVE list; US Gov. vulnerabilities repository.

### Vulnerability Categories

- **Misconfiguration** - improperly configuring a service or application
- **Default installation** - failure to change settings in an application that come by default
- **Buffer overflow** - code execution flaw
- **Missing patches** -  systems that have not been patched
- **Design flaws** - flaws inherent to system design such as encryption and data validation
- **Operating System Flaws** - flaws specific to each OS
- **Default passwords** - leaving default passwords that come with system/application


## <u>Pen Test Phases (CEH method)</u>
1. **Pre-Attack Phase** - Reconnaissance and data-gathering.
2. **Attack Phase** - Attempts to penetrate the network and execute attacks.
3. **Post-Attack Phase** - Cleanup to return a system to the pre-attack condition and deliver reports.


## <u>The Five Stages of Ethical Hacking</u>

### 1. **Reconnaissance**
*Gathering evidence about targets*; There are two types of Recon:
- **Passive Reconnaissance**: Gain information about targeted computers and networks **without direct interaction with the systems**.
    - e.g: Google Search, Public records, New releases, Social Media, Wardrive scanning networks around.
- **Active Reconnaissance**: Envolves direct interaction with the target.
    - e.g: Make a phone call to the target, Job interview; tools like Nmap, Nessus, OpenVAS, Nikto and Metasploit can be considered as Active Recon.

### 2. **Scanning & Enumeration**
*Obtaining more in-depth information about targets.*
- e.g: Network Scanning, Port Scanning, Which versions of services are running.

### 3. **Gaining Access**
*Attacks are leveled in order to gain access to a system.*
- e.g: Can be done locally (offline), over a LAN or over the internet.
  - e.g(2): Spoofing to exploit the system by pretending to be a legitimate user or different systems, they can send a data packet containing a bug to the target system in order to exploit a vulnerability.
  - Can be done using many techniques like command injection, buffer overflow, DoS, brute forcing credentials, social engineering, misconfigurations etc.
  
### 4. **Maintaining Access**
*Items put in place to ensure future access.*
- e.g: Rookit, Trojan, Backdoor can be used.

### 5. **Covering Tracks**
*Steps taken to conceal success and intrusion; Not be noticed.*
  - e.g: Clear the logs; Obfuscate trojans or malicious backdoors programs.


## Three Types of Active Defense 
- **Annoyance**
  - Involves tracking a hacker and leading him into a fake server, wasting his time — and making him easy to detect.
- **Attribution**
  - Identify an attacker; Uses tools to trace the source of an attack back to a specific location, or even an individual hacker.
- **Attack**
  - That is most controversial. To “hack back,” a company accesses an alleged hacker’s computer to delete its data or even to take revenge. Both of these steps are considered illegal. 

## <u> Information Assurance (IA) </u>
*Refers to the assurance of the Integrity, Availability, confidentiality, and authenticity of information and information systems during usage, processing, storage and transmission of information.*

* **Processes that help achieving IA:**
  - Developing local policy, process, and guidance.
  - Designing network and user authetication strategy.
  - Identifying network vulnerabilities and threats (Vulnerability assessments outline the security posture of the network).
  - Idenfitying problems and resource requirements.
  - Creating plan for identified resource requirements.
  - Applying appropriate IA controls.
  - Performing C&A (Certification and Accreditation) process of information systems helps to trace vulnerabilities, and implement sa fety measures.
  - Providing information assurance training to all personnel in federal and private org.

## <u>Information Security Management Program </u>
*Combination of policies, processes, procedures, standards, and guidelines to establish the required **level of information security.***

- Designed to ensure the business operates in a state of reduced risk.
- It encompasses all organizational and operational processes and participants relevant to information security.

![infosec](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/950220d4b802bb726fe84470c7a13055b056a621/infosec.jpg)


> ⚠️ **IA** focus on risk assessment, mitigation side of things; 
> ⚠️ **InfoSec** focus on actually implementing security measures to safeguard systems.

## <u>EISA - Enterprise Information Security Architecture</u>
*Set of requirements, process, principles, and models that determines the structure and behavior of an organization's information systems.*

* **Goals of EISA**:
  - Help in monitoring and detecting network behaviors
  - Detect and recover from security breaches
  - Prioritizing resources of an organization
  - Help to perform risk assessment of an organization's IT assets.
  - Cost prospective when incorporated in security provisions such as incident response, disaster recovery, event correlation, etc.

## <u>Physical Security Controls</u> 

- **Preventive control**: Deters the actor from performing the threat.
    - e.g: Fence, Server Locks, Mantraps, etc.

- **Detective control**: Recognizes an actor's threat.   
    - e.g: Background check, CCTV.

- **Deterrent control**: Deters the actor from **attempting** the threat.
    - e.g: Warning Sign.

- **Recovery**: Mitigates the impact of a manifested threat.
    - e.g: Backups.

- **Compensating control**: Provides alternative fixes to any of the above functions.


*Most of security controls are preventive phase controls*.

⚠️ **Defense in Depth**: Multiple layers of security controls; Provides redundancy in the event of a control failure. (e.g.: image below)

![defense-in-depth](https://www.fairwarning.com/wp-content/uploads/2019/03/Defense-in-Depth-for-Cloud-Security-Rainbow-Diagram.png)


### Types of  Security Controls

| Description    | Examples                                      |
| -------------- | --------------------------------------------- |
| **Physical**   | Guards, lights, cameras, fire extinguishers, flood protection                     |
| **Administrative** | Training awareness, policies, procedures and guidelines to infosec                 |
| **Technical**    | IDS/IPS, Firewall, Encryption, Smart cards, Access control lists |

| Description  | Examples                    |
| ------------ | --------------------------- |
| **Preventative** | authentication, alarm bells |
| **Detective**    | audits, backups             |
| **Corrective**   | restore operations          |

## <u>Managing the Risk</u>
**Risk** can be defined as a probability of the occurrence of a threat or an event that may damage, or cause loss or have other negative impact either from internal or external liabilities.

### Risk matrix

A **risk matrix** is used during **risk assessment** to define the level of risk by considering the category of **probability or likelihood** against the category of consequence **severity**. 

 - This is a simple mechanism to increase visibility of risks and assist management decision making.

![matrix](https://paladinrisk.com.au/wp-content/uploads/2018/11/risk-1-1024x434.jpg)

### Risk Management
*Is the identification, evaluation, and prioritization of risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events or to maximize the realization of opportunities.*

## <u>Security Policies</u>
1. **Policies** - High-level statements about protecting information; Business rules to safeguard CIA triad; Security Policies can be applied on Users, Systems, Partners, Networks, and Providers.
    - **Common Security Policies examples:**
      - Password Policy
        - Meet the password complexity requirements.
        - e.g: Minimum 8 char length, upper and lower case and alphanumerical.
      - Wireless Security Policy
      - AUP - Acceptable Use-Policy
        - How to properly use company's assets
        - e.g: "Do's and Dont's" with company's computer.
      - Data Retention Policy 
        - e.g: Keep the data for X time.
      - Access Control Policies
        - e.g: Accessing servers; Firewalls 
2. **Procedures** - Set of details steps to accomplish a goal; Instructions for implementation
3. **Guidelines** - Advice on actions given a situation; Recommended, not mandatory

## Security Policy - Examples
* **Access Control Policy**
  - This defines the resources being protected and the rules that control access to them

* **Remote Access Policy**
  - This defines who can have remote access and defines access medium and remote access security controls.

* **Firewall Management Policy**
  - This defines access, management and monitoring of firewalls in an organization.

* **Network Connection Policy**
  - This defines who can install new resources on the network, approve the installation of new devices, document network changes etc.

* **Password Policy**
  - This defines guidelines for using strong password protection on available resources.

* **User Account Policy**
  - This defines the account creation process, authority, rights and responsibility of user accounts.

* **Information Protection Policy**
  - This defines the sensitivity levels of information, who may have access, how it is stored and transmitted, and how it should be deleted from storage media etc.

* **Special Access Policy**
  - This defines the terms and conditions of granting special access to system resources.

* **Email Security Policy**
  - This policy is designed to govern the proper usage of corporate email.

* **Acceptable Use Policy**
  - This defines the acceptable use of system resources.

## Security Policiy - Types
1. **Promiscuous Policy** - This policy usually has no restrictions on usage of system resources.

2. **Permissive Policy** - This policy begins wide open and only know dangerous services/attacks or behaviors are blocked. This type of policy has to be updated regularly to stay effective.

3. **Prudent Policy** - This policy provides maximum security while allowing known but necessary dangers. This type of policy will block all services and only safe/necessary services are enabled individually. Everything is logged.

4. **Paranoid Policy** - This policy forbids everything. No Internet connection or severely restricted Internet usage is allowed.

## Security Policy - Creation Steps 
1. Perform a Risk Assessment
2. Use security Standards and Frameworks as guide
3. Get Management and Staff input
4. Enforce the policy. Use penalties for non-compliance
5. Publish final draft to entire org.
6. Have all staff read/sign that they understood policy
7. Employ tools to help enforce policy
8. Staff training
9. Review and update regularly

## <u>Incident Management Process</u>
*An incident is an event that could lead to loss of, or disruption to, an organization's operations, services or functions.*

***Incident management** is a term describing the activities of an organization to identify, analyze, and correct hazards to prevent a future re-occurrence.*

1. **Preparation:** Select people, assign rules, define tools to handle the incident.
2. **Detection & Analysis:** Determine an incident has ocurred (IDS, SIEM, AV, Someone reporting, etc).
3. **Classification and Prioritization:**
4. **Notification:** Identify minor and major incident; who and how to notify an incident.
5. **Containment:** Limit the damage; Isolate hosts; Contact system owners.
6. **Forensic Investigation:** Investigate the root cause of the incident using forensic tools; System logs, real-time memory, network device logs, application logs, etc;
7. **Eradicate & Recovery:** Remove the cause of incident; Patch if needed. Recovery: get back into production; Monitor affected systems.
8. **Post-incident Activities:** Document what happened and why; Transfer knowledge.

### Incident Response Team Duties

1. Managing security issues by taking a proactive approach towards the customer's security vulnerabilities 
2. Developing or reviewing processes and procedures that must be followed 
3. Managing the response to an incident and ensuring that all procedures are followed correctly in order to minimize and control the damage
4. Identifying and analyzing what has happened during an incident, including impact and threat
5. Providing a single point of contact for reporting seucirty incidents and issues
6. Reviewing changes in legal and regulatory requirements to ensure that all processes and procedures are valid
7. Reviewing existing controls and recommending steps and technologies to prevent future incidents
8. Establishing relationship with local law enforcement agency, gov. agencies, key partners and suppliers

### SIEM -  Security Information and Event Management
<p align="center">
<img width="90%" src="https://secureops.com/wp-content/uploads/2020/01/components-of-siem.jpg" />
</p>

*Collects data points from network, including log files, traffic captures, SNMP messages, and so on, from every host on the network. SIEM can collect all this data into one centralized location and correlate it for analysis to look for security and performance issues, as well negative trends all in real time.*

* **Aggregation**: Collecting data from disparate sources and organizing the data into a single format. Any device within a SIEM system that collects data is called collector or an aggregator.

* **Correlation**: Is the logic that looks at data from disparate sources and can make determinations about events taking place on your network. (Could be in-band or out-of-band, depending on the placement of the NIDS/NIPS).
	* **Alerts** - For notification if something goes bad.
	* **Triggering** - Exceeding thresholds.

* **Normalization**: Will actually create multiple tables / organize in such a way that the data can become more efficient and allows our analysis and reports tools to work better.

* **WORM - Write Once Read Many**: The concept being is that log files are precious, and a lot of times you might want to look at them in an archival way, so that we can use optical media like WORM drives to store them.

#### Most Popular SIEM Tools:

* **[Splunk](https://www.splunk.com/)**
	![splunk](https://www.splunk.com/content/dam/splunk2/images/screenshots/platform-journey/conflaunch/SS-UI-Light-Mode-frame.png)

<br>

* **[ArcSight](https://www.microfocus.com/en-us/products/siem-security-information-event-management/overview)**
	![arcsight](https://i.ytimg.com/vi/N7J0EwdbKF0/maxresdefault.jpg)

<br>

* **[ELK - Elastic Search, Log Stash and Kibana](https://www.elastic.co/what-is/elk-stack) (Open Source)**
	![elk](https://i.imgur.com/lydtCwn.png)

## <u>Identity and Access Management</u>
> **Identification, Authentication, Authorization**, and **Accounting** work together to manage assets securely.

### 1. **Identification**
*The information on credentials identifies the user.*

- **Example**: 
  - Your name, username, ID number, employee number, SSN etc.

### 2. **Authentication**
*“Prove you are the legitimate User". – Should always be done with Multifactor Authentication!*

* **Authentication Factors:**
	* Something you **know** (e.g. - password)
	* Something you **have** (e.g. - smart card)
	* Something you **are** (e.g. - fingerprint)
	* Something you **do** (e.g. - android pattern; manual signature)
	* **Somewhere** you are (e.g. - geolocation)
> 🛑 **Multi-factor authentication** *generally uses two of this examples (e.g. - Something you **Know(1)** and Something you **Have(2)**, never on same category*

### 3. Authorization concepts
*What are you allowed to access – We use Access Control models, what and how we implement depends on the organization and what our security goals are.*

* **Permissions**:
	* Applied to resources
* **Rights** / **Privileges**:
	* Assign at system level 
* **Authorization strategies**:
	* Least privileged
	* Separation of Duties

### 4. Accouting
*Trace an Action to a Subjects Identity:*
- Prove who/what a given action was performed by (non-repudiation); Logging

### Access Controls Models

<p align="center">
<img width="80%" src="https://security-architect.com/wp-content/uploads/FGA.png" />
</p>

* **Mandatory Access Control (MAC)**:
	* Every object gets a **label**
		- Confidential, secret, top secret, etc
	* The administrator decides who gets access to what security level; Users cannot change these settings
	* Used on old systems (e.g. Top Secret Gov. information)
* **Discretionary Access Control (DAC)**:
	* Used in most OS
	* Owner of the data defines access
	* Very flexible access control; Very weak security
* **Role-based Access Control (RBAC)**:
	* Access to resources is defines by a set of rules defined by a role in your organization/job function (Manager, Director etc)
	* Administrators provide access based on the role of the user
		- Rights are gained implicity instead of explicity
	* In Windows, use **Groups** to provide role-based access control
		- e.g. Admin Groups --> Rights and Perms,
		- Sales Group --> Rights and Perms


> ⚠️ **Access is defined by ACL, Access Control List**.
> ⚠️ **Implicity deny** prevents access unless specifically permitted. 


## Data Loss Prevention (DLP)
Data Loss Prevention (DLP) is the practice of **detecting and preventing data breaches, exfiltration, or unwanted destruction of sensitive data**. Organizations use DLP to protect and secure their data and comply with regulations.

* The DLP term refers to defending organizations against both data loss and data leakage prevention. 

#### Organizations typically use DLP to:

- Protect Personally Identifiable Information (PII) and comply with relevant regulations
- Protect Intellectual Property critical for the organization
- Achieve data visibility in large organizations
- Secure mobile workforce and enforce security in Bring Your Own Device (BYOD) environments
- Secure data on remote cloud systems

<p align="center">
<img width="90%" src="https://miro.medium.com/max/720/1*FG9LR51eySVRQJUjhVv-9A.png" />
</p>

## Data Backup
Data backup plays a crucial role in maintaining business continuity by helping org. recover from IT disasters, security breaches, application failures, human error, etc. 

All regulatory compliance such as COBIT, SSAE, SOCII, PCI-DSS, HIPPA, SOX, FINRA, FISMA, GDPR, etc. require business to maintain data backups of critical data for specified duration.

### Backup Strategies
1. Identifying the critical business data
2. Selecting the backup media
3. Selecting a backup technology
4. Selecting the appropriate RAID levels
5. Selecting an appropriate backup method

### 3 Backup methods
####  1. Cold backup 🔵

<img width="40%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/29c5e018095b135baec32aaece84a900a43b23ca/cc-cold.png"/>

- **Empty site, no hardware, no data, no people**
- **It takes weeks to bring online**
- Basic office spaces (e.g building, chairs, AC...)
- No operational equipment
- Cheapest recovery site

#### 2. Warm backup 🟡

<img width="40%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/29c5e018095b135baec32aaece84a900a43b23ca/cc-warm.png"/>

- **Somewhere between cold and hot - Just enough to get going (Big room with rack space, you bring the hardware)**
- Hardware is ready and waiting - you bring the software and data
- **It takes days to bring online**
- Operational equipment but little or no data

#### 3. Hot backup 🔴

<img width="40%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/29c5e018095b135baec32aaece84a900a43b23ca/cc-hot.png"/>

- **Exact replica of production systems**
- Applications and software are constantly updated
- Flip a switch and everyting moves
- **It take hours to bring online**
- Real-time synchronization
- Almost all data ready to go - often just a quick update
- Very expensive


## <u>Penetration Test - Basics</u>
> **This topic will be covered with details in [Chapter 14 - Pentesting](https://github.com/Samsar4/CEH-v10-Study-Guide/blob/master/modules/14-Pentesting.md).**

*A penetration test, colloquially known as a pen test, pentest or ethical hacking, is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.*

> ⚠️ **Not to be confused with a vulnerability assessment.**

- Clearly defined, full scale test of security controls
- Phases
  - **Preparation** - Contracts and team determined
  - **Assessment** - All hacking phases (reconnaissance, scanning, attacks, etc.)
  - **Post-Assessment** - Reports & conclusions
- Types
  - **Black Box** - Done without any knowledge of the system or network.
  - **White Box** - When the attacker have complete knowledge of the system provided by the owner/target.
  - **Gray Box** - When the attacker has some knowledge of the system and/or network

## Laws and Standards:

### **OSSTM Compliance**
**"Open Source Security Testing Methodology Manual"** maintained by ISECOM , defines three types of compliance.

- **Legislative** - Deals with government regulations (Such as SOX and HIPAA).
- **Contractual** - Deals with industry / group requirement (Such as PCI DSS).
- **Standards based** - Deals with practices that must be followed by members of a given group/organization (Such as ITIL ,ISO and OSSTMM itself).

- **OSSTM Controls**
  - **OSSTM Class A - Interactive Controls**
    - *Authentication* -  Provides for identification and authorization based on credentials.
    - *Indemnification* - Provided contractual protection against loss or damages.
    - *Subjugation* - Ensures that interactions occur according to processes defined by the asset owner.
    - *Continuity* -  Maintains interactivity with assets if corruption of failure occurs.
    - *Resilience* - Protects assets from corruption and failure.
  
- **OSSTM Class B  - Process Controls**
    - *Non-repudiation* - Prevents participants from denying its actions
    - *Confidentiality* - Ensures that only participants know of an asset
    - *Privacy* - Ensures that only participants have access to the asset
    - *Integrity* - Ensures that only participants know when assets and processes change
    - *Alarm*  - Notifies participants when interactions occur
      
### **PCI-DSS**
**"Payment Card Industry Data Security Standard"** Standard for organizations handling Credit Cards, ATM cards and other POS cards.

### **ISO 27001**
This International Standard has been prepared to provide requirements for establishing, implementing, maintaining and continually improving an information security management system.

### **ISO 27002 AND 17799**
Based on BS799 but focuses on security objectives and provides security controls based on industry best practice.

### **HIPAA**
**"Health Insurance Portability and Accountability Act"** a law that set's privacy standards to protect patient medical records and health information shared between doctors, hospitals and insurance providers.

### **SOX**
**"Sarbanes-Oxley Act" Law** that requires publicly traded companies to submit to independent audits and to properly disclose financial information.

### DMCA
**"The Digital Millennium Copyright Act"** is a 1998 United States copyright law that implements two 1996 treaties of the World Intellectual Property Organization. It criminalizes production and dissemination of technology, devices, or services intended to circumvent measures that control access to copyrighted works.

### **FISMA** 
**"Federal Information Security Modernization Ac Of 2002"** A law updated in 2004 to codify the authority of the Department of Homeland Security with regard to implementation of information security policies. *(For GOV. agencies)*

### **NIST-800-53**
Catalogs security and privacy controls for federal information systems, created to help implementation of FISMA.
  
### **FITARA**
**"Federal Information Technology Acquisition Reform Act"** A 2013 bill that was intended to change the framework that determines how the US GOV purchases technology.

### **COBIT**
**"Control Object for Information and Related Technology"** IT Governance framework and toolset, created by ISACA and ITGI

### **GLBA**
**"U.S Gramm-Leach-Bliley Act"** Law that protects the confidentiality and integrity of personal information that is collected by financial institutions.

### **CSIRT**
**"Computer Security Incident Response Team"** CSIRT provided a single point of contact when reporting computer security incidents

### **ITIL**
**"Information Technology Infrastructure Library"** - An operational framework developed in the '80s that standardizes IT management procedures