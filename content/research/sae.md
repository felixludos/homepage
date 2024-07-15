---
title: Structure by Architecture
date: 2023-02-01
repo: felixludos/learn_rep
arxiv: 2006.07796
cover: https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
thumbnail: https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
emoji: 🌳
description: Learning a diffusely disentangled representation
level: published
status: ICLR 2023
---

We study the problem of self-supervised structured representation learning using autoencoders for downstream tasks such as generative modeling. Unlike most methods which rely on matching an arbitrary, relatively unstructured, prior distribution for sampling, we propose a sampling technique that relies solely on the independence of latent variables, thereby avoiding the trade-off between reconstruction quality and generative performance typically observed in VAEs. We design a novel autoencoder architecture capable of learning a structured representation without the need for aggressive regularization. Our structural decoders learn a hierarchy of latent variables, thereby ordering the information without any additional regularization or supervision. We demonstrate how these models learn a representation that improves results in a variety of downstream tasks including generation, disentanglement, and extrapolation using several challenging and natural image datasets.

## My Contribution

As the main author of this work, I developed the core ideas, designed the experiments, and implemented the models. I also wrote most of the paper and presented the poster for this project at the conference.

## Citation

[Structure by Architecture: Structured Representations without Regularization](https://openreview.net/forum?id=O_lFCPaF48t)

**Felix Leeb**, Giulia Lanzillotta, Yashas Annadani, Michel Besserve, Stefan Bauer, Bernhard Schölkopf

The Eleventh International Conference on Learning Representations, 2023.
 
[[arXiv:2006.07796](https://arxiv.org/abs/2006.07796)]

```bibtex
@inproceedings{leeb2023structure,
    title={Structure by Architecture: Structured Representations without Regularization},
    author={Felix Leeb and Giulia Lanzillotta and Yashas Annadani and Michel Besserve and Stefan Bauer and Bernhard Sch{\"o}lkopf},
    booktitle={The Eleventh International Conference on Learning Representations },
    year={2023},
    url={https://openreview.net/forum?id=O_lFCPaF48t}
}
```

