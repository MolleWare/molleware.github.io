---
layout: post
title: Making a Wifi6 wifi repeater with an ESP32-C6
date: 2026-05-24 15:25:00
description: Initial steps towards creating a Wifi6 repeater using the ESP32-C6 module.
tags: code automation web-development
categories: default
---
Early validation log for my ESP32-C6 Wi-Fi repeater.

## Tests Run

- `STA` on home router
- `AP` client connectivity and ping directionality

## Results

### espSTA validation:

- ESP32-C6 connected to local router (`STA` mode). ✅
- Sent ping's requests to another device on the same network. ✅
- Sent ping's requests to another device on external network. ✅
- Responds to ping's requests from local device. ✅

In the tests above the `espSTA` is the only esp32 used for the tests it is always connected or communicating with phones, laptops or other standard devices.

#### STA TEST 1:✅
can the `espSTA` ping other devices on the same network?
- The sta test 1.1 is the PC connected to local ap being pinged by my `espSTA`.
![test esp_sta 1.1](/assets/img/posts/wifi_repeater/sta_tst_1.1.png){: width="100%"}
- The sta test 1.2 is the `espSTA` connected to local ap returning a sucessful ping to 10.10.1.5(PC).
![test esp_sta 1.2](/assets/img/posts/wifi_repeater/sta_tst_1.2.png){: width="100%"}

#### STA TEST 2:✅
can the `espSTA` be pinged by other devices on the same network?
The sta test 2.1 is the PC connected to local ap pinging `espSTA`.
![test esp_sta 2.1](/assets/img/posts/wifi_repeater/sta_tst_2.1.png){: width="100%"}
The sta test 2.2 is the `espSTA` connected to local ap being pinged by PC.
![test esp_sta 2.2](/assets/img/posts/wifi_repeater/sta_tst_2.2.png){: width="100%"}

#### Result: 
I can conclude that the `espSTA` can comfortably communicate with other devices on the same local network.

#### STA TEST 3:✅
Now can it ping google?
The `espSTA` test 3.1 is the esp32 pinging google and getting conclusive return packets that are translated by the log message success.
![test esp_sta 3.1](/assets/img/posts/wifi_repeater/sta_tst_3.1.png){: width="100%"}

!!! git commit here !!!
b647796fb104ae312be32c5e1c3f413b142fc0cb

### espAP validation:

- Station* connection to `espAP` *->(laptop, phone and `espSTA`) ✅
- Ping from laptop to phone using `espAP`. ✅
- Ping from `espSTA` to laptop. ✅
- Ping from laptop to `espSTA`. ✅
- Ping from `espSTA1` to `espSTA2`. ❌

#### AP TEST 1:✅
Can I connect my phone to `espAP`?
![test esp_ap 1.1](/assets/img/posts/wifi_repeater/ap_tst_1.1.png){: width="100%"}
Here we can observe the `espAP` logging a connection from my phone `192.168.4.2` and proceding to receiving icmp request from it.
I will proceed to trying to repeating the task with my laptop to see if I can catch the icmp request's with wireshark.
![test esp_ap 1.2](/assets/img/posts/wifi_repeater/ap_tst_1.2.png){: width="100%"}
The ICMP(port unreachable) and ICMP type 03 leads me to think it is just residual apps on my laptop trying to reach out on the AP that is not yet connected to the internet so it cannot proceed to forwarding the packets there for replying with port unreachable.

#### AP TEST 2:✅
I will now proceed with pings from and other device on the isolated `espAP` network. (Ping from phone(192.168.4.3) to laptop(192.168.4.2) using `espAP`.)
![test esp_ap 2.1](/assets/img/posts/wifi_repeater/ap_tst_2.1.png){: width="100%"}
```
For tests like this is use the app Vernet from Fdroid.
```

#### AP TEST 3:✅
The Next challenge is to integrate a `espSTA` to se if they behave like other devices.
Here we can see the log of the `espSTA` as it pings my phone(192.168.4.2) from 192.168.4.3.
![test esp_ap 3.1](/assets/img/posts/wifi_repeater/ap_tst_3.1.png){: width="100%"}

Now lets try with the PC to see if we can actually catch the ICMP request emited by the esp32.
Here we can see the captured requests on wireshark form the `espSTA` over the `espAP` to the PC.
![test esp_ap 3.2](/assets/img/posts/wifi_repeater/ap_tst_3.2.png){: width="100%"}

#### AP TEST 4:✅
Ping `espSTA` from PC.
![test esp_ap 4.1](/assets/img/posts/wifi_repeater/ap_tst_4.1.png){: width="100%"}
So far so good.

#### AP TEST 5:✅
Ping `espSTA`(1) from `espSTA`(2) through `espAP`.
![test esp_ap 5.1](/assets/img/posts/wifi_repeater/ap_tst_5.1.png){: width="100%"}


#### Result
I can comfortably say the STA and the AP part of this project work independently.

```cpp
ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_AP));
&
ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA));
```

## Next Steps

1. explore WIFI_MODE_APSTA. 
2. NAT configuration.
