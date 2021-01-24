const carosels = document.querySelectorAll("header h1, footer h1")
const fadeInTimeline = gsap.timeline()

console.log(carosels)

//gsap stuff 
//fade in marquees 
fadeInTimeline
    .set( carosels, {opacity: 0})
    .to (carosels, {opacity: 1, delay: 1, stagger: 1, duration: 2})


carosels.forEach(carosel => {

    const spanTag = carosel.querySelector("span")
    const spanW = spanTag.clientWidth;

    const direction = spanTag.dataset.direction
    const start = spanTag.dataset.start

    for(let i = 0; i< 20; i++){
        carosel.appendChild(spanTag.cloneNode(true))

    }

    const movementTimeline = gsap.timeline({
        //repeat the timeline infinitely 
        repeat: -1,
        
    })
    
    //move the spans over 500px (matches span width) to simulate continuous movement
    movementTimeline
        .set(carosel, {x: start})
        .to(carosel, { x:spanW * direction, duration: 6, ease: "none" })
        

})
    

