/*
A working example of the webkid.io article "Neural Networks in Javascript".
Copyright (C) 2016 Aryo Pehlewan aryopehlewan@hotmail.com
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const mnist = require('mnist'); 

const set = mnist.set(700, 20);

const trainingSet = set.training;
const testSet = set.test;

const synaptic = require('synaptic');

const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

const inputLayer = new Layer(784);
const hiddenLayer = new Layer(100);
const outputLayer = new Layer(10);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

const trainer = new Trainer(myNetwork);
trainer.train(trainingSet, {
    rate: .2,
    iterations: 20,
    error: .1,
    shuffle: true,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});

console.log("------------------------------------");

console.log("myNetwork.activate(testSet[0].input)");

console.log("------------------------------------");

var output = myNetwork.activate(testSet[0].input);

console.log(output);

console.log("------------------------------------");

var maximum = output.reduce(function(p,c) { return p>c ? p : c; });
var nominators = output.map(function(e) { return Math.exp(e - maximum); });
var denominator = nominators.reduce(function (p, c) { return p + c; });
var softmax = nominators.map(function(e) { return e / denominator; });

var maxIndex = 0;
softmax.reduce(function(p,c,i){if(p<c) {maxIndex=i; return c;} else return p;});

console.log("softmax");

console.log("------------------------------------");

var result = [];

for (var i=0; i<output.length; i++)
{
    if (i==maxIndex)
        result.push(1);
    else
        result.push(0);
}

console.log(result);

console.log("------------------------------------");

console.log("testSet[0].output");

console.log("------------------------------------");

console.log(testSet[0].output);

console.log("------------------------------------");

var nnDigit = 0;

for (var i=0; i<=9; i++)
{
    if (result[i]==1)
    {
        nnDigit = i;
        break;
    }
}

var testDigit = 0;

for (var i=0; i<=9; i++)
{
    if (testSet[0].output[i]==1)
    {
        testDigit = i;
        break;
    }
}

console.log("Results:");

console.log("------------------------------------");

console.log("The neural network believed the digit was a " + nnDigit);
console.log("when it really was a " + testDigit);

console.log("------------------------------------");
