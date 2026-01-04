# Information Gathering using Metasploit
The Metasploit Framework is a tool that provides information about secuirty vulnerabilities and aids in penetration testing and IDS signature development.<br>
_Official repository:_ https://github.com/rapid7/metasploit-framework

**Metasploit version: 5.0.59-dev** 

Metasploit can be used to test the vulnerability of computer systems or to break into remote systems. **This lab will demonstrate extracting information using Metasploit Framework.**

## Metasploit overview:
Metasploit Framework is an open-source project that facilitates the task of attackers, exploit and payload writers. A major advantage of the framework is the moduler approach, allowing the combination of any exploit with any payload.

### Requirements:
* Kali Linux virtual machine.

### Objectives:
* How to identify vulnerabilities and information disclosures.
* Extract accurate information about a network.
***

## Metasploit setup
Log into **Kali Linux** machine and open a **Terminal** window.

Start PostgreSQL database service to link with Metasploit:

`service postgresql start`

Now type `msfconsole` to launch Metasploit.

`msfconsole`

Check if Metasploit is connected to the database successfully:

`db_status`
```
[*] postgresql selected, no connection
```
If you got this message, it means that database did not connected to msf properly. To fix this issue, type `exit` to quit Metasploit. Then, to initiate the database, type:

`msfdb init`

Then, restart the postgresql service:

`service postgresql restart`

Start Metasploit again and run the `db_status` to check the database status:

`msfconsole`<br>
`db_status`
```
[*] Connected to msf. Connection type: postgresql.
```
Now the database is connected successfully to the msf.

## Find alive hosts
I recommend to boot up a couple VMs in your Lab. In my case I fired up:
* Ubuntu Metasploitable
* Windows 7 SP1
* Windows Server 2012 R2

To scan the subnet, we can use **Nmap**:

`nmap -O -oX Test 10.0.2.0/24`

Nmap starts scanning the subnet and showing the results on the screen. The `-oX Test` Nmap command stands for **output in XML** file called **Test**. 

We can import the Nmap results from the database:

`db_import Test`  

To see the hosts and their details discovered by Nmap type:

`hosts`<br>
...<br>
_(Check the OS versions, IP and MAC addresses)._

I will select the Windows Server 2012, that I scanned to check the services running on this system.

`db_nmap -sS -A 10.0.2.28`

Nmap starts to footprint the system and list out the OS details. 

The `db_nmap` start the Nmap scan and the results would than be stored automatically in our database.

Type `services` or `db_services` to get the whole list of the services running on the host.

`db_services`<br>

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2734644f73fe43d2b99b56a03fb4bab3b01acf20/services-nmap-scan.png "Nmap Services Scan")

## Scan for open ports and services
Search for **portscan** modules:

`search portscan`
```
#  Name                                    Disclosure Date  Rank    Check  Description
-  ----                                    ---------------  ----    -----  -----------
0  auxiliary/scanner/http/wordpress_pingback_access         normal  Yes    Wordpress Pingback Locator
1  auxiliary/scanner/natpmp/natpmp_portscan                 normal  Yes    NAT-PMP External Port Scanner
2  auxiliary/scanner/portscan/ack                           normal  Yes    TCP ACK Firewall Scanner
3  auxiliary/scanner/portscan/ftpbounce                     normal  Yes    FTP Bounce Port Scanner
4  auxiliary/scanner/portscan/syn                           normal  Yes    TCP SYN Port Scanner
5  auxiliary/scanner/portscan/tcp                           normal  Yes    TCP Port Scanner
6  auxiliary/scanner/portscan/xmas                          normal  Yes    TCP "XMas" Port Scanner
7  auxiliary/scanner/sap/sap_router_portscanner             normal  No     SAPRouter Port Scanner
```

Select the **scanner/portscan/syn**:

`use scanner/portscan/syn`

Now we need to see the module options:

`show options`
```
Name       Current Setting  Required 
----       ---------------  -------- 
BATCHSIZE  256              yes      
DELAY      0                yes      
INTERFACE                   no       
JITTER     0                yes      
PORTS      1-10000          yes      
RHOSTS                      yes      
SNAPLEN    65535            yes      
THREADS    1                yes      
TIMEOUT    500              yes      
```
Set the `RHOSTS` to the target and `THREADS` to `100`

`set RHOSTS 10.0.2.23`<br>
`set THREADS 100`

Type `run` to launch the module.

```
[+]  TCP OPEN 10.0.2.23:53
[+]  TCP OPEN 10.0.2.23:80
[+]  TCP OPEN 10.0.2.23:88
[+]  TCP OPEN 10.0.2.23:135
[+]  TCP OPEN 10.0.2.23:139
[+]  TCP OPEN 10.0.2.23:389
[+]  TCP OPEN 10.0.2.23:443
[+]  TCP OPEN 10.0.2.23:445
[+]  TCP OPEN 10.0.2.23:464
[+]  TCP OPEN 10.0.2.23:593
[+]  TCP OPEN 10.0.2.23:636
...
```
This module will enumerate every open TCP services using a raw SYN scan. 

Next scan, let's find out the SMB version.<br>
Load the **scanner/smb/smb_version** module:

`use scanner/smb/smb_version`

Type `show options` to see the configuration.

Set the `RHOSTS` to the target and `THREADS` to `100`

`set RHOSTS 10.0.2.23`<br>
`set THREADS 100`

Type `run` to launch the module.

Now type `hosts` and observe the field **os_flavor** of the host you scanned in the subnet.

Conclusion:<br>
You can collect different error messages to learn the vulnerabilities, and note the information disclosed about the network.