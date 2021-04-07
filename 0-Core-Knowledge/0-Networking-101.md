# Networking 101
> ⚠ Networking 101 is a simple introduction to the most important network concepts for ethical hacking. This subject is huge and is recommended to learn from different sources, courses and certifications like [Cisco CCNA](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html) or [CompTIA Network+](https://www.comptia.org/certifications/network).


* **This module is a mix of theory and practical, following the order:**
    1. Introduction 101
    2. IP Addresses
    3. Subnetting
    4. MAC Addresses
    5. TCP, UDP and 3-Way-Handshake
    6. Protocols, Services and Ports
    7. OSI Model

# 1. Introduction

## So, what the heck is Network?
A network consists of two or more computers that are linked in order to share resources (such as printers), exchange files, or allow electronic communications. The computers on a network may be linked through cables, telephone lines, radio waves, satellites, or infrared light beams. 

**Two very common types of networks include: LAN (Local Area Network) and WAN (Wide Area Network)**

## Network Topologies
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
2. For Windows machine type `ipconfig` on Cmd Prompt or Powershell.

![inet](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5a56240010acbc33026413ad6b5c6f66e9450413/inet.png)


- `inet` The inet (Internet protocol family) show the local ip address. This is IP version 4 (IPv4) Using 32-bit decimal number.
- `inet6` Is a new version of IP (IPv6), using 128 bits hexadecimal value.

- `192.168.64.3`


IPv4 - inet decimal notation
    - 32bits / * 4 octects - 8bits

IPv6 - hexadecimal notation

Layer 3 

...

[in progress]