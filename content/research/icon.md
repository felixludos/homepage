---
title: Alignment by Consistency
date: 2025-01-30
# cover: https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
# thumbnail: https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
cover: https://images.unsplash.com/photo-1602640574426-a04ba466e300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
thumbnail: https://images.unsplash.com/photo-1602640574426-a04ba466e300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
# cover: https://images.unsplash.com/photo-1693069050121-835c07962a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
# thumbnail: https://images.unsplash.com/photo-1693069050121-835c07962a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
url: https://openreview.net/forum?id=eimAJqoIWt&noteId=eimAJqoIWt
# emoji: 🕺
emoji: 🎤
description: Multimodal representations with minimal supervision
level: published
status: ICLR 2025 Workshop
---


Multimodal representation learning aims to integrate diverse data modalities into a shared embedding space with a common approach to use contrastive learning. However, this approach is limited by the need for large amounts of paired data, sensitivity to data quality, and lack of scalability when introducing new modalities. We propose **AL**ignment via **I**nterventional **C**onsist**e**ncy (ALICE), a novel framework for learning structured representations that achieve partial alignment across modalities using unpaired annotated samples. The key is to align the annotation-specific information in the latent space by enforcing the consistency of controllable and recognizable semantic interventions across modalities. We demonstrate that our method is able to align representations sufficiently to achieve competitive results on a novel retrieval task we introduce called label-retrieval. Furthermore, when pre-training a model with ALICE, and then fine-tuning it with a small amount of paired data using CLIP, we achieve comparable retrieval performance with 2-4x fewer samples, thereby alleviating the need for paired data to learn multi-modal representations.

This work was completed in a research internship at Sony AI in Tokyo ending Jan 2025, and was accepted for poster presentation at the ReAlign workshop at ICLR 2025.
