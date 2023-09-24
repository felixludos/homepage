---
title: Motion-Nets
date: 2019-11-04
arxiv: 1910.13942
# cover: https://images.unsplash.com/photo-1520638023360-6def43369781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
cover: https://images.unsplash.com/photo-1635604133914-e68aa11e99a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
emoji: 🎥
description: 6D tracking of unknown objects in unseen environments
---

> Motion-Nets: 6D Tracking of Unknown Objects in Unseen Environments using RGB
> 
> **Felix Leeb**, Arunkumar Byravan, Dieter Fox
> 
> [[arXiv:1910.13942](https://arxiv.org/abs/1710.00489)]

In this work, we bridge the gap between recent pose estimation and tracking work to develop a powerful method for robots to track objects in their surroundings. Motion-Nets use a segmentation model to segment the scene, and then predict the relative 6D motion of each identified object between two consecutive frames. We train the Motion-Nets on a synthetic dataset with extensive domain randomization (simulated using MuJoCo) to allow Motion-Nets to perform zero-shot on unseen objects and environments.

This work was completed during my Master's at the University of Washington in the [Robot State and Estimation lab](https://rse-lab.cs.washington.edu/) under Dieter Fox, and was published at the IROS 2019 workshop on The Importance of Uncertainty in Deep Learning for Robotics.
