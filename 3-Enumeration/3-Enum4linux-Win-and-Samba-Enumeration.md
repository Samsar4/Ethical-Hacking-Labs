# Enumerating Windows and Samba using Enum4linux
A Linux alterantive to enum.exe for enumerating data from Windows and Samba hosts.

Enum4linux is a tool for enumerating information from Windows and Samba systems. As a security person you have to secure process where the attacker can establish an active connection with the victim and try to discover as many attack vectors as possible, which can be used to exploit the systems further.

### Objectives
Enumeration:
* Connected Devices
* Hostname and information
* Domain
* Hardware and storage information
* Software Components
* Total Memory

### Requirements
* Kali Linux (Attacker)
* Windows Server 2012 R2 (Target)

## Get user info
Go to the Kali Linux and Open a new Terminal window.<br>
Type `enum4linux -h` to view the options.

Next, type some existing credentials:

`enum4linux -u CEH -p Pa55w.rd -U 10.0.2.23`

-u: Username, -p Password, -U users information

The enum4linux starts enumerating the workgroups/domains first and displays the results all the results.

It lists out the Users info with their respective RIDs as show below:

```
index: 0xf4d RID: 0x1f4 acb: 0x00000010 Account: Administrator  Name: (null)    Desc: Built-in account for administering the computer/domain
index: 0x1025 RID: 0x453 acb: 0x00000014 Account: bobby Name: Bobby     Desc: (null)
index: 0x1024 RID: 0x452 acb: 0x00000010 Account: CEH   Name: (null)    Desc: (null)
index: 0xf4e RID: 0x1f5 acb: 0x00000214 Account: Guest  Name: (null)    Desc: Built-in account for guest access to the computer/domain
index: 0xf85 RID: 0x1f6 acb: 0x00020011 Account: krbtgt Name: (null)    Desc: Key Distribution Center Service Account
index: 0x102b RID: 0x459 acb: 0x00000010 Account: shmurdance    Name: (null)    Desc: (null)
```

## Get OS info

This option enumerates the target system and lists out its OS details as show below

`enum4linux -u CEH -p Pa55w.rd -o 10.0.2.23`

-o: Get OS information

```
 =================================== 
|    OS information on 10.0.2.23    |
 =================================== 
Use of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.
[+] Got OS info for 10.0.2.23 from smbclient: 
[+] Got OS info for 10.0.2.23 from srvinfo:
        10.0.2.23      Wk Sv Sql PDC Tim NT 
        platform_id     :       500
        os version      :       6.3
        server type     :       0x80102f
```

## Get Password Policy info
This options enumerates the target system and displays its entire password policy information as show below:

`enum4linux -u CEH -p Pa55w.rd -P 10.0.2.23`

-P: Get password policy information

```
 ================================================= 
|    Password Policy Information for 10.0.2.23    |
 ================================================= 

[+] Attaching to 10.0.2.23 using shmurdance:Pa55w.rd
[+] Trying protocol 445/SMB...
[+] Found domain(s):

        [+] LAB
        [+] Builtin

[+] Password Info for Domain: LAB

        [+] Minimum password length: 7
        [+] Password history length: 24
        [+] Maximum password age: 41 days 23 hours 53 minutes 
        [+] Password Complexity Flags: 000001

                [+] Domain Refuse Password Change: 0
                [+] Domain Password Store Cleartext: 0
                [+] Domain Password Lockout Admins: 0
                [+] Domain Password No Clear Change: 0
                [+] Domain Password No Anon Change: 0
                [+] Domain Password Complex: 1

        [+] Minimum password age: 1 day 4 minutes 
        [+] Reset Account Lockout Counter: 30 minutes 
        [+] Locked Account Duration: 30 minutes 
        [+] Account Lockout Threshold: None
        [+] Forced Log off Time: Not Set

[+] Retieved partial password policy with rpcclient:

Password Complexity: Enabled
Minimum Password Length: 7
```

## Get Group Info
This options enumerates the target system and displays the group policy information, showing domain groups, memberships, local groups and so on.

`enum4linux -u CEH -p Pa55w.rd -G 10.0.2.23`


## Get Share info
This option enumerate the share policy information of the target machine

`enum4linux -u CEH -p Pa55w.rd -S 10.0.2.23`

-S: Get sharelist

