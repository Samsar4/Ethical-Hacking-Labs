# Hiding Files using NTFS streams
A stream consists of data associated with a main file directory (known as the main unnamed stream). Each file and directory in NTFS can have multiple data streams that are generally hidden from the user.

https://docs.microsoft.com/en-us/sysinternals/downloads/streams

NTFS supersedes the FAT file system as the preferred file system for Microsoft Windows operating systems. NTFS has several improvements over FAT and HPFS (High Performance File System), such as improved support for metadata and the use of advanced data structures.

### Objectives
* How to hide files usign NTFS streams.

### Requirements
* Windows 7, 8, 10 or Windows Server 2012, 2016.

## Hiding Data using NTFS streams
Make sure the **C:\drive** file system is **NTFS** format. To check this, go to **Computer** and right click C:\ and click Properties.

![NFTS-Info-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/47c51699608fdb618bf4f38b8721c9cdb0ce7288/NTFS-1.png)

1. Open Windows Explorer and create a **new folder** called **trick** inside the **C:** drive.

2. Go to **C:\windows\system32** and copy the **calc.exe** to the **trick** folder.
![Calc-copy](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b1b0f3cef708249202b1679f71d1acd2588ac6fa/NTFS-calc-copy2.png)

3. Launch the **command prompt** as Administrator, and navigate to **C:\trick**.<br>
`cd C:\trick`

4. Create a readme.txt file, type Hello World inside of it and save the file.<br>
`notepad readme.txt`

5. Back to command prompt and type **dir** to list the files on the current folder. **Note the file size of readme.txt.**
![Readme-Size](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bba37bcabedc43533fb1c84a35ede0745af44638/ntfs-6.png)

6. Now hide **calc.exe** inside the **readme.txt** by typing:<br>
`type c:\trick\calc.exe > c:\trick\readme.txt:calc.exe`
![ntfs-4](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bba37bcabedc43533fb1c84a35ede0745af44638/ntfs-7.png)

7. Type **dir** again and note the file size of **readme.txt** did not change. 

8. Back to the **c:\trick** and **delete the calc.exe**.

## Execute the Hidden Application

9. Create a symlink:
`mklink backdoor.exe readme.txt:calc.exe`

10. Execute the backdoor.exe by typing: `backdoor.exe`  
![ntfs-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/e97b7c0d62642eaa8e502a1b51268913c67de3c3/NTFS-calc-5.png)

Attackers may hide malicious files from being visible to the legitimate users by using NTFS streams and execute them whenever required.