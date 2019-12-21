# Hiding Data using Steganography
Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video.

Network steganography describes all the methods used for transmitting data over a network without it being detected. Several methods for hiding data in a network have been proposed, but the main drawback of most of them is that they do not offer a secondary layer of protection. If steganography to transfer sensitive information out of the target system undetected.

### Objectives
* Use Steganography in Windows and Linux.
* Using Snow steganography to hide files and data.
* Hiding files using spaces and tabs.
* Hide secret text messages in images using OpenStego.

## Hiding Data using Snow (Windows)
Snow website: http://darkside.com.au/snow/index.html

Snow is used to conceal messages in ASCII test by appending whitespace to the end of the lines. Because spaces and tabs are generally not visible in text viewers, the message is effectively hidden from casual observers. Anf if the built-in encryption is used, the message cannot be read even if it is detected.

Snow exploits the steganographic nature of whitespace. Locating trailing whitespace in text is like finding a polar bear in a snow storm, it uses the ICE encryption algorithm, so the name is thematically consistent.

**ICE encryption**: This encryption algorithm is a 64-bit block cipher. It runs in 1-bit cipher-feedback (CFB) mode, which although inefficient (requiring a full 64-bit encryption for each bit of output).

1. Launch the **command prompt** and navigate to the Snow folder.<br>
![snow-01](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1e1e57a1a30bab7ad94f502b3bba5107098448c0/snow-01.png)

2. Create a readme.txt **inside the SNOW folder** with a random message like: `hello world!`

3. Now go back to the **command prompt** and create a secret information<br>
`snow -C -m "My sketchy wallet: 3FkenCiXpSLqD8L79intRNXUgjRoH9sjXy" -p "pa55" readme.txt readme2.txt`

`-m "message"`: the secret string<br>
`pa55`: is the password, you can type any password you like.<br>
`readme2.txt`: is the name of another file which will be created automatically in the same location.

Now the data (`"My sketchy wallet: 3FkenCiXpSLqD8L79intRNXUgjRoH9sjXy"`) is hidden inside the **readme2.txt** file with the contents of the **readme.txt**.

_readme2.txt = readme.txt + "My sketchy wallet: 3FkenCiXpSLqD8L79intRNXUgjRoH9sjXy"_

**You can open both readme.txt and readme2.txt to check if there's any divergences**, besides the whitespaces as shown below:

![whitespaces-difference](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/1e1e57a1a30bab7ad94f502b3bba5107098448c0/snow-whitespaces-02.png)

4. To reveal the hidden contents, type:<br>
`snow -C -p "pa55" readme2.txt`<br>
![snow3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/346be861372d685fe81d0a7dd3d9cb7687c2592a/snow-03.png)

***

# Image Steganography using OpenStego (Windows)
OpenStego is a steganography tool that hides data inside images. OpenStego is a Java-based application and supports password-based encryption of data for additional layer of security. It uses DES algorithm for data encryption, in conjunction with MDS hashing to derive the DES key from the password provided.

OpenStego website: https://www.openstego.com/

1. Install the OpenStego and Open the application<br>
![OpenStego-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2a94c49858a92a09855df3edab939b2d731b8b8f/openstego-1.png)

2. Click on **ellipsis button** on **Message File** input and select the text file that contains on the OpenStego folder (This text file contains 'dummy' sensitive information such as VISA and pin numbers).<br>
![OpenSTego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3ece1184799bc34f54c0523fa8c0b6bd6efe9f30/openstego-2.png)

3. Next, click on the second **ellipsis button** (**Cover File**) and select **Island.jpg** that also inside the OpenStego folder.<br>
![OpenStego-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ef22f60c5f3883f11031c0e2c3e18835e246c578/openStego-3.png)

4. Click on the third **ellipsis button** **(Output Stego File)**, select the **Desktop** and provide the file name **stego**.

5. Now, click **Hide Data** on the right lower corner.<br>
![OpenStego-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6bcf0fc1ad730e4b8bfb0f29695cd3d5da026db4/openStego-5.png)

Open the image file on your desktop, you will see only the image but not the contents of the message(text file) embedded in it, as shown below:

![OpenStego-6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8265b66f9795426b604a8b602df5027d27a69897/stego-6.png)

### Obtain the Text file from the Image

