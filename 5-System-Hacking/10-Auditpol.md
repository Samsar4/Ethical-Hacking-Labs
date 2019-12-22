# Viewing, Enabling and Clearing Audit Policies using Auditpol
Auditpol is a command in Windows Server 2016, 2012 and 2008, and is required for querying or configuring audit policy at the subcategory level.

Auditpol displays the information on the performance and functions to manipulate audit policies.

**Microsoft Documentation**: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/auditpol

### Objectives
* How to set the Audit Policies

### Requisites
* Windows Server 2016/2012 virtual machine.

***

![syntax](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/aa898df1242308b3886dbf6d8c252a5dcb30089d/auditpol-syntax.png)


Command | Description
-- |  --
`/set` | Sets the audit policy.
`/get` | Displays the current audit policy.
`/backup` | Saves the audit policy to a file.
`/list` | Displays selectable policy elements.
`/restore` | Restores the audit policy from a file that was previously created by using auditpol/backup.
`/remove` | Removes all per-user audit policy settings and disables all system audit policy settings.
`/clear` | Clears the audit policy.
`/resourceSACL` | Configures global resource system access control lists (SALCs).

### To view all the audit policies:

Launch **Command Prompt** from the Windows Server and type:<br>
`auditpol /get /category:*`

![auditpol-category](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/aa898df1242308b3886dbf6d8c252a5dcb30089d/auditpol-1.png)

To **enable** the audit policies, type:<br>
`auditpol /set /category:"system", "account logon" /success:enable /failure:enable`

![auditpol-enable](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/fdf96591f9b797cf067e6118b0cc35caf00f6eb7/auditpol-2.png)


To check whether audit policies are enable, type:<br>
`auditpol /get /category:*`

![auditpol-success-failure](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/8fe2d30ad3c2300f259ad9d4a56ccba2ded7d838/auditpol-3.png)

To **clear** the audit policies, type:<br>
`auditpol /clear /y`

![auditclear](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/75ff457ae9710b831a2e867d9acf5e0947bd3958/auditpol-4.png)

To check wheter audit policies cleared, type:<br>
`auditpol /get /category:*`

![audit-check-clear](https://gist.githubusercontent.com/Samsar4/62886aac358c3d484a0ec17e8eb11266/raw/39e8b217d60a368deaa7d384a43722747e643744/auditpol-5.png)