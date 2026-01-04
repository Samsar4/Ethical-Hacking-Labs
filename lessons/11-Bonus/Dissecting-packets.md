# Dissecting TCP, ICMP and ARP packets
The Internet Protocol offers several packet protocols that range from very fast to very reliable. All of them rest on the lowest layer—the basic IP packet. However, each layer has evolved to solve specific problems. To select the correct packet type, you must know about what you're transmitting.

The packet types most likely to be of interest are TCP, UDP, ICMP, and raw. Knowing the advantages and disadvantages of each type can help you choose the most appropriate for your application. Each packet type has different benefits, as summarized on table below:

## Packet Type benefits:
<table cellspacing="2" cellpadding="2" border="2">
  <colgroup> <col width="108"> <col width="60"> <col width="62"> <col width="63"> 
  <col width="67"> </colgroup> <thead> 
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>&nbsp;</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p><b>Raw</b></p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p><b>ICMP</b></p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p><b>UDP</b></p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p><b>TCP</b></p>
    </td>
  </tr>
  </thead> <tbody> 
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Overhead (bytes)</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>20–60</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>20–60+[4]</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>20–60+[8]</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>20–60 +[20–60]</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Message Size (bytes)</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>65,535</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>65,535</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>65,535</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>(unlimited)</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Reliability</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>High</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Message Type</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Datagram</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Datagram</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Datagram</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>Stream</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Throughput</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>High</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>High</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Medium</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>Low</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Data Integrity</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Low</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Medium</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>High</p>
    </td>
  </tr>
  <tr valign="TOP"> 
    <td colspan="1" rowspan="1" width="118" valign="TOP"> 
      <p>Fragmentation</p>
    </td>
    <td colspan="1" rowspan="1" width="59" valign="TOP"> 
      <p>Yes</p>
    </td>
    <td colspan="1" rowspan="1" width="62" valign="TOP"> 
      <p>Yes</p>
    </td>
    <td colspan="1" rowspan="1" width="61" valign="TOP"> 
      <p>Yes</p>
    </td>
    <td colspan="1" rowspan="1" width="88" valign="TOP"> 
      <p>Low</p>
    </td>
  </tr>
  </tbody> 
</table>

<br>

* * * 

## Grabing ICMP packets


- **Note**: Is recommended to use two virtual machines to send ICMP, TCP and ARP packets to each other; The first machine will grab packets by using ```TCPDUMP``` and the second machine will generate traffic by sending packets.

```bash
tcpdump -nnvvXXS -s0 -c2 icmp
```

```-nnvvXXS``` : Heavy packet viewing; The final “S” increases the snaplength, grabbing the whole packet; ```-c2``` to grab only 2 packets (request/reply)

```log
17:11:16.213822 IP (tos 0x0, ttl 64, id 38756, offset 0, flags [none], proto ICMP (1), length 84)
    192.168.64.3 > 192.168.64.1: ICMP echo reply, id 6157, seq 0, length 64
        0x0000:  aa20 66d2 5364 ca3b cc0e 1069 0800 4500  ..f.Sd.;...i..E.
        0x0010:  0054 9764 0000 4001 e1ef c0a8 4003 c0a8  .T.d..@.....@...
        0x0020:  4001 0000 3534 180d 0000 601a d934 0002  @...54....`..4..
        0x0030:  8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415  .j..............
        0x0040:  1617 1819 1a1b 1c1d 1e1f 2021 2223 2425  ...........!"#$%
        0x0050:  2627 2829 2a2b 2c2d 2e2f 3031 3233 3435  &'()*+,-./012345
        0x0060:  3637     

