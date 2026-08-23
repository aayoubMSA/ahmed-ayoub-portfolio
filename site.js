const b=document.querySelector('.menu'),n=document.querySelector('.links');
if(b&&n){
  b.addEventListener('click',()=>{
    const o=n.classList.toggle('open');
    b.setAttribute('aria-expanded',o?'true':'false');
  });
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    n.classList.remove('open');
    b.setAttribute('aria-expanded','false');
  }));
}
