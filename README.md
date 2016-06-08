# webkid-nn-js-example
A working example of the webkid.io article [Neural Networks in Javascript](http://blog.webkid.io/neural-networks-in-javascript/)

## Installation
One must install Node.js and npm, then of course download the script or just clone this repo.

> npm install mnist

> npm install synaptic

> node nn.js

## Purpose
I wish that I could have read this article, before I started programming machine-learning, it is quite wonderful. Lately, I have been trying to encourage others to study machine-learning, because I am sure that very soon, it will be a requirement for all programmers.

## Output
```
iterations 1 error 16.219031756056662 rate 0.2
iterations 2 error 15.258706817677487 rate 0.2
iterations 3 error 12.479483062970196 rate 0.2
iterations 4 error 10.462559941867633 rate 0.2
iterations 5 error 9.36887484382626 rate 0.2
iterations 6 error 9.785733186193953 rate 0.2
iterations 7 error 8.86081811147634 rate 0.2
iterations 8 error 9.542786909382952 rate 0.2
iterations 9 error 10.511315538226642 rate 0.2
iterations 10 error 9.980299610327883 rate 0.2
iterations 11 error 9.958734351730621 rate 0.2
iterations 12 error 9.040786973104593 rate 0.2
iterations 13 error 9.07025609686008 rate 0.2
iterations 14 error 8.931690178999071 rate 0.2
iterations 15 error 8.833327388007962 rate 0.2
iterations 16 error 7.3251353759463536 rate 0.2
iterations 17 error 6.835472941425906 rate 0.2
iterations 18 error 6.7461279962800615 rate 0.2
iterations 19 error 7.022934073770616 rate 0.2
iterations 20 error 6.463574534299544 rate 0.2
```

As you may have noticed, the longer the neural network is trained, the lower the error rate becomes.

```
myNetwork.activate(testSet[0].input)
------------------------------------
[ 0.000015135395095455985,
  2.4906512727990265e-9,
  1.9924756699146974e-16,
  1.1620121966529105e-11,
  0.0004020939200447949,
  0.9936585972904854,
  0.000698556758138757,
  0.0024639062843852147,
  9.190862616461258e-18,
  0.0000010566186668186539 ]
```

If you did exactly what the article said, this is the result which you would have received. Not very helpful for a beginner. So I added softmax to give a better representation of the result.

```
softmax
------------------------------------
[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ]
------------------------------------
testSet[0].output
------------------------------------
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```

Much nicer, but I will make it completely clear what the result was.

```
Results:
------------------------------------
The neural network believed the digit was a 5
when it really was a 0
```

## Miscellaneous
Check out my programming blog! http://ar.hn/blog

## License
Copyright (c) 2016 Aryo Pehlewan feylikurds@gmail.com 
Licensed under the GPL license.
