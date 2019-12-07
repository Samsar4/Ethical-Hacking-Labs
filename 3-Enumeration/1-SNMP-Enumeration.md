# SNMP Enumeration using `snmp_enum`
**snmp_enum** module in Metasploit allows enumeration of any devices with SNMP protocol support. It supports hardware, software, and network information. The default community used is 'public'.

SNMP enumeration is the process of enumerating the users accounts and devices on a SNMP enabled computer. 

SNMP service comes with two passwords, which are used to configure and access the SNMP agent from the management station. They are: Read community string and Read/Write community string. These strings (passwords) come with a default value, which is same for all the systems. 
They become easy entry points for attackers if left unchanged by administrator. 

Attackers enumerate SNMP to extract information about network resources such as hosts, routers, devices, shares(...) Network information such as ARP tables, routing tables, device specific information and traffic statistics.

### Objectives:
Enumeration:
* Connected devices
* Hostname and information
* Domain
* Hardware and storage information
* Software components
* Total memory

### Requirements:
* Kali Linux machine (Attacker)
* Windows Server 2012 / 2016 (Victim/Target)
* Ubuntu [BeeBox](https://www.vulnhub.com/entry/bwapp-bee-box-v16,53/) (Victim/Target)

## Test for SNMP Port Status
First we need to find out whether the SNMP port is opened. **SNMP uses port 161 by default**. To check this information,  we first need to run Nmap port scan.

**Note**: Remember to activate the SNMP service on your Windows Server.

`-sU`: Scans UDP port.<br>
`-p`: Port scan range.

`nmap -sU -p 161 <Target IP Address>`

```
Nmap scan report for 10.0.2.38
Host is up (0.00070s latency).

PORT    STATE SERVICE
161/udp open  snmp
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
```

## Enumerate Community String
To perform SNMP enumeration, you have many tools available.<br>
This tutorial demonstrate two ways to do the same thing: using **Metasploit** and **snmp-check**.

On Metasploit, you can use **snmp_enum** module: 

`auxiliary/scanner/snmp/snmp_enum`

The other way to do this is to use snmp-check.<br>
snmp-check is a package built-in on Kali Linux, just open the terminal and type:

`snmp-check <Target IP Address>`

Both methods enumerates the target machine information, and retrieve the same **comprehensive list** displaying the **System Information**. These tools supports the following enumerations:
* Host IP
* Hostname
* Hardware description
* System uptime
* SNMP uptime
* Domain if system is connected in Domain
* User Accounts
* MAC Addresses
* Running Processes
* [Etc](https://tools.kali.org/information-gathering/snmp-check)