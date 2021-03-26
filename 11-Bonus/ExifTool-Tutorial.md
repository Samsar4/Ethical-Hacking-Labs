ExifTool 
========

ExifTool is a platform-independent Perl library plus a command-line application for **reading, writing and editing meta information in a wide variety of files**. 

ExifTool supports many different metadata formats including EXIF, GPS, IPTC, XMP, JFIF, GeoTIFF, ICC Profile, Photoshop IRB, FlashPix, AFCP and ID3, Lyrics3, as well as the maker notes of many digital cameras by Canon, Casio, DJI, FLIR, FujiFilm, GE, GoPro, HP, JVC/Victor, Kodak, Leaf, Minolta/Konica-Minolta, Motorola, Nikon, Nintendo, Olympus/Epson, Panasonic/Leica, Pentax/Asahi, Phase One, Reconyx, Ricoh, Samsung, Sanyo, Sigma/Foveon and Sony. (...)

1. [Official website download](https://exiftool.org/)
2. [Install tutorial](https://exiftool.org/install.html)

### Objectives:
* Use exifTool
* Extract metadata from any file

### Requisites:
* Any Linux distro
    * exifTool installed


* * *

### 1. Download a sample file to test

```bash
curl -0 https://www.interpol.int/content/download/13927/file/WOA%20database%20application%20form.docx --output interpol.docx
```

### 2. Extract metadata **(docx)**

    exiftool interpol.docx 

### 3. Output 
```txt
ExifTool Version Number         : 11.88                                                   
File Name                       : interpol.docx                                           
Directory                       : .                                                       
File Size                       : 86 kB                                                   
File Modification Date/Time     : 2020:05:05 14:19:47+00:00                               
File Access Date/Time           : 2020:02:03 14:19:47+00:00
File Inode Change Date/Time     : 2020:02:03 14:19:47+00:00
File Permissions                : rw-rw-r--
File Type                       : DOCX
File Type Extension             : docx
MIME Type                       : application/vnd.openxmlformats-officedocument.wordproces
singml.document
Zip Required Version            : 20
Zip Bit Flag                    : 0x0006
Zip Compression                 : Deflated
Zip Modify Date                 : 1980:01:01 00:00:00
Zip CRC                         : 0x894abf3f
Zip Compressed Size             : 514
Zip Uncompressed Size           : 3763
Zip File Name                   : [Content_Types].xml
TitusGUID                       : 2bb0cece-ff2d-4aee-9010-fed278340cf2
InterpolClassification          : Unclassified
Template                        : G03 Basic Doc SP.dotx
Total Edit Time                 : 45 minutes
Pages                           : 1
Words                           : 112
Characters                      : 644
Application                     : Microsoft Office Word
Doc Security                    : None
Lines                           : 5
Paragraphs                      : 1
Scale Crop                      : No
Heading Pairs                   : Title, 1, Titre, 1
Titles Of Parts                 : Application form – Works of Art database, Título del doc
umento
Company                         : OIPC - INTERPOL
Links Up To Date                : No
Characters With Spaces          : 755
Shared Doc                      : No
Hyperlinks Changed              : No
App Version                     : 15.0000
Title                           : Application form – Works of Art database
Creator                         : Carolyn Lejeune
Description                     : Document Title
Last Modified By                : Carolyn Lejeune
Revision Number                 : 6
Last Printed                    : 2013:01:29 13:29:00Z
Create Date                     : 2019:05:03 15:35:00Z
Modify Date                     : 2019:05:03 16:22:00Z
Category                        : English
```

* * * 

### 1. Download another sample **(.jpg)**

```bash
curl -0 https://exiftool.org/Xiaomi.tar.gz --output xiaomi.tar.gz

tar -xf xiaomi.tar.gz

cd ~/Xiaomi/
```

### 2. Extract metadata from the image
```bash
exiftool XiaomiMiA2Lite.jpg 
```
#### 3. Output 
```txt
ExifTool Version Number         : 11.88                                                   
File Name                       : XiaomiMiA2Lite.jpg                                      
Directory                       : .                                                       
File Size                       : 15 kB                                                   
File Modification Date/Time     : 2020:02:02 14:20:12+00:00                               
File Access Date/Time           : 2020:02:03 14:54:06+00:00                               
File Inode Change Date/Time     : 2020:02:03 14:52:30+00:00                               
File Permissions                : rw-r--r--                                               
File Type                       : JPEG                                                    
File Type Extension             : jpg                                                     
MIME Type                       : image/jpeg                                              
Exif Byte Order                 : Big-endian (Motorola, MM)                               
Camera Model Name               : Mi A2 Lite                                              
Software                        : daisy-user 9 PKQ1.180917.001 V10.0.20.0.PDLMIXM release-
keys                                                                                      
Modify Date                     : 2020:05:28 18:11:41                                     
Y Cb Cr Positioning             : Centered                                                
ISO                             : 100                                                     
Exposure Program                : Not Defined                                             
F Number                        : 2.2                                                     
Exposure Time                   : 1/316                                                   
Sensing Method                  : One-chip color area                                     
Sub Sec Time Digitized          : 481291                                                  
Sub Sec Time Original           : 481291                                                  
Sub Sec Time                    : 481291                                                  
Focal Length                    : 3.8 mm                                                  
Flash                           : Off, Did not fire                                       
Metering Mode                   : Center-weighted average                                 
Scene Capture Type              : Standard                                                
Interoperability Index          : R98 - DCF basic file (sRGB)                             
Interoperability Version        : 0100                                                    
Focal Length In 35mm Format     : 26 mm                                                   
Create Date                     : 2020:05:28 18:11:41 
Exif Image Height               : 4000
White Balance                   : Auto
Date/Time Original              : 2020:05:28 18:11:41
Brightness Value                : 5.74
Exif Image Width                : 3000
Exposure Mode                   : Auto
Aperture Value                  : 2.2
Components Configuration        : Y, Cb, Cr, -
Color Space                     : sRGB
Scene Type                      : Directly photographed
Shutter Speed Value             : 1/316
Exif Version                    : 0220
Flashpix Version                : 0100
Resolution Unit                 : inches
GPS Latitude Ref                : North
GPS Longitude Ref               : West
GPS Altitude Ref                : Unknown (2.2)
GPS Time Stamp                  : 17:11:42
GPS Processing Method           : ASCII
GPS Date Stamp                  : 2020:05:28
X Resolution                    : 72
Y Resolution                    : 72
Make                            : Xiaomi
Thumbnail Offset                : 1111
Thumbnail Length                : 14021
Compression                     : JPEG (old-style)
Image Width                     : 8
Image Height                    : 8
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Aperture                        : 2.2
Image Size                      : 8x8
Megapixels                      : 0.000064
Scale Factor To 35 mm Equivalent: 6.8
Shutter Speed                   : 1/316
Create Date                     : 2020:05:28 18:11:41.481291
Date/Time Original              : 2020:05:28 18:11:41.481291
Modify Date                     : 2020:05:28 18:11:41.481291
Thumbnail Image                 : (Binary data 14021 bytes, use -b option to extract)
GPS Altitude                    : 96.7 m Below Sea Level
GPS Date/Time                   : 2020:05:28 17:11:42Z
GPS Latitude                    : 51 deg 15' 12.99" N
GPS Longitude                   : 0 deg 32' 21.93" W
Circle Of Confusion             : 0.004 mm
Field Of View                   : 69.4 deg
Focal Length                    : 3.8 mm (35 mm equivalent: 26.0 mm)
GPS Position                    : 51 deg 15' 12.99" N, 0 deg 32' 21.93" W
Hyperfocal Distance             : 1.50 m
Light Value                     : 10.6
```

* * * 
### 1. Download another sample **(.xlsx)**

```bash
curl -0 https://www.eea.europa.eu/ds_resolveuid/VGRPDKT9H5 --output pollu.xlsx
```

### 2. Extract metadata from the image
```bash
exiftool pollu.xlsx
```
#### 3. Output 

```txt
ExifTool Version Number         : 11.88
File Name                       : pollu.xlsx
Directory                       : .
File Size                       : 73 kB
File Modification Date/Time     : 2020:02:03 16:15:20+00:00
File Access Date/Time           : 2020:02:03 16:15:20+00:00
File Inode Change Date/Time     : 2020:02:03 16:15:20+00:00
File Permissions                : rw-rw-r--
File Type                       : HTML
File Type Extension             : html
MIME Type                       : text/html
HTTP Equiv XUA Compatible       : IE=edge
Content Type                    : text/html; charset=utf-8
Viewport                        : width=device-width, initial-scale=1
Theme Color                     : #069
Description                     : Information on the environment for those involved in developing, adopting, implementing and evaluating environmental policy, and also the general public
Format                          : text/plain
Type                            : Folder
Date                            : 2006/08/30 - , 2020-12-09T10:05:24+01:00, 2006-07-26T10:32:18+01:00
Language                        : en
Title                           :  European Environment Agency's home page — European Environment Agency
Generator                       : Plone - http://plone.org
```