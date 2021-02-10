```TCPDUMP``` Tutorial
=======
*"tcpdump is a data-network packet analyzer computer program that runs under a command line interface. It allows the user to display TCP/IP and other packets being transmitted or received over a network to which the computer is attached. Distributed under the BSD license, tcpdump is free software."*

- ***```TCPDUMP``` is without question the premier network analysis tool because it provides both power and simplicity in one interface.***

<p align="center">
<img width="80%" src="https://i.stack.imgur.com/cAtkx.jpg">
</p>

----
Command options:
-------

Options | About
--|--
**`-i any`** | Listen on all interfaces just to see if you’re seeing any traffic.
**`-n`** | Don’t resolve hostnames.
**`-nn`** | Don’t resolve hostnames or port names.
**`-X`** | Show the packet’s contents in both hex and ASCII.
**`-XX`** | Same as -X, but also shows the ethernet header.
**`-v`, `-vv`, `-vvv`** | Increase the amount of packet information you get back.
**`-c`** | Only get x number of packets and then stop.
**`-s`** | Define the snaplength (size) of the capture in bytes. Use -s0 to get everything, unless you are intentionally capturing less.
**`-S`** | Print absolute sequence numbers.
**`-e`** | Get the ethernet header as well.
**`-q`** | Show less protocol information.
**`-E`** | Decrypt IPSEC traffic by providing an encryption key.

```txt
    The default snaplength as of tcpdump 4.0 has changed from 68 bytes to 96 bytes.
    While this will give you more of a packet to see, it still won’t get everything.
    Use -s 1514 to get full coverage.
```

## How to read TCPDUMP Output 
--------------------------
- Example **TCP** output:
```log
    19:10:23.857236 IP 10.0.10.107.39643 > 10.0.10.102.wap-wsp: Flags [P.], seq 1330613859:1330614161, ack 2667667222, win 6142, options [nop,nop,TS val 12490995 ecr 9292714], length 302
```
TCP piece | About
-|-
`19:10:23.857236`  | **Timestamp**
`IP`  | **IP protocol**
`10.0.10.107`  | **Source Address**
`39643`  | **Source Port**
`10.0.10.102` | **Destination Address**
`wap-wsp` |  **Destination Port** (**resolved**)
`Flags [P.]`  | **TCP Flags** PUSH which means that the data should be transferred immediately and “**.**” indicates an **ACK**
`seq 1330613859:1330614161` |  **TCP sequence number**
`ack 2667667222` |  **TCP acknowledgement number**
`win 6142`  | **Window size**
`options [nop,nop,TS val 12490995 ecr 9292714]` |  **TCP options**
`length 302` | **length of the packet**


- Example **UDP** output:
```log
    13:38:54.920116 IP 10.0.10.107.17500 > 10.0.10.1.17500: UDP, length 103
```

UDP piece | About
-|-
`13:38:54.920116`|  **Timestamp**
`IP`|  **IP protocol**
`10.0.10.107`|  **Source Address**
`17500` | **Source Port**
`10.0.10.1`| **Destination Address**
`17500` | **Destination Port**
`UDP` | **Protocol UDP**
`length 103` | **length of the packet**

* * * 

Basic usage:
-----------


## 1.  **Basic communication** (without many options)
```bash
tcpdump -nS
```
**Sample Output**
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    19:10:20.683331 IP 10.0.10.1.db-lsp-disc > 10.0.10.255.db-lsp-disc: UDP, length 103
    19:10:20.922940 IP 10.0.10.107.39649 > 10.0.10.102.wap-wsp: Flags [.], ack 1988852773, win 245, options [nop,nop,TS val 12487817 ecr 9271223], length 0
    19:10:20.922971 IP 10.0.10.102.wap-wsp > 10.0.10.107.39649: Flags [.], ack 1628937822, win 277, options [nop,nop,TS val 9298997 ecr 10365680], length 0
    19:10:23.857236 IP 10.0.10.107.39643 > 10.0.10.102.wap-wsp: Flags [P.], seq 1330613859:1330614161, ack 2667667222, win 6142, options [nop,nop,TS val 12490995 ecr 9292714], length 302
    19:10:23.858598 IP 10.0.10.102.wap-wsp > 10.0.10.107.39643: Flags [P.], seq 2667667222:2667667409, ack 1330614161, win 1452, options [nop,nop,TS val 9301933 ecr 12490995], length 187
```

## 2.  **Basic communication** (very verbose)
```bash
tcpdump -nnvvS
```
**Sample Output**:
```log
tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
19:13:28.478471 IP (tos 0x0, ttl 64, id 58549, offset 0, flags [DF], proto TCP (6), length 354)
    10.0.10.107.39643 > 10.0.10.102.9200: Flags [P.], cksum 0x0dee (correct), seq 1330623399:1330623701, ack 2667678276, win 6142, options [nop,nop,TS val 12690995 ecr 9477326], length 302
