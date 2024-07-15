---
title: Motion-Nets
date: 2019-11-04
arxiv: 1910.13942
# cover: https://images.unsplash.com/photo-1520638023360-6def43369781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
cover: https://images.unsplash.com/photo-1635604133914-e68aa11e99a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80
thumbnail: https://images.unsplash.com/photo-1635604133914-e68aa11e99a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80
emoji: 🎥
description: 6D tracking of unknown objects in unseen environments
level: published
status: IROS 2019 Workshop
---

In this work, we bridge the gap between recent pose estimation and tracking work to develop a powerful method for robots to track objects in their surroundings. Motion-Nets use a segmentation model to segment the scene, and then predict the relative 6D motion of each identified object between two consecutive frames. We train the Motion-Nets on a synthetic dataset with extensive domain randomization (simulated using MuJoCo) to allow Motion-Nets to perform zero-shot on unseen objects and environments.

This work was completed during my Master's at the University of Washington in the [Robot State and Estimation lab](https://rse-lab.cs.washington.edu/) under Dieter Fox, and was accepted to the [IROS 2019 workshop on The Importance of Uncertainty in Deep Learning for Robotics](https://nikosuenderhauf.github.io/roboticvisionchallenges/iros2019).

## My Contribution

This was my main project during my Master's, and I was responsible for the entire project from conception to publication. I developed the idea, designed the model, implemented the code, ran the experiments, and wrote the paper.

## Citation

Motion-Nets: 6D Tracking of Unknown Objects in Unseen Environments using RGB

**Felix Leeb**, Arunkumar Byravan, Dieter Fox

IROS 2019 Workshop on The Importance of Uncertainty in Deep Learning for Robotics, 2019.

[[arXiv:1910.13942](https://arxiv.org/abs/1710.00489)]

```bibtex
@inproceedings{leeb2019motionnets,
  title={Motion-Nets: 6D Tracking of Unknown Objects in Unseen Environments using RGB},
  author={Felix Leeb and Arunkumar Byravan and Dieter Fox},
  year={2019},
  url={https://arxiv.org/abs/1710.00489}
}
```
