# Hiding Data using Steganography
Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video.

Network steganography describes all the methods used for transmitting data over a network without it being detected. Several methods for hiding data in a network have been proposed, but the main drawback of most of them is that they do not offer a secondary layer of protection. If steganography to transfer sensitive information out of the target system undetected.

### Objectives
* Using Snow steganography to hide files and data.
* Hiding files using spaces and tabs.
* Hide secret text messages in images using OpenStego.

## Hiding Data using Snow
Snow website: http://darkside.com.au/snow/index.html

Snow is used to conceal messages in ASCII test by appending whitespace to the end of the lines. Because spaces and tabs are generally not visible in text viewers, the message is effectively hidden from casual observers. Anf if the built-in encryption is used, the message cannot be read even if it is detected.

Snow exploits the steganographic nature of whitespace. Locating trailing whitespace in text is like finding a polar bear in a snow storm, it uses the ICE encryption algorithm, so the name is thematically consistent.

**ICE encryption**: This encryption algorithm is a 64-bit block cipher. It runs in 1-bit cipher-feedback (CFB) mode, which although inefficient (requiring a full 64-bit encryption for each bit of output).

1. Launch the **command prompt** and navigate to the Snow folder.
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
`snow -C -p "pa55" readme2.txt`
![snow3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/346be861372d685fe81d0a7dd3d9cb7687c2592a/snow-03.png)

***

# Image Steganography using OpenStego
OpenStego is a steganography tool that hides data inside images. OpenStego is a Java-based application and supports password-based encryption of data for additional layer of security. It uses DES algorithm for data encryption, in conjunction with MDS hashing to derive the DES key from the password provided.

OpenStego website: https://www.openstego.com/

1. Install the OpenStego and Open the application
![OpenStego-1](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/2a94c49858a92a09855df3edab939b2d731b8b8f/openstego-1.png)

2. Click on **ellipsis button** on **Message File** input and select the text file that contains on the OpenStego folder (This text file contains 'dummy' sensitive information such as VISA and pin numbers).
![OpenSTego-2](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/3ece1184799bc34f54c0523fa8c0b6bd6efe9f30/openstego-2.png)

3. Next, click on the second **ellipsis button** (**Cover File**) and select **Island.jpg** that also inside the OpenStego folder.
![OpenStego-3](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/ef22f60c5f3883f11031c0e2c3e18835e246c578/openStego-3.png)

4. Click on the third **ellipsis button** **(Output Stego File)**, select the **Desktop** and provide the file name **stego**.

5. Now, click **Hide Data** on the right lower corner.
![OpenStego-5](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6bcf0fc1ad730e4b8bfb0f29695cd3d5da026db4/openStego-5.png)

Open the image file on your desktop, you will see only the image but not the contents of the message(text file) embedded in it, as shown below:

![OpenStego-6](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8265b66f9795426b604a8b602df5027d27a69897/stego-6.png)

### Obtain the Text file from the Image

1. Go back to the OpenStego window and click the **Extract Data** button on the left corner.

2. Click on the first **ellipsis button** **(Input Stego File)**, select the image that you generated from **Desktop** and your **Output Folder** on the next ellipsis button.
![openstego7](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/80722e31e7a359444d428f12b87bf31d64cfb739/openstego-7.png)

3. Click **Extract Data** on the right lower corner. This will extract the message file from the image.

4. The file displays all the information contained in the document, as show below:
![openstego8](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/80722e31e7a359444d428f12b87bf31d64cfb739/openstego-8.png)