19:13:28.479385 IP (tos 0x0, ttl 64, id 26783, offset 0, flags [DF], proto TCP (6), length 240)
    10.0.10.102.9200 > 10.0.10.107.39643: Flags [P.], cksum 0x29b3 (incorrect -> 0xcd47), seq 2667678276:2667678464, ack 1330623701, win 1452, options [nop,nop,TS val 9486554 ecr 12690995], length 188
19:13:28.479678 IP (tos 0x0, ttl 64, id 58550, offset 0, flags [DF], proto TCP (6), length 52)
    10.0.10.107.39643 > 10.0.10.102.9200: Flags [.], cksum 0xe09b (correct), seq 1330623701, ack 2667678464, win 6142, options [nop,nop,TS val 12690996 ecr 9486554], length 0
19:13:28.480045 IP (tos 0x0, ttl 64, id 58551, offset 0, flags [DF], proto TCP (6), length 227)
```
## 3.  **Look at the traffic with contents in hex and ASCII**

```bash
tcpdump -nnvvXS
```
**Sample Output**:
```log
    tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    19:17:45.195365 IP (tos 0x0, ttl 64, id 34413, offset 0, flags [DF], proto TCP (6), length 52)
        10.0.10.107.39649 > 10.0.10.102.9200: Flags [.], cksum 0x76f7 (correct), seq 1628937821, ack 1988852773, win 245, options [nop,nop,TS val 12969095 ecr 9715496], length 0
        0x0000:  4500 0034 866d 4000 4006 8b86 0a00 0a6b  E..4.m@.@......k
        0x0010:  0a00 0a66 9ae1 23f0 6117 9e5d 768b 7c25  ...f..#.a..]v.|%
        0x0020:  8010 00f5 76f7 0000 0101 080a 00c5 e487  ....v...........
        0x0030:  0094 3f28                                ..?(
    19:17:45.195388 IP (tos 0x0, ttl 64, id 44637, offset 0, flags [DF], proto TCP (6), length 52)
        10.0.10.102.9200 > 10.0.10.107.39649: Flags [.], cksum 0x28f7 (incorrect -> 0xc416), seq 1988852773, ack 1628937822, win 277, options [nop,nop,TS val 9743270 ecr 10365680], length 0
            0x0000:  4500 0034 ae5d 4000 4006 6396 0a00 0a66  E..4.]@.@.c....f
            0x0010:  0a00 0a6b 23f0 9ae1 768b 7c25 6117 9e5e  ...k#...v.|%a..^
            0x0020:  8010 0115 28f7 0000 0101 080a 0094 aba6  ....(...........
            0x0030:  009e 2af0                                ..*.
```
## 4.  **Full packet view**
```bash
tcpdump -nnvvXSs 0
```
**Sample Output**:
```log
tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 1514 bytes
19:21:28.495717 IP (tos 0x0, ttl 64, id 58757, offset 0, flags [DF], proto TCP (6), length 354)
    10.0.10.107.39643 > 10.0.10.102.9200: Flags [P.], cksum 0xfa57 (correct), seq 1330648203:1330648505, ack 2667707032, win 6142, options [nop,nop,TS val 13210995 ecr 9957340], length 302
        0x0000:  4500 0162 e585 4000 4006 2b40 0a00 0a6b  E..b..@.@.+@...k
        0x0010:  0a00 0a66 9adb 23f0 4f50 148b 9f01 fa98  ...f..#.OP......
        0x0020:  8018 17fe fa57 0000 0101 080a 00c9 9573  .....W.........s
        0x0030:  0097 efdc 5055 5420 2f70 6163 6b65 7462  ....PUT./packetb
        0x0040:  6561 742d 746f 706f 6c6f 6779 2f73 6572  eat-topology/ser
        0x0050:  7665 722d 6970 2f61 7070 7372 7630 313f  ver-ip/appsrv01?
        0x0060:  7474 6c3d 3135 3030 3020 4854 5450 2f31  ttl=15000.HTTP/1
        0x0070:  2e31 0d0a 486f 7374 3a20 3130 2e30 2e31  .1..Host:.10.0.1
        0x0080:  302e 3130 323a 3932 3030 0d0a 5573 6572  0.102:9200..User
        0x0090:  2d41 6765 6e74 3a20 656c 6173 7469 6353  -Agent:.elasticS
        0x00a0:  6561 7263 682f 302e 302e 3220 286c 696e  earch/0.0.2.(lin
        0x00b0:  7578 2d61 6d64 3634 290d 0a43 6f6e 7465  ux-amd64)..Conte
        0x00c0:  6e74 2d4c 656e 6774 683a 2036 340d 0a41  nt-Length:.64..A
        0x00d0:  6363 6570 743a 2061 7070 6c69 6361 7469  ccept:.applicati
        0x00e0:  6f6e 2f6a 736f 6e0d 0a43 6f6e 7465 6e74  on/json..Content
        0x00f0:  2d54 7970 653a 2061 7070 6c69 6361 7469  -Type:.applicati
        0x0100:  6f6e 2f6a 736f 6e0d 0a41 6363 6570 742d  on/json..Accept-
        0x0110:  456e 636f 6469 6e67 3a20 677a 6970 0d0a  Encoding:.gzip..
        0x0120:  0d0a 7b22 4e61 6d65 223a 2261 7070 7372  ..{"Name":"appsr
        0x0130:  7630 3122 2c22 4950 7322 3a22 3130 2e30  v01","IPs":"10.0
        0x0140:  2e31 302e 3130 372c 6665 3830 3a3a 3230  .10.107,fe80::20
        0x0150:  633a 3239 6666 3a66 6533 393a 6436 3138  c:29ff:fe39:d618
        0x0160:  227d                                     "}
```

## **Capture two ICMP packets (-c2)**

```bash
tcpdump -nnvXSs 0 -c2 icmp
```

**Sample Output**:
```log
        tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
        19:31:26.983712 IP (tos 0x0, ttl 64, id 53710, offset 0, flags [DF], proto ICMP (1), length 84)
        10.0.10.102 > 8.8.8.8: ICMP echo request, id 3434, seq 5, length 64
        0x0000:  4500 0054 d1ce 4000 4001 4465 0a00 0a66  E..T..@.@.De...f
        0x0010:  0808 0808 0800 237e 0d6a 0005 8ee8 e454  ......#~.j.....T
        0x0020:  0000 0000 8602 0f00 0000 0000 1011 1213  ................
        0x0030:  1415 1617 1819 1a1b 1c1d 1e1f 2021 2223  .............!"#
        0x0040:  2425 2627 2829 2a2b 2c2d 2e2f 3031 3233  $%&'()*+,-./0123
        0x0050:  3435 3637                                4567
        19:31:27.010974 IP (tos 0x0, ttl 127, id 24526, offset 0, flags [none], proto ICMP (1), length 84)
        8.8.8.8 > 10.0.10.102: ICMP echo reply, id 3434, seq 5, length 64
        0x0000:  4500 0054 5fce 0000 7f01 b765 0808 0808  E..T_......e....
        0x0010:  0a00 0a66 0000 2b7e 0d6a 0005 8ee8 e454  ...f..+~.j.....T
        0x0020:  0000 0000 8602 0f00 0000 0000 1011 1213  ................
        0x0030:  1415 1617 1819 1a1b 1c1d 1e1f 2021 2223  .............!"#
        0x0040:  2425 2627 2829 2a2b 2c2d 2e2f 3031 3233  $%&'()*+,-./0123
        0x0050:  3435 3637                                4567
        2 packets captured
        2 packets received by filter
        0 packets dropped by kernel
```

Common Syntax 
-------------

#### Expressions allow you to trim out various types of traffic and find exactly what you want

### Types of expressions:

-   **Type**
    -   **```host```**
    -   **```net```**
    -   **```port```**
-   **Direction**
    -   **```src```**
    -   **```dst```**
    -   **```src or dst```**
    -   **```src and dst```**
-   **Protocol**
    -   **```tcp```**
    -   **```udp```**
    -   **```icmp```**

# Expressions examples 

## **```host```** look for traffic based on IP address or hostname if not using **```-n```**
```bash
tcpdump host 8.8.8.8
```
**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:01:15.122526 IP srv01 > google-public-dns-a.google.com: ICMP echo request, id 3692, seq 1, length 64
    20:01:15.141578 IP google-public-dns-a.google.com > srv01: ICMP echo reply, id 3692, seq 1, length 64
```
## If you only want to see traffic in one direction or the other, you can use **```src```** and **```dst```**

```bash
tcpdump src 8.8.8.8
```

**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:03:17.798724 IP google-public-dns-a.google.com > srv01: ICMP echo reply, id 3708, seq 1, length 64
```

```bash
tcpdump dst 8.8.8.8
```

**Sample Output**:

```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decodez
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:03:52.842281 IP srv01 > google-public-dns-a.google.com: ICMP echo request, id 3708, seq 36, length 64
```

##  **```net```** capture an entire network using CIDR notation
```bash
tcpdump net 8.0.0.0/8
```

**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:06:38.114365 IP srv01 > google-public-dns-a.google.com: ICMP echo request, id 3708, seq 201, length 64
    20:06:38.130358 IP google-public-dns-a.google.com > srv01: ICMP echo reply, id 3708, seq 201, length 64
```

## **proto** works for **```tcp```**, **```udp```**, and **```icmp```**.
```bash
tcpdump icmp
```
**Sample Output**
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:08:40.335712 IP srv01 > google-public-dns-a.google.com: ICMP echo request, id 3708, seq 323, length 64
    20:08:40.352119 IP google-public-dns-a.google.com > srv01: ICMP echo reply, id 3708, seq 323, length 64
```
##  **```port```** see only traffic to or from a certain port
```bash
tcpdump port 80
```

**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:11:41.814576 IP srv01.44119 > 195.8.12.114.http: Flags [S], seq 3779891606, win 29200, options [mss 1460,sackOK,TS val 12979889 ecr 0,nop,wscale 7], length 0
    20:11:41.828249 IP 195.8.12.114.http > srv01.44119: Flags [S.], seq 2121552255, ack 3779891607, win 64240, options [mss 1460], length 0
    20:11:41.828307 IP srv01.44119 > 195.8.12.114.http: Flags [.], ack 1, win 29200, length 0
    20:11:41.828488 IP srv01.44119 > 195.8.12.114.http: Flags [P.], seq 1:75, ack 1, win 29200, length 74
    20:11:41.828787 IP 195.8.12.114.http > srv01.44119: Flags [.], ack 75, win 64240, length 0
```

##  **```src, dst port```** filter based on the source or destination port
```bash
tcpdump dst port 80
```
**Sample Output**
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:14:05.193985 IP srv01.44120 > 195.8.12.114.http: Flags [S], seq 2184298397, win 29200, options [mss 1460,sackOK,TS val 13123268 ecr 0,nop,wscale 7], length 0
    20:14:05.207701 IP srv01.44120 > 195.8.12.114.http: Flags [.], ack 2124225918, win 29200, length 0
    20:14:05.207863 IP srv01.44120 > 195.8.12.114.http: Flags [P.], seq 0:74, ack 1, win 29200, length 74
    20:14:05.225965 IP srv01.44120 > 195.8.12.114.http: Flags [.], ack 525, win 30016, length 0
    20:14:05.226218 IP srv01.44120 > 195.8.12.114.http: Flags [F.], seq 74, ack 525, win 30016, length 0
````
```bash
tcpdump src port 22
```
**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:21:13.330361 IP srv01.ssh > 10.0.10.1.53234: Flags [P.], seq 3093181568:3093181684, ack 1976561377, win 362, options [nop,nop,TS val 13551405 ecr 671662897], length 116
    20:21:13.330543 IP srv01.ssh > 10.0.10.1.53234: Flags [P.], seq 116:152, ack 1, win 362, options [nop,nop,TS val 13551405 ecr 671662897], length 36
    20:21:13.330748 IP srv01.ssh > 10.0.10.1.53234: Flags [P.], seq 152:268, ack 1, win 362, options [nop,nop,TS val 13551405 ecr 671662954], length 116
    20:21:13.330868 IP srv01.ssh > 10.0.10.1.53234: Flags [P.], seq 268:304, ack 1, win 362, options [nop,nop,TS val 13551405 ecr 671662954], length 36
    20:21:13.355764 IP srv01.ssh > 10.0.10.1.53234: Flags [P.], seq 304:516, ack 1, win 362, options [nop,nop,TS val 13551430 ecr 671662954], length 212
```
## **```src/dst, port, protocol```** combinations
```bash
tcpdump udp and dst port 53
```
**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:24:10.072630 IP srv01.57827 > pfsense.company.local.domain: 54153+ A? amazon.com. (28)
    20:24:10.073082 IP srv01.54404 > pfsense.company.local.domain: 45255+ PTR? 100.10.0.10.in-addr.arpa. (42)
    20:24:10.073627 IP srv01.43702 > pfsense.company.local.domain: 37469+ PTR? 102.10.0.10.in-addr.arpa. (42)
    20:24:10.074473 IP srv01.57827 > pfsense.company.local.domain: 17165+ AAAA? amazon.com. (28)
```

## **Port Ranges** see traffic to any port in a range (```portrange```)
```bash
tcpdump portrange 80-443
```
**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:26:19.340339 IP srv01.44326 > 176.32.98.166.https: Flags [S], seq 1903133728, win 29200, options [mss 1460,sackOK,TS val 13857415 ecr 0,nop,wscale 7], length 0
    20:26:19.460156 IP 176.32.98.166.https > srv01.44326: Flags [S.], seq 945702592, ack 1903133729, win 64240, options [mss 1460], length 0
    20:26:19.460193 IP srv01.44326 > 176.32.98.166.https: Flags [.], ack 1, win 29200, length 0
    20:26:19.532871 IP srv01.44326 > 176.32.98.166.https: Flags [P.], seq 1:131, ack 1, win 29200, length 130
    20:26:19.533225 IP 176.32.98.166.https > srv01.44326: Flags [.], ack 131, win 64240, length 0
```
## **Packet Size Filter** only see packets below or above (```less``` or ```greater```) a certain size (in bytes)
```bash
tcpdump less 84
```
**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:29:01.332092 IP 10.0.10.107.39649 > srv01.wap-wsp: Flags [.], ack 1988852773, win 245, options [nop,nop,TS val 17601415 ecr 13991634], length 0
    20:29:01.332124 IP srv01.wap-wsp > 10.0.10.107.39649: Flags [.], ack 1, win 277, options [nop,nop,TS val 14019406 ecr 10365680], length 0
    20:29:01.332892 IP srv01.47077 > pfsense.company.local.domain: 61232+ PTR? 102.10.0.10.in-addr.arpa. (42)
    20:29:01.336791 IP pfsense.company.local.domain > srv01.47077: 61232 NXDomain 0/0/0 (42)
    20:29:01.337979 IP srv01.38137 > pfsense.company.local.domain: 4011+ PTR? 107.10.0.10.in-addr.arpa. (42)
    20:29:01.359519 IP pfsense.company.local.domain > srv01.38137: 4011 NXDomain 0/0/0 (42)
```

```bash
tcpdump greater 128
```
**Sample Output**:
```log
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:30:14.792878 IP 10.0.10.107.39643 > srv01.wap-wsp: Flags [P.], seq 1330861422:1330861724, ack 2667954223, win 6142, options [nop,nop,TS val 17680995 ecr 14083638], length 302
    20:30:14.793793 IP srv01.wap-wsp > 10.0.10.107.39643: Flags [P.], seq 1:189, ack 302, win 1452, options [nop,nop,TS val 14092868 ecr 17680995], length 188
    20:30:14.794334 IP 10.0.10.107.39643 > srv01.wap-wsp: Flags [P.], seq 302:477, ack 189, win 6142, options [nop,nop,TS val 17680996 ecr 14092868], length 175
    20:30:14.794723 IP srv01.wap-wsp > 10.0.10.107.39643: Flags [P.], seq 189:554, ack 477, win 1452, options [nop,nop,TS val 14092869 ecr 17680996], length 365
    20:30:14.795972 IP pfsense.company.local.61945 > srv01.palace-4: UDP, length 120
    20:30:14.796005 IP srv01 > pfsense.company.local: ICMP srv01 udp port palace-4 unreachable, length 156
```

Writing to a File 
-----------------

## Traffic to a File
```bash
tcpdump -s0 port 80 -w capture.pcap
```
## Read Captured Traffic
```bash
tcpdump -r capture.pcap
```
**Sample Output**
```log
    reading from file capture.pcap, link-type EN10MB (Ethernet)
    20:35:00.654476 IP srv01.60950 > 130.162.96.66.static.eigbox.net.http: Flags [S], seq 1427930173, win 29200, options [mss 1460,sackOK,TS val 14378729 ecr 0,nop,wscale 7], length 0
    20:35:00.790534 IP 130.162.96.66.static.eigbox.net.http > srv01.60950: Flags [S.], seq 1331704013, ack 1427930174, win 64240, options [mss 1460], length 0
    20:35:00.790604 IP srv01.60950 > 130.162.96.66.static.eigbox.net.http: Flags [.], ack 1, win 29200, length 0
    20:35:00.790940 IP srv01.60950 > 130.162.96.66.static.eigbox.net.http: Flags [P.], seq 1:83, ack 1, win 29200, length 82
    20:35:00.791332 IP 130.162.96.66.static.eigbox.net.http > srv01.60950: Flags [.], ack 83, win 64240, length 0
```
## Read Captured Traffic with expressions
```bash
tcpdump -X -r capture.pcap
```
**Sample Output**:
```log
    reading from file capture.pcap, link-type EN10MB (Ethernet)
    20:35:00.654476 IP srv01.60950 > 130.162.96.66.static.eigbox.net.http: Flags [S], seq 1427930173, win 29200, options [mss 1460,sackOK,TS val 14378729 ecr 0,nop,wscale 7], length 0
        0x0000:  4500 003c 1ad4 4000 4006 26a0 0a00 0a66  E..<..@.@.&....f
        0x0010:  4260 a282 ee16 0050 551c 7c3d 0000 0000  B`.....PU.|=....
        0x0020:  a002 7210 f976 0000 0204 05b4 0402 080a  ..r..v..........
        0x0030:  00db 66e9 0000 0000 0103 0307            ..f.........
    20:35:00.790534 IP 130.162.96.66.static.eigbox.net.http > srv01.60950: Flags [S.], seq 1331704013, ack 1427930174, win 64240, options [mss 1460], length 0
        0x0000:  4500 002c 7277 0000 7f06 d00c 4260 a282  E..,rw......B`..
        0x0010:  0a00 0a66 0050 ee16 4f60 30cd 551c 7c3e  ...f.P..O`0.U.|>
        0x0020:  6012 faf0 63ee 0000 0204 05b4 0000       `...c.........
    20:35:00.790604 IP srv01.60950 > 130.162.96.66.static.eigbox.net.http: Flags [.], ack 1, win 29200, length 0
        0x0000:  4500 0028 1ad5 4000 4006 26b3 0a00 0a66  E..(..@.@.&....f
        0x0010:  4260 a282 ee16 0050 551c 7c3e 4f60 30ce  B`.....PU.|>O`0.
        0x0020:  5010 7210 f962 0000                      P.r..b..
```

Combine Expressions 
-------------------
The real magic of tcpdump is being able to combine different expressions individually in creative ways in order to isolate exactly what you’re looking for.

Boolean operator | Command
-|-
AND  | `and` or `&&`
OR | `or` or `||`
EXCEPT  | `not` or `!`


## TCP traffic from 10.0.10.100 destined for port 443
```bash
tcpdump -nnvvS src 10.0.10.102 and dst port 443
```
**Sample Output**

```log
    tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:46:34.763292 IP (tos 0x0, ttl 64, id 49233, offset 0, flags [DF], proto TCP (6), length 60)
        10.0.10.102.39759 > 149.20.4.69.443: Flags [S], cksum 0xaded (incorrect -> 0x8a80), seq 3277995543, win 29200, options [mss 1460,sackOK,TS val 15072838 ecr 0,nop,wscale 7], length 0
    20:46:35.311914 IP (tos 0x0, ttl 64, id 49234, offset 0, flags [DF], proto TCP (6), length 40)
        10.0.10.102.39759 > 149.20.4.69.443: Flags [.], cksum 0xadd9 (incorrect -> 0x1ff5), seq 3277995544, ack 1866818117, win 29200, length 0
    20:46:35.383895 IP (tos 0x0, ttl 64, id 49235, offset 0, flags [DF], proto TCP (6), length 174)
        10.0.10.102.39759 > 149.20.4.69.443: Flags [P.], cksum 0xae5f (incorrect -> 0x65b1), seq 3277995544:3277995678, ack 1866818117, win 29200, length 134
    20:46:35.926830 IP (tos 0x0, ttl 64, id 49236, offset 0, flags [DF], proto TCP (6), length 40)
        10.0.10.102.39759 > 149.20.4.69.443: Flags [.], cksum 0xadd9 (incorrect -> 0xf20a), seq 3277995678, ack 1866822437, win 36500, length 0
    20:46:35.926883 IP (tos 0x0, ttl 64, id 49237, offset 0, flags [DF], proto TCP (6), length 40)
        10.0.10.102.39759 > 149.20.4.69.443: Flags [.], cksum 0xadd9 (incorrect -> 0xe505), seq 3277995678, ack 1866822850, win 39420, length 0
    20:46:35.934729 IP (tos 0x0, ttl 64, id 49238, offset 0, flags [DF], proto TCP (6), length 358)
```
## Traffic originating from the 10 network headed for the 172.16 network 
```bash
tcpdump -nvX src net 10.0.0.0/8 and dst net 172.16.0.0/16
```
**Sample Output**:
```log
    tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    20:52:37.503845 IP (tos 0x0, ttl 64, id 46250, offset 0, flags [DF], proto ICMP (1), length 84)
        10.0.10.102 > 172.16.0.1: ICMP echo request, id 4139, seq 1, length 64
        0x0000:  4500 0054 b4aa 4000 4001 c587 0a00 0a66  E..T..@.@......f
        0x0010:  ac10 0001 0800 8f00 102b 0001 95fb e454  .........+.....T
        0x0020:  0000 0000 18b0 0700 0000 0000 1011 1213  ................
        0x0030:  1415 1617 1819 1a1b 1c1d 1e1f 2021 2223  .............!"#
        0x0040:  2425 2627 2829 2a2b 2c2d 2e2f 3031 3233  $%&'()*+,-./0123
        0x0050:  3435 3637                                4567
    20:52:38.506070 IP (tos 0x0, ttl 64, id 46390, offset 0, flags [DF], proto ICMP (1), length 84)
        10.0.10.102 > 172.16.0.1: ICMP echo request, id 4139, seq 2, length 64
        0x0000:  4500 0054 b536 4000 4001 c4fb 0a00 0a66  E..T.6@.@......f
        0x0010:  ac10 0001 0800 f2f6 102b 0002 96fb e454  .........+.....T
        0x0020:  0000 0000 b3b8 0700 0000 0000 1011 1213  ................
        0x0030:  1415 1617 1819 1a1b 1c1d 1e1f 2021 2223  .............!"#
        0x0040:  2425 2627 2829 2a2b 2c2d 2e2f 3031 3233  $%&'()*+,-./0123
        0x0050:  3435 3637                                4567
```
## Non-ICMP traffic destined for 172.16 network from 10.0.10.102 
```bash
tcpdump -nvvXSs 1514 dst net 172.16.0.0/16 and src 10.0.10.102 and not icmp
```
**Sample Output**
```log
    tcpdump: listening on eno16777736, link-type EN10MB (Ethernet), capture size 1514 bytes
    20:56:15.499069 IP (tos 0x0, ttl 64, id 996, offset 0, flags [DF], proto TCP (6), length 60)
        10.0.10.102.43153 > 172.16.0.45.ssh: Flags [S], cksum 0xc0d1 (incorrect -> 0x684b), seq 1334106401, win 29200, options [mss 1460,sackOK,TS val 15653573 ecr 0,nop,wscale 7], length 0
        0x0000:  4500 003c 03e4 4000 4006 7635 0a00 0a66  E..<..@.@.v5...f
        0x0010:  ac10 002d a891 0016 4f84 d921 0000 0000  ...-....O..!....
        0x0020:  a002 7210 c0d1 0000 0204 05b4 0402 080a  ..r.............
        0x0030:  00ee dac5 0000 0000 0103 0307            ............
    20:56:15.504357 IP (tos 0x0, ttl 64, id 997, offset 0, flags [DF], proto TCP (6), length 40)
        10.0.10.102.43153 > 172.16.0.45.ssh: Flags [.], cksum 0xc0bd (incorrect -> 0xb1ee), seq 1334106402, ack 4195155926, win 29200, length 0
        0x0000:  4500 0028 03e5 4000 4006 7648 0a00 0a66  E..(..@.@.vH...f
        0x0010:  ac10 002d a891 0016 4f84 d922 fa0c ffd6  ...-....O.."....
        0x0020:  5010 7210 c0bd 0000                      P.r.....
```

Combining expressions
--------

#### Traffic from 10.0.10.0 AND destined for ports 22 or 23
```bash
tcpdump 'src net 10.0.10.0/24 and (dst port 22 or 23)'
```
## or
```bash
tcpdump src net 10.0.10.0/24 and \(dst port 22 or 23\)
```
**Sample Output**
```log
    tcpdump 'src net 10.0.10.0/24 and (dst port 22 or 23)'
    tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
    listening on eno16777736, link-type EN10MB (Ethernet), capture size 262144 bytes
    21:02:18.573451 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 3099113320, win 4092, options [nop,nop,TS val 674120900 ecr 16016647], length 0
    21:02:18.573845 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 37, win 4094, options [nop,nop,TS val 674120900 ecr 16016648], length 0
    21:02:18.573877 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 153, win 4092, options [nop,nop,TS val 674120900 ecr 16016648], length 0
    21:02:18.574161 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 189, win 4094, options [nop,nop,TS val 674120900 ecr 16016648], length 0
    21:02:18.598050 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 369, win 4090, options [nop,nop,TS val 674120924 ecr 16016672], length 0
    21:02:18.598090 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 405, win 4094, options [nop,nop,TS val 674120924 ecr 16016672], length 0
    21:02:18.598322 IP 10.0.10.1.53234 > srv01.ssh: Flags [.], ack 585, win 4090, options [nop,nop,TS val 674120924 ecr 16016672], length 0
```

About TCP 
===
```txt
     0                            15                              31
    -----------------------------------------------------------------
    |          source port          |       destination port        |
    -----------------------------------------------------------------
    |                        sequence number                        |
    -----------------------------------------------------------------
    |                     acknowledgment number                     |
    -----------------------------------------------------------------
    |  HL   | rsvd  |C|E|U|A|P|R|S|F|        window size            |
    -----------------------------------------------------------------
    |         TCP checksum          |       urgent pointer          |
    -----------------------------------------------------------------
```

<p align="center">
<img width="80%" src="https://i.stack.imgur.com/cAtkx.jpg">
</p>

## **There are 8 bits in the control bits section of the TCP header:**
```txt
    CWR | ECE | URG | ACK | PSH | RST | SYN | FIN
```
TCP Flag | About
-|-
**`CWR`** | Congestion Window Reduced (CWR) flag is set by the sending host to indicate that it received a TCP segment with the ECE flag set and had responded in congestion control mechanism (added to header by RFC 3168).
**`ECE`** | ECN-Echo has a dual role, depending on the value of the SYN flag. It indicates If the SYN flag is set (1), that the TCP peer is ECN capable. If the SYN flag is clear (0), that a packet with Congestion Experienced flag in IP header set is received during normal transmission (added to header by RFC 3168).
**`URG`** | Indicates that the Urgent pointer field is significant
**`ACK`** | Indicates that the Acknowledgment field is significant. All packets after the initial SYN packet sent by the client should have this flag set.
**`PSH`** | Push function. Asks to push the buffered data to the receiving application.
**`RST`** | Reset the connection
**`SYN`** | Synchronize sequence numbers.
**`FIN`** | No more data from sender

## **Starting to count with 0, the relevant TCP control bits are contained in octet 13:**

```txt
     0             7|             15|             23|             31
    ----------------|---------------|---------------|----------------
    |  HL   | rsvd  |C|E|U|A|P|R|S|F|        window size            |
    ----------------|---------------|---------------|----------------
    |               |  13th octet   |               |               |
```
## **Let’s have a closer look at octet no. 13:**
```txt
    |               |
    |---------------|
    |C|E|U|A|P|R|S|F|
    |---------------|
    |7   5   3     0|
```
## **If we want to capture packets with only SYN set.**
```txt
    |C|E|U|A|P|R|S|F|
    |---------------|
    |0 0 0 0 0 0 1 0|
    |---------------|
    |7 6 5 4 3 2 1 0|
```

Looking at the control bits section we see that only bit number 1 (SYN)
is set.

Assuming that octet number 13 is an 8-bit unsigned integer in network byte order, the binary value of this octet is

```txt
    00000010
```
and its decimal representation is

```txt
     7     6     5     4     3     2     1     0
    0*2 + 0*2 + 0*2 + 0*2 + 0*2 + 0*2 + 1*2 + 0*2  =  2
```
**The tcpdump syntax is:**
```bash
tcpdump 'tcp[13] == 2'
```
Examples
--------

-   **Show all URGENT (URG) packets…**
    ```bash
        tcpdump 'tcp[13] & 32!=0'
    ```
-   **Show all ACKNOWLEDGE (ACK) packets…**
    ```bash
        tcpdump 'tcp[13] & 16!=0'
    ```
-   **Show all PUSH (PSH) packets…**
    ```bash
        tcpdump 'tcp[13] & 8!=0'
    ```
-   **Show me all RESET (RST) packets…**
    ```bash
        tcpdump 'tcp[13] & 4!=0'
    ```
-   **Show all SYNCHRONIZE (SYN) packets…**
    ```bash
        tcpdump 'tcp[13] & 2!=0'
    ```
-   **Show me all FINISH (FIN) packets…**
    ```bash
        tcpdump 'tcp[13] & 1!=0'
    ```
-   **Show all SYNCHRONIZE/ACKNOWLEDGE (SYNACK) packets…**

    ```bash
        tcpdump 'tcp[13]=18'
    ```


# Useful `tcpdump` usage:


### **View ASCII (```-A```) or HEX (```-X```) traffic:**
```bash
tcpdump -A
```
```bash
tcpdump -X
```


### **View traffic with timestamps and don't convert addresses + verbose:**
```bash
tcpdump -tttt -n -vv
```


### **Potential DDoS capture - Top talkers after 1000 packets:**
```bash
tcpdump -nn -c 1000 | awk '{print $3}' | cut -d. - | fl-4 | sort -n | uniq -c | sort -nr
```      


### **Capture traffic on any interface from target host and specific port. Then output to a file:**
```bash
tcpdump -w output-file.pcap -i any dst <TARGET IP ADDRESS> and port 80
```


### **Save pcap file on rotating size:**
```bash
tcpdump -n -s65535 -c 1000 -w '%host_%Y-%m­-%d_%H:%M:%S.pcap'
```


### **Find traffic that cotains the word pass:**
```bash
tcpdump -n -A -s0 | grep pass
```


### **Grab clear text protocol passwords:**
```bash
tcpdump -n -A -s0 port http or port ftp or port smtp or port imap or port pop3 | egrep -i 'pass=|pwd=|log=|login=|user=|username=|pw=|passw=|passwd=|password=|pass:|user:|username:|password:|login:|pass |user ' --color=auto --line-buffered -B20
```

### References:

- [danielmiessler.com](https://danielmiessler.com/study/tcpdump/)
- [man7.org](http://man7.org/linux/man-pages/man1/tcpdump.1.html)
- BTFM | RTFM