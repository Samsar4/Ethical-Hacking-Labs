# Networking 101
> ⚠ Networking 101 is a simple introduction to the most important network concepts for ethical hacking. This is a huge subject and is recommended to learn from different sources like courses, books and certifications like [Cisco CCNA](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html) or [CompTIA Network+](https://www.comptia.org/certifications/network). Also there is a ton of **free training** out there, I recommend to [check this list](https://freetraining.dfirdiva.com/free-networking-training) later.

### **This module have a little bit more theory than practice. The content follows the order:**

1. Introduction
2. IP Addresses
3. MAC Addresses
4. TCP, UDP and 3-Way-Handshake
5. Protocols, Services and Ports
6. OSI Model
7. Subnetting

# 1. Introduction

## So, what the heck is a Network?
A network consists of two or more computers that are linked in order to share resources. Computer networks are the basis of communication in IT. They are used in a huge variety of ways and can include many different types of network. A computer network is a set of computers that are connected together so that they can share information. The earliest examples of computer networks are from the 1960s, but they have come a long way in the half-century since then.

![net](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5edc8fbef915a17c93fa91c95877134c8fac324c/net2.jpg)
<small>LAN Network Topology - SOHO / Small Home Network</small>

**Two very common types of networks include: LAN (Local Area Network) and WAN (Wide Area Network)**

## Topologies
There are many different types of network, which can be used for different purposes and by different types of people and organization. Here are some of the network types that you might come across:

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

## Common Terms in Networking
* **IP (internet protocol) address**: the network address of the system across the network, which is also known as the Logical Address).

* **MAC address**: the MAC address or physical address uniquely identifies each host. It is associated with the Network Interface Card (NIC).

* **Open system**: an open system is connected to the network and prepared for communication.

* **Closed system**: a closed system is not connected to the network and so can't be communicated with.

* **Port**: a port is a channel through which data is sent and received.

* **Nodes**: nodes is a term used to refer to any computing devices such as computers that send and receive network packets across the network.

* **Network packets**: the data that is sent to and from the nodes in a network.

* **Routers**: routers are pieces of hardware that manage router packets. They determine which node the information came from and where to send it to. A router has a routing protocol which defines how it communicates with other routers.

* **‍Network address translation (NAT)**: a technique that routers use to provide internet service to more devices using fewer public IPs. A router has a public IP address but devices connected to it are assigned private IPs that others outside of the network can't see.

* **Dynamic host configuration protocol (DHCP)**: assigns dynamic IP addresses to hosts and is maintained by the internet service provider.

* **Internet service providers (ISP)**: companies that provide everyone with their internet connection, both to individuals and to businesses and other organizations.

