---
title: No Nonsense News
date: 2020-08-09
repo: felixludos/nnn
cover: https://images.unsplash.com/photo-1602303885393-4be251de62c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
thumbnail: https://images.unsplash.com/photo-1602303885393-4be251de62c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
emoji: 📰
description: Scripts for scraping and translating world news using the News API
level: archived
---

> See the final product: [No Nonsense News Headlines](http://nnn.felixludos.com)

Never before have we had access to so much information from all over the world. However, from a pessimistic perspective, this also means that we are bombarded with misleading or false information more than ever. This project serves not to filter information but to present and organize as much information as possible in a reasonably digestible manner without any additional editorializing, monetizing, or other distortions.

To that end, I present **No-Nonsense-News**, a simple set of python scripts to (1) scrape news headlines from all over the world using [News API](https://newsapi.org/), (2) translate them with the [Helsinki-NLP](https://blogs.helsinki.fi/language-technology/) [Marian](https://marian-nmt.github.io/) machine translation models (using [HuggingFace](https://huggingface.co/)), and then (3) display them on a [Notion](https://www.notion.so/) page.

1. Scraping - [News API](https://newsapi.org/) enables users to download headline news articles from 56 countries all over the world for free. Each entry contains exactly the right information to be displayed to get a good idea of what the article is about (title, description, image) and a link to the full article. Additionally, articles can be grouped into seven different categories according to the subject matter: general, business, science, technology, health, entertainment, and sports.
2. Formatting/Translating - Since these articles are from around the world, most are probably in a language foreign to you. In this step, all articles are translated into English (or any language, depending on what's available) using pre-trained machine translation models provided by [Helsinki-NLP](https://blogs.helsinki.fi/language-technology/) through the [HuggingFace](https://huggingface.co/) package.
3. Presenting - While in principle any frontend can be used to present the translated articles, I chose to use [Notion](https://www.notion.so/) which is very convenient for displaying collections of entries in a pleasing way, and there is a comfortable [unofficial API](https://github.com/jamalex/notion-py) available to interface with Notion through python. While Notion does limit the design considerably (compared to using HTML/css/js and building a website from scratch), it also comes with some very useful, very powerful features such as sorting, filtering, and searching through the displayed entries.

Scraping all top headline articles for all countries and all categories, requires about 350 requests to the News API, and takes less than ten minutes and collects around 1700-2000 articles. Thanks to parallelism, formatting and translating the articles is significantly faster and takes around two minutes. Finally, presenting the articles on Notion is somewhat problematic because with parallelism it can be done in less than five minutes, however all the necessary requests sent to the Notion server overload it. As a result, the number of workers must be decreased. In practice, a full update takes around 15-20 minutes, however the last step may require a few tries to coax the Notion servers into accepting all requests and to display all the articles.

Nevertheless, I reckon this performance is sufficient for a common use case to be: you run the script while making breakfast, and then by the time you are back at your computer, over a thousand headlines from all over the world are there to greet you. (Perhaps more important use case focuses more on the scraping and formatting steps to provide a dataset of headlines from all over the world for various NLP settings and analysis).

All the code for the project is on github, and I wholeheartedly welcome feedback!
