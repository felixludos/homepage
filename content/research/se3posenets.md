---
title: SE3-Pose-Nets
date: 2018-05-26
arxiv: 1710.00489
url: https://rse-lab.cs.washington.edu/se3-structured-deep-ctrl
cover: https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
thumbnail: https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
emoji: 🤖
description: Structured representation learning for pose estimation and visuomotor control with a 7 DOF robot arm
level: published
status: ICRA 2018
---

In this work, we present an approach to deep visuomotor control using structured deep dynamics models. Our model, a variant of SE3-Nets, learns a low-dimensional pose embedding for visuomotor control via an encoder-decoder structure. Unlike prior work, our model is structured: given an input scene, our network explicitly learns to segment salient parts and predict their pose embedding and motion, modeled as a change in the pose due to the applied actions. We train our model using a pair of point clouds separated by an action and show that given supervision only through point-wise data associations between the frames our network is able to learn a meaningful segmentation of the scene along with consistent poses. We further show that our model can be used for closed-loop control directly in the learned low-dimensional pose space, where the actions are computed by minimizing pose error using gradient-based methods, similar to traditional model-based control. We present results on controlling a Baxter robot from raw depth data in simulation and RGBD data in the real world and compare against two baseline deep networks. We also test the robustness and generalization performance of our controller under changes in camera pose, lighting, occlusion, and motion. Our method is robust, runs in real-time, achieves good prediction of scene dynamics, and outperforms baselines on multiple control runs. The project website (including the video) can be found [here](https://rse-lab.cs.washington.edu/se3-structured-deep-ctrl).

## My Contribution

This was my first project in the RSE Lab at the University of Washington, while being mentored by Arunkumar Byravan and supervised by Dieter Fox. I helped implementing the code for the data collection which was used to train the model and run the experiments. I also contributed several of the figures in the paper and made the slides in the accompanying [video](https://youtu.be/whi-zuDkvEU).

## Citation

[SE3-Pose-Nets: Structured Deep Dynamics Models for Visuomotor Planning and Control](https://dl.acm.org/doi/10.1109/ICRA.2018.8461184) 
 
**Arunkumar Byravan**, Felix Leeb, Franziska Meier, Dieter Fox

Proceedings of the IEEE International Conference on Robotics and Automation (ICRA), 2018.

[[arXiv:1710.00489](https://arxiv.org/abs/1710.00489)]

```bibtex
@inproceedings{byravan2018se3pose,
    author = {Byravan, Arunkumar and Lceb, Felix and Meier, Franziska and Fox, Dieter},
    title = {SE3-Pose-Nets: Structured Deep Dynamics Models for Visuomotor Control},
    year = {2018},
    publisher = {IEEE Press},
    url = {https://doi.org/10.1109/ICRA.2018.8461184},
    doi = {10.1109/ICRA.2018.8461184},
    booktitle = {2018 IEEE International Conference on Robotics and Automation (ICRA)},
    pages = {1–8},
    numpages = {8},
    location = {Brisbane, Australia}
}
```

