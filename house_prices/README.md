great notebooks:
https://www.kaggle.com/serigne/stacked-regressions-top-4-on-leaderboard
Things I'm learning
 - Regularized Linear Models are in fact, linear functions. So when you generally want all variables to be on a linear scale.
	 - You can use log or sqrt functions to squash really high values down so the linear function will work better
		 - aka: when certain variables are skewed, run a log() transform on them
		 - ex: https://www.kaggle.com/apapiu/regularized-linear-models In [6]
 - Don't just drop your Nan variables or fill them in with the median, actively go through them and denote each variable if Nan means 0 or mostly likely no etc.
	 - https://www.kaggle.com/juliencs/a-study-on-regression-applied-to-the-ames-dataset In [6]
 - ```.corr()``` will work for categorical variables
 - good residual plots look:
	 - symmetrically distributed, tending to cluster towards the middle of the plot
	 - lustered around the lower single digits of the y-axis (e.g., 0.5 or 1.5, not 30 or 150)
	 - random. no clear patterns
	 - http://docs.statwing.com/interpreting-residual-plots-to-improve-your-regression/ (VERY GOOD)
 - When you have an outlier in your residual plot you assess how your Actual vs Predicted graph changes with or without it. If the graphs differ greatly then either remove it or transform your data.
 - To easily determine similar variables (do this right off the bat), run a correlation matrix and then merge the variables together (usually by multiplying var a and var b. But if there are more than two variables try adding them together. orrrr you can just drop the extra vars.)
	 - https://www.kaggle.com/juliencs/a-study-on-regression-applied-to-the-ames-dataset In [9]
 - I think this is a soft regression rule: when more than 15% of the data is missing discard it (if these variables that we are discarding are considered when we buy a home)
 ![a photo of the diff b/w RMSE and MAE](https://cdn-images-1.medium.com/max/1600/1*YTxb8K2XZIisC944v6rERw.png)
	 - If you have an error and want to diagnose what is causing it, compare the RMSE and MAE. if they are both the same, the error distribution is fairly even
	 - If there are a few large error outliers, you'll clearly identify it by comparing the two errors
	 - if being off by 10 is more than twice as bad as being off by 5. But if being off by 10 is just twice as bad as being off by 5, then MAE is more appropriate.
	 - From an interpretation standpoint, MAE is clearly the winner. RMSE does not describe average error alone and has other implications that are more difficult to tease out and understand.
