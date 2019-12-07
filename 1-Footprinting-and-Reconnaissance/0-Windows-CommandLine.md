 # Footprinting basics with Windows command line  

The objective of this tutorial is teach the basics of Footprinting methodologies, used for ethical-hackers and pentesters. 

### Requirements 
* Virtual environment
* Windows 8.1/10 
* Windows Server 2012 or 2016
* Basics of networking 

### Objectives
* Use ping command to find the IP address of target domain.
* Use ping command to emulate the traceroute (tracert command).
* Discover the maximum frame size for the network.
* ICMP type and the code for echo request and echo reply packets.

## Commands used on this tutorial
## ```ping```
The ping command sends ICMP (Internet Control Message Protocol) 
Used to test the reachability of a host on a IP network and measures the travel time for messages sent from the originating host to destinantion target.

## ```nslookup```
Used for querying the DNS (Domain Name System), to obtain a domain name or IP address mapping and other specific DNS record.

## ```tracert``` (Windows) or ```traceroute``` (Linux)
Diagnostic tool for displaying the route and measuring transit delays of packets across an IP network

**NOTE:**<br>
**I strongly recommend you to use the -help command to specify all parameters of a given command**

`ping -help`

*** 
## Finding the IP address of http://www.certifiedhacker.com

Open the **Command prompt** or **PowerShell** on Windows and type:

`ping www.certifiedhacker.com`

The response should be similiar to the message below.<br>
Note: The IP address may differ in your environment.

```
Reply from 162.241.216.11: bytes=32 time=160ms TTL=40
Reply from 162.241.216.11: bytes=32 time=151ms TTL=40
Reply from 162.241.216.11: bytes=32 time=151ms TTL=40
Reply from 162.241.216.11: bytes=32 time=153ms TTL=40

Ping statistics for 162.241.216.11:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
Approximate round trip times in milli-seconds:
    Minimum = 151ms, Maximum = 160ms, Average = 153ms
```
***
## Finding the maximum frame size on the network

Use the last command and add the `-f` parameter to not fragment on the ping packet and `-l` to set the frame size to `1500` bytes.

`ping www.certifiedhacker.com -f -l 1500`

Output:

```
Packet needs to be fragmented but DF set.
```

This message above means that the frame is too large to be on the network and needs to be fragmented.

The propose here is to try different values until you reach the maximum frame size.

**Example:**

` ping www.certifiedhacker.com -f -l 1450`<br>
_working_<br>
` ping www.certifiedhacker.com -f -l 1475`<br>
_reached the limit_<br>
` ping www.certifiedhacker.com -f -l 1473`<br>
_reached the limit_<br>
` ping www.certifiedhacker.com -f -l 1472`<br>
_working_

In conclusion, note the last two replies `1473` bytes and `1472` bytes shows the **maximum frame size** on this machine's network.
***
## Investigate the TTL (Time to Live).
Every frame on the network has their own TTL defined.<br> If the TTL reaches 0, the router discards the packet to prevent packet loss.

`ping www.certifiedhacker.com -i 3`

```
Reply from 10.10.127.254: TTL expired in transit.
Reply from 10.10.127.254: TTL expired in transit.
Reply from 10.10.127.254: TTL expired in transit.
Reply from 10.10.127.254: TTL expired in transit.
```

The `-i` parameter means wait time, that is the number of seconds to wait between each ping (values between `1-255`).

TTL expired means that the router discarded the frame, beacuse the TTL has expired (reached 0).
***
## Find the traceroute from your machine to www.certifiedhacker.com

This command traceroutes the network configuration information of the target domain. 

Open a new window on your prompt or powershell and type:

`tracert www.certifiedhacker.com`

The system resolves the URL into its IP address and starts to trace the path to the destination. Here it takes 19 hops for the packet to reach the specified destination.

You can use the help flag to show different options for the command:
`tracert /?`
***
## Let's check the life span of the packet.<br>
Open a new window of your prompt or powershell and type:

