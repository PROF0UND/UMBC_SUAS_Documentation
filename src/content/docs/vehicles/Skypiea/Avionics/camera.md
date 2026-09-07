---
title: Mapping Camera
description: Description of the Mapping Camera
sidebar:
  order: 8
  label: 1.1.9 Mapping Camera
---

## Camera Used

The mapping camera is a Siyi A8 Mini




---
## Triggering the Camera

To manually trigger the camera, 

---
## Parameters

1. To use the camera, use the following parameters:
```mp params
SERIALX_PROTOCOL = 8
SERIALX_BAUD = 115
MNT1_TYPE = 8
```

2. To level the camera to look down in its neutral position:
```mp param
MNT1_NEUTRAL_Y = -90
```
and reboot.

3. Set the default mode to be in neutral position
```mp param
MNT1_DEFLT_MODE = 1
MNT1_PITCH_MIN = -90
MNT1_PITCH_MAX = 25
```