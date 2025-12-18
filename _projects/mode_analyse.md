---
layout: page
title: Mode Analyse
description: An introspection tool that enabled technicians and developers to visualize the behavior of object classification algorithms.
img: assets/img/ModeAnalyse_Composante.png
importance: 1
category: Work Experience
related_publications: false
---

## Description:

Mode Analyse is an introspection tool designed to analyze and debug the object classification algorithms within the Intégral Vision system. Initially created for R&D laboratory use during the development phase, it evolved to address critical field service needs—enabling technicians to calibrate machines during atypical harvesting conditions.

The tool provides deep visibility into the Integral Vision algorithm's behavior, allowing users to examine intermediate results, classification decisions, and pixel-level analysis in real-time. This capability transformed how the service team could diagnose and resolve issues in the field.

![SPV3 Machine Render](/assets/img/spv3_render.png){: width="100%"}
_The Pellenc SPV3 machine - a sorting system that Mode Analyse helps debug and optimize_

## Technologies:

C++, ImGui / SFML, Qt, CMake, Image Processing, CSV Data Export, Multi-threaded Architecture

## Context & Motivation:

The transition of Integral Vision from a single-threaded to a multi-threaded architecture necessitated a complete redesign of the introspection tools. The previous version's approach to capturing algorithm data no longer worked with the new concurrent design. This created an urgent need for a modern solution that could interface with the new multi-threaded system—bridging the gap between laboratory debugging and field-level support.

This was my first team project, where I collaborated closely with **Dr. Ludovic Llucia**, the principal developer of Integral Vision, to design and implement a solution that met both R&D and service team requirements.

## My Role:

#### Key Contributions:

- **Collaborative Architecture Design**: Worked alongside Ludovic Llucia to design a system that isolated the image processing algorithm, enabling code reuse between Integral Vision and Mode Analyse.
- **Image & Configuration Acquisition System**: Implemented a field-ready system to capture images and configurations with minimal impact on processing performance.
- **System Documentation**: Documented the Integral Vision algorithm to ensure complete understanding and proper implementation.
- **Dual-Component Architecture**: Designed and implemented the two-part system:
  - **Source Analyse**: A lightweight program that accepts an image and configuration files, traverses the image, and exports analysis results to CSV format.
  - **Mode Analyse UI**: A rich visualization layer that displays images with overlay information including object detections, classifications, and pixel-level categorization based on neighborhood and color data.

#### Technical Insights & Growth:

- **Architecture Principles**: Gained hands-on experience implementing YAGNI (You Aren't Gonna Need It) and SOLID principles in a production environment.
- **Rapid UI Development**: Explored and championed ImGui/SFML as a framework for fast-iteration debug interface development, educating the team on modern rapid prototyping techniques.
- **Technical Debt Awareness**: Working with legacy code provided valuable perspective on the impact of technical decisions and the importance of maintainable architecture.
- **Field Validation**: Deployed Mode Analyse in the field alongside Ludovic Llucia to validate functionality and gain deeper insights into machine behavior in real-world conditions.

## Challenges & Solutions:

- **Challenge**: Retrieving algorithm data from a newly multi-threaded system that invalidated legacy introspection methods.\
  **Solution**: Designed a clean separation of concerns, isolating the image processing algorithm for reuse and creating a dedicated acquisition system that could safely capture data without impacting real-time performance.

- **Challenge**: Minimizing performance impact during field data capture.\
  **Solution**: Implemented an efficient acquisition system that captured only necessary images and configurations, allowing real-world usage without compromising machine performance.

- **Challenge**: Bridging the gap between laboratory debugging and field-level diagnostics.\
  **Solution**: Created a flexible tool that served both R&D (deep algorithm analysis) and field service (quick calibration and troubleshooting) use cases.

- **Challenge**: Understanding complex algorithm behavior in a multi-threaded context.\
  **Solution**: Invested in comprehensive system documentation and direct collaboration with the principal architect to ensure proper implementation and deep comprehension.

## Results:

- Enabled technicians to confidently calibrate machines in atypical harvesting conditions
- Provided developers with powerful introspection capabilities for debugging and optimization
- Validated architecture design through real-world field testing
- Established Mode Analyse as an essential tool for both development and customer support

## Project Impact:

This was a formative project that demonstrated the value of collaborative development and the importance of tools that support both engineering and customer success. The ability to visualize algorithm behavior proved instrumental in solving field issues quickly and maintaining product reliability across diverse operating conditions.
