---
title: Structure by Architecture
date: 2022-09-28
repo: felixludos/learn_rep
arxiv: 2006.07796
cover: https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
emoji: 🌳
description: A simple inductive bias to learn a diffusely disentangled representation
level: published
status: ICLR 2023
---

> [Structure by Architecture: Structured Representations without Regularization](https://openreview.net/forum?id=O_lFCPaF48t)
> 
> **Felix Leeb**, Giulia Lanzillotta, Yashas Annadani, Michel Besserve, Stefan Bauer, Bernhard Schölkopf
> 
> [[arXiv:2006.07796](https://arxiv.org/abs/2006.07796)]


We study the problem of self-supervised structured representation learning using autoencoders for downstream tasks such as generative modeling. Unlike most methods which rely on matching an arbitrary, relatively unstructured, prior distribution for sampling, we propose a sampling technique that relies solely on the independence of latent variables, thereby avoiding the trade-off between reconstruction quality and generative performance typically observed in VAEs. We design a novel autoencoder architecture capable of learning a structured representation without the need for aggressive regularization. Our structural decoders learn a hierarchy of latent variables, thereby ordering the information without any additional regularization or supervision. We demonstrate how these models learn a representation that improves results in a variety of downstream tasks including generation, disentanglement, and extrapolation using several challenging and natural image datasets.
