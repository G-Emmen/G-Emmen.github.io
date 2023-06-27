---
layout: post
author: Greg Emmen
tags: [projects]
---

### Fall 2020 Term Project - MSE in Energy Systems Engineering
&nbsp;&nbsp;&nbsp;&nbsp;This was a group project, completed with two other team members - Chase Richard and Mohammad Fahs. In this project, our goal was to model and analyze a state-space representation of an attitude control system. Additionally, we explored the sensitivity of the system response due to sampling frequency and the tuning of the PID parameters.

Read the full report: <a href="https://github.com/G-Emmen/G-Emmen.github.io/raw/main/docs/assets/pdf/SatelliteControl.pdf" target="_blank">Satellite Attitude Control System</a>

#### Abstract
&nbsp;&nbsp;&nbsp;&nbsp;An attitude control system utilizes commands provided by a controller to the thrusters (i.e., actuators) to correctly position a satellite (i.e., the plant) to operate any instruments or tools that require specific positioning. The satellite attitude control system has been implemented in discrete time (z-domain) as opposed to continuous time (s-domain). Discrete controllers have been popular in industry for many reasons
including ease of modifications (software versus hardware), low cost, and their low susceptibility to noise, environment, and aging. Knowing the system’s open-loop response is important when designing a controller for a closed-loop system. The system is inherently open-loop unstable as any input or disturbance
will cause the satellite to continuously spin without a means of stopping as the satellite is assumed to be in space (i.e., a nearly frictionless environment). Therefore, a tuned closed-loop control system, using a Proportional-Integral-Derivative (PID) controller, is required to position the satellite correctly and remain stable.

<img src="/assets/img/satellite_graphic.png" class="center">

#### Open & Closed Loop Control System Examples
&nbsp;&nbsp;&nbsp;&nbsp;To analyze this system we looked at both the idea of open loop and closed loop control system. The open loop model includes a sampler with Zero-Order Hold (ZOH), which feeds an error signal into the PID controller. A component for disturbance was included, which would allow for us to consider the effect of external applications and how a system might respond. The physical model takes in the resulting torque values and determines the outgoing attitude of the satellite.

<img src="/assets/img/open_loop.png">

&nbsp;&nbsp;&nbsp;&nbsp;With the closed loop model, it includes the same control system and physical model but also has a sensor feedback on the angle of the satellite that adjusts the error signal going into the sampler with ZOH.

<img src="/assets/img/closed_loop.png">

This system is simplified for ease of analysis, but fundamentally covers all of the necessary components for an attitude control sytem.

#### Analysis
&nbsp;&nbsp;&nbsp;&nbsp;(see report) WIP

#### Takeaway & Conclusion
&nbsp;&nbsp;&nbsp;&nbsp;(see report) WIP