# njRAT - Remote Access Trojan 
njRAT is a RAT with powerful data-stealing capabilities. In addition to loggin keystrokes, it is capable of accessing a victim's camera, stealing credentials stored in browsers, uploading and downloading files, performing the process and file manipulations, and viewing the victim's desktop.

RATs help an attacker to remotely access complete GUI, control victim's computer without his or her awareness and are capable of performing screening and camera capture, code execution, keylogging, file access, password sniffing, registry management, and so on. It infects victims via phishing attacks and drive by downloads and propagates through infected USB keys or networked drives. It can download and execute additional malware, execute shell commands, read and write registry keys, capture screenshots, log keystrokes, and spy on webcams.

![njrat-banner](https://mrpirate.net/wp-content/uploads/2019/01/Download-NjRat-Cracked-696x297.png)

The njRAT Trojan can be used to control Botnets (network of computers), allowing the attacker to update, uninstall, disconnect, restart, close the RAT, and rename its compaign ID. The attacker can further create and configure the malware to spread through USB drives with the help of the Command and Control server software.

https://mrpirate.net/njrat/

### Objectives 
* Create a server using njRAT.
* Access the target machine remotely.

### Requisites
* Windows 10 (Attacker).
* Windows 7, 8 or Server (Target).

***


### Create an Executable Server with njRAT
1. Log in to the **Windows 10** and install the **njRAT**.

2. Launch the njRAT, the GUI appears along with a pop-up, where you need to specify the port you want to use to interact with the target machine. Use the default port number **5552**, and click **Start**.<br><br>
![njRAT-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/caad9653523827738862d74cf1c36cf8837d6fd7/njrat-1.png)

3. Click on **Builder** at lower-left corner.<br><br>
![njrat-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/411c9e98897726a97257b7987b0c509a3aa1675f/njrat-2.png)

4. On the **Builder** dialog-box, enter the IP address of the **Attacker machine - Windows 10**, check the option **Copy to StartUp and Registry StarUp**, then click **Build** as shown below:<br><br>
![njrat-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/411c9e98897726a97257b7987b0c509a3aa1675f/njrat-3.png)

5. **Save** the file on the **Desktop** and name as **Example.exe**.

6. Now, we need to use any technique to send this server to the intended target through mail or any other way.<br>
To make this easier in this lab, I copied the **Example.exe** file in the **shared network location**.

### Execute the Server on the Target Machine
In this Lab I'm using Windows 7 SP1 virtual machine.<br>
**Note**: Make sure to **enable** the Firewall on the target machine.

1. Drag the **Example.exe** file to your Desktop and double-click it. <br><br>
![njrat-file](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b2573905cb5a70412b91a66178dbc31d408b88c5/njrat-4-.png)
<br><br>
As you can see below, the connection was successfully established.
![netstat](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/09d357ad5a4100dc86c96752cdfa66aa5d7ea0b8/netstat-njrat-0.png)

2. Switch back to the **Windows 10** (Attacker). When the target double-clicks the server, the executable starts running and the njRAT GUI running on the Windows 10 establishes a persistent connection with the Target machine as show below:<br><br>
![njrat-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b2573905cb5a70412b91a66178dbc31d408b88c5/njrat-5-manager.png)<br>
The GUI displays the machine's basic details such as the IP address, OS, user name and so on.

**Note**: Unless the attacker disconnects the server on his own, the victim machine remains under his control.

### Manipulate Files on Target machine

* Right-click on the detected Target machine and click **Manager**.<br><br>
![njrat-6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-6.png)<br><br> Double-click on any directory in the left pane. You can right-click any selected directory and manipulate it using the contextual options:<br><br>
![njrat-7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-7.png)<br>
![njrat-8](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-8.png)

### Manage the Processes
* Click on **Process Manager** on the top menu. You will be redirected to the Process Manager, where you can right-click any process and perform actions such as **Kill**, **Delete**, and **Restart**.<br><br>
![njrat-9](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-9.png)

### Manage the Connections
* Click on **Connections** on the top menu and select a specific connection, right-click on it, and click **Kill Connection**. This action kills the connection between two machines communicating through a particular port.<br><br>
![njrat-10](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-10.png)

### Manage the Registries
* Click on **Registry** on the top menu and choose a registry from the left pane, right-click on its associated registry files, a few options appear to manipulate them.<br><br>
![njrat-11](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-11.png)

### Launch a Remote Shell
* Click on **Remote Shell** on the top menu. This action launches a remote command prompt of the target machine.<br><br>
![njrat-12](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/765ee94aa03721aa4e232e9bb6681286a85c1b63/njrat-12.png)
Similarly, you can issue all the other commands that can be executed in the command prompt of the target. 

### Run File
* On the main window of njRAT, righ-click on the Target machine and select **Run File**. An attacker makes use of these options to execute scripts or files remotely from his/her machine.<br><br>
![njrat-13](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec9651e3ff4d84df00483d9533bba6e5c636fe07/njrat-13.png)

### Launch a Remote Desktop Connection
* Righ-click on the Target machine and select **Remote Desktop Connection**<br><br>
![njrat-14](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec9651e3ff4d84df00483d9533bba6e5c636fe07/njrat-14.png)<br><br>
This launches a remote desktop connection without target's consent. You will be able to remotely interact with the victim machine using the mouse or keyboard.<br>
![njrat-15](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ec9651e3ff4d84df00483d9533bba6e5c636fe07/njrat-15.png)<br><br>
In the same way, you can select the **Remote Cam** and **Microphone** to spy on the target and track voice conversations.

### Perform Key Logging
* Switch to the **Windows 7 (Target machine)**. Let's assume that you are a legitimate user and perform a few activities such as logging into any websites or typing text in some documents.

* Now, switch back to **Windows 10** machine / njRAT GUI and right-click on the target machine, select the **Keylogger** option.<br><br>
![njrat-17](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/cac208d7be116875c33553b33c198cb97a1a4830/rjrat-17.png)<br><br>
The keylogger window appears, displaying all the keystrokes performed by the target.

***
In case the victim/target, attempts to break the connection by restarting the machine, however, as soon the victim logs again, the njRAT client will automatically establishes a connection with the victim.


 