# 2. IP Addresses
## What is an IP Address (Internet Protocol)?
![ip](https://media.fs.com/images/community/upload/wangEditor/201912/24/_1577182449_2uLs0pQcuT.jpg)

An IP address is a unique address that identifies a device on the internet or a local network. IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network.

## Check your local IP address

1. If you are using Linux or MacOS you can open your terminal and type `ifconfig` command
2. For Windows machine you can open up the cmd prompt or powershell, then type `ipconfig /all`

![inet](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5a56240010acbc33026413ad6b5c6f66e9450413/inet.png)


- inet IPv4: `192.168.64.3`
   - `inet` --> The inet (Internet protocol family) show the local IP address. This is IP version 4 (IPv4) Using 32-bit decimal number.
- inet6 IPv6: `fe80::c83b:ccff:fe0e:1069`

   - `inet6` --> Is a new version of IP (IPv6), using 128 bits hexadecimal value.
- `ether` --> MAC address - unique identifier assigned to a network interface controller (NIC)



## More about the IPv4 decimal value:

``` 
IPv4 = 32 bits range (4 octets of 8 bits, from 0-255 each(4))

11000000.10101000.01000000.00000011   [IPv4 binary]
   192  .   168  .   64   .  3        [IPv4 decimal]
``` 

### The arithmetic behind IPv4:

- One octet have 8 bits:

0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 | 0 or 1 
-|-|-|-|-|-|-|-
8th bit | 7th bit | 6th bit | 5th bit | 4th bit | 3rd bit | 2nd bit | 1st bit
128 (2^7) | 64 (2^6) | 32 (2^5) | 16 (2^4) | 8 (2^3) | 4 (2^2) | 2 (2^1) | 1 (2^0)


```
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
* Only the `8th` and `7th` bit is "on", meaning the decimal value is the final sum of these values:  `128 + 64 = 192`

⚠️ **Why? Computers see everything in terms of binary; true and false, on and off, 0 and 1.**


## IPv4 and IPv6
![ipv](https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/IPv4%20vs.%20IPv6%20What%E2%80%99s%20the%20Difference/IPv4-vs-IPv6.png?width=2750&name=IPv4-vs-IPv6.png)



## Private and Public IP Addresses
All IPv4 addresses can be divided into two major groups: **global (or public, external)** - this group can also be called 'WAN addresses' — those that are used on the Internet, and **private (or local, internal) addresses** — those that are used in the local network (LAN).

![priv-pub](https://wiki.teltonika-networks.com/wikibase/images/thumb/a/a7/Sip.png/1100px-Sip.png)

## More about private IP addresses:
Private (internal) addresses are not routed on the Internet and no traffic can be sent to them from the Internet, they only supposed to work within the local network.
Private addresses include IP addresses from the following subnets:

![private-ip](https://66.media.tumblr.com/02a533c1d55ca0ba83e0176168df06ec/tumblr_inline_o4m1taQugo1u4ytoo_1280.jpg)

## NAT - Network Address Translation
NAT stands for network address translation. It’s a way to map multiple local private addresses to a public one before transferring the information. Organizations that want multiple devices to employ a single IP address use NAT, as do most home routers. 

![nat2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8275f73b57bdcb982b1d69aa8d213d2bdb384657/nat2.png)

1. **Static NAT**

   When the local address is converted to a public one, this NAT chooses the same one. This means there will be a consistent public IP address associated with that router or NAT device.

2. **Dynamic NAT**

   Instead of choosing the same IP address every time, this NAT goes through a pool of public IP addresses. This results in the router or NAT device getting a different address each time the router translates the local address to a public address.

### ⚠️ IP Addresses operates on **Level 3 of OSI Model**

*Note: This module will cover OSI model later.*

![osi3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b9d7f33be654d299f6618feeacb97fc5fd5bd7d2/OSI_L3.png)

# 3. MAC Addresses 

-  MAC (Media Access Control) address is provided by NIC Card'd manufacturer and gives the physical address of a computer.

![macphys](https://i1.wp.com/learntomato.flashrouters.com/wp-content/uploads/MAC-address-hardware.jpg?resize=560%2C315&ssl=1)


The first three bytes of a MAC address were originally known as **OUI’s, or Organizational Unique Identifiers.  Each manufacturer of networking equipment was assigned an OUI, and was free to assign their own numbers in that block.**

```
   OUI     NIC
    |       |
________ ________
00:0c:29:99:98:ca
```

1. Check your MAC address use the command `ifconfig` (Linux) or `/ipconfig` (Windows)
![mac](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/214242916f8947f09fc15d5bdde6a668fd4a4c1f/mac2.png)

2. Check the **first three bytes** of your address. The first three bytes from image above is `00:0c:29` 

3. Validate the information by doing a MAC Address / OUI Lookup on the internet. For this example I'm using https://aruljohn.com/
![mac2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/214242916f8947f09fc15d5bdde6a668fd4a4c1f/mac2lookup.png
)

4. As you can see the OUI lookup identify a virtual network interface provided by VMware 

*So, to summarize, the **first three bytes** are assigned to a manufacturer of networking equipment and the manufacturer assigns the last three bytes of an address.*

### ⚠️ MAC Addresses operates on Level 2 of OSI Model
![osil2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b9d7f33be654d299f6618feeacb97fc5fd5bd7d2/OSI_L2.png)

## TCP, UDP and 3-Way-Handshake
-
## Protocols, Services and Ports
-
## OSI Model
-
## Subnetting
-
