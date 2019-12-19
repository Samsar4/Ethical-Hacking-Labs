# Vulnerability Scanning
Vulnerability Scanning refers to auditing hosts, ports, and services running in a network to assess the security posture and search for security loopholes.

It determines the possibility of network security attacks, evaluating the organization's systems and network for vulnerabilities such as missings patches, unnecessary services, weak authentication, and weak encryption. Vulnerability scanning is a critical component of any penetration testing assignment.


## Nessus
![Nessus Scanner](https://www.tenable.com/sites/drupal.dmz.tenablesecurity.com/files/images/blog/Agent_Scan_Dashboard_0.png "Nessus Scanner")

Nessus allows to remotely audit a network and determine if it has been broken into or misued in some way. It also provides the ability to locally audit a specific machine for vulnerabilities.

Official website: https://www.tenable.com/downloads/nessus

## GFI LanGuard
![GFI LanGuard](https://resources.infosecinstitute.com/wp-content/uploads/022113_0210_GFILanGuard5.png "GFI LanGuard")

GFI LanGuard is a software similar to Nessus, it scans networks and ports to detect, assess, and correct any security vulnerabilities found. 

Official website: https://www.gfi.com/products-and-solutions/network-security-solutions/gfi-languard

## Nikto
![Nikto](https://hackertarget.com/wp-content/uploads/2019/02/nikto-scanner-result.png "Nikto Scanner")

Nikto Web Scanner is a Web server scanner that tests Web servers for dangerous file/CGIs, outdated server software and other problems.

Nikto is an Open Source (GPL) web server which performs comprehensive tests against web servers for multiple items, including over 6400 potentially dangerous files/CGIs, checks for outdated versions of over 1200 servers, and version specific problems on over 270 servers. It also scans server configuration items such as the presence of multiple index files, HTTP server options, and attempts to identify installed web servers and software. Scan items and plugins are frequently updated and can be automatically updated. Nikto is not a stealth tool, it scans a webserver in the shortest time but gets logged in an IDS.

Official repository: https://github.com/sullo/nikto