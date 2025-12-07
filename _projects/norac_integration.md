---
layout: page
title: Norac
description: Integration of a radar-based ground-following system for the Eole 2000/3000 spraying tool, replacing ultrasonic sensors to improve crop navigation and spraying accuracy.
img: assets/img/Norac_sensor.png
importance: 2
category: Work Experience
related_publications: false
---

## Description:
The Norac integration project aimed to replace the Eole 2000/3000 spraying tool's ultrasonic ground-following sensors with an advanced radar-based system. The original ultrasonic sensors were limited in their ability to detect the ground through vegetation (grass, branches, and foliage), resulting in inaccurate height control during spraying operations.

The objective was to implement a radar-based ground-following system capable of penetrating vegetation to provide reliable soil detection and enable precise height adjustment during variable terrain conditions. This advancement would significantly improve spraying accuracy and operational reliability in challenging agricultural environments.

## Technologies:
C++, Qt / QML, Radar Sensor Integration, Real-Time Control Systems

## Context & Motivation:
The Eole 2000/3000 spraying tool is equipped with sensors to automatically adjust the spraying boom height based on distance from the ground. This "ground-following" capability is critical for optimal pesticide application—too high and the spray disperses ineffectively, too low and it damages crops.

The existing ultrasonic sensor approach had a critical limitation: it couldn't detect the actual soil surface when vegetation was present. This reduced the system's reliability in real-world field conditions where grass, branches, and foliage are common obstacles.

The Norac integration was part of the larger system redesign effort at Pellenc, which presented both opportunities and challenges.

## My Role:

#### Key Contributions:

- **Radar System Integration**: Designed and implemented the integration of the Norac radar sensor into the Eole system, including driver development and data acquisition protocols.
- **Control Algorithm Development**: Developed the control logic to convert radar distance measurements into precise boom height adjustments using C++ and Qt/QML.
- **Prototype Testing**: Conducted initial testing on a hardware mock-up (banc de test) to validate basic functionality before field deployment.
- **Manual Control Implementation**: Implemented manual boom control (voûte pilotage) functionality to allow operator override of automatic height adjustment.

## Challenges & Solutions:

- **Challenge**: Working within a parent project undergoing major architectural refactoring.\
**Solution**: Adapted design approach to align with the evolving system architecture, though this created some integration complexities and required iterative refinement.

- **Challenge**: Incomplete prototype testing resulted in undiscovered issues.\
**Solution**: Learned the critical lesson that mock-up testing must be comprehensive and test not just new features but also all system interactions. Issues with manual control priority handling were discovered in field testing rather than in the lab.

- **Challenge**: Manual boom control priority management.\
**Solution**: Initially implemented basic manual control, but later recognized that operator priority logic was missing—the system didn't properly prioritize driver inputs over automatic adjustments. The operator could only block automatic movements by applying counter-motion rather than having explicit priority control.

#### Key Learning:
This project taught an important testing lesson: **bench testing (banc de test) must be exhaustive and comprehensive**. It's not enough to test only the new functionality added—integration testing with all system components and edge cases is essential. Discovering issues in the field is significantly more costly than finding them during development.

## Results:
- Successfully integrated the Norac radar sensor system with the Eole platform
- Demonstrated improved ground-following capability in controlled test environments
- Identified the limitations of the Norac sensor through rigorous field testing
- Validated the importance of comprehensive prototype testing practices

## Project Outcome:
The Norac radar sensor, while technically well-integrated, did not meet the performance expectations required for the final Eole 2000/3000 spraying system. The sensor's capabilities fell short of the project's goals for reliable ground following in diverse vegetation conditions.

Following this experience, I contributed to the implementation of an alternative ground-following system developed by the PELLENC group that better addressed the operational requirements.

## Key Learnings:
- **Comprehensive Testing**: Bench testing must cover all system interactions, not just new features
- **Field Validation**: Real-world conditions often reveal issues that controlled environments miss
- **Sensor Selection**: Not all sensor technologies are suitable for every application—thorough evaluation and testing during design phases is crucial
- **Iterative Development**: When working on projects with evolving architectures, flexibility and clear communication about design impacts are essential
- **System Integration**: Ground-following systems are complex, multi-component systems where edge cases and priority logic matter significantly

## Related Projects:
This work contributed to the broader [Pulve EOLE 2000/3000](/projects/Pulve_EOLE_2000-3000/) project improvements and informed the development of alternative ground-following solutions.
