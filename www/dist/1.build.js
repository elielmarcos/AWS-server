(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,i,s){"use strict";s.r(i),s.d(i,"Vector",(function(){return r}));class r{constructor(t=0,i=0){this.x=t,this.y=i}toString(){return`[${this.x.toFixed(2)}, ${this.y.toFixed(2)}]`}add(t=new Vector2){return this.x+=t.x,this.y+=t.y,this}sub(t=new Vector2){return this.x-=t.x,this.y-=t.y,this}scale(t=1,i=t){return this.x*=t,this.y*=i,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){let t=this.magnitude();return this.x/=t,this.y/=t,this}copy(){return new Vector2(this.x,this.y)}}}]]);