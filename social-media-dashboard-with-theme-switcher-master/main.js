const swtch = document.querySelector(".switch");
const body = document.querySelector(".body");
const box =document.querySelector(".box");
const folBox = document.querySelectorAll(".follower-box");
const overBox = document.querySelectorAll(".overview-box");
const toggle = document.querySelector(".toggle")
const overview_title= document.querySelector(".overview-h")

// a function that change the backgroundcolor of an html collection
function Bcolor(arr,value){
    for(let i = 0; i<arr.length; i++){
        arr[i].style.backgroundColor=value;
    }
}
// a function that change the textcolor of an html collection
function Color(arr,value){
    for(let i = 0; i<arr.length; i++){
        arr[i].style.color=value;
    }
}

folBox.forEach(element => {
    element.addEventListener('mouseenter',function(ev){
        ev.target.style.backgroundColor="var(--clr-Vpaleble)";
        ev.target.style.transform="var(--transform)";
     })
});

folBox.forEach(element => {
    element.addEventListener('mouseleave',function(ev){
        ev.target.style.backgroundColor="var(--clr-Lgrayble)"
        ev.target.style.transform="none"
     })
});

overBox.forEach(element => {
    element.addEventListener('mouseenter',function(ev){
        ev.target.style.backgroundColor="var(--clr-Vpaleble)";
        ev.target.style.transform="var(--transform)";
     })
});

overBox.forEach(element => {
    element.addEventListener('mouseleave',function(ev){
        ev.target.style.backgroundColor="var(--clr-Lgrayble)"
        ev.target.style.transform="none"
     })
});
function myFunction(){
    
    if (swtch.checked == true){
        folBox.forEach(element => {
            element.addEventListener('mouseenter',function(ev){
                ev.target.style.backgroundColor="var(--clr-Drkdesatble)"
                ev.target.style.transform="var(--transform)"
             })
        });

        folBox.forEach(element => {
            element.addEventListener('mouseleave',function(ev){
                ev.target.style.backgroundColor="var(--clr-vdblue1)"
                ev.target.style.transform="none"
             })
        });

        overBox.forEach(element => {
            element.addEventListener('mouseenter',function(ev){
                ev.target.style.backgroundColor="var(--clr-Drkdesatble)"
                ev.target.style.transform="var(--transform)"
             })
        });

        overBox.forEach(element => {
            element.addEventListener('mouseleave',function(ev){
                ev.target.style.backgroundColor="var(--clr-vdblue1)"
                ev.target.style.transform="none"
             })
        });
        Bcolor(folBox,"var(--clr-vdblue1)")
        Bcolor(overBox,"var(--clr-vdblue1)")
        body.style.backgroundColor = "var(--clr-vdblue0)";
        body.style.color = "white";
        box.style.backgroundColor = "var(--clr-vdblue1)";
        toggle.style.backgroundImage= "var(--clr-toggledrk)";
        overview_title.style.color="white";
      } else {
        folBox.forEach(element => {
            element.addEventListener('mouseenter',function(ev){
                ev.target.style.backgroundColor="var(--clr-Vpaleble)";
                ev.target.style.transform="var(--transform)";
             })
        });

        folBox.forEach(element => {
            element.addEventListener('mouseleave',function(ev){
                ev.target.style.backgroundColor="var(--clr-Lgrayble)"
                ev.target.style.transform="none"
             })
        });

        overBox.forEach(element => {
            element.addEventListener('mouseenter',function(ev){
                ev.target.style.backgroundColor="var(--clr-Vpaleble)";
                ev.target.style.transform="var(--transform)";
             })
        });

        overBox.forEach(element => {
            element.addEventListener('mouseleave',function(ev){
                ev.target.style.backgroundColor="var(--clr-Lgrayble)"
                ev.target.style.transform="none"
             })
        });
        Bcolor(folBox,"var(--clr-Lgrayble)") 
        Bcolor(overBox,"var(--clr-Lgrayble)")
        body.style.backgroundColor = "white";
        body.style.color = "var(--clr-vdblue1)";
        box.style.backgroundColor = "var(--clr-Lgrayble)"; 
        toggle.style.backgroundImage= "none";
        overview_title.style.color="var(--clr-Dgrayble)";
      }
}