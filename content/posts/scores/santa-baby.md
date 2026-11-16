---
title: Santa Baby
date: 2026-11-17
showdescription: true
description: "Classic Woody Goss Line #1"
tags: [score, vulf]
---

<!-- prettier-ignore-start -->
{{< strudel height="600" >}}
setcpm(83/4)

await initHydra()

const pulse = `<
  [1.2 1 1.2 1 1 1 1 1 1.2 1 1 1 1.2 1 1 1]
  [1.2 1 1 1 1 1 1 1 1.2 1 1 1 1 1.2 1.2 1]
>`

osc(8, 0.03, 1.4)
  .color(1, 0.4, 0.7)
  .kaleid(5)
  .rotate(() => time * 0.05)
  .modulate(noise(2, 0.2), 0.15)
  .scale(H(pulse))
  .hue(H("<0 0.08>"))
  .saturate(1.3)
  .out()

const bass = note(`<
  [db2 ~ bb1 ~@5 f2 ~@3 e2 ~@2 eb2]
  [~@6 eb2 ab1 ~@5 ab1 bb1 ~]
>`)

const melody = note(`
  ~@8 [db4,f4,ab4]@2 ~@5 [f4,ab4,db5] [db4,f4,ab4] ~ [eb4,gb4,bb4]@2 [f4,ab4,db5]@2 ~@8 [f4,ab4,db5]@2

  [gb4,bb4,e5]@2 ~@2 [ab4,db5,f5]@2 ~@2 [gb4,bb4,eb5]@2 ~@2 [ab4,db5,f5]@2 ~ e5
  [gb4,bb4,eb5]@2 ~@2 [f4,ab4,db5]@2 ~@2 [eb4,gb4,bb4]@2 ~@2 [db4,f4,ab4]@4

  ~@8 [f4,ab4,db5] ~@2 ab4
  [[bb4@25 ~@3], [gb4@12 f4@8 gb4@4 ~@4], [d4@20 db4@4 ~@4]]@28
  [gb4,bb4,eb5]@2 ~@2 [ab4,db5,f5]@2 ~ e5
  [gb4,bb4,eb5]@2 ~@2 [f4,ab4,db5]@2 ~@2 [eb4,gb4,bb4]@2 ~@2 [db4,f4,ab4]@4

  ~@8 [db4,f4,ab4]@2 ~@5 [f4,ab4,db5] [db4,f4,ab4]@2 [eb4,gb4,bb4]@2 [f4,ab4,db5]@2 ~@8 [ab4,db5,f5] ~

  [db5,f5,ab5] ~@3 [db5,f5,ab5] ~@3 [bb4,eb5,gb5]@2 ~@2 [bb4,eb5]@2 ~@2
  [ab4,db5,f5]@2 ~@2 [db4,f4,ab4]@4 [eb4,gb4,bb4] ~@3
  [f4,ab4,db5]@20
  [[bb4@21 ~@3], [gb4@8 f4@8 gb4@5 ~@3], [d4@16 db4@5 ~@3]]@24
  [gb4,bb4,eb5]@2 ~@2 [ab4,db5,f5]@2 ~ e5
  [gb4,bb4,eb5]@2 ~@2 [f4,ab4,db5]@2 ~@2 [eb4,gb4,bb4]@2 ~@2 [db4,f4,ab4]@4
`).slow(8)

stack(
  melody
    .s("gm_epiano1")
    .gain(0.7)
    .lpf(3500)
    .phaser(2).phaserdepth(0.3)
    .room(0.3)
    .color("#ff4d6d"),

  note(`<
    [ [[db5,f5,ab5] ~]*4  [[db5,f5,bb5] ~]*4 ]
    [ [[db5,g5,bb5] ~]*4  [[db5,gb5,bb5] ~]*4 ]
  >`)
    .s("gm_epiano1")
    .legato(0.5)
    .gain(0.25)
    .lpf(5000)
    .room(0.3)
    .color("#ffd166"),

  bass
    .s("sawtooth")
    .lpf(900).lpq(5)
    .shape(0.4)
    .attack(0.005).decay(0.15).sustain(0.3).release(0.05)
    .gain(1.2)
    .color("#06d6a0"),

  bass
    .s("sine")
    .attack(0.005).decay(0.2).sustain(0.5).release(0.05)
    .gain(0.9)
    .color("#06d6a0"),

  s("hh*8")
    .bank("RolandTR909")
    .gain("0.1 0.05")
    .hpf(6000)
    .color("#8ecae6"),

  s("~ sd ~ sd")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(3000)
    .room(0.5).roomsize(3)
    .roomlp(4000)
    .color("#bdb2ff"),

  s(`<
    [bd ~ bd ~ ~ ~ ~ ~ bd ~ ~ ~ bd ~ ~ ~]
    [bd ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~ ~ bd bd ~]
  >`)
    .bank("RolandTR808")
    .gain(1.4)
    .shape(0.8)
    .lpf(4000)
    .room(0)
    .color("#ffffff"),
)
  .pianoroll({ fold: 1, cycles: 4, playhead: 0.5 })
{{< /strudel >}}
<!-- prettier-ignore-end -->