```

## Extract only the HEX dump value from echo reply

```
aa20 66d2 5364 ca3b cc0e 1069 0800 4500 
0054 9764 0000 4001 e1ef c0a8 4003 c0a8
4001 0000 3534 180d 0000 601a d934 0002
8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415
1617 1819 1a1b 1c1d 1e1f 2021 2223 2425
2627 2829 2a2b 2c2d 2e2f 3031 3233 3435
3637
```

Note:

- 4 bits --> 1 hex number --> ```A```
- 1 byte --> 2 hex's number  --> ```AA```
- 2 byte --> 1 block of 4 hex numbers --> ```AA20```
- 4 byte --> 2 blocks of 4 hex numbers --> ```AA20 66d2```
- 6 byte --> 3 blocks of 4 hex numbers --> ```AA20 66d2 5364```

## The ICMP packet can be broken into the following protocol elements:
1) **Ethernet Header** (first 14 bytes); The network media is Ethernet.
    - ```aa20 66d2 5364 ca3b cc0e 1069 0800```
        - MAC Destination Address (0-5, 6 bytes)
            - ```AA-20-66-D2-53-64 ```
        - MAC Source Address (6-11, 6 bytes)
            - ```CA-3B-CC-0e-10-69```
        - Ethernet Type Field (12-13, 2 bytes)
            - ```0800``` (Ethernet Type: IPv4)

2) **IP Datagram(packet)** - the remaining 60 bytes (14-73) constitute the IP datagram itself:
    - **IP Header** 
        - ```4500 0054 9764 0000 4001 e1ef c0a8 4003 c0a8 4001```
            - [```4```] : IP Version (4 bits) → IPv4
            - [```5```] : IP Header Length (4 bits) → 32-bit words
            - [```00```] : Type service (1 byte) → Normal delivery
            - [```0054```] : Total length (2 bytes) → Packet w/ 84 bytes
            - [```9764```] : Identification (2 bytes) → 38756 
            - [```0```] : Flags (3 bits) → 000, no flag set
            - [```000```] : Fragment Offest (13 bits) → 000, fragment position
            - [```40```] : Time to Live(TTL) (1 byte) → 64 hops (decimal)
            - [```01```] : Protocol (1 byte) → ICMP
            - [```e1ef```] : Header Checksum (2 bytes) → 0xe1ef
            - [```c0a8 4003```] : Source IP Address → 192.168.64.3 
            - [```c0a8 4001```] : Destination IP Address - 192.168.64.1
    - **IP Data** - Forty (40) bytes of IP Data follow the IP Header (34-73):
        - ```0000 3534 180d 0000 601a d934 0002 8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415 1617 1819 1a1b 1c1d 1e1f 2021 2223 2425 2627 2829 2a2b 2c2d 2e2f 3031 3233 3435 3637```
            - the IP Data in this case is, in fact, an ICMP Echo reply, including thirty-two (32) bytes of Echo Data (42-73)
            - [```00```] : Type (1 byte) → Echo reply
            - [```00```] : Code (1 byte) → (Default)
            - [```3534```] : Checksum (2 bytes)
            - [```180d 0000 601a d934 0002 8e6a 0809 0a0b 0c0d 0e0f 1011 1213 1415 1617 1819 1a1b 1c1d 1e1f 2021 2223 2425 2627 2829 2a2b 2c2d 2e2f 3031 3233 3435 3637```]
                - [```180d```] : Identifier (2 bytes) → 6157,3352
                - [```0000```] : Sequence Number (2 bytes) → 0
                - [```601a d934 0002 8e6a```] : ICMP Payload (8 bytes) 
                - [```0809 0a0b 0c0d 0e0f 1011 1213 1415 1617 1819 1a1b 1c1d 1e1f 2021 2223 2425 2627 2829 2a2b 2c2d 2e2f 3031 3233 3435 3637```] : ICMP Data (48 bytes)

## Illustrated version:
![icmp](https://user-images.githubusercontent.com/3259997/106795623-35bf1a00-6652-11eb-9b2e-a2cdc0d104c0.png)


### References:
- https://www.informit.com/articles/article.aspx?p=130895&seqNum=3
- https://hpd.gasmi.net/
- http://academy.delmar.edu/courses/itsy2430/Handouts/PingPacketDecoded.html
