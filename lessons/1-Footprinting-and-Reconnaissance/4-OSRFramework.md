# Open Source Intelligence Gathering using OSRFramework
OSRFramework is a set of libraries to perform Open Source Intelligence tasks. They include references to a bunch different applications related to username checking, DNS lookups, information leaks research, deep web search, regular expressions extraction, and many others.

### Objectives:
* Demonstrate how to identify usernames of the target on different social media platforms.

### Requirements:
* Kali Linux virtual machine.
***
1. Log into **Kali Linux** machine and open a **Terminal** window..

1. Update APT and install the OSRFramework:

`apt update && apt -y install osrframework`

## Using usufy.py<br>
`usufy.py` checks for the existence of a profile for a given user details in different platforms.

Usage: **usufy.py -n <target user name or profile name> -p twitter facebook youtube.**

`usufy.py -n cehuser us -p twitter facebook youtube`
```
+-----------------------------+---------------+------------------+
|         i3visio_uri         | i3visio_alias | i3visio_platform |
+=============================+===============+==================+
| http://twitter.com/us       | us            | Twitter          |
+-----------------------------+---------------+------------------+
| https://www.facebook.com/us | us            | Facebook         |
+-----------------------------+---------------+------------------+
| http://twitter.com/cehuser  | cehuser       | Twitter          |
+-----------------------------+---------------+------------------+
```
The **usufy.py** will search the user details in the mentioned platform and will provide you with existence of the user as shown above.

## Using searchfy.py<br>
`searchfy.py` checks with the existing users of pages/handlers for a given details in the all social networks. 

Usage: `searchfy.py -q <Page Name or Handler Name>`

`searchfy.py -q "ECCouncil"`<br>

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/c07e9574a732bbd239c81d4b1e24bee3de20e62b/searchfy-eccouncil.png "serachfy eccouncil screenshot")

It will pull out all the user details who are subscribed to targeted social networking pages that are provided.

## OSRFramework CLI subcommands:
Subcommands | Description 
 --- | ---  
usufy.py | This tool that verifies if a username exists in 249 social platforms.
mailfy.py | This module checks if a username has been registered in up to 22 email providers.
searchfy.py | This module looks for profiles using full names and other info in 7 platforms.
domainfy.py | This module checks the existence of a given domain in up to 879 different TLD.
phonefy.py | This module checks if a phone number has been linked to spam practices in 4 platforms.
entify.py | This module looks for regular expressions using 13 patterns.
