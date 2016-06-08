# webkid-nn-js-example
A working example of the webkid.io article [Neural Networks in Javascript](http://blog.webkid.io/neural-networks-in-javascript/)

## Installation
One must install Node.js and npm, then of course download the script or just clone this repo.

> npm init
> npm install mnist --save
> npm install synaptic --save
> node nn.js

## Purpose
I wish that I could have read this article, before I started programming machine-learning, it is quite wonderful. Lately, I have been trying to encourage others to study machine-learning, because I am sure that very soon, it will be a requirement for all programmers.

## Output
```
iterations 1 error 16.976645238010597 rate 0.2
iterations 2 error 15.604968440664212 rate 0.2
iterations 3 error 13.448035502563265 rate 0.2
iterations 4 error 12.742324804428382 rate 0.2
iterations 5 error 12.906110819168015 rate 0.2
iterations 6 error 11.538769489286752 rate 0.2
iterations 7 error 10.739510807436572 rate 0.2
iterations 8 error 10.21173448249665 rate 0.2
iterations 9 error 9.473520817830734 rate 0.2
iterations 10 error 9.856269792605334 rate 0.2
iterations 11 error 9.712931311624796 rate 0.2
iterations 12 error 9.944294694919778 rate 0.2
iterations 13 error 8.827878710178844 rate 0.2
iterations 14 error 7.82109990665226 rate 0.2
iterations 15 error 8.496895324939157 rate 0.2
iterations 16 error 8.496325431500827 rate 0.2
iterations 17 error 8.488768144139751 rate 0.2
iterations 18 error 7.026290245781831 rate 0.2
iterations 19 error 7.364971781028233 rate 0.2
iterations 20 error 8.095968713438534 rate 0.2
```

As you may have noticed, the longer the neural network is trained, the lower the error rate becomes.

```
myNetwork.activate(testSet[0].input)
------------------------------------
[ 0.9980988991979031,
  0.000003606176068647155,
  5.3859036655684896e-11,
  6.472071011077574e-12,
  7.253183375670209e-23,
  0.2567044402564011,
  7.11061352065055e-9,
  0.000002361314575065349,
  1.1058122569813617e-7,
  0.013962949244597046 ]
```

If you did exactly what the article said, this is the result which you would have received. Not very helpful for a beginner. So I added softmax to give a better representation of the result.

```
softmax
------------------------------------
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
------------------------------------
testSet[0].output
------------------------------------
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```

Much nicer, but I will make it completely clear what the result was.

```
Results:
------------------------------------
The neural network believed the digit was a 0
when it really was a 0
```

## Miscellaneous
Check out my programming blog! http://ar.hn/blog

## License
Copyright (c) 2016 Aryo Pehlewan feylikurds@gmail.com 
Licensed under the GPL license.
