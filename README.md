# color2Array

It's a very simple package which convert js colors to numbers array (`[r, g, b, a]`).

**[Supported colors](http://facebook.github.io/react-native/docs/colors)**

## Example

```
import color2array from 'color2array';

color2array('red');
color2array('transparent');
color2array('#fff');
color2array('#fff8');
color2array('#ff00ff');
color2array('#ff00ff80');
color2array('rgb(0,0,0)');
color2array('hsl(360, 100%, 100%)');
color2array('hsla(360, 100%, 100%, 0.5)');
```

## Installation

```
yarn add color2array # or
npm install color2array --safe
```
