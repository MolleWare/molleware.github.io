---
layout: post
title: 2. Making a Wi-Fi 6 Repeater with an ESP32-C6
date: 2026-05-24 15:25:00
description: Configuring NAT on ESP32-C6 APSTA
tags: embedded esp32 c
categories: default
---
Testing whether the ESP32-C6 AP can communicate on multiple networks at the same time.

### Tests Run

- `AP/STA`: checking that I can successfully run both an `AP` and a `STA` on the same ESP32


### Result:
#### Using both interfaces at once:

![AP/STA network config](/assets/img/posts/wifi_repeater_2/test_AP_STA.png){: width="100%"}

I was able to use the `STA` and the `AP` as shown below.

The `espSTA` connected to the network, and I was able to get a successful ping from my PC.
We can also see the log message showing that `NAPT` is enabled on the STA interface.
![AP/STA esp log](/assets/img/posts/wifi_repeater_2/esp_log_pinged_by_pc.png){: width="100%"}

From the PC side:

![AP/STA pc ping log](/assets/img/posts/wifi_repeater_2/pc_pinging_esp.png){: width="100%"}

The `espAP` was tested by connecting my phone directly to it.
As shown below, it successfully got an IP and started pinging through the AP for an internet connection.
![AP/STA phone ping espAP](/assets/img/posts/wifi_repeater_2/espAP_log_from_phone_ping.png){: width="100%"}

ICMP type 03 means "Destination port unreachable," which just means there is no program behind the port my phone was trying to access.

#### Configuring the NAPT to connect both network interfaces:

Now let's analyze this snippet of code:
![NAPT config](/assets/img/posts/wifi_repeater_2/NAPT_setup_code.png){: width="100%"}

Before enabling NAPT, I need to configure copying the DNS settings from `espSTA` to `espAP`. That way, my DNS settings are usable for client devices that connect to `espAP`.

![DNS config](/assets/img/posts/wifi_repeater_2/NAPT_DNS_config.png){: width="100%"}

Now that the settings are properly configured, I can set the default netif to `espSTA`.
Doing this sets the `espSTA` as an exit interface for packets with a destination outside of the local `espAP` network.

Only then do I enable NAPT, which applies the configured network address and port translation.

#### Result

I can successfully browse the internet through one of my ESP32-C6 devices. The bandwidth is good enough, provided I tested it in an ideal situation. My next step would be to get better antennas to extend the range and see if, in my particular use case, it is a sufficient solution.