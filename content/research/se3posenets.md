---
title: SE3-Pose-Nets
date: 2018-05-26
arxiv: 1710.00489
cover: https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
emoji: 🤖
description: Structured representation learning for pose estimation and visuomotor control with a 7 DOF robot arm
level: published
status: ICRA 2018
---

> [SE3-Pose-Nets: Structured Deep Dynamics Models for Visuomotor Planning and Control](https://dl.acm.org/doi/10.1109/ICRA.2018.8461184) 
> 
> **Arunkumar Byravan**, Felix Leeb, Franziska Meier, Dieter Fox
> 
> [[arXiv:1710.00489](https://arxiv.org/abs/1710.00489)]

In this work, we present an approach to deep visuomotor control using structured deep dynamics models. Our model, a variant of SE3-Nets, learns a low-dimensional pose embedding for visuomotor control via an encoder-decoder structure. Unlike prior work, our model is structured: given an input scene, our network explicitly learns to segment salient parts and predict their pose embedding and motion, modeled as a change in the pose due to the applied actions. We train our model using a pair of point clouds separated by an action and show that given supervision only through point-wise data associations between the frames our network is able to learn a meaningful segmentation of the scene along with consistent poses. We further show that our model can be used for closed-loop control directly in the learned low-dimensional pose space, where the actions are computed by minimizing pose error using gradient-based methods, similar to traditional model-based control. We present results on controlling a Baxter robot from raw depth data in simulation and RGBD data in the real world and compare against two baseline deep networks. We also test the robustness and generalization performance of our controller under changes in camera pose, lighting, occlusion, and motion. Our method is robust, runs in real-time, achieves good prediction of scene dynamics, and outperforms baselines on multiple control runs. Video results can be found [here](https://rse-lab.cs.washington.edu/se3-structured-deep-ctrl).
