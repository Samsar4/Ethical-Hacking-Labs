# Dumping and Cracking SAM hashes to Extract Plaintext passwords
Pwdump7 can be used to dump protected files. Ophcrack is a free open source (GPL) program that cracks Windows passwords by using LM hashes through rainbow tables.

SAM (Security Account Manager) is a database file present in Windows machines that stores user accounts and security descriptors for users on a local computer. It stores users passwords in a hashed format (in LM hash and NTLM hash). Because a hash function is one-way, this provides some measure of security for the storage of the passwords.

You need to have administrator access to dump the contents of the SAM file. Assessment of password strength is a critical milestone during your security assessment engagement. You will start your password assessment with a simple SAM hash dump and running it with a hash decryptor to uncover plaintext passwords.

### Objectives
* Use the **pwdump7** tool to extract password hashes.
* Use the Ophcrack tool to crack the passwords and obtain plain text passwords.

### Requisites
* Windows 10 machine.

### Tools
* [Ophcrack](https://ophcrack.sourceforge.io/)
* [Pwdump7](https://www.tarasco.org/security/pwdump_7/index.html)

## Generate Hashes
1. Before anything, we need to find the User IDs associated with the usernames for Windows 10.

2. Launch the Command prompt in Administrator mode and type:

`wmic useraccount get name,sid > c:/users.txt`

This command we got the usernames and their respective UserIDs. **Make a note of each UserID for further steps.**

3. To gather the Password hashes, go to the **pwdump7** folder and execute the .exe file.

`cd C:\Users\Dummy\Desktop\pwdump7`

`PwDump7.exe`

To gather this information on external .txt file, type:

`PwDump7.exe > c:\hashes.txt`

Now place the usernames before the respective UserIDs that we have gathered in **step 2** and save the file.

## Using Ophcrack to crack the hashes

1. Launch the Ophcrack application.
2. Click on **Load** and select **PWDUMP file**

![Ophcrack](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/51d83f1edc90c3f3de3890d72f3a27552a2646b1/ophcrack.png "Ophcrack")

3. Next, you will need to [download](https://ophcrack.sourceforge.io/tables.php) tables to perform the cracking. Select the **Vista free** to download.

4. Go to the Ophcrack and click the **Tables** menu to load the Table.

5. On the Table Selection window, select the **Vista free**,  and click **Ok**.

This table_vista_free is a pre-computed table for reversing cryptographic hash functions and recovering plaintext passwords up to a certain length. The selected **table_vista_free** is installed under the name **Vista free**, which is represented by a **green** colored bullet.

6. Click **Crack** on the menu bar. Ophcrack begins to crack passwords. This action will take a few minutes.

