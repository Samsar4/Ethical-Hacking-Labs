# Wi-Fi Authentication Methods

This section covers the different authentication methods used in Wi-Fi networks, from open networks to enterprise solutions.

## Authentication Method Overview

```
┌─────────────────────────────────────────────────────┐
│          Wi-Fi Authentication Methods               │
└─────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  Open   │    │   PSK   │    │Enterprise│
   │ Network │    │ (WPA/2/3)│    │ (802.1X) │
   └─────────┘    └─────────┘    └──────────┘
   No Security    Shared Key    RADIUS Server
```

## 1. Open Networks (No Encryption)

### Overview
- **Security**: None
- **Encryption**: No
- **Authentication**: No
- **Use Case**: Public Wi-Fi, Guest networks
- **Risk Level**:  **CRITICAL**

### How It Works
```
Device connects immediately without any verification
No password or authentication required
All traffic transmitted in plaintext
Anyone nearby can connect and capture data
```

### Vulnerabilities
- **Complete Data Exposure**
  - All traffic visible to anyone
  - Passwords captured easily
  - Personal information exposed

- **No Device Verification**
  - Attackers can impersonate the network
  - Man-in-the-middle attacks

- **No Integrity Protection**
  - Data can be modified in transit
  - Malware can be injected

### Connection Process
```bash
# Device automatically connects
iwconfig wlan0 essid "Free WiFi"

# No authentication needed
# Traffic flows unencrypted
```

### Protection Measures
- Use VPN on open networks
- HTTPS for all connections
- Avoid sensitive transactions
- Don't connect to untrusted networks

---

## 2. WPA/WPA2/WPA3-Personal (PSK Mode)

### Overview
- **Security**: Shared password-based
- **Encryption**: TKIP (WPA), AES (WPA2/3)
- **Authentication**: PSK (Pre-Shared Key)
- **Use Case**: Home, small office
- **Risk Level**:  **MODERATE** (WPA2/3) /  **HIGH** (WPA)

### How It Works

```
Step 1: User enters password (PSK)
         ↓
Step 2: Device and AP execute 4-way handshake
         ↓
Step 3: PTK (encryption key) derived
         ↓
Step 4: Traffic encrypted with AES or TKIP
         ↓
Step 5: Secure communication established
```

### Authentication Flow

![Aunthentication Flow](image-1.png)

### Key Derivation Process

```
PSK (Pre-Shared Key) = Password-based key
      + SSID
      + ANonce (AP random number)
      + SNonce (Client random number)
      + MAC Addresses
      ↓
     PTK (Pairwise Transient Key)
     GTK (Group Transient Key)
```

### Strengths
- Simple setup
- No server required
- Suitable for home/small networks
- Strong encryption (WPA2/3)

### Vulnerabilities

**1. WPA Vulnerabilities**
- TKIP can be cracked
- Hours to days with Aircrack-ng
- Deprecated - not recommended

**2. WPA2 Vulnerabilities**
- Offline brute-force attack
- KRACK attack (patched)
- PMKID attack (fast handshake capture)
- Weak passwords vulnerable

**3. Password Complexity**
- 8-character passwords crackable
- Dictionary attacks common
- Rainbow tables available
- Recommended: 16+ characters, mixed

**4. Aircrack-ng Attack**
```bash
# Capture handshake
airodump-ng -w capture -c 6 --bssid [BSSID] wlan0mon

# Deauth to force handshake
aireplay-ng --deauth 10 -a [BSSID] wlan0mon

# Brute-force with wordlist
aircrack-ng -w /usr/share/wordlists/rockyou.txt capture-01.cap
```

### Security Recommendations
- WPA3-Personal preferred (if supported)
- WPA2-Personal acceptable with strong password
- Use 16+ character alphanumeric passwords
- Change default passwords
- Update router firmware regularly

---

## 3. WPA/WPA2/WPA3-Enterprise (802.1X)

### Overview
- **Security**: Individual user credentials
- **Authentication**: RADIUS server
- **Encryption**: AES (192-bit in WPA3 Enterprise)
- **Use Case**: Corporate, educational institutions
- **Risk Level**:  **LOW** (Properly configured)

### Architecture


![WPA/WPA2/WPA3-framework](image.png)

### Authentication Methods

**1. EAP-PEAP**
- Protected EAP
- Server certificate validated
- Password sent in encrypted tunnel
- Most common

**2. EAP-TLS**
- Requires client certificate
- Mutual authentication
- Very secure
- Difficult to impersonate

**3. EAP-TTLS**
- Tunneled TLS
- Server certificate validation
- Username/password in tunnel
- Good balance of security and usability

**4. EAP-MSCHAPv2**
- Microsoft proprietary
- Vulnerable to attacks (ASLEAP)
- Not recommended

### Key Advantages

1. **No Shared Password**
   - Each user has unique credentials
   - Password not shared between users
   - Credentials stored on RADIUS server

2. **Central Management**
   - Credentials managed centrally
   - Easy to revoke access
   - Audit trail available

3. **Mutual Authentication**
   - Server validates to client
   - Prevents rogue AP attacks
   - Certificate-based trust

4. **Strong Encryption**
   - 192-bit AES in WPA3 Enterprise
   - Per-user encryption keys
   - Very secure

### Enterprise Deployment Process

```
1. Set up RADIUS Server
   - Install FreeRADIUS or similar
   - Configure user database
   - Generate SSL certificates

2. Configure Access Point
   - Enable WPA2/WPA3 Enterprise
   - Point to RADIUS server
   - Configure EAP method

3. Configure Client Devices
   - Select security: WPA2/3 Enterprise
   - Choose EAP method
   - Provide username/password or certificate

4. Test Connection
   - Verify handshake
   - Check encryption
   - Monitor RADIUS logs
```

### Security Considerations

- **Certificate Validation**
  - Ensure clients validate server certificate
  - Prevents evil twin attacks

- **Strong Passwords**
  - Enforce password policy
  - Regular updates
  - Complexity requirements

- **RADIUS Server Security**
  - Firewall protection
  - Secure shared secret
  - Regular backups
  - Monitoring and logging

- **Certificate Management**
  - Proper expiration handling
  - Secure key storage
  - Regular renewal

---

## Comparison Table

| Method | Encryption | Authentication | Setup | Security | Use Case |
|--------|-----------|-----------------|------|----------|----------|
| Open | None | None | Trivial |  None | Public WiFi |
| WPA-PSK | TKIP | Shared Password | Simple |  Weak | Legacy |
| WPA2-PSK | AES | Shared Password | Simple |  Good | Home/Office |
| WPA3-PSK | AES | SAE | Simple |  Excellent | Modern Home |
| WPA2-Enterprise | AES | RADIUS + EAP | Complex |  Strong | Corporate |
| WPA3-Enterprise | AES-192 | RADIUS + EAP | Complex |  Very Strong | Enterprise |

---