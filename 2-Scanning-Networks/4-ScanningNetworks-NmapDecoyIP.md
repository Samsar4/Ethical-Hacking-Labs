# Avoiding Scanning Detection using Multiple Decoy IP Addresses
The Nmap command `nmap -D RND:10` is the decoy option, that lets you scan using multiple decoy IP addresses.

Firewalls and IDS detect normal scanning attempts on the target network. However, you can use the IP address decoy technique to avoid detection.

**Before starting this lab, make sure that you have your Windows Firewall on the target turned on.**

## IP Fragmentation

Open a new Terminal window on Kali and enter the target IP address (Windows).

`nmap -f <Target IP Address>`

`-f`: Used to scan tiny fragment packets.
```
Nmap scan report for 10.0.2.23
Host is up (0.00074s latency).
Not shown: 979 filtered ports
PORT      STATE SERVICE
53/tcp    open  domain
80/tcp    open  http
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
389/tcp   open  ldap
443/tcp   open  https
445/tcp   open  microsoft-ds
464/tcp   open  kpasswd5
593/tcp   open  http-rpc-epmap
636/tcp   open  ldapssl
3268/tcp  open  globalcatLDAP
3269/tcp  open  globalcatLDAPssl
3389/tcp  open  ms-wbt-server
MAC Address: 11:22:33:44:55:66 (Oracle VirtualBox virtual NIC)

Nmap done: 1 IP address (1 host up) scanned in 13.72 seconds
```
When the Windows Firewall service is turned on, you can only see the ports opened as shown in the output above.

## Perform Maximum Transmission Unit
This command is used to transmit smaller packets instead of sending one complete packet at a time.

This scan is very similar to the previous one but with **Maximum Transmission Unit** (`-mtu`) and `8` bytes of packets.

`nmap -mtu 8 <Target IP Address>`

If everything works, the results should be identical to the previous one.

## Decoying IP address
This command is used to scan multiple decoy IP addresses. Nmap will send multiple packets with different IP addresses, along with your attacker's IP address.

`nmap -D RND:10 <Target IP Address>`

Again, the output is the same as previous outputs but on the target view is very different.

Check the Logs on your Windows Server Firewall and analyze the last scan performed. You also can analyze this information with Wireshark turned on.

Both shows multiple IP addresses along with your real attacker IP address.

![firewall](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6c4f716f549aedea473d2701b1f40bb592413e47/firewallLog-RND.png)
_Windows Firewall Log: Decoyed IP Address_

![wireshark](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6c4f716f549aedea473d2701b1f40bb592413e47/wireshark-RND.png)
_Wireshark: Decoyed IP Address_