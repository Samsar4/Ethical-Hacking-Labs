Recovering Deleted Files
=============================

### Objectives:
* Learn the basics of **hexedit**, **scalpel** and **foremost**
* Recovery and Carve files using forensics tools


### Requisites:
* Any Linux distro
    * scalpel, foremost and hexedit installed


### - What is File Carving?
*File carving is a process used in computer forensics to extract data from a disk drive or other storage device without the assistance of the file system that originality created the file. It is a method that recovers files at unallocated space without any file information and is used to recover data and execute a digital forensic investigation. It also called “carving,” which is a general term for extracting structured data out of raw data, based on format specific characteristics present in the structured data.*

*File carving works only on raw data on the media and it is not connected with file system structure. File carving doesn’t care about any file systems which is used for storing files[.]In the FAT file system for example, when a file is deleted, the file’s directory entry is changed to unallocated space. The first character of the filename is replaced with a marker, but the file data itself is left unchanged. Until it’s overwritten, the data is still present.*

* * * 

## Create a new folder and navigate into it
```bash
mkdir forensic
cd /forensic/
```

## Create a virtual HD 
```bash
dd if=/dev/zero bs=1M count=100 of=/forensic/disk.img
```

## Set up a loop devic
```bash
losetup /dev/loop0 /forensic/disk.img 
```

## Create an ext4 filesystem 
```bash
mkfs.ext4 /dev/loop0
```

## Detach a loop device: 
```bash
losetup -d /dev/loop0
```

## Verify file type 
```bash
file /forensic/disk.img
```

## Create a mountpoint 
```bash
mkdir /mnt/disk/
```

## Mount the filesystem 

```bash
mount -o loop /forensic/disk.img /mnt/disk/
```

## Download some sample files 

```bash
cd /mnt/disk/

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2017/12/gray-cat-with-green-eyes.jpg --output cat-0.jpg

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2012/10/orange-and-white-cat-in-window-sill.jpg --output cat-1.jpg

curl -0 https://www.photos-public-domain.com/wp-content/uploads/2012/04/funny-cat-hanging-upside-down-on-kitty-tree.jpg --output cat-2.jpg
```

## List the files and inodes

```bash
ls -li /mnt/disk/*.jpg
```

## Display the files status
```bash
stat /mnt/disk/*.jpg
```

## Remove all the sample files 
```bash
rm -rf /mnt/disk/*.jpg
sync
```

## Display the files status
```bash
stat /mnt/disk/*.jpg
```

## Unmount the filesystem
```bash
cd /forensic
umount /mnt/disk
```

Recovering
=======

### Create a new case directory

    mkdir /forensic/case && cd /forensic/case

## Install Hexedit 
-  hexedit - view and edit files in hexadecimal or in ASCII

```bash
sudo apt-get install hexedit -y
```

## Run Hexedit
```bash
hexedit /forensic/disk.img
```

## Syntax

```bash
    F1:          help
    F2:          save
    F3:          load file
    Ctrl-Z:      suspend
    Ctrl-X:      save and exit
    Ctrl-C:      exit without saving
    Ctrl-U:      undo all
    Ctrl-S:      search forward
```
## Find the start of the JPEG (ffd8ffe1)

```bash
Ctrl-S
Hexa string to search: ffd8ffe1
```
## Output (offset) 

```bash
---  disk.img       --0x840C00/0x6400000--------------------------------------------------------------------
````

## Calculate the start location of the JPEG (in bytes)
```bash
echo "ibase=16;0840C00" | 
```

## Output
> `8653824`

## Find the end of the JPEG (ffd9) 

```bash
hexedit /forensic/disk.img
```
## Search for hexadecimal string ffd9 

```bash
Ctrl-S
Hexa string to search: ffd9
```

## Output (offset) 

```bash
---  disk.img       --0x85CCCD/0x6400000--------------------------------------------------------------------
```
## Calculate the end of the JPEG (in bytes) 

```bash
echo "ibase=16;85CCCD" | bc
```

### Output 
- `8768717`

## Carve the image using ```dd``` command

```bash
dd if=/forensic/disk.img of=/forensic/case/001.jpg skip=8653824 bs=1 count=8768717
```
## Display the image 

```
xdg-open 001.jpg
```

Using ```Scalpel```
-------------

## Create a local copy of scalpel.conf file 

```bash
cp /etc/scalpel.conf /forensic/case/
```
## Verify/Edit the scalpel configuration  

```bash
vim scalpel.conf
```
## Use Scalpel to carve files  
```bash
scalpel -c scalpel.conf /forensic/disk.img
```
## Results 
```bash
ls  -R /forensic/case/scalpel-output/
```
## Output  
```bash
/forensic/case/scalpel-output/:
audit.txt  jpg-6-0  rpm-41-0  tif-9-0

/forensic/case/scalpel-output/jpg-6-0:
00000000.jpg  00000001.jpg  00000002.jpg

/forensic/case/scalpel-output/rpm-41-0:
00000006.rpm  00000007.rpm  00000008.rpm  00000009.rpm  00000010.rpm  00000011.rpm  00000012.rpm  00000013.rpm  00000014.rpm  00000015.rpm  00000016.rpm  00000017.rpm  00000018.rpm  00000019.rpm  00000020.rpm

/forensic/case/scalpel-output/tif-9-0:
00000003.tif  00000004.tif  00000005.tif
```

Using Foremost 
--------------
- foremost - Recover files using their headers, footers, and data structures 

## Install foremost 
```bash
sudo apt-get install foremost -y
```

## Change to our working directory 
```bash
cd /forensic/case/
```

## Use Foremost to carve jpg files 
```bash
    foremost -t jpg -o foremost-output /forensic/disk.img
```

## Results
```bash
ls -lR foremost-output/
```

## Output 
```bash
foremost-output/:
total 8
-rw-r--r--. 1 root root  817 Jun 27 10:11 audit.txt
drwxr-xr--. 2 root root 4096 Jun 27 10:11 jpg

foremost-output/jpg:
total 440
-rw-r--r--. 1 root root 114895 Jun 27 10:11 00016902.jpg
-rw-r--r--. 1 root root 132203 Jun 27 10:11 00017128.jpg
-rw-r--r--. 1 root root 195148 Jun 27 10:11 00017388.jpg
```
## References:

- [Man: hexedit](https://manpages.ubuntu.com/manpages/bionic/en/man1/hexedit.1.html)
- [Man: scalpel](https://manpages.ubuntu.com/manpages/precise/man1/scalpel.1.html)
- [Man: foremost](https://linux.die.net/man/1/foremost)
- [Infosec Institute - Blog post](https://resources.infosecinstitute.com/topic/file-carving/)