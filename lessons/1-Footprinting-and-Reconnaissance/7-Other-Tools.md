# Another tools for Recon

Sublist3r is a python tool designed to enumerate subdomains of websites using OSINT.

https://github.com/aboul3la/Sublist3r

Log into your Kali machine and open the terminal

Type this command to update the Kali rolling packages and install sublist3r:

`sudo apt update && apt -y install sublist3r`

Type `sublist3r -h` for print an overview of all options that are available.

>To search subdomains, type:<br>
`sublist3r -d google.com -t 3 -e bing`<br>
`-d` = target domain<br>
`-t` = number of threads<br>
`-e` = search engine

You also can find in which subdomain port 80 is open in `google.com` for example.

`sublist3r -d google.com -p 80 -e bing`

# Web Data Extractor
Web Data Extractor is used to extract a targeted company's contact details or data such as emails, fax, phone through web for responsible b2b communication.

This tool is exclusive for Windows, very easy to use.<br>
Downside: trial version export only 10 lines of report.<br>
http://www.webextractor.com/

# HTTrack 
Web site copier is an offline browser utility that downloads a Web site to a local directory.

This application is available in GUI and CLI.

Works on Linux/OSX/BSD/Unix, Windows and Android.<br>
https://www.httrack.com/

# Tracing Emails
Tracing emails involves analyzing the **email header** to discover details about the sender.
Email tracking is useful for identifying the company and network providing service for the address.

**eMailTrackerPro** is a tool to track, detect abnormalities in the email header.<br>
http://www.emailtrackerpro.com/


# Gathering IP and Domain Name info. using Whois Lookup 
Whois lookup reveals available information on a hostname, IP address or domain.

* For Windows: [**SmartWhois**](https://smartwhois.en.softonic.com/)<br> 
* Kali Linux: [**whois command**](https://www.cyberpratibha.com/blog/using-whois-a-command-for-information-gathering/)

# Advanced Network Route Tracing using Path Analyzer Pro
Path Analyzer Pro delivers advanced network route tracing with performance tests, DNS, whois, and network resolution to investigate network issues.

Works on Linux/Mac/Windows.<br>
Paid application with 10-day trial version.<br>
https://www.pathanalyzer.com/

# Automated Fingerprinting using FOCA
Fingerprinting Organizations with Collected Archives (FOCA) is a tool that reveals metadata and shrouded data. These archives may be on site pages, and can be downloaded and dissected with FOCA.<br>
_Official repository:_ https://github.com/ElevenPaths/FOCA

Features:
* Metadata Extraction
* Network Analysis
* DNS Snooping
* Search for common files
* Juicy Files
* Proxies Search
* Technologies Identification
* Fingerprinting
* Leaks
* Backups Search
* Error Forcing
* Open Directories Search
