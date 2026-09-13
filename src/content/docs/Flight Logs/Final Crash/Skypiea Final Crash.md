---
title: Skypiea Final Crash
description: Detailed report + reflection on the final crash of the aircraft.
sidebar:
  order: 1
  label: Skypiea Final Crash
---

## 1. Media:

This section documents the relevant media to give context to the crash

## 1.1 Full Flight Footage:
<iframe
  width="100%"
  style="aspect-ratio: 16 / 9;"
  src="https://www.youtube-nocookie.com/embed/yfF0t_CwfbU?rel=0&modestbranding=1"
  title="Skypiea Final Crash"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

This is the full un-edited flight video.

---

## 1.2 Crash Footage:

<iframe
  width="100%"
  style="aspect-ratio: 16 / 9;"
  src="https://www.youtube-nocookie.com/embed/0jOpnR93ngI?rel=0&modestbranding=1"
  title="Skypiea Final Crash"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

This is the trimmed-down footage of just the crash (and the events leading up to it).

---

## 1.3 Flight Logs:

The flight logs were pulled directly from the on board SD card blackbox on the skypiea flight controller. These logs can be analysed using any plotting software. The plotting software used in this analysis is the [Ardupilot UAV Logger](https://plot.ardupilot.org/#/). To test this yourself, simply drop the log .bin file into the plotter.

### 1.3.1 Useful resources:
1. [Crash Flight Log (00000284.BIN)](/flight_logs/00000284.BIN)
2. [Ardupilot UAV Logger](https://plot.ardupilot.org/#/)


---
## 1.2 Flight Description

This is a brief description of the flight mission, and a reflection on the overall flight.

### 1.2.1 Mission Objective
The mission objective was to document and verify the endurance performance of the batteries that would have been used in the competition. Skypiea was loaded with 4 6s 4500mAh LiPo propulsion batteries and one 3s LiPo 2200mAh systems battery. The mission was a ~4 mile course.

![Mission Image](image.png)

The 4 mile course was achieved by looping over a ~0.89 mile lap 5 times. The course represented 2 SUAS competition laps. The altitude of all the waypoints was set to a height of 100 meters.


### 1.2.2 Final Seconds and Crash
At the very beginning of the 3rd lap, the aircraft banked to a very steep angle causing it to stall. This was unexpected since the aircraft demonstrated the same turn two times before, however, it is important to keep in mind that in-flight conditions are ever-changing. 

During the stall, the safety pilot adjusts the roll value to level out the flight. The flight was still in AUTO mode, which meant the pilot had FBWA privilages over the control surfaces ([ArduPilot: AUTO Mode – Stick Mixing](https://ardupilot.org/plane/docs/auto-mode.html)). After leveling out the flight, the pilot switched back to AUTO in the hopes of continuing the mission, however, the aircraft banks to an awkward angle again. This time, the pilot waits too long before taking over (as shown in the analysis). By the time the aircraft levels out, it is too close to the ground and the right wing makes contact with the ground causeing the crash.

### 1.2.3 Aftermath

The aircraft's right wing makes contact with the ground at a ground speed of about 25 meters per second causing a catastrophic crash as the aircraft spins on its yaw axis. This impact rips the right wing out of the fuselage along with a substantial amount of composite from the fuselage. The nose of the aircraft scoops up a chunk of dirt from the ground and the wooden tail is instantly shattered. The electronics and the batteries suffer no damage.

![Skypiea corpse](skypiea_corpse.jpg)

The crash was especially heartbreaking for the SUAS competition team since the development of the aircraft took time, energy, money and sacrifices from the members. The crash being the day before the competition travel date was also unfortunate. As a result, UMBC SUAS decided to not go to the competition and forfeit the mission demonstration points of the competition. (I am not editing/reading this section agian)

![SUAS_team_with_skypiea_corpse](SUAS_team_with_skypiea_corpse.jpg)
![SUAS_team_with_skypiea_corpse2](SUAS_team_with_skypiea_corpse2.jpg)

The team lead (Ben Bazarsuren) and the team lead intern (Sitora Chorshanbaeva) kept an optimistic approach to this calamity, and organized cleanup. Their level-headedness was commendable and allowed smooth operations after the crash. 

We knew the world would not be the same. A few people laughed, a few people cried. Most people were silent. 

---
## 1.3 What Caused This?


### 1.3.1 Analysis

---
## 1.4 Pilot Interventions


---