# Using ZAP (Zed Attack Proxy)
Zed Attack Proxy (ZAP) is a free, open-source penetration testing tool being maintained under the umbrella of the Open Web Application Security Project (OWASP). ZAP is designed specifically for testing web applications and is both flexible and extensible.

<p align="center">
  <img src="https://www.zaproxy.org/getting-started/images/browser-no-proxy.png" />
</p>

At its core, ZAP is what is known as a “man-in-the-middle proxy.” It stands between the tester’s browser and the web application so that it can intercept and inspect messages sent between browser and web application, modify the contents if needed, and then forward those packets on to the destination. It can be used as a stand-alone application, and as a daemon process. [[...]](https://www.zaproxy.org/getting-started/)

[>> ZAP Download](https://www.zaproxy.org/download/)

### Objectives
* Intercept the Traffic between server and client

### Requisites
* Windows Server 2012 or 2016 virtual machine (Attacker)
* Windows 10 virtual machine (Target)

## Setup the Proxy
1. Log into the **Windows 10** and launch any browser, in this lab: **Firefox**.

2. Go to **Settings** > **Network Settings**

3. On **Proxy Settings**, check the box **Manual Proxy Configuration**, and type the Attacker machine's IP address on port **8080** as shown below:<br><br>
![firefox-proxy](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-0.png)

4. You also can configure directly on **Internet Properties** on **Control Panel** > **Connections Tab** > **LAN Settings** <br><br>
![proxy](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-7.png)
**Check the Proxy Server checkbox and type the attacker machine's IP address and port 8080** as shown below:
![proxy2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-8.png)

## Setting Up ZAP (Zed Attack Proxy)
Switch to Attacker Machine (Windows Server).

Note: Make sure to install **Java Run time**

1. Download ZAP > https://www.zaproxy.org/download/

2. On installatin process, make sure to select the option: **"No, I do not want to persist this session at this moment in time"**:<br><br>
![zap1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-1.png)

3. On the OWASP ZAP main window, click on the **"+"** icon in the right pane, then add the **Break** tab, as shown below:<br><br>
![zap-main-window](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-2.png)
The **Break** tab allows you to **modify a response** or **request** when it has been caught by the ZAP.<br><br>
It also allows you to modify some elements that you cannot modify through your browser; these include:
**The Header, Hidden fields, Disabled fields, Fields that use Javascript to filter out illegal characters**.

4. Once the **Break tab** is added, you need to configure the ZAP to work as a proxy, go to **Options** by click on **gear icon** on the top, as show below:<br><br>
![zap-options](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-3.png)

5. On the **Options** window, select the **Local Proxies** from the left pane; The address is the **Windows Server IP address** and port is **8080** by default:<br><br>
![zap-options-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-4.png)

6. Go back to **ZAP main window** and click on **Green Button (Set break on all requests and responses)** as shown below:<br><br>
![zap-green-icon](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-5.png)
This button sets and unsets a global break point that will trap and display the next response or request in Break tab from the Target's machine.<br><br>
You can modify any part of the request or response that you want and send it to the victim's application by clicking either **Step** or **Continue**.<br><br>
Alternatively, you can click **Drop** to dispose of the request or response.
---
1. **Switch back to the target machine(Windows 10)** and launch the same browser in which you have configured the proxy settings.

2. Type the URL: www.certifiedhacker.com , in case you got any warning messages just accept the risk and continue.

3. Now, **switch to the attacker machine(Windows Server)**, you will notice that the ZAP proxy is started capturing the requests of the target.<br><br>
![zap6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-6.png)

4. Now click the button **'submit and step to the next request'** until you capture the **GET** request of the browsed website.<br><br>
![zap7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/f8943de44ef583f07e8046d9eb7a16421feb0a55/zap-9.png)

You can modify all GET requests captured on the **Break tab** and forward the traffic to the target machine, changing the website and so on.