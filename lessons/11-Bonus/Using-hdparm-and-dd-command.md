# hdparm

hdparm provides a command line interface to various kernel
interfaces supported by the Linux SATA/PATA/SAS "libata"
subsystem and the older IDE driver subsystem.  Many newer (2008
and later) USB drive enclosures now also support "SAT" (SCSI-ATA
Command Translation) and therefore may also work with hdparm.
E.g. recent WD "Passport" models and recent NexStar-3 enclosures.
Some options may work correctly only with the latest kernels.


### Objectives:
* Learn the basics of **hdparm**, **dd** and **hexedit**

### Requisites:
* Any Linux distro

* * * 

### Install `hdparm`
* Fedora:

<div>

    dnf -y install hdparm

</div>

* Ubuntu:

<div>

    sudo apt-get install -y hdparm

</div>

### Running hdparm

<div>

    hdparm -giI /dev/sda

</div>

* `-g` : Display the drive geometry (cylinders, heads, sectors), the size (in sectors) of the device, and the starting offset (in sectors) of the device from the beginning of the drive.

* `-i and -I` : Display the identification info which the kernel drivers (IDE, libata) have stored from boot/configuration time.

* More information: [hdparm linux manual](https://man7.org/linux/man-pages/man8/hdparm.8.html)

#### Output

<div>

    /dev/sda:
     geometry      = 981/255/63, sectors = 15761088, start = 0

     Model=SSDPAMM0008G1, FwRev=Ver2.I0H, SerialNo=CVPA83108257W
     Config={ HardSect NotMFM Fixed DTR>10Mbs }
     RawCHS=15636/16/63, TrkSize=32256, SectSize=512, ECCbytes=4
     BuffType=DualPort, BuffSize=1kB, MaxMultSect=1, MultSect=off
     CurCHS=15636/16/63, CurSects=15761088, LBA=yes, LBAsects=15761088
     IORDY=yes, tPIO={min:120,w/IORDY:120}, tDMA={min:120,rec:120}
     PIO modes:  pio0 pio1 pio2 pio3 pio4 
     DMA modes:  mdma0 mdma1 mdma2 
     UDMA modes: udma0 udma1 udma2 udma3 *udma4 
     AdvancedPM=no
     Drive conforms to: Unspecified:  ATA/ATAPI-4,5

     * signifies the current active mode

    CompactFlash ATA device
        Model Number:       SSDPAMM0008G1                           
        Serial Number:      CVPA83108257W       
        Firmware Revision:  Ver2.I0H
    Standards:
        Supported: 5 4 
        Likely used: 6
    Configuration:
        Logical     max current
        cylinders   15636   15636
        heads       16  16
        sectors/track   63  63
        --
        CHS current addressable sectors:   15761088
        LBA    user addressable sectors:   15761088
        Logical/Physical Sector size:           512 bytes
        device size with M = 1024*1024:        7695 MBytes
        device size with M = 1000*1000:        8069 MBytes (8 GB)
        cache/buffer size  = 1 KBytes (type=DualPort)
    Capabilities:
        LBA, IORDY(cannot be disabled)
        Standby timer values: spec'd by Standard, no device specific minimum
        R/W multiple sector transfer: Max = 1   Current = 0
        DMA: mdma0 mdma1 mdma2 udma0 udma1 udma2 udma3 *udma4 
             Cycle time: min=120ns recommended=120ns
        PIO: pio0 pio1 pio2 pio3 pio4 
             Cycle time: no flow control=120ns  IORDY flow control=120ns
    Commands/features:
        Enabled Supported:
           *    Power Management feature set
           *    WRITE_BUFFER command
           *    READ_BUFFER command
           *    NOP cmd
           *    CFA feature set
           *    Mandatory FLUSH_CACHE
           *    CFA advanced modes: pio5 pio6 mdma3 mdma4 
    Integrity word not set (found 0x0000, expected 0x20a5)

</div>

### Size

<div>

    echo With MBytes=1024 the hard drive size is $[15761088*512/1024/1024/1024]GB

</div>

#### Output

<div>

    With MBytes=1024 the hard drive size is 7GB

</div>

<div>

    echo With MBytes=1000 the hard drive size is $[15761088*512/1000/1000/1000]GB

</div>

#### Output

<div>

    With MBytes=1000 the hard drive size is 8GB

</div>

## Sanitize the drive

<div>

    dd if=/dev/zero of=/dev/sdb bs=4K conv=noerror,sync

</div>

#### Output

<div>

    262145+0 registos in
    262144+0 registos out
    1073741824 bytes (1,1 GB) copied, 2,17486 s, 494 MB/s

</div>

# Using `dd` command

- Using `dd`, it’s possible to directly read and/or write from/to different files provided that the function is already implemented in the respected drivers.
- It’s super useful for purposes like backing up the boot sector, obtaining random data etc.
- Data conversion, for example, converting ASCII to EBCDIC encoding.
- [More info](https://linuxhint.com/linux_dd_command/)


### Create a new directory

<div>

    mkdir /CaseStudies && cd /CaseStudies

</div>

## Input Sources

### Use dd to create a sample empty file with 1MB

<div>

    dd if=/dev/zero of=/CaseStudies/sample.dd bs=1M count=1

</div>

### Install `hexedit`
- hexedit shows a file both in ASCII and in hexadecimal. The file can be a device as the file is read a piece at a time. You can modify the file and search through it. 
- Hex editors are used to inspect the compiled executables or binary files. You can easily use a hex editor to change how a software works with enough experience.


<div>

    dnf -y install hexedit

</div>

### Edit the sample file

<div>

    hexedit sample.dd

    ENTER

    0x20000

    68 65 72 65  20 49 20 61  6D 0A

    Ctrl-X

</div>

### Skip to the text entered previously

<div>

    dd bs=512 skip=256 count=1 if=/CaseStudies/sample.dd | xxd

</div>

### Output

<div>

    1+0 records in
    1+0 records out
    512 bytes (512 B) copied, 0.00044093 s, 1.2 MB/s
    0000000: 6865 7265 2049 2061 6d0a 0000 0000 0000  here I am.......
    0000010: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000020: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000030: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000040: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000050: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000060: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000070: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000080: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000090: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000a0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000b0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000c0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000d0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000e0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00000f0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000100: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000110: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000120: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000130: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000140: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000150: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000160: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000170: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000180: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    0000190: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001a0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001b0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001c0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001d0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001e0: 0000 0000 0000 0000 0000 0000 0000 0000  ................
    00001f0: 0000 0000 0000 0000 0000 0000 0000 0000  ................

</div>

## Output Destinations

### Make a copy

<div>

    dd if=/CaseStudies/sample.dd bs=4k of=/CaseStudies/copy.dd

</div>

### Create a MD5 hash of the file

<div>

    dd if=/CaseStudies/sample.dd bs=4k | md5sum

</div>

### Output

<div>

    56+0 records in
    256+0 records out
    1048576 bytes (1.0 MB) copied, 0.0187227 s, 56.0 MB/s
    fc3ef9193baf3a1d3fc67da5aa4510ae  -

</div>

### Remote Copy

### Start a listener using `netcat` on the examiner machine

<div>

    nc -lp 4444 > sample.dd

</div>

### Pipe the output off to `netcat`

<div>

    dd if=/CaseStudies/sample.dd bs=4k | nc -w3 127.0.0.1 4444

</div>

### Compare the hashes

<div>

    md5sum sample.dd

</div>

### Output

<div>

    fc3ef9193baf3a1d3fc67da5aa4510ae  sample.dd

</div>

### References
- https://www.man7.org/linux/man-pages/man8/hdparm.8.html
- https://www.man7.org/linux/man-pages/man1/dd.1.html#DESCRIPTION
- https://linuxhint.com/linux_dd_command/
- https://linuxhint.com/hex_editor_linux/