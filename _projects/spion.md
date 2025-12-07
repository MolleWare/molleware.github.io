---
layout: page
title: Spion
description: A tool to reduce development and debugging time by providing real-time telemetry and enabling the writing of properties to variables in a program running on an embedded device.
img: assets/img/spion_example.png
importance: 1
category: Work Experience
related_publications: false
---
situation-task-action-result

## **Situation**
----
After accumulating significant technical debt on the Sprayer Eole 2000/3000 and not achieving satisfactory results, the decision was made to refactor the tool's code. The goal was to isolate different components of the code to prevent unrelated parts from impacting each other and to reduce errors in unaffected features. 

One of the challenges encountered was the lack of testing tools, which often resulted in spending considerable time conducting field tests. The initiative aimed to alleviate the development team's burden by creating debugging interfaces that would enable them to view sensor data more clearly and effectively.

The objective was to develop a simple, minimal implementation tool that could at least be run from the developer's PC in a terminal environment. This would serve as the foundation for a monitoring interface designed to visualize data more efficiently.

The project was named "Spion," a play on the French word "espion," meaning "spy." Additionally, it aligned with our naming convention of projects ending with "-ion".

## **Task**
----
The plan was to cut the project in different parts in order to have a solution as soon as possible addressing the MVP.
Then more features and improvements could be done to facilitate setup and usability of the tool.
##### **Step 1**:
Develop a server-side library that can be communicated with via Netcat. The library should be easy to set up on the client side and highly flexible in terms of the data it can transmit, supporting void* / raw data blocks. Additionally, the server must be capable of handling multiple clients simultaneously. 

Each client should be able to subscribe to exposed variables and receive updates whenever the corresponding send function is called within the target code.

Having a clear and straightforward specifications initially was important to allow me to prioritize reliability and focus on learning new concepts as a junior developer.

##### **Step 2**:
Using netcat to receive data and interpret it as plain text is not an ideal solution. Therefore, the logical next step is to develop an easy-to-use graphical interface for developers. 

The balance of cost and customizability was a key consideration, as the tools were intended solely for use by developers. Instead of creating a highly modular system, I developed a client application in two stages. The first component was a library that replaced netcat, allowing different front-end interfaces to connect to the server through it.

At that time, the team agreed to explore using ImGui and SFML for debugging applications. This led me to develop both a Qt/QML version and an SFML/ImGui client, which would serve as examples or starting points for developers to set up their own debugging clients. The default clients supported most common debugging use cases and could be modified for niche or complex tasks as needed.

We also discussed the possibility of a web client integrated with Grafana, but this was considered a lower priority and did not seem like an efficient use of time at that stage.

##### **Step 3**:
In addition to reading variable values in an embedded system, we recognized that it would be beneficial to induce specific behaviors through read/write operations. Therefore, the send function was adapted to differentiate between read-only and read/write actions, resulting in the new function names: send_ro for read-only operations and send_rw for read/write operations. This modification allows us to initiate actions directly by calling send using the send_ro function.

An example of how this functionality could be beneficial is that it allows the developer to simulate certain conditions and induce behaviors without requiring the physical environment to replicate the scenario being debugged in the main application.

## **Action**
----
As mentioned in step 1, I started by developing a server that could be connected to with netcat.
The developer would then connect to it using commands such as "ls" to list the exposed variables or "sub ${id}" to subscribe to a variable.

## **Result**
----

### **Notes**
----

none.