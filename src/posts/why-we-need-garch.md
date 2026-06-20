---
title: Why We Need the GARCH Model
date: 2026-06-20
category: Econometrics
excerpt: When markets get wild, the "constant risk" assumption breaks. Here's why the Efficient Market Hypothesis isn't the whole story, and how GARCH lets us actually predict volatility (sigma).
readTime: 8 mins read
---

# Why We Need the GARCH Model

If you've ever looked at a stock chart, you've probably noticed something: markets don't move at a steady pace. They drift quietly for weeks, then suddenly everything goes crazy for a few days. That "craziness" has a name in finance and econometrics: **volatility**. And learning to predict it is exactly what the GARCH model was built for.

Let me walk you through *why* we need it, starting from a beautiful idea that doesn't quite hold up in the real world.

## The Efficient Market Hypothesis (and where it cracks)

The **Efficient Market Hypothesis (EMH)** says that asset prices already reflect all available information. If that's true, then price changes should be essentially unpredictable, like a coin flip. Tomorrow's return shouldn't be forecastable from yesterday's, because any predictable pattern would already be traded away.

In its cleanest form, EMH suggests returns look like **white noise**: zero mean, no autocorrelation, and a *constant* variance over time. A nice, calm, well-behaved random walk.

Here's the problem: **real markets don't behave that way.**

When we actually look at financial return data, two things jump out:

- **Volatility clustering** — big moves tend to be followed by big moves, and calm periods by calm periods. The 2008 crisis wasn't one bad day; it was weeks of turbulence stacked together.
- **Fat tails** — extreme events (huge crashes or rallies) happen far more often than a normal distribution with constant variance would predict.

So even if the *direction* of returns is hard to predict (EMH might be right about that), the *size* of the swings is clearly **not** constant and **not** random. That's the crack we can drive a model through.

## The assumption that quietly fails: constant variance

Most basic models assume **homoskedasticity** — a fancy word meaning the variance of the error term stays constant over time:

```
Var(error_t) = sigma^2   (the same sigma for every t)
```

But financial data is **heteroskedastic**: the variance changes through time. During calm periods sigma is small; during a crisis sigma blows up. Pretending sigma is constant means you'll badly *underestimate* risk right when it matters most.

What we really want is a way to model the **conditional variance** — the variance *given everything we've seen so far*:

```
sigma_t^2 = Var(return_t | information up to t-1)
```

That little subscript *t* is the whole game. We're no longer asking "what's the average risk?" We're asking "what's the risk **right now**, given recent history?"

## From ARCH to GARCH

The first big idea came from Robert Engle: the **ARCH** model (Autoregressive Conditional Heteroskedasticity). The insight is simple and intuitive — *today's volatility depends on the size of recent shocks.* If yesterday had a huge surprise return, today is probably going to be volatile too.

Tim Bollerslev then generalized it into **GARCH** (the extra "G" is for *Generalized*), which adds one more idea: today's volatility also depends on *yesterday's volatility level*, not just yesterday's shock. This captures volatility clustering really elegantly.

The classic **GARCH(1,1)** model looks like this:

```
return_t   = mu + error_t
error_t    = sigma_t * z_t          (z_t is standard white noise)
sigma_t^2  = omega + alpha * error_(t-1)^2 + beta * sigma_(t-1)^2
```

Let's read that last line in plain English, because it's the heart of it:

- **omega** — a baseline, long-run level of variance. Markets are never perfectly still.
- **alpha · error²(t-1)** — the *reaction* term. A big shock yesterday (a large squared error) pushes today's volatility up. This is the "news" effect.
- **beta · sigma²(t-1)** — the *persistence* term. If yesterday was already volatile, today inherits some of that. This is what creates clustering.

So tomorrow's predicted risk is **a baseline + a reaction to the latest surprise + the memory of recent volatility.** That's a remarkably human way to think about risk, and it matches what we actually see in the data.

## Why this matters — predicting sigma

Notice what GARCH gives us that EMH alone never did. EMH says you (probably) can't predict the **return**. Fine. But GARCH says you absolutely *can* predict the **volatility** — the sigma — and you can do it pretty well.

That single quantity, sigma_t, is enormously useful:

- **Risk management** — Value at Risk (VaR) and stress tests need a forward-looking estimate of how wild things might get.
- **Option pricing** — volatility is literally an input to pricing models; a better sigma means better prices.
- **Portfolio decisions** — sizing positions based on *current* risk instead of some flat long-run average.

So the two ideas aren't enemies. EMH can hold for the *mean* (returns are hard to forecast) while GARCH handles the *variance* (risk is very much forecastable). They live together.

## The takeaway

The Efficient Market Hypothesis is a gorgeous starting point, but it leans on an assumption — constant variance — that real markets break every time things get exciting. Volatility clusters, tails are fat, and risk is anything but constant.

GARCH is the fix. By modeling the **conditional variance** as a mix of a baseline, recent shocks, and recent volatility, it lets us forecast sigma — the one thing about markets that genuinely *is* predictable.

And honestly, that's the part of econometrics I find magical: we admit we can't predict *where* the market goes, but we can still say something rigorous and useful about *how rough the ride will be.*

Thanks for reading — I hope GARCH feels a little less intimidating now. 💛
