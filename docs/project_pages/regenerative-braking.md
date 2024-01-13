<a href="https://g-emmen.github.io/"> << back </a>

## Regenerative Braking Control Method

### Fall 2021 Term Project - MSE in Energy Systems Engineering

&nbsp;&nbsp;&nbsp;&nbsp;This project was completed individually, based on a topic that I selected within the bounds of the ECE517 class learnings but also something that I personally found interesting. It involved development of a MATLAB Simulink model to approximate some of the dynamics around a single brushless DC motor in an automotive application. The focus of the project was on the development of a six-switch inverter control strategy that would allow for regenerative braking, charging the battery that was also used to drive the motor. Additionally, the supporting electrical hardware needed is detailed and modeled.

Read the full report: <a href="https://github.com/G-Emmen/G-Emmen.github.io/raw/main/docs/assets/pdf/RegenBrake.pdf" target="_blank">Regenerative Braking Control of the Brushless DC Motor Drive</a>

#### Abstract

&nbsp;&nbsp;&nbsp;&nbsp;Brushless DC motors are commonly found in automotive applications. These motors require a controlled three-phase current to operate under standard conditions. This control is commonly implemented by use of a six-switch inverter. It is also desirable to include regenerative braking as a feature for battery and hybrid electric vehicles, requiring additional controls and hardware for implementation. This project introduces a modified six-switch inverter strategy for providing
brake torque and regenerative capability. It also details the supporting hardware and controls necessary to implement the modified six-switch inverter strategy into a battery electric vehicle architecture.

#### MATLAB Simulink Model

&nbsp;&nbsp;&nbsp;&nbsp;Electrical components were modeled using Simulink, along with the simscape blockset. The primary components modeled for this project include the HV Battery, a Bi-Directional DC/DC Converter with four-switch control logic, the Six-Switch inverter, and a Motor/Vehicle Model with current/voltage sensors on the BLDC motor.

<img title="" src="file:///C:/Users/Greg/Documents/GitHub/G-Emmen.github.io/docs/assets/img/Regen_SimulinkModel.JPG" alt="">

#### Analysis

&nbsp;&nbsp;&nbsp;&nbsp;For this project, the model was 'driven' over a simple ramp & hold drive cycle. Input reference speed was provided, and the system was designed to try and match the speed with some limited amount of overshoot and settling time.

<img title="" src="https://g-emmen.github.io/assets/img/MtrSpd_v_RefSpd.JPG" alt="" class="center" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;Throughout the cycle, the voltage and current was measured at the motor to confirm that the values were within acceptable limits for being balanced by the Bi-Directional DC/DC converter for charging the HV Battery.

<img title="" src="https://g-emmen.github.io/assets/img/Inverter_and_Batt_Volt.JPG" alt="" data-align="center">

<img title="" src="https://g-emmen.github.io/assets/img/Converter_and_Batt_Curr.JPG" alt="" data-align="center">

&nbsp;&nbsp;&nbsp;&nbsp;The resulting energy flow over the ramp & hold drive cycle confirms the regenerative capability of different six-switch control strategies. Functionally, the inverter configuration can be switched into a configuration that will enable current to flow in the reverse direction, and in tandem with a Bi-Directional DC/DC converter, enabling the HV battery to charge. This is completed with a strategy called 'chopping' which implements a PWM controlled signal to rapidly open and close specific switches during regeneration in order to enable regeneration.

&nbsp;&nbsp;&nbsp;&nbsp;Changing the duty cycle associated with the 'chopping' will determine the effectiveness of regenerative braking. Lower duty cycles in this format amounted to a higher amount of energy recovered over the regeneration portion of the drive cycle.

<img title="" src="https://g-emmen.github.io/assets/img/Percent_SOC_DC_Comp.JPG" alt="" class="center" data-align="center">

#### Takeaway & Conclusion

&nbsp;&nbsp;&nbsp;&nbsp;The 'chopping' method for six-switch inverter controls to enable regenerative braking is one of many methods deployed in industry. This project explores the limits and capabilities of such a method, and the associated electrical hardware required to make it work. Improvements to this project could be made in terms of model fidelity, specifically around the vehicle dynamics. Inertial approximations are adequate for the work completed, but not for full development of inverter control logic. Additionally, variations on the control strategy could be explored or compared to determine if one method can outperform another.
