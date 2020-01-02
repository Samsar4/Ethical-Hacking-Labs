# Recon-ng Tutorial 
Recon-ng is a web-based open-source reconnaissance tool used to extract information from a target organization and its personnel.<br>
_Official repository:_
https://github.com/lanmaster53/recon-ng

* Version: v5.0.1

### Requirements:
* Kali Linux virtual machine

### Objectives:
* How to perform network recon.
* Gather hosts related to a domain.
* Personal Information Gathering.
* Generate a report with harvested information.

Recon-ng has a look and feel similar to the Metasploit Framework, reducing the learning curve for leveraging the framework.

## First steps
1. Open the terminal and type `recon-ng`
2. Type `help` to view all commands that allow you to add/delete records to DB, query, etc.
```
back            Exits the current context
dashboard       Displays a summary of activity
db              Interfaces with the workspace's database
exit            Exits the framework
help            Displays this menu
index           Creates a module index (dev only)
keys            Manages third party resource credentials
marketplace     Interfaces with the module marketplace
modules         Interfaces with installed modules
options         Manages the current context options
pdb             Starts a Python Debugger session (dev only)
script          Records and executes command scripts
shell           Executes shell commands
show            Shows various framework items
snapshots       Manages workspace snapshots
spool           Spools output to a file
workspaces      Manages workspaces
```
**Note:<br>
On your first load of recon-ng note the message below. You begin with an empty framework (without modules pre-installed).**
```
[*] No modules enabled/installed.
```

3. Create a new workspace:<br>
`workspaces create CEH`

4. Add the target domain to perform a network recon:<br>
`db insert domains`<br>
`certifiedhacker.com`

You can view the added domain by typing `show domains`
```
[recon-ng][CEH] > db insert domains
domain (TEXT): certifiedhacker.com
[*] 1 rows affected.
[recon-ng][CEH] > show domains

  +--------------------------------------------+
  | rowid |        domain       |    module    |
  +--------------------------------------------+
  | 1     | certifiedhacker.com | user_defined |
  +--------------------------------------------+
```
## Using Modules from Recon-ng Marketplace
Recon-ng works with independent modules, database interaction, built in convenience functions, interactive help, and command completion, Recon-ng provides a powerful environment in which open source web-based reconnaissance can be conducted quickly and thoroughly. To add new modules you will use **marketplace**.

Recon-ng Marketplace repository:<br>
https://github.com/lanmaster53/recon-ng-marketplace

To view the entire marketplace repo type:
`marketplace search`

Dealing with modules and workspaces process is very easy as shown on the example below:<br>

```
0. Installing module using marketplace command:
> marketplace install recon/domains-hosts/findsubdomains

1. Loading the module using modules load command:
> modules load /recon/domains-hosts/findsubdomains

2. To show module options:
> info 

3. Executing the module:
> run

4. To switch between modules or workspaces type:
> back

5. Select an existing workspace:
> workspaces select W0rkspaceName 

6. Select an installed module:
> modules load path/to/module-name
```
## Using hackertarget to find sub-domains
You can find another modules to gather some subdomains, we will use hackertarget on this tutorial.

Let's install and load it:
`marketplace install hackertarget`<br>
`modules load hackertarget`

Type `info` to view the SOURCE, currently set at default as show below:
`info`
```
Name    Current Value  Required  Description
------  -------------  --------  -----------
SOURCE  default        yes       source of input (see 'show info' for details)
```
Now set the SOURCE to:

`options set SOURCE certifiedhacker.com`

You can use the `input` command to see the target:

`input`
```
+---------------------+
|    Module Inputs    |
+---------------------+
| certifiedhacker.com |
+---------------------+
```

Run the module:

`run`

**Note: If your response is working properly but messy with a bunch of queries and values, just type `show hosts` to populate a better output.**

`show hosts`<br>
...<br>
_(This command will show a clean summary of resources discovered)_

## Brute-forcing hostnames
You can use another modules to harvest more hosts, such as **brute_hosts**.

**Exit** your current module:

`back` 

Install the **brute_hosts** module:

`marketplace install recon/domain-hosts/brute_hosts`

Load the module:

`modules load recon/domain-hosts/brute_hosts`

Set the SOURCE to target domain:

`options set SOURCE certifiedhacker.com`

By typing `info` you can see on this particular module, you can set your own hostnames wordlist. I recommend to use the default one that is pretty good.
```
Name      Current Value                 
  --------  -------------  
  SOURCE    certifiedhacker.com         
  WORDLIST  /root/.recon-ng/data/hostnames.txt 
```
5. Run the module:
`run`<br>
...<br>
_(keep in mind that will take a while)_

