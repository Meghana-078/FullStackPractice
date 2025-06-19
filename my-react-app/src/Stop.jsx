import play from "./assets/play.png"
import stop from "./assets/stop.png"
import reset from "./assets/reset.png"


function Stop(){
    let [seconds,minutes,hours]=[0,0,0]
    let displayTime=document.getElementById("displayTime")
    let timer=null;
    function stopwatch(){
        seconds++;
        if(seconds == 60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
        let h= hours < 10 ? "0" + hours : hours;
        let m=minutes < 10 ? "0" + minutes : minutes;
        let s= seconds < 10 ? "0" + seconds : seconds
        displayTime.innerHTML=h + ":" + m +":" + s;
    }
    function watchstart(){
        if(timer!==null){
            clearInterval(timer);
        }
        timer=setInterval(stopwatch,1000);
    }
    return(
        <>
        <div className="div">
            <h1 id="displayTime">00:00:00</h1>
        </div>
        <img className="i1"src={reset} alt="" width={"50px"} />
        <img className="i2" src={play} alt="" width={"50px"} onClick={watchstart}/>
        <img className="i3" src={stop} alt=""width={"50px"} />
        </>
    )
}
export default Stop