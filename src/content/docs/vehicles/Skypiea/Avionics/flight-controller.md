---
title: Flight Controller
description: Hardware selection and rationale for Skypiea's flight controller.
sidebar:
  order: 2
  label: 1.1.2 Flight Controller
---

## Hardware Selection: Mateksys H743 WLITE

## Flashing Firmware

To flash firmware on the SD card:
1. Go to [ArduPilot Download Center](https://firmware.ardupilot.org/Plane/stable-4.7.1/)
2. Click the latest stable folder.
3. Use the `MatekH743`
4. It should be this link: [Link to the correct firmware](https://firmware.ardupilot.org/Plane/stable-4.7.1/MatekH743/)
5. Download the file ending in .abin (e.g., [arduplane.abin](/firmware/arduplane.abin)).
6. Remove the microSD card from your Matek H743-WLITE and plug it into your computer.
7. Copy the downloaded `arduplane.abin` file directly onto the root directory (the main folder, not inside any subfolders) of the SD card.
8. Rename it to `ardupilot.abin`

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

[Mateksys H743-WLITE Manual (PDF)](/pdfs/H743-WLITE_Manual.pdf)

---

## Controls

To make the aircraft take tighter turns, set `NAVL1_PERIOD` to a lower value