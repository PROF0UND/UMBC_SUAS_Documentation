---
title: Skypiea
description: Bring Skypiea from initial hardware assembly through flight-ready state.
slug: vehicles/skypiea
sidebar:
  order: 1
  label: 1.1 Skypiea
---

**Skypiea** is a Student Unmanned Aerial Vehicle (SUAS) platform equipped with advanced avionics and autonomous flight capabilities. This documentation provides comprehensive setup instructions for configuring and deploying Skypiea from initial hardware assembly through flight-ready state.

Skypiea uses the lovely free and open-sourced Ardupilot software. Thanks to the devs keeping this project up and running!!!

![Skypiea, a fixed-wing UAV with black carbon-fiber wings and yellow tail surfaces, resting on pavement next to a grass field](assets/skypiea_coverphoto.png)

## Purpose

This guide covers the essential steps required to bring Skypiea to operational readiness, including:

- **Hardware Integration**: Flight controller setup and peripheral configuration
- **System Parameters**: Critical flight parameters and tuning
- **Geofencing**: Safety boundaries and restricted areas
- **Pre-Flight Verification**: System checks before deployment

## Avionics Setup

Follow these sections in order to properly configure Skypiea:

1. [Flight Controller](/docs/vehicles/skypiea/avionics/flight-controller) — hardware selection and rationale
2. [Hardware Setup](/docs/vehicles/skypiea/avionics/hardware-setup) — wiring and serial port configuration

## Extra info

Additional information on the hardware and parameters being used: 

1. [Rangefinder](/docs/vehicles/skypiea/avionics/rangefinder) — lidar altimeter parameters
2. [Airspeed Sensor](/docs/vehicles/skypiea/avionics/airspeed-sensor) — airspeed sensor parameters
3. [Fence](/docs/vehicles/skypiea/avionics/fence) — geofence safety parameters

Each section is self-contained but builds upon the previous configuration steps. Ensure all hardware is properly connected before proceeding to parameter configuration.
