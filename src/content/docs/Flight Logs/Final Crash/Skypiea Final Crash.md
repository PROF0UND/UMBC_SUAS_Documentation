---
title: Skypiea Final Crash
description: Detailed report + reflection on the final crash of the aircraft.
sidebar:
  order: 1
  label: Skypiea Final Crash
---

## 1. Media:

This section documents the relevant media to give context to the crash

### 1.1 Full Flight Footage:
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

### 1.2 Crash Footage:

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

### 1.3 Flight Logs:

The flight logs were pulled directly from the on board SD card blackbox on the Skypiea flight controller. These logs can be analysed using any plotting software. The plotting software used in this analysis is the [Ardupilot UAV Logger](https://plot.ardupilot.org/#/). To test this yourself, simply drop the log .bin file into the plotter.

### 1.3.1 Useful resources:
1. [Crash Flight Log (Download Here)](/flight_logs/00000284.BIN)
2. [Skypiea Full Parameter List](/params/00000284.BIN.paaram)
3. [Ardupilot UAV Logger](https://plot.ardupilot.org/#/)


---
## 1.2 Flight Description

This is a brief description of the flight mission, and a reflection on the overall flight.

### 1.2.1 Mission Objective
The mission objective was to document and verify the endurance performance of the batteries that would have been used in the competition. Skypiea was loaded with 4 6s 4500mAh LiPo propulsion batteries and one 3s LiPo 2200mAh systems battery. The mission was a ~4 mile course.

The mission also served as a way for competition members to practice on-field assembly and mission demonstration. Since the propulsion batteries were switched from Li-ions to LiPo batteries, it was essential to collect endurance data before the competition. 

![Mission Image](image.png)

The 4 mile course was achieved by looping over a ~0.89 mile lap 5 times. The course represented 2 SUAS competition laps. The altitude of all the waypoints was set to a height of 100 meters.


### 1.2.2 Final Seconds and Crash
At the very beginning of the 3rd lap, the aircraft (in AUTO mode) banked to a very steep angle causing it to stall. This was unexpected since the aircraft demonstrated the same turn two times before, however, it is important to keep in mind that in-flight conditions are ever-changing. 

During the stall, the safety pilot adjusted the roll value to level out the flight, and then switches to FBWA. The flight was still in AUTO mode, which meant the pilot had FBWA privilages over the control surfaces ([ArduPilot: AUTO Mode – Stick Mixing](https://ardupilot.org/plane/docs/auto-mode.html)). After leveling out the flight, the pilot switched back to AUTO in the hopes of continuing the mission, however, the aircraft banked to an awkward angle again. This time, the pilot waited too long before taking over (as shown in the analysis). By the time the aircraft leveled out, it is too close to the ground and the right wing makes contact with the ground causing the crash.

### 1.2.3 Aftermath

The aircraft's right wing makes contact with the ground at a ground speed of about 25 meters per second causing a catastrophic crash as the aircraft spins on its yaw axis. This impact rips the right wing out of the fuselage along with a substantial amount of composite from the fuselage. The nose of the aircraft scoops up a chunk of dirt from the ground and the wooden tail is instantly shattered. The electronics and the batteries suffer no damage.

![Skypiea corpse](skypiea_corpse.jpg)

The crash was especially heartbreaking for the SUAS competition team since the development of the aircraft took time, energy and sacrifices from the members. The crash being the day before the competition travel date was also unfortunate. As a result, UMBC SUAS decided to not go to the competition and forfeit the mission demonstration points of the competition. (I am not editing/reading this section agian)

![SUAS_team_with_skypiea_corpse](SUAS_team_with_skypiea_corpse.jpg)


The team lead (Ben Bazarsuren) and the team lead intern (Sitora Chorshanbaeva) kept an optimistic approach to this calamity, and organized cleanup. Their level-headedness was commendable and allowed smooth operations after the crash. 

![SUAS_team_with_skypiea_corpse2](SUAS_team_with_skypiea_corpse2.jpg)

_We knew the world would not be the same. A few people laughed, a few people cried. Most people were silent._
(Im going to stop writing this section since this is turning more into a journal entry)

---
## 1.3 Probable Causes
In order to analyze and hopefully detect the point of failure, the most probable causes are listed and individually investigated by examining the logs collected from the flight.

The most probable causes of the crash are:
1. Unsafe roll limit configuration.
2. Reduced elevator authority following control horn replacement, uncorrected by re-autotuning.
3. Delayed safety pilot intervention during the second excursion, driven by hesitation to override the autopilot.

Each probable cause is heavily backed by the collected flight logs. The full analysis and proofs are documented in the following sections. 

### 1.3.1 Context
Before we delve into the analysis of the each proposed failure, it is important to review the flight footage to contextualize ourselves. 

<iframe
  width="100%"
  style="aspect-ratio: 16 / 9;"
  src="https://www.youtube-nocookie.com/embed/LXIFc8nQMSU?rel=0&modestbranding=1"
  title="Skypiea Final Crash"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

The Green-ish box on the bottom left corner of the screen indicates the RC inputs to the aircraft. This helps identify when stick mixing during AUTO mode is active.

1. **Excursion 1:** The YELLOW line represents the flight path in AUTO mode. After crossing the last waypoint of the third lap and targeting the first waypoint of the fourth lap, the aircraft banks hard
2. Pilot levels out the flight and (while in AUTO through stick mixing) and eventually switches to FBWA as represented by the ORANGE flight path.
3. **Excursion 2:** The pilot switches back to AUTO to continue the mission, and the aircraft demonstrates the same extreme banking.
4. The pilot fully pitches up and switches to FBWA to level out the flight once again. This time however, the aircraft is too close to the ground.

## 1.4 Detailed Event Analysis:

The flight log (`00000284.BIN`) and parameter file (`00000284_BIN.param`) were cross-referenced against the flight footage to establish an exact timeline. The parameter file contains all the pre-defined values that govern the autopilot behavior. All timestamps below are seconds from log start (`t=0` at arm).

### 1.4.1 Baseline: how the same turn behaved on laps 1 and 2

The mission was a 5-waypoint loop flown 3 times. The WP1→WP2 leg — the same turn that ultimately fails — was flown cleanly twice before the crash:

| Lap | Time window | Peak roll | Peak `DesRoll` (commanded) | Pitch tracking error (mean / max) |
|---|---|---|---|---|
| 1 & 2 | 71.9–144.5s | -57.8° / -59.5° | -59.7° / -57.7° | 1.1° / 9.2° |
| **3 (crash)** | **249.7–275.0s** | **-102.5° / +105.9°** | **-79.1°** | **20.6–28.5° / up to 110°** |

On laps 1 and 2, the commanded bank stayed within a consistent ~58–60°, well inside the aircraft's configured `ROLL_LIMIT_DEG = 80.0°`, and the aircraft tracked it closely. Lap 3 targets a similar turn, but the outcome — and the underlying control authority — is markedly different. This establishes that laps 1 and 2 succeeding was not proof the aircraft was safely configured; it was a fluke of not yet having encountered conditions that exposed the unsafe roll limit and the weakened elevator.

### Excursion 1 — t ≈ 249.9–260.1s

At **t=249.92s**, `DesRoll` snaps to **-61.2°** as AUTO begins the turn — a bank angle consistent with, and still within limits of, the two prior successful laps. This confirms the autopilot's initial request was not itself unreasonable. What follows is not a repeat of laps 1 and 2, however: the aircraft overshoots the commanded angle and continues rolling well past it, reaching **-102.5° roll** at t=253.4s — 22.5° beyond the aircraft's own `ROLL_LIMIT_DEG = 80.0°` ceiling. Airspeed drops to **14.85 m/s** against an `AIRSPEED_MIN = 12 m/s` floor, and AOA spikes to **15.4°**, confirming a genuine stall/overshoot rather than a controlled steep turn.

The safety pilot brought the aircraft back to level. This is directly supported by the data: achieved roll during this window correlates strongly with the pilot's stick input at zero time lag (r = -0.70), while it correlates only weakly with the autopilot's own `DesRoll` command, which itself lags 1.3 seconds behind the aircraft's actual attitude — i.e., the autopilot's commanded roll was reacting to where the plane already was, not leading it back to level. The pilot's correction is what brought roll from -90°+ back toward 0° by t≈260s; the `MODE` log confirms the switch to FBWA is logged at **t=259.92s**, immediately after roll had already been walked back to -23.8° by manual correction, which is when the pilot formally took full mode authority to hold the recovery.

Pitch tracking during this excursion also degrades (mean error 20.6°, max 64.2° — roughly 20x worse than the 1.1° mean seen on laps 1–2), but the aircraft still comes back to level flight. **Excursion 1 is best read as: an unsafe roll limit allowing the autopilot's turn logic to run away past 80°, arrested by pilot intervention before it became unrecoverable.**

### Excursion 2 — t ≈ 265.2–275.0s (fatal)

At **t=265.24s** the pilot returns the aircraft to AUTO to resume the mission. Within 0.3 seconds (**t=265.56s**), `DesRoll` again snaps to a bank angle in the same range as before (-49° to -58°) — again, not itself an unreasonable request. As with excursion 1, the aircraft does not hold this angle: roll reaches **-83.0°**, then departs to **+105.9°** on the opposite side — both well past the 80° roll limit — while pitch drives to **-74.5°** nose-down at t=272.1s.

This time, the pilot's account is that they waited to see if the autopilot would level out on its own before intervening — consistent with the data. Pitch tracking error during this window is severe and sustained: from **t=270.16s**, `DesPitch` holds at a modest **+15°** (well inside the 33° pitch limit — the autopilot was not demanding anything extreme), while achieved pitch runs away to **-74.5°** by t=272.1s, an error of **107.5°**. Mean pitch tracking error for the full excursion is **28.5°**, nearly triple excursion 1's already-abnormal 20.6°, and the 110° peak error is the worst point in the entire flight. This magnitude of divergence between commanded and achieved pitch — while the command itself stayed modest — is consistent with reduced elevator authority: the control surface was not able to produce the deflection needed to arrest the pitch-down, regardless of what was being asked of it.

The pilot's decisive correction — full nose-up input and a switch to FBWA — begins at **t=271.68–271.82s**, per `RCIN` and `MODE`. By that point the aircraft was already at -56.6° roll and -70.5° pitch, well outside any envelope the autopilot's own limits considered normal, and — per the account above — considerably later in the upset than excursion 1's intervention, because the pilot was waiting on the autopilot to self-correct as it had the first time. With degraded elevator authority, the aircraft could not be brought back to level in the remaining altitude: the last valid attitude record (**t=274.96s**) shows roll at +105.9° and pitch at -45.6°, immediately preceding ground impact at a recorded ground speed of ~25 m/s.

### Cause 1: Unsafe roll limit configuration — **Supported**

`ROLL_LIMIT_DEG = 80.0°` permitted the autopilot's own control loop to chase a bank angle well beyond what this airframe could reliably hold, as shown by both excursions overshooting to 102.5° and 105.9° — 25° past the configured ceiling. Laps 1 and 2 stayed within a ~58-60° band and never tested this limit; lap 3's turn geometry (or accumulated disturbance) pushed the aircraft into the excess authority this limit allowed, and once there, the same headroom let each overshoot compound rather than self-limit. This is the common root cause behind both excursions and is directly supported by the roll data relative to the aircraft's own configured limit.

### Cause 2: Reduced elevator authority (control horn replacement, no re-autotune) — **Supported**

Pitch tracking error was already abnormal in excursion 1 (20.6° mean vs. 1.1° baseline) and nearly tripled in excursion 2 (28.5° mean, 110° peak) — the worst pitch control performance anywhere in the flight, occurring while the autopilot's own pitch demand stayed modest (+15°, inside the 33° limit). This pattern — large tracking error despite an unremarkable command — points to the control surface itself lacking authority to execute what was asked, consistent with reduced elevator effectiveness following the control horn replacement. Because autotune was not re-run after that repair, the pitch rate gains in the parameter file (`PTCH_RATE_P=0.36`, `PTCH_RATE_I=0.54`) reflect the aircraft's pre-repair elevator response, not its actual post-repair authority — meaning the controller was tuned for a more effective elevator than the one actually installed at the time of the crash. This is a credible and evidence-supported contributing cause, compounding cause 1: even if the roll limit had not allowed the initial overshoot, the reduced pitch authority limited how effectively either excursion could have been arrested once it began.

### Cause 3: Delayed pilot intervention during excursion 2 — **Supported, with root cause identified**

Unlike the general "reaction time" framing considered earlier, the data now supports a specific, non-error explanation for this delay: the pilot's excursion-1 experience showed the aircraft could recover under autopilot control alone, and that expectation reasonably informed a wait-and-see approach during excursion 2. The cost of that wait is measurable — intervention began at t=271.68s, by which point roll was already at -56.6° and pitch at -70.5°, compared to excursion 1 where manual correction was underway well before the aircraft reached a comparably extreme attitude. This delay is real and had consequences, but it is properly understood as a downstream effect of causes 1 and 2 — an unsafe roll limit that made the first excursion recoverable enough to build false confidence, and a weakened elevator that made the second excursion's window for recovery much narrower once intervention did come — rather than an independent lapse in pilot judgment.

---
## 1.4 Prevention
