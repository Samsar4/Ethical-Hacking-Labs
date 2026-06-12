# Wi-Fi Protocols (IEEE 802.11 Standards)

## Evolution of Wi-Fi Standards

The IEEE 802.11 standards define the specifications for Wi-Fi networks. Here's the evolution:

| Protocol | Release Year | Frequency Band | Max Speed | Key Features |
|----------|--------------|----------------|-----------|--------------|
| 802.11a | 1999 | 5 GHz | 54 Mbps | Less interference, shorter range |
| 802.11b | 1999 | 2.4 GHz | 11 Mbps | Longer range, more interference |
| 802.11g | 2003 | 2.4 GHz | 54 Mbps | Backward compatible with 802.11b |
| 802.11n | 2009 | 2.4/5 GHz | 600 Mbps | MIMO (Multiple Input Multiple Output) |
| 802.11ac | 2013 | 5 GHz | 1.3 Gbps | Wider channels, beamforming |
| 802.11ax | 2019 (Wi-Fi 6) | 2.4/5/6 GHz | 9.6 Gbps | OFDMA, better efficiency |

## Detailed Protocol Breakdown

### 802.11a (5 GHz, 54 Mbps)
- **Introduced**: 1999
- **Frequency**: 5 GHz band
- **Speed**: 54 Mbps
- **Channels**: 12-16 non-overlapping channels
- **Benefits**: Less congestion, better for outdoor use
- **Drawbacks**: Shorter range, less penetration through walls
- **Status**: Obsolete, rarely used

### 802.11b (2.4 GHz, 11 Mbps)
- **Introduced**: 1999
- **Frequency**: 2.4 GHz band
- **Speed**: 11 Mbps
- **Channels**: 1-14 (overlapping, typically 1, 6, 11 recommended)
- **Benefits**: Better range, better wall penetration
- **Drawbacks**: More interference, slower speeds
- **Status**: Obsolete

### 802.11g (2.4 GHz, 54 Mbps)
- **Introduced**: 2003
- **Frequency**: 2.4 GHz band
- **Speed**: 54 Mbps
- **Compatibility**: Backward compatible with 802.11b
- **Benefits**: Good speed, good range
- **Drawbacks**: Limited capacity
- **Status**: Legacy but still widely supported

### 802.11n (Dual Band, 600 Mbps)
- **Introduced**: 2009
- **Frequency**: 2.4 GHz and 5 GHz
- **Speed**: Up to 600 Mbps (with multiple streams)
- **Key Technology**: MIMO (Multiple Input Multiple Output)
  - Uses multiple antennas
  - Multiple spatial streams for higher throughput
- **Channel Bonding**: 40 MHz channels for higher speeds
- **Benefits**: Significant speed increase, better range
- **Status**: Still widely used

### 802.11ac (Wi-Fi 5, 5 GHz, 1.3 Gbps)
- **Introduced**: 2013
- **Frequency**: 5 GHz only
- **Speed**: Up to 1.3 Gbps
- **Key Features**:
  - Wider channels: 80 MHz, 160 MHz
  - More MIMO streams: Up to 8 spatial streams
  - Beamforming for directional transmission
  - MU-MIMO (Multi-User MIMO) in later implementations
- **Benefits**: Very fast speeds, less interference
- **Drawbacks**: 5 GHz only, shorter range
- **Status**: Very common in modern networks

### 802.11ax (Wi-Fi 6, 9.6 Gbps)
- **Introduced**: 2019
- **Frequency**: 2.4 GHz, 5 GHz, 6 GHz
- **Speed**: Up to 9.6 Gbps
- **Key Features**:
  - OFDMA (Orthogonal Frequency Division Multiple Access)
    - Divides channels into sub-channels
    - Multiple devices can use same channel simultaneously
  - Better battery efficiency
  - Improved security (WPA3 support)
  - 1024-QAM modulation (vs 256-QAM in 802.11ac)
- **Benefits**: Highest speeds, best for congested areas
- **Status**: Latest standard, increasingly common

## Physical Layer Details

### Modulation Techniques

#### DSSS (Direct Sequence Spread Spectrum)
- Used by 802.11b
- Spreads signal across entire frequency band
- Robust but lower data rates

#### OFDM (Orthogonal Frequency Division Multiplexing)
- Used by 802.11a/g/n/ac/ax
- Splits signal into multiple sub-carriers
- Better spectrum efficiency
- Higher data rates

### Data Rates and Modulation Schemes

Each standard uses different modulation for different data rates:
- **BPSK** - Lowest rate, most robust
- **QPSK** - Moderate rate
- **16-QAM** - Higher rate
- **64-QAM** - Even higher rate
- **256-QAM** (802.11ac) - Very high rate
- **1024-QAM** (802.11ax) - Highest rate

## Channel Management

### 2.4 GHz Channels (US/EU)
- Channels 1-13 (some regions use 1-14)
- Each channel is 5 MHz wide
- Channels overlap significantly
- Non-overlapping: 1, 6, 11

### 5 GHz Channels
- Many non-overlapping channels
- Better channel utilization
- Less interference

### Channel Bonding
- Combining adjacent channels for higher bandwidth
- 40 MHz, 80 MHz, 160 MHz options in newer standards
- Higher speeds but requires more spectrum

---

**Next**: Learn about [Wi-Fi Security Protocols](../03-WiFi-Security-Protocols/README.md)
