---
title: Maximizing Agency
date: 2020-10-04
cover: https://images.unsplash.com/photo-1533032968297-a47e51cbdc93?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1440
emoji: ✊
description: The world is pretty interesting when we are all a part of it.
format: article
---

> "*You know the difference between capitalism and socialism? In capitalism, man exploits man. In socialism, it's the other way around.*" - Douglas Smith (as Marcus Isaacson in *The Alienist*)
> 

## Might and Power

Let's not treat "power" as some mysterious force that governs just about every major decision in society possessed (or possibly even recognized) by a select few while the other sheeple deal with the consequences. That reeks of some mystical great man history that invariably oversimplifies the beautiful complexity of the real world. Perhaps we appeal to power as some overzealous form of gatekeeping to encourage groupthink towards the "accepted" (whatever that means) explanation. This cannot possibly help us improve our understanding of how the world works. 

Every single person has some goals they work towards (consciously and subconsciously). Their plans and predictions may or may not include interacting or manipulating other people around them (ie. the use of power). However, no matter what their goals are, ultimately the better their tools (ie. models, understanding, knowledge) are, the more likely they will achieve their goals (or at least make significant progress).

## Bottomline: How can we better achieve our goals?

So now let's ask the central question: how do we gain knowledge based on our experiences which will help us achieve our goals? This question is not just central to theoretical scientists, or academics, but to every single person working towards some goal.

How can we understand why something happens? Firstly (and arguably most importantly), we have to understand what kind of information can help us answer the question of "why". This question itself turns out to be far from trivial as it turns out the most common kinds of inference are actually only sufficient for understanding "what", not "why".

The trick is in understanding the nature of *causal inference*, without which we will almost invariably suffer from inconsistencies in our arguments and models. While the difference between causation and correlation are fairly intuitive on the surface, when diving a little deeper into the full scope of the often subtle consequences for making cojent arguments, things get more complicated.

Again, I want to stress that these subtleties in reliably extracting knowledge from experience is not unique to "academic" pursuits, or any specific science. Just as the rules of blackjack do not depend on whether you have a doctorate in statistics or a lifesworth of street-smarts or a healthy dose of common sense, processing our experiences into useable knowledge is a universal challenge (eg. for winning the game).

So let's dive in: Firstly, we should take a look at the "Causal Hierarchy" to get an idea for how depending on what questions we try to answer, we have to be increasingly more careful with the kind of evidence we rely on for answers. Below is a breakdown of the "causal hierarchy" - in particular focus on the examples to get a sense for what kind of questions require different "levels" of support. Below we'll discuss how we can extract information for each of the three different levels from our own experience.

<figure>
  <img src="https://pbs.twimg.com/media/EdcbAe9WAAAso3R?format=jpg&name=large" alt="Judea Pearl’s Ladder of Causation"/>
  <figcaption>Judea Pearl’s Ladder of Causation (from "the Book of Why")</figcaption>
</figure>

### Association

This is the lowest level in the causal hierarchy because it is the least stringent in terms of what information we can use to make progress in answering the corresponding questions. Associations boil down to us making observations and recognizing patterns (→ correlations) within. For example, I might observe that there are more bugs in my room when there is some leftover food from the previous day than when the room is clean. Such observations can allow me to predict how many bugs (and possibly even where I will find them) based on how much food there is in my room. 

However, no matter how many of these observations I make, I will not be able to answer whether the bugs show up *because* there is food in my room - in other words, this observational data cannot let me determine causal links.

The problem is that just from observing a correlation between birds chirping and the sun rising, I cannot know whether one causes the other, or whether they are possibly both caused by some additional variable unbeknownst to me.

### Intervention

While associations may be sufficient for predictions because they do not help understand the causal structure of the world, they are not sufficient for me to control my surroundings (→ achieve my goals). For control, we have to reason about the consequences of our actions → interventions.

This type of reasoning requires active experimentation (as opposed to passive observation). In other words, I have to intervene in the system, and can learn about the causal links from the effects.

