# Wi-Fi Security Protocols

Wi-Fi networks use encryption to protect data. Over time, security has evolved significantly. This section covers the major security protocols and their vulnerabilities.

## Evolution of Wi-Fi Security

```
┌─────────────────────────────────────────────────────────────┐
│  WEP (1997)                                                 │
│  RC4, Static Keys, Broken                                   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  WPA (2003)                                                 │
│  TKIP, Dynamic Keys, Still Vulnerable                       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  WPA2 (2004)                                                │
│  AES-CCMP, Stronger, Vulnerable to KRACK                    │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  WPA3 (2018)                                                │
│  SAE, 192-bit Encryption, Modern Security                   │
└─────────────────────────────────────────────────────────────┘
```

## 1. WEP (Wired Equivalent Privacy)

### Overview
- **Released**: 1997 (with 802.11)
- **Purpose**: Provide equivalent privacy to wired networks
- **Encryption**: RC4 stream cipher
- **Key Size**: 64-bit or 128-bit
- **Status**: **BROKEN - DO NOT USE**

### How WEP Works
```
1. Plaintext Data
        ↓
2. Add Integrity Check Value (ICV)
        ↓
3. Encrypt with RC4 + Initialization Vector (IV)
        ↓
4. Transmit (IV + Ciphertext)
```

### Weaknesses

**1. Static Keys**
- Same key used for all data packets
- Easy to crack with sufficient traffic

**2. IV Reuse**
- IV is only 24 bits (very small)
- Repeats after ~16 million packets
- Can lead to keystream reuse

**3. Weak ICV**
- Integrity check is predictable
- Can be forged without knowing the key

**4. RC4 Vulnerabilities**
- Known biases in the keystream
- Fluhrer-Mantin-Shamir (FMS) attack
- Aircrack-ng can crack WEP in minutes

### Cracking WEP with Aircrack-ng
```bash
# Monitor packets
airodump-ng wlan0mon

# Capture WEP handshake
aircrack-ng capture.cap

# Crack the key
aircrack-ng -b [BSSID] capture.cap
```

---

## 2. WPA (Wi-Fi Protected Access)

### Overview
- **Released**: 2003 (as WEP replacement)
- **Purpose**: Temporary fix for WEP vulnerabilities
- **Encryption**: TKIP (Temporal Key Integrity Protocol)
- **Key Derivation**: Per-packet key mixing
- **Status**: Deprecated but better than WEP

### Key Features
- **TKIP (Temporal Key Integrity Protocol)**
  - Per-packet key generation
  - Message Integrity Code (MIC)
  - Key mixing function

- **Authentication**
  - PSK (Pre-Shared Key) mode
  - Enterprise mode with RADIUS server

### Vulnerabilities

**1. TKIP Weaknesses**
- Still based on RC4 (vulnerable cipher)
- Relatively weak per-packet key generation
- Can be bypassed with TKIP-RC4 attack

**2. WPA-PSK Cracking**
- Attackers can capture 4-way handshake
- Offline brute-force attack on handshake
- Weak passwords are easily cracked
- Tools like Aircrack-ng can crack it

### Strengths vs WEP
- Dynamic key generation
- Per-packet keys
- Much better than WEP but still vulnerable

---

## 3. WPA2 (Wi-Fi Protected Access 2)

### Overview
- **Released**: 2004 (mandatory in 2006)
- **Encryption**: AES-CCMP (Advanced Encryption Standard - Counter/CBC-MAC Protocol)
- **Key Size**: 128-bit
- **Status**: Still widely used, relatively secure

### How WPA2 Works

```
PSK (Password)
    ↓
[+ SSID] → PMK (Pairwise Master Key)
    ↓
4-Way Handshake (exchange nonces)
    ↓
PTK (Pairwise Transient Key) generated
    ↓
AES-CCMP encryption of all traffic
```

### AES-CCMP Encryption
- **AES**: Advanced Encryption Standard (256-bit, 192-bit, or 128-bit)
- **CCMP**: Counter/CBC-MAC Protocol
- **Strengths**:
  - Mathematically strong algorithm
  - No known practical attacks
  - Industry standard

### WPA2 Modes

**1. WPA2-Personal (PSK)**
- Uses pre-shared password
- Most common for home/small office
- Vulnerable to offline brute-force

**2. WPA2-Enterprise**
- Uses RADIUS server
- 802.1X authentication
- Each user has unique credentials
- More secure for organizations

### WPA2 Vulnerabilities

**1. KRACK Attack (Key Reinstallation Attack)**
- **Discovered**: 2017 by Mathy Vanhoef
- **How it works**:
  - Replay handshake messages
  - Forces key reinstallation
  - Can decrypt data even with strong encryption
- **Fix**: Patched in WPA2 (and integrated in WPA3)

**2. Offline Brute-Force on Handshake**
- Capture 4-way handshake
- Try passwords from wordlist
- Process independently from live network
- Weak passwords cracked quickly

**3. Weak Passwords**
- 8-character passwords vulnerable
- Dictionary attacks successful
- Rainbow tables can be used

**4. PMKID Attack** (CVE-2017-13077)
- Capture PMKID from single packet
- No need for full handshake
- Faster than traditional attack

### Cracking WPA2 with Aircrack-ng
```bash
# Capture handshake
airodump-ng -w capture -c 6 --bssid [BSSID] wlan0mon

# Force handshake with deauth
aireplay-ng --deauth 10 -a [BSSID] wlan0mon

# Crack with wordlist
aircrack-ng -w wordlist.txt -b [BSSID] capture-01.cap
```

---

## 4. WPA3 (Latest Standard)

### Overview
- **Released**: 2018 (adopted 2020)
- **Encryption**: AES-CCMP (128-bit, 256-bit in Enterprise)
- **Status**: **RECOMMENDED** - Most secure option

### Key Improvements

**1. SAE (Simultaneous Authentication of Equals)**
- Replaces PSK
- Protects against offline dictionary attacks
- Even weak passwords are protected
- Uses 192-bit security in Enterprise mode

**2. Protection Against KRACK**
- Key reinstallation prevented
- Stricter key derivation

**3. 192-bit Encryption (Enterprise)**
- Stronger than 128-bit AES
- For high-security environments

**4. Protection Against Brute-Force**
- PMKID attacks mitigated
- Slower handshake adoption rate

**5. Individual Data Encryption (OWE)**
- Opportunistic Wireless Encryption
- Encrypts even on open networks
- No password needed but still encrypted

### WPA3 Modes

**1. WPA3-Personal**
- Uses SAE
- Strong against weak passwords
- Recommended for home/small office

**2. WPA3-Enterprise**
- 192-bit encryption
- RADIUS authentication
- Highest security level
- For organizations

### WPA3 Vulnerabilities (Known)
- Very few known practical vulnerabilities
- Still undergoing security research
- Generally considered secure

---

## Comparison Table

| Feature | WEP | WPA | WPA2 | WPA3 |
|---------|-----|-----|------|------|
| Encryption | RC4 | TKIP | AES | AES |
| Key Size | 64/128 | 128+ | 128 | 128/192 |
| Practical Attacks | Many | Some | KRACK, Brute-force | Very Few |
| Crackable | Minutes | Hours | Hours-Days | Very Difficult |
| Offline Attack | Yes | Yes | Yes | Protected |
| Weak Password Safe | No | No | No | **Yes** |
| Security Rating | ⚠️ Broken | ⚠️ Weak | ⚠️ Moderate | ✅ Strong |

---

**Next**: Learn about [Wi-Fi Authentication Methods](../04-WiFi-Authentication-Methods/README.md)
