const slides = document.querySelectorAll(".slideshow");

slides.forEach((slide) => {
  let current = 0;
  let z = 1000000000;

  const images = slide.querySelectorAll("img");

  //initial image setup
  images.forEach((image) => {
    z = z - 1;
    image.style.zIndex = z;
  });

  gsap.set(images, {opacity: 0});

  imagesLoaded(images, function(){
      //add a timeline

  const timeline = gsap.timeline()
    
    timeline
    .set(images, {
        x: () => {
          return 500 * Math.random() - 250
        },
        y: "500%", 
        rotate: () => {
          return 80 * Math.random() -40;
        },
        opacity: 1
  })
    .to(images, {x:0, y:0, stagger: -0.25})
    .to(images,{ 
      rotate: ()=>{

        return 20 * Math.random() -10 ;
    }})
  })



  

  slide.addEventListener("click", function () {

    z--;

    let direction = '150%';
    let midAngle = 18 * Math.random() - 9;

    if (Math.random() > 0.5){
      direction = '-150%';
      midAngle *= -1; 
    }
    const flipTimeline = gsap.timeline()

    const currentImg = images[current];

    flipTimeline
      .set(currentImg,  { x:0 })
      .to(currentImg, { 
        x: direction,
        rotate: midAngle
      })
      .set(currentImg, {zIndex: z})
      .to(currentImg, {x: 0})

    //currentImg.style.zIndex = z;
    current++;

    if (current >= images.length) {
      current = 0;
    }
  });
});
