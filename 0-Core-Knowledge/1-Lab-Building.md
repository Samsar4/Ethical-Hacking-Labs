# Lab Building

### Requirements 
* Windows 10, macOS or any Linux distro
    * At least 8 GB RAM (16GB recommended)

### Objectives
* Understand how virtual machines work
* Learn how to create a basic virtual environment for pentesting purpose

# What does Virtual Machine (VM) means?
For simplicity, think of a virtual machine (VM) as a "computer made of software" which you can use to run any software you'd run on a real, physical computer. Like a physical machine, a virtual machine has its own operating system (Windows, Linux, etc.), storage, networking, configuration settings, and software, and it is fully isolated from other virtual machines running on that host.

![vm](https://miro.medium.com/max/937/1*QgshMdPQ7ZzK1hRbv1ncPQ.jpeg)


**Security benefits** — Because virtual machines run in multiple operating systems, using a guest operating system on a VM allows you to run apps of questionable security and protects your host operating system. VMs also allow for better security forensics, pentesting and are often used to safely study computer viruses, isolating the viruses to avoid risking their host computer.

### Hypervisors
There are two main hypervisor types, referred to as **“Type 1” (or “bare metal”)** and **“Type 2” (or “hosted”)**. 

![hypervisors](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/0143eb15cf424c87ae823109d73df9ebe3faebec/hyper.png)

- **Type 1** hypervisor acts like a lightweight operating system and runs directly on the host’s hardware.
- **Type 2** hypervisor runs as a software layer on an operating system, like other computer programs. 

# 1. VirtualBox Installation

- **This tutorial use [Oracle VM VirtualBox](https://www.virtualbox.org), the most popular free and open-source hosted hypervisor for x86 virtualization, developed by Oracle.**
- There are other options from different vendors to achieve the same result:
    - [VMware Player for Windows (30 day trial)](https://www.vmware.com/products/workstation-player.html)
    - [VMware Fusion for macOS (30 day trial)](https://www.vmware.com/products/fusion.html)
    - [Windows Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/)
    - [Linux KVM](https://help.ubuntu.com/community/KVM/Installation)

1. **Make sure your PC support hardware virtualization (Windows)** 
    - Reboot your computer
    - Right when the computer is coming up from the black screen, press Delete, Esc, F1, F2, or F4. Each computer manufacturer uses a different key but it may show a brief message at boot telling you which one to press. If you miss it the first time, reboot and try again. It helps to tap the key about twice a second when the computer is coming up. If you are not able to enter the BIOS via this method, consult your computer’s manual.
    - In the BIOS settings, find the configuration items related to the CPU. These can be in under the headings Processor, Chipset, or Northbridge.
    - Enable virtualization; the setting may be called **VT-x, AMD-V, SVM, or Vanderpool**. Enable Intel VT-d or AMD IOMMU if the options are available.
    - Save your changes and reboot.

> ⚠️  If you are unable to find the Virtualization settings in your BIOS it may mean that your computer does not support it.

2. **Download the latest version of Virtual Box**
    - Go to Oracle Virtual Box website:
        - https://www.virtualbox.org/wiki/Downloads
    - Select your current OS and download the installer
    - ![v](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/944dad38ad3bfc556600c6ca3e08ec83cabd54e5/vbox1.png)
    - Also, scroll down on the same page and download the **VirtualBox Extension Pack**. This extension will allow VirtualBox functionalities like USB support, virtual disk encryption etc.
    - ![v2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/944dad38ad3bfc556600c6ca3e08ec83cabd54e5/vbox2.png)

3. **Install Virtual Box and Extension Pack**
    - There is no special configuration on the **Virtual Box** installation process, just point, click and install.
    - Once the installation is done, install the **Extension Pack** by double clicking it; The file extension is `.vbox-extpack`. Don't worry about the warning prompts.

## VirtualBox NAT configuration
*The next steps will cover how to create a NAT network on VirtualBox. In simple words Virtual Machines needs a virtual network adapter, to access the internet and segragete your Host IP(main OS) and Guest IP(VM).*

4. **Launch VirtualBox and open the `Preferences` pane** 

![pref1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1b0a358d438d859df17db305753ce41c1826e4b0/pref1.png)

5. **Go to the `Network tab` on the left pane, and then click the `green plus button` on the right**

![pref2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1b0a358d438d859df17db305753ce41c1826e4b0/pref2.png)

6. **By the default, VirtualBox automatically creates a NatNetwork. Click the `OK` button and save this configuration**

![pref3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1b0a358d438d859df17db305753ce41c1826e4b0/pref3.png)


7. **Next part we will download the latest Kali Linux version and boot it up into Virtual box software**



## About Kali Linux 
![kali](https://www.bleepstatic.com/content/hl-images/2019/11/29/kali-header.jpg)

> ⚠️  Kali Linux Tutorial will be covered on the next module [Linux for Hackers].md 

Kali Linux (formerly known as BackTrack Linux) is an open-source, Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing. [[+]](https://www.kali.org/docs/introduction/what-is-kali-linux/)

Kali Linux contains several hundred tools targeted towards various information security tasks, such as:
- Penetration Testing
- Security Research
- Computer Forensics
- Reverse Engineering

## Download the latest Kali Linux image
1. **Go to Offensive Security website:**
    - https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/
2. **Download the Kali Linux VirtualBox image, make sure to select the `Virtual Box image (OVA)`**

![kali0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/163a5fcc5653f6c06fb7e63fbf570e3fd9b5c144/kali0.png)

# 2. Installing Kali Linux on VirtualBox
Once you have installed VirtualBox and downloaded the Kali Linux image, you just need to import it to VirtualBox in order to make it work.

1. **Launch VirtualBox and click the `Import Button` on the top center menu**

![kali1](https://i1.wp.com/itsfoss.com/wp-content/uploads/2019/02/vmbox-import-kali-linux.jpg?w=956&ssl=1)

2. **Next, browse the Kali Linux image (OVA) you just downloaded and choose it to be imported (as you can see in the image below).**

![kali2](https://i2.wp.com/itsfoss.com/wp-content/uploads/2019/02/vmbox-linux-next.jpg?w=954&ssl=1)

3. **Next, you will be shown the settings for the virtual machine you are about to import. So, you can customize them or not – that is your choice based on your hardware capacity.**
    - If you have a computer with 8GB RAM and at least 2 cores available, leave the default settings.
    - If your computer have 16GB RAM or more, I recommend to use 4GB RAM on Kali Linux, to do that, scroll down the configuration list and change the `RAM value` to `4096` MB

![kali3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/9a53e3ba4ca62c777cf59acc53d211b4c187598e/pref4.png)

4. **You will now see the Kali box listed. So, just hit Start to launch it.**

![kali4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5f7c4d496d67f429aff72c1c177028f16dc35379/pref5.png)

5. **Type the default credentials:** username: `kali`, password: `kali`. 
    - Tip: On Linux, you can change the default password of the current user by typing `passwd` on terminal.

![kali5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/5f7c4d496d67f429aff72c1c177028f16dc35379/kali-log.png)

6. **Done!**

![kali6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/a8f9a9f928ce6aeb71683cf95cb738b5842d0c04/kali-desk.png)

- ⚠️  **Next module you'll learn some techniques of Kali distro and how to operate on Linux itself.**