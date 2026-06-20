---
title: Why We Need the GARCH Model
date: 2026-06-20
category: Econometrics
excerpt: Markets get wild and the idea of constant risk just falls apart. Here is why the Efficient Market Hypothesis is not the full story, and how GARCH actually lets us predict volatility (sigma).
readTime: 8 mins read
---

# Why We Need the GARCH Model

Okay so if you have ever stared at a stock chart, you probably noticed something funny. The market never moves at a steady pace. It drifts quietly for weeks and then out of nowhere everything goes wild for a few days. That wild part has a name in econometrics, and it is called volatility. Learning to predict it is exactly what the GARCH model was built for, and honestly it is one of my favourite ideas in the whole subject.

Let me walk you through why we even need it. I promise it makes sense once you see it.

## The Efficient Market Hypothesis (and where it cracks)

The Efficient Market Hypothesis, or EMH, says that prices already reflect all the information we have. If that is true, then price changes should be basically impossible to predict, kind of like a coin flip. Tomorrow's return should not be guessable from yesterday's, because if there really was an obvious pattern, traders would have already jumped on it.

In its cleanest form, EMH says returns look like white noise: zero mean, no autocorrelation, and a constant variance that never changes. A nice, calm, well behaved random walk.

Here is the problem though. Real markets just do not behave like that.

When you actually look at real return data, two things jump out at you straight away:

- **Volatility clustering.** Big moves tend to be followed by big moves, and quiet periods by quiet periods. The 2008 crisis was not one bad day, it was weeks of chaos stacked on top of each other.
- **Fat tails.** Extreme events, the huge crashes and rallies, happen way more often than a normal distribution with constant variance would ever predict.

So even if the direction of returns really is hard to predict, and EMH might be right about that part, the size of the swings is clearly not constant and clearly not random. And that little crack is exactly what we can build a whole model around.

## The assumption that quietly fails

Most of the basic models assume something called homoskedasticity. It is a scary word, but it just means the variance of the error term stays constant the whole time:

```
Var(error_t) = sigma^2   (the same sigma for every t)
```

But financial data is heteroskedastic, which just means the variance actually changes over time. In calm periods sigma is small, and in a crisis sigma blows up. So pretending sigma is constant means you will badly underestimate the risk at the exact moment it matters the most. Not great.

What we really want is to model the conditional variance, which is the variance given everything we have seen so far:

```
sigma_t^2 = Var(return_t | information up to t-1)
```

That tiny little t is the whole game. We are not asking "what is the average risk over all time" anymore. We are asking "what is the risk right now, given what just happened."

## From ARCH to GARCH

The first big idea came from Robert Engle, and it is called the ARCH model. It stands for Autoregressive Conditional Heteroskedasticity, but please do not let the name scare you. The idea behind it is so intuitive: today's volatility depends on how big the recent shocks were. If yesterday had a massive surprise return, then today is probably going to be bumpy too.

Then Tim Bollerslev took it one step further and gave us GARCH, where the extra G is just for Generalized. He added one more idea: today's volatility also depends on yesterday's volatility level, not only on yesterday's shock. That one extra piece is what captures the clustering so nicely.

The classic GARCH(1,1) model looks like this:

```
return_t   = mu + error_t
error_t    = sigma_t * z_t          (z_t is standard white noise)
sigma_t^2  = omega + alpha * error_(t-1)^2 + beta * sigma_(t-1)^2
```

Let me translate that last line into plain words, because it really is the heart of everything:

- **omega** is a baseline level of variance. Markets are never perfectly still, so there is always a little floor.
- **alpha times yesterday's squared shock** is the reaction part. A big surprise yesterday pushes today's volatility up. Think of it as the market reacting to fresh news.
- **beta times yesterday's variance** is the memory part. If yesterday was already volatile, today inherits some of that. This is exactly what creates the clustering we saw earlier.

So tomorrow's predicted risk is just a baseline, plus a reaction to the newest surprise, plus the memory of how rough things have been lately. I love that, because it is such a human way to think about risk, and it matches what we actually see in the data.

## Why this matters: predicting sigma

Here is the part that makes me really happy. EMH says you probably cannot predict the return, and fine, maybe that is true. But GARCH says you absolutely can predict the volatility, the sigma, and you can do it surprisingly well.

And that one number, sigma_t, turns out to be incredibly useful:

- **Risk management.** Value at Risk and stress tests all need a forward looking guess of how wild things could get.
- **Option pricing.** Volatility is literally an input into pricing options, so a better sigma means better prices.
- **Portfolio decisions.** You can size your positions based on the risk right now, instead of some flat long run average.

So the two ideas are not really enemies at all. EMH can hold for the mean, since returns are hard to forecast, while GARCH takes care of the variance, since risk is very much forecastable. They actually live together really nicely.

## The takeaway

The Efficient Market Hypothesis is a beautiful starting point, but it leans on one assumption, constant variance, that real markets break every single time things get exciting. Volatility clusters, the tails are fat, and risk is anything but constant.

GARCH is the fix. By modelling the conditional variance as a mix of a baseline, the recent shocks, and the recent volatility, it lets us forecast sigma, which is the one thing about markets that genuinely is predictable.

And that is the part of econometrics I find kind of magical. We admit that we cannot predict where the market is going, but we can still say something solid and useful about how rough the ride is going to be.

Thanks for reading, and I really hope GARCH feels a little less scary now! 💛