1. Go back to the OpenStego window and click the **Extract Data** button on the left corner.

2. Click on the first **ellipsis button** **(Input Stego File)**, select the image that you generated from **Desktop** and your **Output Folder** on the next ellipsis button.<br>
![openstego7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/80722e31e7a359444d428f12b87bf31d64cfb739/openstego-7.png)

3. Click **Extract Data** on the right lower corner. This will extract the message file from the image.

4. The file displays all the information contained in the document, as show below:<br>
![openstego8](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/80722e31e7a359444d428f12b87bf31d64cfb739/openstego-8.png)

***

# Using Quick Stego (Windows)
Quick Stego hides text in pictures so that only other users of Quick Stego can retrieve and read the hidden secret messages.

QuickStego website: http://quickcrypto.com/free-steganography-software.html

### Hide the text inside the image
1. Install the Quick Stego.

2. Launch the Application.<br>
![QuickStego-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b3a67a059d4adeff6da89ec1b797b4ee7aa3c1c3/Quickstego-0.png)

3. Click on **Open Image**, under Picture, Image, Photo File.

4. Select the image inside the **QuickStego folder**.
`02_nissan_gt-r_specv_opt.jpg`

5. Next, click on **Open Text** under Text File, as shown below:<br>
![QuickStego-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/48ad0711987d02ced80915853bf83f9650ae5d18/QuickStego-1.png)

6. Select the **text file.txt** inside the **QuickStego folder**.

7. The selected text will be added in the text box right next to the image, as show below<br>
![QuickStego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b3a67a059d4adeff6da89ec1b797b4ee7aa3c1c3/quickStego-2.png)

8. Click on **Hide Text** under Steganography<br>
![QuickStego-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/b3a67a059d4adeff6da89ec1b797b4ee7aa3c1c3/quickstego-3.png)

9. To save the image file (in which the text is hidden), Click on **Save Image**, under Picture, Image, Photo File.

The file is now saved as "stego". Though it seems to be a normal image file, it has the text hidden in it, **which can be visible by viewing it in Quick Stego.**

***

# Hiding Data using Steghide (Kali Linux)
Steghide is a steganography program that is able to hide data in various kinds
of image- and audio-files. The color- respectivly sample-frequencies are not
changed thus making the embedding resistant against first-order statistical
tests.

Official repository: https://github.com/StefanoDeVuono/steghide

Installing Steghide is very simple in Kali Linux, because is already available in Kali Linux repository. 

Run the following command:

`sudo apt-get update`<br>
`sudo apt-get install steghide`

### Hide Text in Image file
1. Create a folder on your Desktop with an **image file** and a **secret text file**.<br>
![Kali-Steg-Files-0](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fdcd09b49b5f46b4e9c23ae266b41feadd1e7ce8/steg-kali-0.png)

2. To hide the text in image, navigate to the /Desktop/steg/ folder and type:<br>
`steghide embed -cf black-cat.jpg -ef secret-text.txt`<br><br>
`-cf`: Cover file < filename ><br>
`-ef`: Embedded File < filename ><br><br>
![Steg-Kali-command](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c05066032cd10aa55749c47426d139d6abd14e09/Steg-Kali-1.png)<br>
This command will embed the file secret-text.txt in the cover file black-cat.jpg protected with a passphrase.

### Extract text from the Image file
After you have embedded your secret data, the receiver has to use steghide in the following way: 

1. Extract the Data<br>
`steghide extract -sf black-cat.jpg `<br><br>
`-sf`: Stego file<br><br>
2. Enter the correct passphrase.<br>
![KaliStego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/bcbab9ca9f66ea7785cab8e15fc52d5492b0ea2e/KaliStego-3.png)<br>
The contents of the original file secret-text.txt will be extracted from the stego file black-cat.jpg and saved in the current directory.

### View Information of Embedded Data
If some file contains embedded data and you want to get some information about it before extracting it, type the command:

`steghide info black-cat.jpg`

![Embedded Data](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c0fc9841d6bd1d58adbea07cd0b71466cc7bf151/steg-kali-4-embedded.png)

Steghide will then try to extract the embedded data with that passphrase and – if it succeeds – print some information about it.

***

### Honorable Mention

StegoSuite for Linux and Windows is a free and open source steganography tool written in Java.

https://stegosuite.org/