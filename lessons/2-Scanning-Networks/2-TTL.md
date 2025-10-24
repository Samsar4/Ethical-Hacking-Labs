#  Identify Target System's OS with TTL (Time-to-Live) and TCP Windows Sizes using Wireshark
Identifying the OS used on the target host allows an attacker to figure out the vulnerabilities the system have and the exploits that might work on a system to further perform additional attacks.

Capture the response generated from the target machine using packet-sniffing tools such as Wireshark and watch the TTL and TCP window size.

### Objectives:
* Identify OS's by TTL and TCP window size using Wireshark.

### Requirements:
* Linux Ubuntu machine.
* Windows 7 machine.
* Windows 10 machine (Target running Wireshark).

## Overview of Banner Grabbing:
**There are two types of banner grabbing techniques: active and passive.**

Banner grabbing or OS fingerprinting is the method to determine the OS running on a remote target system.

Operating System | Time-to-Live(TTL) | TCP Window Size
--- | --- | ---
Linux(Kernel 2.4 and 2.6) | 64 | 5840
FreeBSD | 64 | 65535
OpenBSD | 64 | 65535
Google customized Linux | 64 | 5720
Windows XP | 128 | 65535
Windows 7, Vista and Server 2008 | 128 | 8192
Cisco Router IOS 12.4 | 255 | 4128

## Using Wireshark to Detect TTL 
1. Open Wireshark on your Windows 10 machine, select the correct interface and start capturing. (The interface may differ from your lab environment).

![Wireshark Start](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c68b799fcf3e60f75c0111fbcee309cd630def61/start-wireshark-1.png "Wireshark Start!")

2. Go to the Ubuntu machine and start pinging the Windows 10 machine.

`ping -c 10 <Target IP Address[Windows 10]>`

![Ubuntu Ping](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c68b799fcf3e60f75c0111fbcee309cd630def61/ping-ubuntu-2.png "Ubuntu Ping")

3. Go back to the Wireshark and inspect the ICMP protocol by selecting the packet frame captured; Expand the Internet Protocol Version node in the packet details, you will see the TTL.

TTL value recorded as `64` means that the ICMP request came from a Linux-based machine.

![Wireshark Ubuntu Ping](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b191cdf69129f7cfa87ddbaae31340b37c2b1bbc/wireshark-capturing-ubuntu64-3.png "Capturing Ubuntu ICMP")

4. Refresh the Wireshark by starting another capture and go to your Windows 7.

You will repeat the same process, but with the Windows 7 machine. Open the Prompt or Powershell and ping the Windows 10 machine running Wireshark.

`ping <Target IP Address>`

5. Go back to the Wireshark on Windows 10 machine and inspect again the same TTL information.

TTL value recorded as `128` means that the ICMP request came from a Windows-based machine.

![Wireshark windows ping](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b191cdf69129f7cfa87ddbaae31340b37c2b1bbc/wireshark-capturing-win7-128-4.png)