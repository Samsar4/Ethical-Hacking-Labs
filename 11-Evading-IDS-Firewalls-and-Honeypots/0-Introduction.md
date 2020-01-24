# Evading IDS, Firewalls and Honeypots

## Intrusion Detection System - IDS 
An intrusion detection system (IDS) is a device or software application that monitors a network or systems for malicious activity or policy violations. Any intrusion activity or violation is typically reported either to an administrator or collected centrally using a security information and event management (SIEM) system. A SIEM system combines outputs from multiple sources and uses alarm filtering techniques to distinguish malicious activity from false alarms.

### Comparsion with Firewalls
Although they both relate to network security, an IDS differs from a firewall in that a traditional network firewall (distinct from a Next-Generation Firewall) uses a static set of rules to permit or deny network connections. It implicitly prevents intrusions, assuming an appropriate set of rules have been defined. Essentially, firewalls limit access between networks to prevent intrusion and do not signal an attack from inside the network. An IDS describes a suspected intrusion once it has taken place and signals an alarm. An IDS also watches for attacks that originate from within a system. This is traditionally achieved by examining network communications, identifying heuristics and patterns (often known as signatures) of common computer attacks, and taking action to alert operators. A system that terminates connections is called an intrusion prevention system, and performs access control like an application layer firewall.


## What is a honeypot?

<p align="center">
  <img width="74%" src="https://i.stack.imgur.com/xt6H5.jpg" />
</p>

Honeypots are decoy systems or servers deployed alongside production systems within your network. When deployed as enticing targets for attackers, honeypots can add security monitoring opportunities for blue teams and misdirect the adversary from their true target. Honeypots come in a variety of complexities depending on the needs of your organization and can be a significant line of defense when it comes to flagging attacks early. This page will get into more detail on what honeypots are, how they are used, and the benefits of implementing them.

Source: 
* https://www.rapid7.com/fundamentals/honeypots/
* https://en.wikipedia.org/wiki/Intrusion_detection_system