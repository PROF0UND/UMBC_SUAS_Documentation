---
title: Flight Controller
description: Hardware selection and rationale for Skypiea's flight controller.
sidebar:
  order: 2
  label: 1.1.2 Flight Controller
---

## Hardware Selection: Mateksys H743 WLITE

### Selection Rationale

The **Mateksys H743 WLITE** was selected as Skypiea's primary flight controller based on the following key requirements:

**I/O Capability**

- **13 PWM outputs** supporting all control surface servos (aileron, elevator, rudder, throttle) plus additional channels for the payload dropping mechanism
- Multiple UART ports for GPS, Lidar, Raspberry Pi, and airspeed sensor integration
- Comprehensive connectivity enabling full sensor suite deployment

**System Integration**

- Native support for GPS, Lidar, and environmental sensors
- Dedicated interface for Raspberry Pi companion computer
- Integrated airspeed sensor connectivity for accurate flight dynamics

**Documentation & Support**

- Comprehensive manufacturer documentation and community resources
- Official ArduPilot compatibility and active maintenance
- Full PDF manual available for reference

### References

- [Product Link](https://www.mateksys.com/?portfolio=h743-wlite)
- [ArduPilot Docs](https://ardupilot.org/copter/docs/common-matekh743-wing.html)

---

## Documentation

[Mateksys H743-WLITE Manual (PDF)](/docs/pdfs/H743-WLITE_Manual.pdf)

