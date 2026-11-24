# The World in One Day — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/firlifirrizqi/news-image-24nov-makefun/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/firlifirrizqi/news-image-24nov-makefun/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Referral code: v8vnayfm — https://make.fun?ref=v8vnayfm

One newspaper front page that sums up **Tuesday 24 November 2026** in
fourteen stories, drawn entirely in code as a single 1024×1024 PNG. Entry
for make.fun's "Sum up 24 November's world news in one image" bounty
($100 in USDC, 50 paid places). This is the fifth revision (v5): an
illustration redraw of v4 — same fourteen stories and verified facts,
every illustration redrawn to match its story: the real NVIDIA logo and
a polished rising chart lead the page, Nepal shows the earthquake
itself (cracked ground, leaning buildings, dust, seismic rings), Geneva
shows the real opening board (1.e4 e5), and every ticker item gets its
own small illustration.

## The seven core stories

1. **Markets (lead)** — Asian markets soar on Nvidia's record day: Seoul's
   KOSPI jumps 6.32% to 5,006, Tokyo's Nikkei 3.91% to 58,645 and Taiwan's
   Taiex 9.0% as Jensen Huang's return as Nvidia chief revives the AI
   trade. Nvidia rose 31.5% on Monday, its best day since 2003.
2. **Sport** — CAS gives Senegal its AFCON crown back: the court
   unanimously upholds Senegal's appeal, confirming the 1-0 final win over
   Morocco after CAF stripped the title in March for a 14-minute walk-off.
3. **Sport** — Gukesh defends his crown against Sindarov: Game 1 of the
   14-game FIDE World Championship is under way in Geneva; Sindarov opens
   with 1.e4, Gukesh answers 1...e5.
4. **World** — Israeli strike kills Hamas security chief in Gaza: Naeem Abu
   Nahel, 50, director of Hamas' internal security, is killed by a drone
   strike in western Gaza City; seven are killed across Gaza on Tuesday.
5. **World** — 5.6 quake shakes Nepal near the Tibet border: the tremor
   strikes at 7:17 a.m. near Olangchung Gola, about 275 km east of
   Kathmandu; no casualties are reported.
6. **Space** — Ariane 6 lifts 36 Amazon satellites: VA271, the 10th
   Ariane 6 flight, lifts off at 11:14 UTC from Kourou; 432 Leo satellites
   now orbit Earth.
7. **By the numbers** — $952bn (Nvidia's one-day gain), +6.32% (KOSPI
   surge), $10m (Senegal's AFCON prize), 5.6 (Nepal quake magnitude).

## Also on 24 November

Falcon 9 lifts off with USSF-266 · Beaver Supermoon peaks 14:53 UTC ·
Japan PMI 53.7 / 50.5 · Cisco + OpenAI launch Shirudo · Zaporizhzhia: 2
killed, 40+ wounded · Mars meets Regulus 1.8° · Guru Nanak 557th.

All fourteen were first reported or happened on 24 November 2026, and none
of them appears in the 23 November entry.

## How it is made

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG
signature, at most 1024×1024 pixels, at most 1 MiB — and copies it byte
for byte to the output directory. The image itself was drawn by the
accompanying Python script (`draw_news24_v5.py`) with PIL; running it
twice produces identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see [LICENSE](LICENSE).
