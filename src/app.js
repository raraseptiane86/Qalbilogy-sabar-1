const stage=document.getElementById("stage"),list=document.getElementById("sceneList"),playBtn=document.getElementById("playBtn");
const total=60000;let current=0,playing=false,startedAt=0,elapsed=0,raf=null;
function sceneAt(ms){let t=0;for(let i=0;i<DUR.length;i++){t+=DUR[i]*1000;if(ms<t)return i}return DUR.length-1}
function render(i){current=Math.max(0,Math.min(DUR.length-1,i));stage.innerHTML=scene(current);document.getElementById("sceneCounter").textContent=`SCENE ${String(current+1).padStart(2,"0")} / 14`;document.querySelectorAll(".scene-item").forEach((b,n)=>b.classList.toggle("active",n===current));}
function setTime(ms){elapsed=Math.max(0,Math.min(total,ms));const i=sceneAt(elapsed);if(i!==current)render(i);document.getElementById("scrubber").value=elapsed;document.getElementById("progress").style.width=(elapsed/total*100)+"%";const sec=Math.floor(elapsed/1000);document.getElementById("timeCounter").textContent=`${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")} / 01:00`;}
function tick(now){if(!playing)return;setTime(elapsed+(now-startedAt));startedAt=now;if(elapsed>=total){pause();return}raf=requestAnimationFrame(tick)}
function play(){if(playing)return;if(elapsed>=total)setTime(0);playing=true;playBtn.textContent="Ⅱ Pause";startedAt=performance.now();raf=requestAnimationFrame(tick)}
function pause(){playing=false;playBtn.textContent="▶ Play";if(raf)cancelAnimationFrame(raf)}
DUR.forEach((d,i)=>{const b=document.createElement("button");b.className="scene-item";b.innerHTML=`<span class="num">${String(i+1).padStart(2,"0")}</span><span><strong>${TITLES[i]}</strong><small>${String(START[i]).padStart(2,"0")}–${String(START[i]+d).padStart(2,"0")} detik · ${d}s</small></span>`;b.onclick=()=>{pause();setTime(START[i]*1000)};list.appendChild(b)});
playBtn.onclick=()=>playing?pause():play();
document.getElementById("restartBtn").onclick=()=>{pause();setTime(0);play()};
document.getElementById("prevBtn").onclick=()=>{pause();setTime(START[Math.max(0,current-1)]*1000)};
document.getElementById("nextBtn").onclick=()=>{pause();setTime(START[Math.min(13,current+1)]*1000)};
document.getElementById("scrubber").oninput=e=>{pause();setTime(+e.target.value)};
document.getElementById("fullBtn").onclick=()=>{const el=document.querySelector(".stage-shell");if(el.requestFullscreen)el.requestFullscreen()};
document.addEventListener("keydown",e=>{if(e.code==="Space"){e.preventDefault();playing?pause():play()}if(e.code==="ArrowRight"){pause();setTime(START[Math.min(13,current+1)]*1000)}if(e.code==="ArrowLeft"){pause();setTime(START[Math.max(0,current-1)]*1000)}});
render(0);setTime(0);
