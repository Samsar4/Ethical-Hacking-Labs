# Obfuscating a Trojan using SwayzCryptor
SwazCryptor a encrypter (or 'cypher') that allows users to encrypt the source code of their program.

A Crypter is a software used to hide viruses, keyloggers, or any RAT tool from antiviruses so that are not detected and deleted by AV's. It simply assings hidden values to each individual code within the source code. Thus, the source becomes hidden, making it difficult for the AV tools to scan it.

### Objectives 
* How to crypt a Trojan and make it partially/ completely undetectable.

### Requisites
* Windows 10 virtual machine (Attacker).
* Windows 7 or 8 virtual machine (Target).

## Scanning Malicious File
1. Log into Windows 10.
2. Launch a web browser and enter the URL: https://antiscan.me 
3. Uplaod the malware file created in [previous lab](https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/6-Malware-Threats/0-Using-njRAT.md) and start the scanner.<br>
* This site scan with various anti-virus programs in its database, and displays the scan result shown below:<br><br>
![antiscan](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/882f8120f8b44e6c84a95ba57329c288a8c99d55/antiscan-2.png)

* Note the number of detection from AV's **21/26**.

## Crypt a Trojan file using SwayzCryptor
1. Download the **SwayzCryptor** and launch the program.<br>
https://anonfile.com/JfI8EfI7ne/SwayzCryptor_zip

2. Select the same malicious file that you have scanned:<br><br>
![swayz](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4e2c26c5828b803db23706fcbdec6bf2c2e19611/swayzcryptor.png)

3. Check the options **Start up, Mutex and Disable UAC**, then click **Encrypt** to start.<br><br>
![swayz-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/4e2c26c5828b803db23706fcbdec6bf2c2e19611/swayzcryptor-2.png)

4. Scan the generated **CryptedFile** from SwayzCryptor on  https://antiscan.me <br><br>
![antiscan-reduced](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/882f8120f8b44e6c84a95ba57329c288a8c99d55/antiscan-3.png)<br><br>
Note the file detected by very few anti-virus programs now, **12/26**.

### Test out the **CryptedFile.exe** 
You can easily test if everything works using **njRAT**, share the malicious file with any Windows virtual machine, execute the file with njRAT opened on the Windows 10 machine. _In case you're reading this tutorial randomly, on the [previous lab](https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/6-Malware-Threats/0-Using-njRAT.md) is explained how to do this._
