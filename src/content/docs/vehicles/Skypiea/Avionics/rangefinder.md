---
title: Rangefinder
description: ArduPilot parameters for Skypiea's rangefinder (lidar altimeter).
sidebar:
  order: 4
  label: 1.1.4 Rangefinder
---

Skypiea uses a [Benewake TF-Luna](https://en.benewake.com/TFLuna/index.html) LiDAR for altitutde measurement. This LiDAR provides accurate distance upto 8m. This provides accurrate the flight controller with valuable information during takeoffs and landings.

The LiDAR is placed on the belly of the aircraft.

![Benewake TF-Luna LiDAR](assets/benewake_tf-luna_lidar1.jpg)
*Image Source: [Benewake TF-Luna Website](https://en.benewake.com/TFLuna/index.html)*

To enable the LiDAR, set the following parameters:

| Parameter    | Value |
| ------------ | ----- |
| `RNGFND1_TYPE` | 20  |
