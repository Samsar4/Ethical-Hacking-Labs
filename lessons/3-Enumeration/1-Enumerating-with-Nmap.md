# Enumerating Services 
Extracting user names, machine names, network resources, shares, and services from a system.

### Objectives:
* Scan all the machines on a given network or subnet.
* List all alive hosts.
* Determine open ports on a given node.
* Find if any port has firewall restriction.
* Enumerate all the services running on the port along with their respective versions.

### Requisites:
* Windows Server 2012 or 2016 machine.
* Kali Linux machine.
* Another version of Windows (7, 8, 10 or Server).

## Ping Sweep - `Nmap`
You can perform a ping sweep in Nmap by using ping scan only (`-sP`) on the whole subnet.

The ping sweep on Nmap will scan all the nodes on the subnet and starts displaying all the hosts that are up and running, along with their respective MAC Addresses and device information.

Open a new Terminal window on your Kali Linux and type::

`nmap -sP 10.0.2.1/24`

```
Nmap scan report for 10.0.2.1
Host is up (0.0011s latency).
MAC Address: 22:44:99:33:11:55 QEMU virtual NIC)
Nmap scan report for 10.0.2.2
Host is up (0.00084s latency).
MAC Address: 22:44:99:33:11:55 (QEMU virtual NIC)
Nmap scan report for 10.0.2.3
Host is up (0.00097s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.22
Host is up (0.00075s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.23
Host is up (0.00066s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.37
Host is up (0.00051s latency).
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)
Nmap scan report for 10.0.2.15
Host is up.
Nmap done: 256 IP addresses (7 hosts up) scanned in 2.29 seconds
```

## Ping Sweep - `Bash`
I will show another way to check live hosts on the subnet with a little bit of **Bash scripting**. You can scroll to the next section if you are not interested.

### 1. Test the one-liner command to grab only IP addresses
First of, I will use the `ping` command on a given subnet range, to check if the hosts are alive. <br>
**The goal is: ping every single host on a given range with a clean output for it.**

The clean output part is because when we use `ping` command, they return a bunch of strings, the goal is remove all the unnecessary information and stick only to the IP addresses.
**Example:**

`ping -c 1 8.8.8.8`

```
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=2 ttl=54 time=155 ms
--- 8.8.8.8 ping statistics ---
1 packets transmitted, 0 received, 100% packet loss, time 0ms
```
We only need the second line of this output starting with **"64 bytes(...)"** that have the IP address of the alive host.
```
64 bytes from 8.8.8.8: icmp_seq=2 ttl=54 time=155 m
``` 

**Grabbing only IP addresses:**

`ping -c 5 8.8.8.8 | grep "64" | cut -d " " -f 4 | tr -d ":" ; > iptest.txt`

```sh
8.8.8.8
8.8.8.8
8.8.8.8
8.8.8.8
8.8.8.8
```
Breaking down the one-liner command (by pipe):
1. Ping the IP 5 times;
2. Grep the first string characters of the line (**64** bytes...);
3. Cut the whitespaces on 4 slices to reach the IP string;
4. Use translate command to trim/delete the ":" symbol;
5. Export the results to a .txt file;

### 2. Transforming into script

1. Create a file .sh (pingsweep.sh)

```sh
#!/bin/bash 
 
if [ "$1" == "" ]
then
echo "[-] You forgot the IP address!"
echo "[-] Syntax: ./ipsweep.sh 10.10.10"

else
for ip in `seq 1 254`; do 
ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done
fi
```
Is more convenient to take the user's input on the first three octets and the last octet is the loop (1 - 254).<br>
**Input example: 192.168.1**

The script below is very barebone, have one conditional statement for grab the correct user's input, a loop through the subnet range, and the one-liner command using the user's input with the loop variable.

2. Save the file, change the permissions and make executable:

`chmod 770 pingsweep.sh`<br>
`chmod +x pingsweep.sh`

3. Test it out:

`./pingsweep.sh 10.0.2 > ping-results.txt`<br>
`cat ping-results.txt`
```
10.0.2.3
10.0.2.1
10.0.2.15
10.0.2.22
10.0.2.23
10.0.2.37
```

## Perform Stealth Syn Scan
Now, choose and IP address from the results, and perform a **stealthy syn scan** on **Nmap**.

`nmap -sS <Target IP Address>`

```
...
Host is up (0.00092s latency).
Not shown: 977 closed ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
389/tcp   open  ldap
443/tcp   open  https
...
```

SYN scan is the default and most popular scan option for good reason. It can be performed quickly, scanning thousands of ports per second on a fast network not hampered by intrusive firewalls.


## Stealth Syn Scan with Version and OS Detection


Version Detection collects information about the specific service running on an open port, including the product name and version number. This information can be critical in determining an entry point for an attack

Nmap will perform a stealth scan with version detection along with OS detection.

`nmap -sSV -O <Target IP Address> -oN Enumeration.txt`

```
Host is up (0.0017s latency).
Not shown: 977 closed ports
PORT      STATE SERVICE            VERSION
53/tcp    open  domain?
80/tcp    open  http               Microsoft IIS httpd 8.5
88/tcp    open  kerberos-sec       Microsoft Windows Kerberos (server time: 2019-12-06 20:56:57Z)
135/tcp   open  msrpc              Microsoft Windows RPC
139/tcp   open  netbios-ssn        Microsoft Windows netbios-ssn
389/tcp   open  ldap               Microsoft Windows Active Directory LDAP (Domain: Lab.local, Site: Default-First-Site-Name)
443/tcp   open  ssl/https?
```
The `-oN` stands for output / export the results into a text file that will save in your home /root/ directory with name `Enumeration.txt`.

***

### Conclusion
By performing services enumeration, an attacker might attempt to find vulnerabilities associated with that particular application and exploit them to gain access to the target machine.

