---
title: Babel Briefings
date: 2023-10-30
repo: felixludos/babel-briefings
arxiv: 2403.19352
url: https://felixludos.github.io/babel-briefings/
# url: https://aclanthology.org/2024.naacl-short.55/
cover: https://images.unsplash.com/photo-1693729016213-99dc29e465de?&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
thumbnail: https://images.unsplash.com/photo-1693729016213-99dc29e465de?&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
emoji: 📣
description: A diverse Multilingual News Headlines Dataset
level: published
status: NAACL 2024
---

Babel Briefings is a novel dataset featuring 4.7 million news headlines from August 2020 to November 2021, across 30 languages and 54 locations worldwide with English translations of all articles included. Designed to enhance natural language processing and sociopolitical studies, it serves as a high-quality dataset for training or evaluating language models as well as offering a simple, accessible collection of articles, for example, to analyze global news coverage and cultural narratives. As a simple demonstration of the analyses facilitated by this dataset, we use a basic procedure based on a TF-IDF weighted similarity metric to group articles into clusters about the same event. We then visualize the event signatures of the event showing articles of which languages appear over time, revealing intuitive features based on the proximity of the event and unexpectedness of the event. 

The dataset is available on [Kaggle](https://www.kaggle.com/datasets/felixludos/babel-briefings) and [HuggingFace](https://huggingface.co/datasets/felixludos/babel-briefings). Check out the [project website](https://felixludos.github.io/babel-briefings/) to browse some samples.

## My Contribution

As the main author of this project, I collected and processed the data, designed the dataset, and conducted the analyses. I also wrote the paper and presented the poster at the conference.

## Citation

[A diverse Multilingual News Headlines Dataset from around the World](https://aclanthology.org/2024.naacl-short.55/)

**Felix Leeb**, Bernhard Schölkopf

Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 2: Short Papers), 2024.

[[arXiv:2403.19352](https://arxiv.org/abs/2403.19352)]

```bibtex
@inproceedings{leeb2024diverse,
    title = "A diverse Multilingual News Headlines Dataset from around the World",
    author = {Leeb, Felix  and Sch{\"o}lkopf, Bernhard},
    editor = "Duh, Kevin  and Gomez, Helena  and Bethard, Steven",
    booktitle = "Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 2: Short Papers)",
    month = jun,
    year = "2024",
    address = "Mexico City, Mexico",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.naacl-short.55",
    pages = "647--652",
}
```
