# Networking 101
> ⚠ Networking 101 is a simple introduction to the most important network concepts for ethical hacking. This is a huge subject and is recommended to learn from different sources like courses, books and certifications like [Cisco CCNA](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html) or [CompTIA Network+](https://www.comptia.org/certifications/network). Also there is a ton of free training out there, I recommend to [check this list](https://freetraining.dfirdiva.com/free-networking-training) later.

### **This module is a mix of theory and practice, following the order:**
1. Introduction
2. IP Addresses
3. Subnetting
4. MAC Addresses
5. TCP, UDP and 3-Way-Handshake
6. Protocols, Services and Ports
7. OSI Model

# 1. Introduction

## So, what the heck is a Network?
A network consists of two or more computers that are linked in order to share resources (such as printers), exchange files, or allow electronic communications. The computers on a network may be linked through cables, telephone lines, radio waves, satellites, or infrared light beams. 

**Two very common types of networks include: LAN (Local Area Network) and WAN (Wide Area Network)**

## Topologies
The actual organization of a network in terms of how is the data moving around and the best way to do it.

### LAN - Local Area Network

* A LAN is a network that has a logical and physical borders that a computer can broadcast

<p align="center">
<img width="70%" src="https://www.geocities.ws/alcantara97/starhttt.gif" />
</p>

### WAN - Wide Area Network

* WAN is a multiple LANs or additional WANs with routing functionality for interconnectivity.

<p align="center">
<img width="70%" src="https://gist.github.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/a3f9b5f3f243467208da83e0d0e543b32233c5d6/wan-topo.jpg" />
</p>

### MAN - Metropolitan Area Network 

<p align="center">
<img width="70%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f37cec4e00f726cb4be3661f20ccad77751e003a/man-topo.jpg" />
</p>

### Internet
Connecting WANs through WANs until complete the entire world = Internet.

* The protocol which runs the internet is TCP/IP
* As long you're using legitimate IPv4 address or IPv6
<p align="center">
<img width="70%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8c176b8a798fb5749c4391c45015ee5d14d56f13/internet.png" />
</p>

### Intranet
If you're using the TCP/IP stack and making your own LAN or WAN = Intranet.

* Intranet is a private network which still runs TCP/IP

<p align="center">
<img width="70%" src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8c176b8a798fb5749c4391c45015ee5d14d56f13/intranet.png" />
</p>


# 2. IP Addresses
## What is an IP Address (Internet Protocol)?
An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.

## Check your local IP address

1. If you are using Linux or MacOS you can open your terminal and type `ifconfig` command
2. For Windows machine you can open up the cmd prompt or powershell, then type `ipconfig /all`.

![inet](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5a56240010acbc33026413ad6b5c6f66e9450413/inet.png)


- `inet` --> The inet (Internet protocol family) show the local IP address. This is IP version 4 (IPv4) Using 32-bit decimal number.
- `inet6` --> Is a new version of IP (IPv6), using 128 bits hexadecimal value.
- `ether` --> MAC address - unique identifier assigned to a network interface controller (NIC)

## More about the IPv4 decimal value:

### The arithmetic behind
 
0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 
-|-|-|-|-|-|-|-
8th bit | 7th bit | 6th bit | 5th bit | 4th bit | 3rd bit | 2nd bit | 1st bit
128 (2^7) | 64 (2^6) | 32 (2^5) | 16 (2^4) | 8 (2^3) | 4 (2^2) | 2 (2^1) | 1 (2^0)


``` 
IPv4 = 32 bits range (4 octets of 8 bits, from 0-255 each(4))

11000000.10101000.01000000.00000011   [IPv4 binary]
   192  .   168  .   64   .  3        [IPv4 decimal]


For example, the left octet 192 from binary to decimal:

 0   0   0   0   0   0   0   0 
 |   |   |   |   |   |   |   |
128  64  32  16  8   4   2   1  
 |   |   |   |   |   |   |   |
 1   1   0   0   0   0   0   0 
 |   |   |   |   |   |   |   |
128+ 64+ 0+  0+  0+  0+  0+  0 = 192

```
* Take the IP: `192.168.64.3`
* The first octet `192` in 8bit binary is `11000000`.
* Only the `8th` and `7th` bit is "on", meaning the decimal value is the final sum of these values:  `128 + 64 = 192`


⚠️ **Why? Computers see everything in terms of binary; true and false, on and off, 0 and 1.**

## IPv4
* `192.168.64.3`
* Decimal format
* 32 bits range
* 2^32 = 4,294,967,296 *(possible amount of IPv4 addresses available)*

## IPv4
* `fe80::c83b:ccff:fe0e:1069`
* Hexadecimal format
* 128 bits range
* 2^128 = 340,282,366,920,938,463,463,374,607,431,768,211,456


## NAT - Network Address Translation

![private-ip](https://66.media.tumblr.com/02a533c1d55ca0ba83e0176168df06ec/tumblr_inline_o4m1taQugo1u4ytoo_1280.jpg)
Layer 3 

...

[in progress]