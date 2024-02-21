---
title: Rich Synthetic Scenarios
date: 2024-02-03
# cover: https://images.unsplash.com/photo-1526773357673-2d4e8116d497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
cover: https://images.unsplash.com/photo-1551685744-4182d456b666?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
emoji: 🎏
description: Towards holistic reasoning benchmarks for LLMs
level: review
---

This paper introduces the Rich Synthetic Scenario (RYS) framework, a general approach to leveraging the impressive generative capabilities of the large language models (LLMs) for high-quality synthetic benchmarks in natural language. The framework consists of three modules: a generator, a simulator, and a verbalizer, where only the generator uses an LLM to generate a realistic setting and any other specific information required by the simulator and verbalizer. Then the simulator generates a specific question and answer pair with any associated context which is then verbalized in a fully transparent system, to ensure that the semantics of the prompt are not changed. The paper showcases the application of RYS in developing a benchmark for causal reasoning which produces diverse and realistic scenarios with a principled ground truth.