# Footprinting using Maltego
Maltego is an open source in$$telligence and forensics application. It gathers information about a target and represents in an easily-understandable format.

### Requirements:
* Kali Linux virtual machine

### Objectives:
* Identify IP address
* Identify Domain and Domain Name Schema
* Identify Server Side Technology
* Identify Service Oriented Architecture (SOA) information
* Identify Name Server
* Identify Mail Exchanger
* Identify Geographical Location
* Identify Entities
* Discover Email addresses and Phone numbers

Currently there are three versions of the Maltego client namely Maltego CE, Maltego Classic and Maltego XL. **This tutorial will focus on Maltego Community Edition (CE).**

Kali Linux comes with Maltego installed. Launch your Maltego from the applications bar. In case it is your first time using Maltego, just select the Maltego CE (Free) edition and create a free account on https://www.paterva.com/community/community.php 

## Maltego Basics
1. Click on (+) icon located at the top-left corner of the GUI (in the toolbar) to create a new graph window (like a blank document).
2. Go to left panel and expand the **Infrastructure** node under Entity Palette. This list have a bunch of useful entities such as AS, DNS Name, Domain, MX Record, etc.

![alt text](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/2015007002780/original/tJmLPIhee9OzhB4xqVKx1pT2NGixIRpdFg.jpg?1545115008 "Entity Palette - Maltego")

3. Drag the Website entity to your New Graph(1) section.
4. Rename the domain name to www.certifiedhacker.com

## Identifying the server side technology
5. Right-click the entity and select **All Transforms** and click **To Server Technologies [BuiltWith]**

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-server-side-0.png "Server Side Technologies")

Note: Maltego can be useful to show results in more dynamic way processing by visual demonstrating interconnected links between searched items.

## Identifying the Domain
6. Create a new graph or delete/save the previous results.
7. Right-click the Domain entity and select **All Transforms -> To Domains [DNS]**. 

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/dd19c689c25ad5a9f86d5c4450b26bb5f82eadc9/maltego-DNS-names.png "DNS Names")

This transform will attempt to test name schemas against a domain and try to identify a specific name schema for the domain.

## Identifying the SOA information
8. Create a new graph or delete/save the previous results.
9. Right-click the Domain entity and select **All Transforms -> To DNS Name - SOA (Start of Authority)**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-DNS-SOA-2.png "DNS Name - SOA")

## Identifying the Mail Exchanger
10. Create a new graph or delete/save the previous results.
11. Right-click the Domain entity and select **All Transforms -> To DNS Name - MX (mail server)**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-MX-NameServers-3.png "DNS MX Server")

## Identifying the Name Server
12. Create a new graph or delete/save the previous results.
13. Right-click the Domain entity and select **All Transforms -> To DNS Name - NS (name server)**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-DNS-Name-Servers-4.png "NS")

## Identifying the IP Address, Location and Whois 
12. Create a new graph or delete/save the previous results.
13. Right-click the Website entity and select **All Transforms -> To IP address [DNS]**.
14. Right-click the IP entity and select **All Transforms -> To Location [city, country]**.
15. Right-click the Website entity and select **All Transforms -> To entities from whois [IBM Watson]**.

![alt text](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/6fe1dc406ed480aea2acfb2e9f34d51a0536e042/maltego-WebSite-IP-Location-WhoisOnDomain-5.png "IP Address, Location")

## In conclusion:
Maltego is a powerful tool, you can extract a broad type of information through the network, technologies and personnel(email, phone number, twitter).

By extracting all this information, an attacker can perform different type of malicious activity.

* The built-in technologies of the server:
attackers might search for vulnerabilities related to any of them and simulate exploitation techniques.

* SOA information:
also can be useful for attackers, they can abuse this information to find vulnerabilities in their services and architectures and exploit them.

* Name Server:
attackers can exploit NS using malicious techniques like DNS hijacking and URL redirection.

* IP addresses:
attackers can abuse the IP address by scanning and searching for open ports and vulnerabilities, and thereby attempt to intrude in the network and exploit them.

* Geographical location:
attackers can perform social engineering attacks to leverage sensitive information.

