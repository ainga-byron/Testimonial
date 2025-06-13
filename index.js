const testimonials = [
    {
    name: "Byron Ainga",
    photoUrl:
     "C:\Users\Byron\Desktop\testimoniol web\img\Screenshot_20231207-012317.jpg",
    text: "This is simply unbelivable!I would be lost without apple.The very best.Not able to tell you how happy I am with apple"

},
{
    name: "Benson Sumba",
    photoUrl:
     "C:\Users\Byron\Desktop\testimoniol web\img\Screenshot_20241206-124027.jpg",
    text: "This is simply unbelivable!I would be lost without apple.The very best.Not able to tell you how happy I am with apple"

},
{
    name: "Samuel Ainga",
    photoUrl: 
    "C:\Users\Byron\Desktop\testimoniol web\img\Screenshot_20241215-222400.jpg",
    text: "This is simply unbelivable!I would be lost without apple.The very best.Not able to tell you how happy I am with apple"
  
},
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text"); 
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text}= testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText=text;
    usernameEl.innerText=name;
    idx++;
    if(idx === testimonials.length){
        idx=0;
    }
    setTimeout(() =>{ updateTestimonial()
    },
    10000);
}