## Generate a report
Now that you have harvested a number of hosts, you will prepare a report containing all the information.

Install the **reporting module** to report in html format.

`marketplace install reporting/html`

**Note:** You can install any of these modules below to export in different formats.  
```
reporting/csv
reporting/html
reporting/json
reporting/list
reporting/proxifier
reporting/pushpin
reporting/xlsx
reporting/xml
```
Load the module:

`modules load reporting/html`

To configure the reporting information, type `info` to see the values. 
```
 Name      Current Value                                
 --------  -------------                                
 CREATOR                                   
 CUSTOMER  
 FILENAME  /root/.recon-ng/workspaces/CEH/results.html
 SANITIZE  True 
```
You will need to assign these values, CREATOR, CUSTOMER and FILENAME.

Set your name[CREATOR], customer name[CUSTOMER], path to export and the file name[FILENAME].

`options set CREATOR J0nDoe`<br>
`options set CUSTOMER CertifiedHacker Network`<br>
`options set FILENAME /root/Desktop/CE-Results.html`<br>

Run the module to export:

`run`

**The generated report is saved to to the Desktop.**

There is not much in this report, but when you start running multiple modules and add in geolocation reports can get very complex. Recon-ng does a great job keeping track of everything.

# Using Recon-ng to Gather Personnel Information (part 2)
Objectives:
* Obtain contacts of personnel working in a organization.
* Find the existence of user profiles on varios websites.

**Important note:**
The **location** and **pushpin modules** mentioned in this tutorial require a valid API key to use and have some GDPR implications about data collection.
Some require you to pay money, which will be mentioned below. I suggest as you go along, you save all the API keys to a file so you can use them later. To setup an API key to your recon-ng is very simple, just follow the document below, and manage your keys inside Recon-ng using: `keys` command.<br>
https://github.com/Raikia/Recon-NG-API-Key-Creation/blob/master/README-v4.8.3.md

## Personal Information Gathering
Gathering personal information involves discovering contact details such as email, address, etc. present on target organization's web site. The Recon-ng contains various modules for haversting and discovering contact information about a certain company. Some Recon-ng modules for discovering personal information are:
* recon/domain-contacts
* recon/companies-contacts
* recon/domain-contacts/namechk

## Setup your Recon-ng
1. Boot your Kali Linux and open the terminal.
2. Type `recon-ng` to launch the application.
3. Add a new workspace named recon:<br>

`workspaces create recon`

## Gather contacts associated with a domain
Set a domain and perform footprinting on it to extract contact available in the domain.

The module selected to perform this technique uses the ARIN Whois RWS to harvest POC data from whois queries for the given domain.

Install and load the module:

`marketplace install recon/domains-contacts/whois_pocs`

`modules load recon/domains-contacts/whois_pocs`

Check the options required to run the module:

`info`

Set the SOURCE value to target domain:

`options set SOURCE facebook.com`

Run the module:

`run`
```
------------
FACEBOOK.COM
------------
[*] URL: http://whois.arin.net/rest/pocs;domain=facebook.com
[*] URL: http://whois.arin.net/rest/poc/NOL17-ARIN
[*] [contact] Lea Neteork ops (leigha311@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/OPERA82-ARIN
[*] [contact] <blank> Operations (domain@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/BST184-ARIN
[*] [contact] Brandon Stout (bstout@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/DJW23-ARIN
[*] [contact] Darrell Wayne (tiffany.cameron.507@facebook.com) - Whois contact
[*] URL: http://whois.arin.net/rest/poc/MZU-ARIN
[*] [contact] Mark Zuckerberg (zuck@thefacebook.com) - Whois contact
```
The output will return the contacts related to the domains. 

## Profile existence
The **recon/profiles-profiles/namechk** module validates the username existence of a specified contact, but unfortunately namechk charges to use their API.

We can search the existence of user profiles in various websites using the **recon/profiles-profiles/profiler**.

Type `back` to return to the workspaces home.

Install and load the module:

`marketplace install recon/profiles-profiles/profiler`

`modules load recon/profiles-profiles/profiler`

Set the SOURCE value (Target username):

`options set SOURCE MarkZuckerberg`

Run the module:

`run`

The recon/profiles-profiles/profiler module searches for this username and returns the URL of the profile in various websites (found with the matching username).