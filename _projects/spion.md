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

Spion is a lightweight, real-time monitoring and debugging tool designed for embedded systems developers. It allows users to observe variable values in real time and dynamically modify them during runtime, enabling faster debugging, behavior testing, and system tuning without recompiling or flashing firmware. Spion integrates seamlessly with C++ embedded applications running on embedded Linux systems.

This was an internal initiative within the Pellenc team, designed to facilitate rapid integration and skill development in a collaborative environment. The project's diversity of technologies and relative ease of implementation made it an ideal onboarding project for our development team.

## Technologies:

C++, Qt / Qml, Sfml / Imgui, Makefile, Linux ,Git, ARM, TCP/IP, Sockets, String-Based Protocols

## My Role:

#### Key Contributions:

- Developed a cross-platform embedded library serving as a lightweight server to facilitate real-time monitoring and modification of variables.
- Created modular client examples (such as CLI and GUI) to showcase customization options for various use cases and workflows.
- Implemented adaptable communication protocols, initially utilizing Netcat for simplicity and transitioning to TCP to enhance scalability and bandwidth efficiency.
- Expanded support for complex data types, including structs, arrays, and user-defined formats.
- Collaborated with development teams to refine the design, ensuring robustness, ease of integration, and practical usability.

#### Multi-Client Architecture & Generic Interfaces:

One of the key technical challenges and achievements was designing the system for **multi-client capability**. This constraint emphasized the importance of generic, reusable interfaces.

- **Data Protocol Design**: Each data packet consists of an identifier and the content of observed variable(s).
- **Type Registration**: On the first transmission, a registration message communicates the variable type and assigns a unique identifier for retrieval in the UI.
- **Intelligent Caching**: When multiple variables share the same identifier, the authentication message is not resent, as the variable is already registered—allowing observation of the same variable at multiple locations in the embedded code.
- This elegant design enables flexible monitoring across distributed code locations without redundant data transmission.

## Challenges & Solutions:

- **Challenge**: Minimizing performance impact on the embedded system.\
  **Solution**: Implemented a non-blocking, event-driven architecture.

- **Challenge**: Making the tool user-friendly for developers with varying skill levels.\
  **Solution**: Designed an intuitive GUI with search, filtering, and presets for common debugging scenarios.

- **Challenge**: Supporting a wide range of data types.\
  **Solution**: Added support for passing POD (Plain Old Data) types, such as structures that encapsulate contextual variables.

- **Challenge**: Steep learning curve as this was one of the first major projects with limited initial domain knowledge.\
  **Solution**: Invested significant time in acquiring foundational knowledge of embedded systems, networking, and multi-threaded programming. This disciplined approach to learning laid the groundwork for future contributions.

- **Challenge**: Ensuring scalability and efficiency in data transmission.\
  **Solution**: Developed an intelligent protocol with type registration and identifier-based caching to minimize redundant communication and optimize bandwidth usage.

## Results:

![spion default interface](/assets/img/spion.png)
Reduced debugging time by ~40% for teams using Spion, eliminating the need for repeated flashing.
Supported C++ embedded projects with ethernet capabilities.

## Project Timeline & Documentation:

- **Development Duration**: Approximately 4 months
- **Integration Documentation**: Comprehensive integration documentation was completed, enabling seamless adoption and customization by other development teams
- **Outcome**: The project functioned reliably and became a key tool for accelerating development cycles within the embedded systems team
