---
title: GPS
description: Skypiea GPS description
sidebar:
  order: 5
  label: 1.1.5 GPS
---

Skypiea uses a [Matek M10Q-5883 GNSS & Compass module](https://www.defiancerc.com/products/matek-m10q-5883-gnss-compass-module?_pos=8&_sid=9e5e939f6&_ss=r&variant=40569829064773) GPS to get its real time location during flights. The GPS is lightweight and cost efficient and provides reliable enough data to perform autonomous flights. It also comes with an inbuilt compass. 

![GPS mounted on the aircraft](assets/GPS.jpg)

In previous iterations, a bulky RTK GPS with centimeter precision was proposed for best performance. The idea, however, was rejected because centimeter precision on an airplane going several meters per second is pretty overkill.

The GPS is mounted on the top of the aircraft's boom. It is inclosed in a 3D printed box and kept away from all the electronics to reduce noise. The 3D print used for the case can be found [here](https://cults3d.com/en/3d-model/various/apexlr-matek-m10q-5883-gps-arm-mount)

The GPS requires the following parameters to be usable:

| Parameter    | Value |
| ------------ | ----- |
| `GPS_TYPE` | 1  |
| `COMPASS_ENABLE` | 1 (If using compass) |
| `SERIALX_PROTOCOL` | 5 |
| `SERIALX_BAUD` | 57600 |