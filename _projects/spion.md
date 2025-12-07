---
layout: page
title: Spion
description: A tool to reduce development and debugging time by providing real-time telemetry and enabling the writing of properties to variables in a program running on an embedded device.
img: assets/img/spion_example.png
importance: 1
category: Work Experience
related_publications: false
---
## Description:
Spion is a lightweight, real-time monitoring and debugging tool designed for embedded systems developers. It allows users to observe variable values in real time and dynamically modify them during runtime, enabling faster debugging, behavior testing, and system tuning without recompiling or flashing firmware. Spion integrates seamlessly with C++ embedded applications running on embedded linux systems.
## Technologies:
C++, Qt / Qml, Sfml / Imgui, Makefile, Linux ,Git, ARM, TCP/IP, Sockets, String-Based Protocols
## My Role:
#### Key Contributions:

- Developed a cross-platform embedded library serving as a lightweight server to facilitate real-time monitoring and modification of variables.  
- Created modular client examples (such as CLI and GUI) to showcase customization options for various use cases and workflows.  
- Implemented adaptable communication protocols, initially utilizing Netcat for simplicity and transitioning to TCP to enhance scalability and bandwidth efficiency.
- Expanded support for complex data types, including structs, arrays, and user-defined formats.  
- Collaborated with development teams to refine the design, ensuring robustness, ease of integration, and practical usability.

## Challenges & Solutions:

- **Challenge**: Minimizing performance impact on the embedded system.\
**Solution**: Implemented a non-blocking, event-driven architecture.
- **Challenge**: Making the tool user-friendly for developers with varying skill levels.\
**Solution**: Designed an intuitive GUI with search, filtering, and presets for common debugging scenarios.
- **Challenge**: Supporting a wide range of data types.\
**Solution**: Added support for passing POD (Plain Old Data) types, such as structures that encapsulate contextual variables.

## Results:
Reduced debugging time by ~40% for teams using Spion, eliminating the need for repeated flashing.
Supported C++ embedded projects with ethernet capabilities.

## Visuals:
No images ... internal project

## Links:
no links .. internal project
