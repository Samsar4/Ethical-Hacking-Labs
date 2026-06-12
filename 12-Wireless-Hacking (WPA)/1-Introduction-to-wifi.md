# Introduction to Wi-Fi

## What is Wi-Fi?

Wi-Fi (Wireless Fidelity) is a wireless networking technology that allows devices to connect to the internet or communicate with each other without physical cables. It operates using radio waves in the **2.4 GHz and 5 GHz** frequency bands.

## How Wi-Fi Works

### Network Components

A Wi-Fi network consists of:

- **Access Point (AP)**: The router that broadcasts the wireless signal
- **Client Devices**: Smartphones, laptops, IoT devices that connect to the AP
- **Data Transmission**: Via radio waves using IEEE 802.11 standards
- **Communication**: The AP and clients communicate using frames (management, control, and data frames)

### Basic Architecture

```
    ┌─────────────────┐
    │  Access Point   │
    │  (Router/AP)    │
    └────────┬────────┘
             │ (Radio Waves)
        ┌────┴────┬──────────┬──────────┐
        │          │          │          │
    ┌───▼──┐   ┌──▼───┐  ┌───▼──┐  ┌───▼──┐
    │ Phone│   │Laptop│  │Tablet│  │IoT   │
    └──────┘   └──────┘  └──────┘  └──────┘
    
    All devices communicate via radio signals
```

## Frequency Bands

### 2.4 GHz Band
- **Frequency Range**: 2400 MHz - 2483.5 MHz
- **Number of Channels**: 14 (varies by region)
- **Channel Width**: 20 MHz (up to 40 MHz in 802.11n)
- **Pros**: Better range, more device compatibility
- **Cons**: More interference, slower speeds

### 5 GHz Band
- **Frequency Range**: 5000 MHz - 6000 MHz
- **Number of Channels**: 25+ channels
- **Channel Width**: 20/40/80/160 MHz options
- **Pros**: Less interference, faster speeds, wider channels
- **Cons**: Shorter range, line-of-sight requirement

## Frame Types

### Management Frames
- Beacon frames
- Probe Request/Response
- Authentication frames
- Association frames

### Control Frames
- RTS (Request to Send)
- CTS (Clear to Send)
- ACK (Acknowledgment)

### Data Frames
- Regular data frames carrying user traffic

## Key Concepts

### Beacon Frame
- Sent periodically by AP
- Contains SSID (network name)
- Includes supported data rates
- Advertises security settings

### SSID (Service Set Identifier)
- The Wi-Fi network name
- Up to 32 characters
- Can be hidden (not broadcast in beacons)

### BSSID (Basic Service Set Identifier)
- The MAC address of the Access Point
- Unique identifier for the Wi-Fi network
- Format: XX:XX:XX:XX:XX:XX

### Channel
- Wi-Fi networks operate on specific channels
- 2.4 GHz typically uses channels 1-13 (regions vary)
- 5 GHz uses many more channels
- Channels can overlap causing interference

## Wireless Standards Used

All modern Wi-Fi networks use IEEE 802.11 standards (covered in detail in the next section)

## Data Flow Process

1. **Device Scans** for available networks
2. **User Selects** network and enters password
3. **Association** - Device connects to AP
4. **Authentication** - Password/security verification
5. **DHCP** - Device receives IP address
6. **Data Exchange** - Encrypted data transmission

---


