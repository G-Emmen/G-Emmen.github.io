<a href="https://g-emmen.github.io/"> << back </a>

## Satellite Attitude Control System

### Fall 2020 Term Project - MSE in Energy Systems Engineering

&nbsp;&nbsp;&nbsp;&nbsp;This was a group project, completed with two other team members - Chase Richard and Mohammad Fahs. In this project, our goal was to model and analyze a state-space representation of an attitude control system. Additionally, we explored the sensitivity of the system response due to sampling frequency and the tuning of the PID parameters.

Read the full report: <a href="https://github.com/G-Emmen/G-Emmen.github.io/raw/main/docs/assets/pdf/SatelliteControl.pdf" target="_blank">Satellite Attitude Control System</a>

#### Abstract

&nbsp;&nbsp;&nbsp;&nbsp;An attitude control system utilizes commands provided by a controller to the thrusters (i.e., actuators) to correctly position a satellite (i.e., the plant) to operate any instruments or tools that require specific positioning. The satellite attitude control system has been implemented in discrete time (z-domain) as opposed to continuous time (s-domain). Discrete controllers have been popular in industry for many reasons
including ease of modifications (software versus hardware), low cost, and their low susceptibility to noise, environment, and aging. Knowing the system’s open-loop response is important when designing a controller for a closed-loop system. The system is inherently open-loop unstable as any input or disturbance
will cause the satellite to continuously spin without a means of stopping as the satellite is assumed to be in space (i.e., a nearly frictionless environment). Therefore, a tuned closed-loop control system, using a Proportional-Integral-Derivative (PID) controller, is required to position the satellite correctly and remain stable.

<img title="" src="https://g-emmen.github.io/assets/img/satellite_graphic.png" alt="" class="center" data-align="center">

#### Open & Closed Loop Control System Examples

&nbsp;&nbsp;&nbsp;&nbsp;To analyze this system we looked at both the idea of open loop and closed loop control system. The open loop model includes a sampler with Zero-Order Hold (ZOH), which feeds an error signal into the PID controller. A component for disturbance was included, which would allow for us to consider the effect of external applications and how a system might respond. The physical model takes in the resulting torque values and determines the outgoing attitude of the satellite.

<img title="" src="https://g-emmen.github.io/assets/img/open_loop.png" alt="" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;With the closed loop model, it includes the same control system and physical model but also has a sensor feedback on the angle of the satellite that adjusts the error signal going into the sampler with ZOH.

<img title="" src="https://g-emmen.github.io/assets/img/closed_loop.png" alt="" data-align="center">

This system is simplified for ease of analysis, but fundamentally covers all of the necessary components for an attitude control sytem.

#### Analysis

&nbsp;&nbsp;&nbsp;&nbsp;One area of comparison was the difference between an open and closed loop transient response. In the open loop implementation, a constant non-zero input will result in the system becoming unstable, constantly increasing in rotation as time approaches infinity.

<img title="" src="https://g-emmen.github.io/assets/img/open_loop_transient.JPG" alt="" class="center" data-align="center"> 

&nbsp;&nbsp;&nbsp;&nbsp;The closed loop system doesn't approach infinity when a constant non-zero input is applied. Instead, the system will correlate different input voltages to a desired angle output. Eventually the closed loop system will achieve a steady state output, and the response can be tuned using PID parameters.

<img title="" src="https://g-emmen.github.io/assets/img/closed_loop_transient.JPG" alt="" class="center" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;Another aspect of the closed loop system that our group analyzed was the ability for the closed-loop model to reject disturbances while operating. This was achieved by adding a randomized torque input after the system reaches a steady state value. With a low torque disturbance value applied (0.1 Nm), the system is able to remain within +/- 5% of the expected steady state output value.

<img title="" src="https://g-emmen.github.io/assets/img/torque_disturbance_low.JPG" alt="" class="center" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;As the torque disturbance increases in magnitude (1.0 Nm), the system struggles to maintain the desired output. In this instance, the system is stressed beyond it's physical limits and would have undesirable performance characteristics in a real world application.

<img title="" src="https://g-emmen.github.io/assets/img/torque_disturbance_high.JPG" alt="" class="center" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;In a more academic analysis of PID control for closed loop systems, our group also took a look at the different impacts that the proportional, integral, and derivative parameters can have on the output of the satellite system. Exploring the different aspects of the control parameters was used to confirm and validate the expected outcome found in the following table:

<img title="" src="https://g-emmen.github.io/assets/img/PID_tuning_table.JPG" alt="" class="center" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;Using a MATLAB script to incremently change each parameter from a range of 0.0 to 1.0 in increments of 0.1, the impact was plotted to visualize the response. Ultimately this confirmed the hypothesized impacts on steady state output performance from the table above.

<img src="https://g-emmen.github.io/assets/img/proportional.JPG" title="" alt="" data-align="center">

<img src="https://g-emmen.github.io/assets/img/derivative.JPG" title="" alt="" data-align="center">

<img src="https://g-emmen.github.io/assets/img/integral.JPG" title="" alt="" data-align="center">

#### Takeaway & Conclusion

&nbsp;&nbsp;&nbsp;&nbsp;Satellite attitude control systems represent a unique control problem. This design project has only scratched the surface when it comes to the complexity of attitude control implemented in actual satellites or spacecraft. The first piece of added complexity would be to introduce a third dimension, quickly followed by calculations of a dynamic moment of inertia and more advanced methods of torque application.This project has developed a model that can be used to simulate satellite attitude control in an ideal environment. With a strong understanding of the basic operation of this system, it is possible to add elements of increasing complexity as desired.