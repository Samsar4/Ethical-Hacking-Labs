# Basic Network Troubleshooting using MegaPing (Windows)
MegaPing is an ultimate toolkit that provides complete essential utilities for IT administrators and solution providers.

Official site: http://www.magnetosoft.com/product/megaping/download

With MegaPing utility, you can detect live hosts, open ports of the system in the network. You can also perform various network troubleshooting activities with the help of network utilities integrated into it, such as DNS lookup name, DNS list hosts, Finger, host monitor, IP scanner, NetBios scanner, network time synchronizer, ping, port scanner, share scanner, traceroute, and whois.

### Objectives:
* Detect live hosts and open ports of systems in the network.

### Requirements:
* Windows 7, 8 or 10.
* Windows Server 2012/2016 (target).

***

After the installation, launch the application on your Windows 10 machine.

## Scanning for Active Hosts
This software is very simple to use. To start a scan click on **IP Scanner** on the left panel.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2e4f6b59a182462ca77ffd6888b14e0eeede313d/megaPing.png "MegaPing")

* Specify the **IP Range** of your network lab, then click start.
* Note the check box on the right side, you can view the **MAC addresses** from the hosts you harvested.

MegaPing list down all the IP addresses under the specified target range with their **TTL**, **Status**(dead or alive), and their statistics. 

## Perform Traceroute on a Target

* Right-click an IP address, and click **Traceroute**.

This action will perform a Traceroute, displaying the number of hops taken by the host machine to reach the target.

## Perform Port Scanning on the Target Host
* Next select the **Port Scanner** on the left pane.
* Enter the IP address of the target machine under **Destination Address List** section, and click **Add**. 

This action will list all the ports associated with the target, along with the **port type, keyword, risk, and description**, as shown in the following screenshot:

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c7ebf540a2bb39c7a989b87716bc23fd1151dbb8/megaPing-PortScanner.png "MegaPing Port Scanner")

Note: You also can generate a report in HTML file on every scan.

**Conclusion**: MegaPing security scanner checks your network for potential vulnerabilities that could be used for a bad actor. 