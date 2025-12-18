---
layout: page
title: Eole 3000/VXL
description: The Eole 3000/VXL project is the process of industrialising a refactored codebase while integrating prototyped changes to the mechanical, hydrolics and electronics of the tool.
img: assets/img/PXL_Eole2000_3000.jpg
importance: 1
category: Work Experience
related_publications: false
---
## Description:
The **Pellenc Eole 3000** is a high-precision vineyard sprayer designed for efficient and accurate chemical application. It features **ultrasound sensors** that automatically adjust the spray ramp to follow terrain and vine height, ensuring optimal coverage and minimizing waste. The sprayer is equipped with an **intuitive control interface** and **anti-drift technology**, making it user-friendly and environmentally responsible. Compatible with a wide range of diffusers for various applications, it adapts to various vineyard layouts and is meant to be mounted on Pellenc’s **Optimum multifunction carrier**.

## Technologies:
C++, Qt/Qml, Spion, GDB/GDB-Server, Git, VSCode, ssh/shell, Oscilloscope

## Context and Motivation:
The **Eole 3000/VXL** was already a functional tool that had accumulated too much technical debt. The cost of changing the code had begun to be too expensive, and a technical lead initiated a global refactor of the tool with a new architecture that, if respected, would ideally limit future technical debt to a smaller part of the code.\
During the initial part of this development, I was not assigned to this project. I only participated during the final two years of the four-year development period. The first two years consisted of setting up the groundwork for the architecture and having a mostly functional version of the software.\
The job that was left to me and my teammate was to deliver stable versions that met all the requirements from the product owners. The aim was also to build our non-regression test coverage, build trust with the machine testers, and leave clear, up-to-date documentation.

## My Role:

#### Key Contributions:
`Disclaimer: Most of the tasks done on this project were in collaboration with Fabian Manieri. We often brainstormed together, and while he tended to gravitate toward the UI, I would focus on the back-end. Both of us stayed competent in each other's code through code reviews.`.

- **Tank Balancing Algorithm**: Clarification of the specifications and implementation of the tank balancing algorithm. The balancing of the tanks is required for machine stability, avoiding foaming from the pumps putting air into the system when the product level is too low, and cleaning the machine after a spraying cycle.

- **Ground Following US/Norac/Radar**: This contribution involved updating the architecture to support any of the available ground-following technologies, each capable of controlling boom height through a unified interface, configured via an XML file.

- **Non-Regression Tests**: The implementation of non-regression tests was a way to ensure we were not breaking a complex system, and at the same time, setting them up gave us a better understanding of how different parts of the machine were supposed to work. That made the tests a good place to start when trying to understand how a part of the code worked.

- **Technical Specifications**: The redesign of our technical specifications was mostly led by my colleague, a software engineer, and me. Keeping an up-to-date technical specification with in-depth details of how the machine was intended to work provided a better reference point when communicating with other services.

- **Optimization of Data Pulled for Display Refresh Loop**: The GUI used signals & slots, commonly named publisher-subscriber. The entire front end was connected through a single signal that would prompt a pull of all the data shown in the interface. That update would happen frequently enough to cause latency issues when the system was under load. We defaulted to grouping some of these values by context and attributing a signal by context. This solution both made the QML code cleaner and also enforced a more organized C++ interface, which ultimately helped reduce development time for future features.

- **Recycling panels**: The implementation of this feature enabled the addition of extra hardware that would catch excess sprayed product and pump it back into the product tanks. The specificity of this change is that it affected every aspect of the tool, from different mechanical boom architectures that had repercussions on the folding choreography to the power usage of the tool, which now had two more pumps.


#### Technical Challenges & Creative Solutions:
- **Challenge**: Adding a new ground following technology implicating the need for a configuration based technology switch.\
**Solution**:
The solution was to refactor and update the architecture to support a clean, multi-technology ground following algorithm interface, with clear separations through multiple levels of abstraction. To address the challenge, I took the following steps:
    - **Normalized Requirements:** Standardized the diverse requirements of each technology, ensuring they all adhered to the same interface standards.
    - **Modular Isolation:** Isolated the different modules to enforce clear separation and maintain consistency across the architecture.
    - **Systemwide Refactoring:** Updated and renamed variables throughout the system to accurately reflect the new multi-technology structure.
    - **Frontend-Backend Integration:** Designated a clear space for technology-specific links between the frontend and backend, particularly for calibration needs or unique inputs that couldn’t be generalized.


- **Challenge**: I added a radar-based smart sensor for ground following. Typically, sensors on these machines output a PWM or similar signal. What made this one different was that it had to be enumerated and configured with its position on the machine. This way, it could filter out reflections from the machine itself and focus only on the ground.\
**Solution**: In order for the machine to enumerate the sensor at startup, I needed to use the machine's standard card enumeration system, where I simulated a tool card and had that simulated card communicate with the smart sensor. This was not ideal, but it was the cleanest way to avoid modifying proven code from the machine's startup sequence.

- **Challenge**: Installing recycling panels means the operation of additional pumps with their specific priming sequence, and the panels also reduce the boom's mobility, forcing it to have software no-go zones where we were previously mechanically constrained. We now need to stop movements from breaking parts of the machine.\
**Solution**: Initially, the system only stored four preset positions: minimum, road, working, and maximum. We added a new "panels-on" position as a safeguard to stop the boom from moving past a set limit. We also made it possible for users to position the boom in a safe zone before installing the panels, preventing them from being mounted in an unsafe or incorrect position.\
In addition, we needed to wire the two pumps on unused ground following sensor outputs because of the lack of available pins. Fortunately, the ground-following configuration that would use these sensors was incompatible with the panels' configuration.\
The issues we ran into were that the extra sensor was coded in a way that permitted the assembly line to wire the far sensors to the wrong pins. This meant we could have an issue if a machine was shipped to a client with wiring that did not meet specifications.

## Results:
The project transformed the Eole 3000/VXL from a system burdened by technical debt into a modular, well-documented, and future-proof tool. The improvements in stability, performance, and usability have made it more reliable for end-users and easier to maintain for developers.

## Project Timeline:
- **Development Duration**: 2 years
- **Status**: Successfully deployed and actively used by clients

## Key Learnings:
- Trust with other teams was a big part of making everything work smoothly.
- Documenting as we went kept us from wasting time revisiting the same issues or losing track of what was already done.
