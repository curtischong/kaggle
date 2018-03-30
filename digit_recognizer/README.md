good god I had multiple python interpreters and didn't install plotly under the right one. this is a lifesaver: (do it in the notebook)
import sys
!{sys.executable} -m pip install numpy
PCA
 - you want to explain the variances with the data avaliable.
	 - apparently, explaining 90% of the data with 200 features is a good ballpark (the 90% bit = most of the variance)