`ping www.certifiedhacker.com -i 2 -n 1`

We are setting the TTL to `2` in  an attempt to check the life span of the packet and `-n` count of packet to `1`

```
Pinging certifiedhacker.com [162.241.216.11] with 32 bytes of data:
Reply from 10.10.10.45: TTL expired in transit.

Ping statistics for 162.241.216.11:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
```
There is a reply coming from IP address 162.241.216.11 with no packet loss.

Let's set the TTL value to `3` to see what happens

`ping www.certifiedhacker.com -i 3 -n 1`
```
Pinging certifiedhacker.com [162.241.216.11] with 32 bytes of data:
Reply from 10.10.127.254: TTL expired in transit.

Ping statistics for 162.241.216.11:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
```
Note there is a different IP address, the same one that we gather on the traceroute command on the first hops.

Repeat this and increase the TTL value until reach the IP address from www.certifiedhacker.com that we trace routed before.

`ping www.certifiedhacker.com -i 19 -n 1`
```
Pinging certifiedhacker.com [162.241.216.11] with 32 bytes of data:
Reply from 162.241.216.11: bytes=32 time=156ms TTL=40

Ping statistics for 162.241.216.11:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 156ms, Maximum = 156ms, Average = 156ms
```
Done! These results implies when you set the TTL to 19(in this case) the reply is received from destination host (162.241.216.11).
Keep in mind that the output will be similar to the trace route results.

Make a note of all the IP addresses from which you receive a reply.

***

## Using ```nslookup``` command
Used for querying the DNS (Domain Name System), to obtain a domain name or IP address mapping and other specific DNS record.

Type in your prompt or powershell:

`nslookup`

**Note**: This command will launch a interactive mode, you can type ```help``` to list available commands! 

For query IP address of a given domain, you need to set the `type` to `A` record, then enter the target domain:

`> type=a`<br>
`> www.certifiedhacker.com`

```
> set type=a
> www.certifiedhacker.com

Server:  dns.google
Address:  8.8.8.8

Non-authoritative answer:
Name:    certifiedhacker.com
Address:  162.241.216.11
Aliases:  www.certifiedhacker.com
```
**Note**: This environment uses Google DNS server (8.8.8.8). To configure your own DNS server just type `server x.x.x.x`.

The first two lines **dns.google** and **8.8.8.8** specifies that the result was directed to this server to resolve your requested domain. Google's DNS server do not contain domain's original zone files, this is why is **Non-authoritative**.

The **Authoritative** is a name server that has the original source files of a domain zone files.
To obtain the Authoritative name server, set the `type` to `CNAME` record and query the target:

`set type=cname`<br>
`certifiedhacker.com`
```
> set type=cname
> certifiedhacker.com
Server:  dns.google
Address:  8.8.8.8

certifiedhacker.com
        primary name server = ns1.bluehost.com
        responsible mail addr = dnsadmin.box5331.bluehost.com
        serial  = 2018011205
        refresh = 86400 (1 day)
        retry   = 7200 (2 hours)
        expire  = 3600000 (41 days 16 hours)
        default TTL = 300 (5 mins)
```
The `CNAME` lookup is done directly against the domain's authoritative name server.

With the authoritative name server, you can determine the IP address. To query IP address set the `type` to `A`, then type the **primary name server** displayed in your lab environment, in my case: ```ns1.bluehost.com```.

`set type=a`<br>
`ns1.bluehost.com`
```
> set type=a
> ns1.bluehost.com
Server:  dns.google
Address:  8.8.8.8

Non-authoritative answer:
Name:    ns1.bluehost.com
Address:  162.159.24.80
```

In conclusion, the **Authoritative name server** stores the records associated with the respective domain. Having the authoritative name server (primary name server) and the IP address associated with it, an attacker can attempt to exploit the server, performing attacks like DDoS, URL redirection and so on.

**Final analysis:**
* Document all the IP addresses
* Reply request IP addresses
* Information about TTL's
* DNS server names and other DNS information.