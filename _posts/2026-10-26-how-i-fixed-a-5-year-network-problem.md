---
title: How I fixed a 5 year network problem
tags: [debugging]
description: A new router made my ping steady at 170 ms in games while speedtest said everything was fine. The fix was in Windows.
---

Recently, we got the opportunity to purchase a new router. I was thinking: “Nova, I finally won’t lag in LoL anymore.” So we went to pick it up, it came preconfigured, which saved me quite a bit of time but would come back to bite me later. We returned home, I swapped the old router with the new one and went to test.

For context, my setup is a bit complex, I have a USB dongle WiFi adapter. My setup is located upstairs and for reasons unknown to me we can’t drill a hole for a cable from the router to it, so I have to rely on WiFi for connection.

To my shock, I discovered that not only had my ping somehow gotten worse, but that it was now steady in-game, better some would say, not when its 170 ms. The strange thing about it was that speedtest.net was reporting much lower ping than it used to be, and a lot lower than what was in my game.

So I went to test, I opened up my old friend powershell and got to pinging, 1.1.1.1 was first, 8.8.8.8 was second, these were to test general latency, if speedtest was lying or if there was an issue with LoL itself. Now this test revealed something interesting, while the minimum on the pings was excellent, that being 6 ms, the maximum was HORRID, 281 ms to 1.1.1.1 and 484 ms to 8.8.8.8. This was a sign of very bad jitter, a common side effect of WiFi.

So I had to test wired. Which meant taking my whole setup downstairs and plugging into the router, while this was annoying, I did find new information. New minimum on 1.1.1.1 hadn’t moved much (4 ms), but the maximum was now 16 ms. While this could be considered a win and a solution, it was not for me. I can’t run a cable from downstairs to the PC and have wired, so I had to use WiFi.

I configured some settings in the router, it was a pain. Many tutorials were telling me to enable options or disable tweaks that were not present in my configuration, I later learned that it was because the router was from the Aginet line which is supposed to have stripped firmware for whatever reason, thats the preconfigured router bitting back. I split the bands into 2.4 GHz and 5 GHz, set the 5 GHz channels to a manual channel (36/40/44/48), 80 MHz width.

I ran more tests while downstairs, got data that suggested the distance was the problem, the pings from downstairs on the adapter were stellar, 6 ms minimum and 14 ms maximum, but it wasn’t. I left the deciding tweak for last: USB Power Management.

1. Device Manager → Universal Serial Bus controllers → for every “USB Root Hub” and “Generic USB Hub” → Properties → Power Management → uncheck “Allow the computer to turn off this device to save power.”
2. Control Panel → Power Options → your plan → Change advanced settings → USB settings → USB selective suspend → Disabled.
3. Also set the plan to High Performance.

I returned upstairs with the setup, ran pings again and lo and behold, tweaks did help: 5 ms min, 14 ms max.

This fixed the issue which was plaguing me for 5 YEARS!!! My old router was a hunk-a-junk, it was slow, unreliable and unstable. I got at least 1 4000 ms lagout per game of LoL, now, most lags I get is about 70 ms for 2 seconds and then I’m back to 18 ms, while having internet that is about 6x faster than the last one. All in all a preem debug session, had to relocate my entire setup but I finally don’t get lag and can’t blame my internet for my skill issues.

Thanks for listening!
