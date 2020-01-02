# Rainbow Tables
RainbowCrack is a computer program that generates rainbow tables for use in password cracking.

RainbowCrack [Documentation](https://project-rainbowcrack.com/documentation.htm)

### Overview of Rainbow Tables
A rainbow table is a pre-computed table for reversing cryptographic hash functions, typically used for cracking password hashes. Tables are usually used in recovering the plaintext password consisting of a limited set of characters, up to a certain length.

### Objectives
* Short introduction to rainbow tables and use them to crack the hashes and obtain plain text passwords.

## Generate Rainbow Table
To obtain rainbow tables you can [download](https://freerainbowtables.com/) or manually generate using `rtgen` that comes with `rainbowcrack` package.

Install RainbowCrack CLI version:

`sudo apt-get install rainbowcrack`

**GUI** version: https://project-rainbowcrack.com/

**Usage example**:
`rtgen hash_algorithm charset plaintext_len_min plaintext_len_max table_index chain_len chain_num part_index`

Hash Algorithm | Description 
--- | --- | ---
**hash_algorithm** | Rainbow table is hash algorithm specific. Rainbow table for a certain hash algorithm only helps to crack hashes of that type. The rtgen program natively support lots of hash algorithms like lm, ntlm, md5, sha1, mysqlsha1, halflmchall, ntlmchall, oracle-SYSTEM and md5-half. In the example above, we generate md5 rainbow tables that speed up cracking of md5 hashes.
**charset**	| The charset includes all possible characters for the plaintext. "loweralpha-numeric" stands for "abcdefghijklmnopqrstuvwxyz0123456789", which is defined in configuration file charset.txt.
**plaintext_len_min plaintext_len_max** | These two parameters limit the plaintext length range of the rainbow table. In the example above, the plaintext length range is 1 to 7. So plaintexts like "a" and "abcdefg" are likely contained in the rainbow table generated. But plaintext "abcdefgh" with length 8 will not be contained.
**table_index1** | The table_index parameter selects the reduction function. Rainbow table with different table_index parameter uses different reduction function.
**chain_len1** | This is the rainbow chain length. Longer rainbow chain stores more plaintexts and requires longer time to generate.
**chain_num1** | Number of rainbow chains to generate. Rainbow table is simply an array of rainbow chains. Size of each rainbow chain is 16 bytes.
**part_index** | To store a large rainbow table in many smaller files, use different number in this parameter for each part and keep all other parameters identical.

**Example:**

`rtgen md5 loweralpha-numeric 1 7 0 3800 33554432 0`

CPU will be busy computing rainbow chains. On system with multi-core processor, all cores are fully utilized.

To pause table generation, just press Ctrl+C and rtgen program will exit. Next time if the rtgen program is executed with exactly same parameters, table generation is resumed.

**This command takes hours to complete with ordinary processor.**

After generating the rainbow table you need to sort it. Rainbowcrack comes with `rtsort` program, that sorts the rainbow chains by end point to make binary search possible so the processor can access them quicker.

`rtsort *.rt`

## Cracking
To display the usage and options just type `rcrack`.
```
usage: ./rcrack path [path] [...] -h hash
       ./rcrack path [path] [...] -l hash_list_file
       ./rcrack path [path] [...] -lm pwdump_file
       ./rcrack path [path] [...] -ntlm pwdump_file
path:              directory where rainbow tables (*.rt, *.rtc) are stored
-h hash:           load single hash
-l hash_list_file: load hashes from a file, each hash in a line
-lm pwdump_file:   load lm hashes from pwdump file
-ntlm pwdump_file: load ntlm hashes from pwdump file

implemented hash algorithms:
    lm HashLen=8 PlaintextLen=0-7
    ntlm HashLen=16 PlaintextLen=0-15
    md5 HashLen=16 PlaintextLen=0-15
    sha1 HashLen=20 PlaintextLen=0-20
    sha256 HashLen=32 PlaintextLen=0-20

examples:
    ./rcrack . -h 5d41402abc4b2a76b9719d911017c592
    ./rcrack . -l hash.txt
```

# L0phtCrack

L0phtCrack is a password auditing tool that contains features such as scheduling, hash extraction from 64-bit Windows versions, multiprocessor algorithms, and network monitoring and decoding. It can import and crack UNIX password files from remote Windows machines.

Free Trial: https://www.l0phtcrack.com/<br>
Documentation: https://www.l0phtcrack.com/doc/


### Useful links:

https://project-rainbowcrack.com/documentation.htm

https://www.insecurity.be/blog/2018/01/21/retrieving-ntlm-hashes-and-what-changed-technical-writeup/

https://asecuritysite.com/encryption/lmhash
