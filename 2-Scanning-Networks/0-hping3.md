# UDP and TCP Packet Crafting Techniques using `hping3`
Hping3 is a scriptable program that uses the [Tcl language](https://www.tcl.tk/about/language.html), whereby packets can be received and sent via a binary or string representation describing the packets.

During network scanning, your first task will be to scan the target network to determine all possible open ports, live hosts, and running services. Knowledge of packet-crafting techniques may help you to scan the network beyond the firewall or IDS.

### Objectives:
* How to perform network scanning and packet crafting using hping3 commands.

### Requirements:
* Kali Linux (Attacker machine)
* Windows 10 (Target machine) 

## Overview of Packet Crafting
Packet crafting is a technique that allows you to find vulnerabilities or entry points into a target network. This can ben performed by creating custom network packets to test network devices and behavior.
***

**Note:** Before beginning this lab, install the Wireshark in Windows 10 machine.

## hping3 basics
Login to Kali Linux and launch the Terminal.<br>
Use `hping3 -h` to show all the commands. We will foccus on a couple of them so don't worry.

Let's start!

`hping3 -c 3 <Target IP address>`
```
...
3 packets transmitted, 3 packets received, 0% packet loss
...
```
Note on the bottom of the output, the 3 packets were sent and received. You should get this response.

`-c` stands for packet count. Means that we only want to send three packets to the target machine.

Next we will send a SYN flag scan with a port range.

`hping3 --scan 1-3000 -S <Target IP address>`
```
Scanning 10.0.2.15 (10.0.2.15), port 1-3000
3000 ports to scan, use -V to see all the replies
+----+-----------+---------+---+-----+-----+-----+
|port| serv name |  flags  |ttl| id  | win | len |
+----+-----------+---------+---+-----+-----+-----+
  135 epmap      : .S..A... 128 62018 65392    46
  139 netbios-ssn: .S..A... 128 63042  8192    46
  445 microsoft-d: .S..A... 128 52291 65392    46
All replies received. Done.
Not responding ports: 
```
`--scan` parameter defines the port range to scan.<br>
`-S` represents **SYN flag**.

The output shows the open ports in the target machine, i.e. Windows 10.

## UDP packet crafting
To perform a UDP packet crafting in the target machine, type:

`hping3 <Target IP address> --udp --rand-source --data 500`

Next go to Windows 10 machine and fire up the Wireshark to start capturing packets.

Observe the UDP and ICMP packets. Click the **UDP** packet and look inside, the **Data (500 bytes)**. 

`--udp` UDP mode. <br>
`--rand-source` This option enables the random source mode.  hping will send packets with random source address. <br>
`--data` data size in bytes. <br>

## Send TCP SYN Request
Launch the Wireshark on Windows machine again and leave it running.

To send a TCP SYN request to the target machine, type:

`hping3 -S <Target IP address> -p 80 -c 5`

**This will transmit 5 packets request to victim machine through port 80.**

`-S` will perform TCP SYN request on the target, `p` will pass the traffic through which port is assigned, and `-c` is the count of the packets sent to the target machine.

Switch to the target machine (Windows), and observe the TCP packets caputerd in Wireshark.

Next, stop the packet capture, and start a new capture again. Leave the Wireshark running.

## Perform TCP Flooding

`hping3 <Target IP address> --flood`

The `--flood` send packets as fast as possible, without taking care to show incoming replies.  

After a couple seconds stop the packet capture in Wireshark on Windows. You will notice the TCP flooding from the attacker machine. 

Note: If you want to inspect the TCP packet stream and do some reverse engineering make sure to understand more than the infamous "Three-Way Handshake".
***
Some interesting links:

[TCP Sequence and Acknowledgment Numbers](https://packetlife.net/blog/2010/jun/7/understanding-tcp-sequence-acknowledgment-numbers/)

[Reverse Engineering A Mysterious UDP Stream in My Hotel](https://www.gkbrk.com/2016/05/hotel-music/)

[TCP/IP Guide](http://www.tcpipguide.com/free/index.htm)