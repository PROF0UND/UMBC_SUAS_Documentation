---
title: Hardware Setup
description: Wiring and serial port configuration for Skypiea's flight controller.
sidebar:
  order: 1
  label: 1.1.1 Hardware Setup
---

## Flight Controller Overview

The Mateksys H743 WLITE serves as the central avionics hub for Skypiea, coordinating all sensor inputs and control outputs. This section documents the complete wiring and configuration of peripherals to the flight controller.

![Mateksys H743-WLITE flight controller board diagram showing labeled pin/pad assignments](assets/Pasted_image_20260612221506.png)

## Serial Port Configuration

| Port     | UART  | Baud Rate | Peripheral                                                | Notes                        |
| -------- | ----- | --------- | ----------------------------------------------------------- | ----------------------------- |
| Serial 1 | UART7 | —         | Raspberry Pi                                               | Companion computer interface |
| Serial 2 | UART1 | 115200    | [Rangefinder](/docs/vehicles/skypiea/rangefinder)         | Lidar altimeter               |
| Serial 3 | UART2 | 57600     | GPS                                                        | SwapRxTx enabled              |
| Serial 4 | UART3 | —         | RCIN                                                       | Radio control input           |
| Serial 7 | UART6 | —         | MAVLink2                                                   | Telemetry/GCS link            |
| I2C2     | I2C   | —         | [Air speed sensor](/docs/vehicles/skypiea/airspeed-sensor) | Airspeed measurement          |

![Mission Planner's Setup > Serial Ports screen showing Skypiea's UART baud rates and protocols: UART1 at 115200 for Rangefinder, UART2 at 57600 for GPS, UART3 at 115200 for RCIN, UART6 at 57600 for MAVLink2](assets/Pasted_image_20260623025151.png)

## Servo Outputs

| Output | Channel | Control Surface   | Purpose                    |
| ------ | ------- | ------------------ | --------------------------- |
| 3      | CH3     | Throttle (Left)    | Left engine throttle        |
| 4      | CH4     | Ground Steering    | Nose wheel steering         |
| 5      | CH5     | Throttle (Right)   | Right engine throttle       |
| 6      | CH6     | Aileron (Left)     | Left wing control           |
| 7      | CH7     | Aileron (Right)    | Right wing control          |
| 8      | CH8     | Flap (Left)        | Left flap deflection        |
| 9      | CH9     | Flap (Right)       | Right flap deflection       |
| 10     | CH10    | Rudder             | Tail yaw control             |
| 11     | CH11    | Elevator (Pitch)   | Pitch control (primary)     |
| 12     | CH12    | Elevator (Pitch)   | Pitch control (redundant)   |
