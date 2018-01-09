# elwoodberry

http://evoulve.com/




# Animating Circle Border

## Example 01
See [original source](https://jsfiddle.net/rsfkmegp/2/)  
HTML  
```
#loading
  .outer-shadow
  .inner-shadow

  .hold.left
    .fill

  .hold.right
    .fill
```
CSS  
```
#loading {
  width: 50px;
  height: 50px;
  margin: 30px auto;
  position: relative;
}

.outer-shadow,
.inner-shadow {
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.inner-shadow {
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  border-radius: 100%;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}

// .circle
.hold {
  position: absolute;
  width: 100%;
  height: 100%;
  clip: rect(0px, 50px, 50px, 25px);
  border-radius: 100%;
  background-color: #fff;
}

.fill, .dot span {
  background-color: #f50;
}

.fill {
  border-radius: 100%;
  clip: rect(0px, 25px, 50px, 0px);
  height: 100%;
  position: absolute;
  width: 100%;
}

.left .fill
{
  z-index: 1;
  -webkit-animation: left 1s linear ;
  -moz-animation: left 1s linear ;
  animation: left 1s linear both;
}

@keyframes left
{
    0%{-webkit-transform:rotate(0deg);}
    100%{transform:rotate(180deg);}
}

@-webkit-keyframes left
{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(180deg);}
}

.right
{
z-index: 3;
-webkit-transform: rotate(180deg);
-moz-transform: rotate(180deg);
transform: rotate(180deg);
}

.right .fill
{
  -moz-animation-delay: 1s;
  -moz-animation: right 1s linear ;
  -webkit-animation-delay: 1s;
  -webkit-animation: right 1s linear ;
  animation-delay: 1s;
  animation: right 1s linear both ;
  z-index: 3;
}

@keyframes right
{
    0%{-webkit-transform:rotate(0deg);}
    100%{transform:rotate(180deg);}
}

@-webkit-keyframes right {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

.inner-shadow img
{
    margin-left: 8px;margin-top: 7px;
}
```









## Example 02
See [original source](https://codepen.io/katmai7/pen/jCAhv)  
HTML  
```
.wrap
  .circle
    i(class="icon i1 icon-terminal")
    i(class="icon i2 icon-code-fork")
    i(class="icon i3 icon-keyboard")
    i(class="icon i4 icon-code")
    .line1
    .line2
    span(class="text") hover on me
```

CSS  
```
.wrap {
  margin: 100px auto;
  width: 130px;

  .circle {
    background: #E94E3D;
    border-radius: 50%;
    box-shadow: 60px -60px 0 2px #E94E3D, -60px -60px 0 2px #E94E3D, -60px 60px 0 2px #E94E3D, 60px 60px 0 2px #E94E3D, 0 0 0 2px #E94E3D;
    height: 120px;
    overflow: hidden;
    position: relative;
    width: 120px;

    .icon {
      color: #fff;
      display: block;
      font-size: 20px;
      position: absolute;
    }

    .i1 {
      left: 55px;
      top: -25px;
    }

    .i2 {
      left: -20px;
      top: 50px;
    }

    .i3 {
      bottom: -25px;
      left: 50px;
    }

    .i4 {
      right: -30px;
      top: 50px;
    }

    .line1,
    .line2 {
      border-top: 1px solid #fff;
      left: 60px;
      position: absolute;
      top: 60px;
      transform-origin: 50% 50%;
      transform: rotate(45deg);
    }

    .line2{
      transform: rotate(-45deg);
    }

    .text{
      color: #fff;
      font: 18px sans-serif;
      left: 30px;
      position: absolute;
      text-align: center;
      text-transform: uppercase;
      top: 38px;
      transition: opacity .2s ease;
      width: 60px;
    }

  }

  // CIRCLE: HOVER
  &:hover{
    animation: border .4s ease 1 forwards;
    cursor: none;

    .text{
      opacity: 0;
    }

    .line1, .line2{
      animation: line .5s ease .45s forwards;
    }

    .i1{
      animation: icon1 .5s ease .8s forwards;
    }

    .i2{
      animation: icon2 .5s ease .9s forwards;
    }

    .i3{
      animation: icon3 .5s ease 1.0s forwards;
    }

    .i4{
      animation: icon4 .5s ease 1.1s forwards;
    }

  }

}




@keyframes border{
  0% {
    box-shadow: 60px -60px 0 2px #E94E3D, -60px -60px 0 2px #E94E3D, -60px 60px 0 2px #E94E3D, 60px 60px 0 2px #E94E3D, 0 0 0 2px #E94E3D;
  }
  25% {
    box-shadow: 0 -125px 0 2px #E94E3D, -60px -60px 0 2px #E94E3D, -60px 60px 0 2px #E94E3D, 60px 60px 0 2px #E94E3D, 0 0 0 2px #fff;
  }
  50% {
    box-shadow: 0 -125px 0 2px #E94E3D, -125px 0px 0 2px #E94E3D, -60px 60px 0 2px #E94E3D, 60px 60px 0 2px #E94E3D, 0 0 0 2px #fff;
  }
  75% {
    box-shadow: 0 -125px 0 2px #E94E3D, -125px 0px 0 2px #E94E3D, 0px 125px 0 2px #E94E3D, 60px 60px 0 2px #E94E3D, 0 0 0 2px #fff;
  }
  100% {
    box-shadow: 0 -125px 0 2px #E94E3D, -125px 0px 0 2px #E94E3D, 0px 125px 0 2px #E94E3D, 120px 40px 0 2px #E94E3D, 0 0 0 2px #fff;
  }
}

@keyframes icon1{
  0% {top: -25px;}
  100% {top: 10px;}
}

@keyframes icon2{
  0% {left: -20px;}
  100% {left: 15px;}
}

@keyframes icon3{
  0% {bottom: -25px;}
  100% {bottom: 10px;}
}

@keyframes icon4{
  0% {right: -25px;}
  100% {right: 15px;}
}

@keyframes line{
  0%{
    left: 60px;
    width: 0;
  }
  100% {
    left: 10px;
    width: 100px;
  }
}
```
