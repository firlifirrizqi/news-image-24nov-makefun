# The World in One Day — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/firlifirrizqi/news-image-24nov-makefun/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/firlifirrizqi/news-image-24nov-makefun/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Referral code: v8vnayfm — https://make.fun?ref=v8vnayfm

One newspaper front page that sums up **Tuesday 24 November 2026** in six
stories, drawn entirely in code as a single 1024×1024 PNG. Entry for
make.fun's "Sum up 24 November's world news in one image" bounty
($100 in USDC, 50 paid places).

## The six stories

1. **Chess** — Gukesh defends his crown against Sindarov: Game 1 of the
   14-game FIDE World Championship begins in Geneva; Sindarov has White
   against the defending champion.
2. **Space** — Falcon 9 lifts off with a secret Space Force satellite:
   USSF-266 launches from Vandenberg in a four-hour window, carrying a
   classified payload for the US Space Force.
3. **Sky** — Beaver Supermoon peaks tonight: the closest full moon,
   360,768 km away, passes the Pleiades before dawn.
4. **Faith** — Sikhs mark Guru Nanak's 557th birth anniversary: Prakash
   Purab celebrated in Amritsar and Nankana Sahib, with dawn prayers.
5. **Sky** — Mars meets Regulus in Leo: the red planet passes 1.8° from
   Leo's brightest star at 5 p.m. EST.
6. **Faith** — Karthigai lamp lit in Madurai: the Supreme Court allows a
   one-time lighting at the disputed Thiruparankundram pillar, temple
   team only.

All six were first reported or happened on 24 November 2026, and none of
them appears in the 23 November entry. Stories first reported on 20–23
November were left out on purpose: the Japan oil task force was announced
on 17 November, the India–China border talks were reported on 22 November,
the Shroud of Turin DNA study dates from July, and BepiColombo entered
Mercury orbit on 21 November. Japan's November flash PMIs were also left
out: the release was scheduled for 24 November, but no reliable source had
confirmed the actual numbers when this page was drawn.

## How it is made

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG
signature, at most 1024×1024 pixels, at most 1 MiB — and copies it byte
for byte to the output directory. The image itself was drawn by the
accompanying Python script with PIL; running it twice produces identical
bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see [LICENSE](LICENSE).