To return to our example, if I want to know whether not cleaning up leftover food in my room *causes* bugs to show up, I could decide to clean up all the food and see how that affects the number of bugs. Now I have intervened in the system, if I observe that the number of bugs decreases, then that supports the proposition that the presence of food causes the bugs to appear. Alternatively, I could intervene on the number of bugs in the room by removing some or adding more and then observing how that affects the amount of food in the room.

However, no matter how often I intervene on the system and observe the results, I won't be able to answer why the number of bugs in the room changes over time, nor can I explain why there are a certain number of bugs in my room as such questions require counterfactuals.

### Counterfactuals

Note that we can already get pretty far by studying associations and interventions, as those enable us to make predictions and control our environment respectively, so in many cases we might not even have to bother with the additional effort of studying counterfactuals. However, if we want to expand our understanding of not just what happens, and how we can make something happen, but also why it happens, and especially what other variables may be worth taking into account, then we need counterfactuals.

Counterfactuals don't just require interventions, but they require interventions *in a controlled environment*. In other words, we have to intervene not just on the parameter we are interested in studying, but we have to keep everything else controlled to isolate the individual causal links which allows us to understand why something happens and how an intervention would have affected our observation.

Practically speaking, gaining counterfactual knowledge is very challenging precisely because we can never be certain that we have adequately controlled all the relevant parameters. With our familiar example, if I want to know how many bugs there would have been if I had left twice as much leftover food in the room, then it's not sufficient to identify a single causal link (between food and the number of bugs). Instead, I have to take into account (ideally all) other variables that may affect the results, such as whether there are any cracks or holes in the wall, what the weather was like yesterday, whether my room is on the ground floor or very high up, etc.

A more realistic example where counterfactual reasoning is very common is physics - in fact, just about every model in physics is actually a counterfactual model. For example, Hooke's law $U=\\frac{1}{2}kx^2$ tells us not just how much energy is stored in some spring when it is stretched out by some distance $x$, but also how much energy would be stored in the spring if it had been stretched out twice as much (or any other distance). While physicists also have no guarantee that there aren't actually some relevant other variables unbeknownst to us that affect the amount of energy stored in the spring, we can use these models to answer counterfactual questions, and as soon as we find a better model, we replace and our current one.

## Maximizing Agency

Even though reasoning about counterfactuals requires the most stringent setup and forethought, nonetheless, it is the counterfactuals that enable us to just to control our surroundings but to expand our control and thereby reach our goals (whatever they are) even easier.

Practically speaking, it's not very realistic for us to conduct controlled experiments for every counterfactual we want to answer, even if strictly speaking *that is necessary*. So how perhaps there's some simple rule of thumb we can use in place of a fully controlled experiment to support our arguments.

Here I propose the principle of "maximizing agency" as a relatively simple principle which still aims towards making counterfactual reasoning. This principle states: reliable explanations generally give agency to many (perhaps even all) variables/people involved, while flimsy explanations tend to attribute a decision or event entirely to a very small group of reasons, people, or causes.

This principle is closely related to a general push away from making black/white arguments (eg. in terms of inherently good and evil) and towards grey (ie. taking as many perspectives and nuances into account as possible). In other words, explaining an event by saying "person/group Y is more powerful so they caused X to happen" is not as satisfying of an explanation as "person/group Y have these incentives to argue/act in favor of a certain outcome while group/person Z had these incentives to respond as they did".

If there is one thing we can say with supreme confidence, no matter at what level of abstraction or what scale you study the world and why things play out as they do, it is that there are always more causes and factors involved (many of which may be obscured or difficult/expensive to observe - I just have to mention chaos theory, and we're already in trouble), so if we want to make good arguments we should appeal towards taking as much of the situation into account as possible, instead of boiling everything down to a simple story of "good and evil", "smart and dumb", "rational and irrational", "powerful and powerless", "oppressors" and "oppressed", "true and false", "right and wrong" ...
