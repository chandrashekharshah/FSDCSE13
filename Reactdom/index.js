// console.log("hiii")

const container=document.getElementById('root');
// console.log(container)

const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'black'}},'Welcome To React');
const h1=React.createElement('h1',{},"ABES Engineering College");
const img=React.createElement('img',{src:'https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png',style:{height:'200px', width:'200px', borderRadius:'50%'}});
const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);

// JSX
const div1=<div><h2>Welcome To JSX</h2></div>
root.render(div);