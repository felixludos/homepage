---
title: Digital Diplomat
date: 2022-07-18
repo: felixludos/digi-diplo
cover: https://images.unsplash.com/photo-1589639293663-f9399bb41721?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=1440
thumbnail: https://images.unsplash.com/photo-1589639293663-f9399bb41721?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjYzOTIxfQ&w=480
emoji: 🎩
description: Scripts to manage Diplomacy games over Discord
level: done
---

Diplomacy is a devilishly clever strategy game full of intrigue and backstabbing. One of my favorite aspects of the game is that, even though it requires 7-players, it can comfortably be played remotely using pretty much any instant messaging client (in particular Discord). That being said, managing the game (including adjudicating players' orders and drawing the resulting map) can be a tedious amount of work.

Consequently, I implemented an interface for a Diplomacy game manager in Discord (however there are also stand-alone python scripts available).

Not only is this project a showcase of implementing a discord bot in python (including dealing with different roles and channels), but the interface is relatively general, opening the door to using Discord bots to play other games as well (which I will be working on next).

Pretty much everything you need to get started should be in the readme, and I'll continue to maintain the repo for the foreseeable future, including improving the custom map support and implementing new QOL features.
