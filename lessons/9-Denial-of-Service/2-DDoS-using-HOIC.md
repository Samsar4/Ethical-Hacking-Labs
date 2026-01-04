# DDoS attack using HOIC
A distribute denial of services (DDoS) attack involves a group of compromised systems usually infected with Trojans used to perform a DoS attack on a target system or network.

### Objectives
* Perform DDoS attack - HTTP flooding

### Requisites
* Kali Linux virtual machine (Target)
* Windows Server, Windows 10 and Windows 7 virtual machine (Attackers)

### Overview of HOIC
High Orbit Ion Cannon (HOIC) is a free, open-source network stress application developed by Anonymous, a hacktivist collective, to replace the Low Orbit Ion Cannon (LOIC). Used for denial of service (DoS) and distributed denial of service (DDoS) attacks, it functions by flooding target systems with junk HTTP GET and POST requests.

## Log in to Virtual Machines
Before beginning this lab, turn on and log in to all virtual machines on this lab (Windows 7, 10, Server and Kali Linux).

Copy the **High Orbit Ion Cannon (HOIC)** folder onto all the Windows virtual machines(3).

## Configure HOIC
Switch to the Windows 10 and open the HOIC (hoic2.1.exe)

On the HOIC GUI, click '**+**' to add the target.

![hoic-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ae12d7b7073ba34fd105724b932664d42326214a/hoic-1.png)

On the HOIC - [Target] pop-up:
1. Type the target URL (IP address of your Kali)
2. Slide the power bar to **High**
3. Select **GenericBoost.hoic** booster from the drop-down list
4. Click **add**<br><br>
![hoic-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4d7add45a1ce5bb52c475b1419b2747fca8ce61d/hoic-4.png)

Set the **THREADS** value to **20** as shown below:

![hoic-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ae12d7b7073ba34fd105724b932664d42326214a/hoic-3.png)

**Now repeat this process on every Windows virtual machine on your lab**.

## Perform DDoS Attack
Once HOIC is configured on all machines, switch to each machine and click **FIRE TEH LAZER!**.

<p align="center">
  <img src="https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4a96be03755e00ce6123ea2f6b022b77488744ec/hoic-5.png" />
</p>
This initiates the DDoS attack on the target (Kali Linux).

Switch to the **Kali Linux** and launch the **Wireshark**.

Observe that Wireshark starts capturing a very large volume of packets, which means the machine is experiencing a huge number of incoming packets. These packets are coming from the **Windows 7, Windows Server and Windows 10** virtual machines.

![hoic-6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4a96be03755e00ce6123ea2f6b022b77488744ec/hoic-6.png)

In this lab, only three machines are demonstrated flooding a single machine. If there are a large number of machines performing flooding, then the target Kali Linux resources are completely consumed and the machine is overwhelmed.

In real time, a group of hackers operating hundreds or thousands of machines configure this tool on their machines, and simulate the DDoS attack by flooding a target machine/website at the same time. The target is overwhelmed and stops responding to user requests or starts dropping packets coming from legitimate users. The larger number of attacker machines, the higher the impact of the attack on the target machine/webste.

To stop the DDoS, click **FIRE TEH LAZER!** again, and then close the HOIC window in all the attacker virtual machines.