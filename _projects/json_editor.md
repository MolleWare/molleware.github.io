---
layout: page
title: JSON Editor
description: An automated configuration tool that eliminated the need for on-site developer assistance during SPV3 machine setup and deployment.
img: assets/img/Json_editor.png
importance: 2
category: Work Experience
related_publications: false
---

## Description:
The JSON Editor is a user-friendly configuration utility designed to automate the setup process for Pellenc SPV3 (Integral Vision) machines. Previously, each machine deployment required an on-site software developer to manually configure the system. This project eliminated that dependency by providing technicians with a standalone tool to manage machine configuration independently.

The tool provides an intuitive interface for editing and validating JSON configuration files, enabling field technicians to quickly configure machines during deployment without specialized programming knowledge or developer assistance.

## Technologies:
Qt / Qt Widgets, C++

## Context & Motivation:
Machine deployment was a significant bottleneck in the SPV3 production pipeline. Every new machine required a software developer to be present on-site for configuration, creating scheduling constraints and increasing deployment costs. The objective was clear: **fully automate this manual step** to enable technicians to complete configuration independently.

This project showcased the importance of making engineering tools accessible to non-technical users and highlighted the real-world constraints of embedded system interfaces.

## My Role:

#### Key Contributions:

- **Technology Selection**: Chose Qt/Qt Widgets as the framework for interface development and C++ for the configuration file parsing system.
- **Configuration System Design**: Designed and implemented a robust JSON parsing and validation system that could handle the SPV3's complex configuration requirements.
- **Process Management**: Implemented a controlled process lifecycle where clicking the configuration button would:
  - Gracefully terminate the main SPV3 application
  - Launch the JSON Editor
  - Wait for editor completion
  - Automatically restart the main application
- **Integration Architecture**: Navigated the decision of whether to embed the editor within the main application versus creating a standalone utility, ultimately choosing the standalone approach for simplicity and to avoid managing conflicting auto-save behaviors.

#### Technical Challenges & Creative Solutions:

- **Challenge**: Preventing automatic restart of the main application while the JSON Editor is in use.\
**Solution**: Implemented a process control mechanism that detected the JSON Editor's presence and suppressed the auto-restart logic until completion.

- **Challenge**: Managing the rotated display interface (90-degree inclination).\
**Solution**: The machine's tilted 90-degree screen required special handling. When the interface was rotated to match the display orientation, the on-screen keyboard buttons developed a progressive pixel drift (shifting 10+ pixels to the right) due to Qt Widget layout interactions with the rotation transformation.\
**Creative Fix**: Rather than spend additional time debugging the layout engine, I pragmatically adjusted the keyboard row definitions to counter-shift in the opposite direction, achieving the correct visual alignment.

- **Challenge**: Embedding vs. Standalone Architecture.\
**Solution**: Evaluated embedding the editor within the main application but determined the cost was too high. Managing automatic configuration saves alongside the editor's modifications would create complexity and risk. The standalone approach was cleaner and more maintainable.

## Results:
- Successfully automated the machine configuration process, eliminating the need for on-site developer assistance
- Enabled field technicians to independently configure SPV3 machines during deployment
- Reduced deployment time and operational costs
- Tool was actively used in production and met all technician requirements
- Demonstrated the value of practical, user-focused engineering solutions

## Project Timeline:
- **Development Duration**: 6 weeks
- **Status**: Successfully deployed and actively used in production

## Key Learnings:
This project reinforced important lessons about pragmatic engineering:
- Sometimes the simplest solution is the best one (standalone vs. integrated)
- Understanding hardware constraints (rotated displays) is crucial for UI development
- Making tools accessible to non-technical users multiplies their value and impact
- Quick, practical solutions (like the keyboard adjustment) can be more valuable than perfect architectural solutions when time is constrained
