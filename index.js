// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const cursor = document.querySelector('.cursor');
const bigcursor = document.querySelector('.bigcursor');
const prodcont = document.querySelector('.bigproducts');

const vidcont = document.querySelector('.videocont');
const video = vidcont.querySelector('video');



function updatebigCursor(event) {
    // Get the bounding rectangle of the video container
    const rect = prodcont.getBoundingClientRect();

    // Calculate the mouse position relative to the video container
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Move the cursor follower
    gsap.to(bigcursor, {
        left: x,
        top: y,
         transform: 'translateX(-50%) translateY(-50%)',
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'Power3.out'
    });
}

    

    


// Function to update cursor position
function updateCursor(event) {
    // Get the bounding rectangle of the video container
    const rect = vidcont.getBoundingClientRect();

    // Calculate the mouse position relative to the video container
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Move the cursor follower
    gsap.to(cursor, {
        left: x,
        top: y,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'Power3.out'
    });
}

// Function to hide the cursor
function hideCursor() {
    gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.3
    });
}

function hidebigCursor() {
    gsap.to(bigcursor, {
        opacity: 0,
        scale: 0,
        duration: 0.3
    });
}

// Add event listeners
vidcont.addEventListener('mousemove', updateCursor);
vidcont.addEventListener('mouseleave', hideCursor);

prodcont.addEventListener('mousemove', updatebigCursor);
prodcont.addEventListener('mouseleave', hidebigCursor);




// GSAP animation for headings
const tl = gsap.timeline();

tl.from('.headings h1', {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.2,
    ease: 'Power3.out'
});

tl.from('.videocont',{
    opacity: 0,
    scale: 0,
    duration: 0.5,
   
    ease: 'Power3.out'
})



const AllpopupNav = document.querySelectorAll('.popup');

const tl2 = gsap.timeline();


AllpopupNav.forEach(popupNav => {
    popupNav.addEventListener('mouseenter', () => {
        

        // Get the class name of the popupNav element
        const clas = popupNav.className;

        // Build the selector for the nested element
        // Assuming you want to find an element with class 'popupProduct' inside popupNav
        const product = popupNav.querySelector(`.popupProduct`);
         
        tl2.to(popupNav, {
            height: '40%',
            duration: 0.2,
            ease: 'Power3.out'
        })

        tl2.to(product, {
            display: 'flex',
            opacity: 1,
            duration: 0.1,
            ease: 'Power3.out'
        })
        // Log the found element
        console.log(product);
    });
});

AllpopupNav.forEach(popupNav => {
    popupNav.addEventListener('mouseleave', () => {
        

        // Get the class name of the popupNav element
        const clas = popupNav.className;

        // Build the selector for the nested element
        // Assuming you want to find an element with class 'popupProduct' inside popupNav
        const product = popupNav.querySelector(`.popupProduct`);
         const tl = gsap.timeline();
        
        tl.to(product, {

           display: 'none',
            opacity: 0,
            duration: 0.1,
            ease: 'Power3.out'
         })
        
         tl.to(popupNav, {
                minHeight: '6%',
                height: 'auto',
                 duration: 0.2,
                 ease: 'Power3.out'
        })


        // Log the found element
        console.log(product);
    });
});


const btn = document.querySelector('#paras button');

btn.addEventListener('mouseover', () => {
    btn.classList.add('animate');
});

btn.addEventListener('animationend', () => {
    btn.classList.remove('animate');
});



const reviews = [
    { uid: 1, name: "Alice Johnson", message: "Amazing product! Exceeded my expectations." },
    { uid: 2, name: "Bob Smith", message: "Good value for the price. Will buy again." },
    { uid: 3, name: "Carol White", message: "Decent quality but took a long time to arrive." },
    { uid: 4, name: "David Brown", message: "Not what I expected. The description was misleading." },
    { uid: 5, name: "Eve Black", message: "Fantastic service and quick delivery!" },
    { uid: 6, name: "Frank Green", message: "The product works great, but the packaging was damaged." },
    { uid: 7, name: "Grace Lee", message: "Highly recommend this to everyone!" },
    { uid: 8, name: "Hank Miller", message: "It's okay, but I've seen better." },
    { uid: 9, name: "Ivy Wilson", message: "Excellent quality and easy to use." },
    { uid: 10, name: "Jack Taylor", message: "Terrible experience. Would not buy again." },
    { uid: 11, name: "Karen Harris", message: "Perfect for my needs. Five stars!" },
    { uid: 12, name: "Leo Adams", message: "Mediocre at best. Not worth the hype." },
    { uid: 13, name: "Mona Clark", message: "Great customer support and solid product." },
    { uid: 14, name: "Nate Lewis", message: "Product arrived late and was damaged." },
    { uid: 15, name: "Olivia Hall", message: "Works perfectly. Very satisfied!" },
    { uid: 16, name: "Paul Young", message: "Disappointed with the quality. Not as advertised." },
    { uid: 17, name: "Quinn King", message: "Fantastic product. Will definitely buy more." },
    { uid: 18, name: "Rachel Wright", message: "Good quality but a bit expensive." },
    { uid: 19, name: "Sam Walker", message: "Arrived on time and as described. Very happy." },
    { uid: 20, name: "Tina Baker", message: "Not worth the money. Poor quality." }
  ];
  
  // Function to render reviews
  function renderReviews() {
    const userContainer = document.querySelector('.users');
    userContainer.innerHTML = ''; // Clear existing content
    reviews.forEach(review => {
      const user = document.createElement('div');
      user.classList.add('user');
      user.id = `user-${review.uid}`;
      user.innerHTML = `
        <i class="ri-circle-line"></i>
        <p>${review.name}</p>
      `;
      userContainer.appendChild(user);
    });
  }
  
  // Function to reset all users to normal state
  function resetUsers() {
    const reviewElements = document.querySelectorAll('.user');
    reviewElements.forEach(user => {
      const icon = user.querySelector('i');
      icon.classList.remove('ri-circle-fill');
      icon.classList.add('ri-circle-line');
      const uid = user.id.split('-')[1];
      const review = reviews.find(review => review.uid == uid);
      user.innerHTML = `
        <i class="ri-circle-line"></i>
        <p>${review.name}</p>
      `;
    });
  }
  
  // Function to update the clicked user
  function updateUser(reviewElement, review) {
    console.log(reviewElement)
    reviewElement.innerHTML = `
      <i class="ri-circle-fill"></i>
      <p>${review.name} <br> 
        <svg id="signature-underline" width="100" height="20" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
          <path id="underline-path" d="M0,10 C50,20 150,0 200,10" stroke="black" fill="none" stroke-width="4"/>
        </svg>
      </p>`;
    gsap.from(".message h1", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'Power3.out'
    });
    document.querySelector(".message h1").innerHTML = review.message;
  }


  
  
  // Add event listeners
  function addEvent() {
    
    const reviewElements = document.querySelectorAll('.user');
    reviewElements.forEach(reviewElement => {
      const icon = reviewElement.querySelector('i');
      icon.addEventListener('click', () => {
        const uid = reviewElement.id.split('-')[1];
        const review = reviews.find(review => review.uid == uid);
         
        resetUsers();
        updateUser(reviewElement, review);
        addEvent();

      });
    });
  }
  
  // Initial call to render reviews and set event listeners
  renderReviews();
   
    updateUser(document.querySelector('#user-1'),  { uid: 1, name: "Alice Johnson", message: "Amazing product! Exceeded my expectations." })

  addEvent();
  


const fullNavanimation = ()=>{
  const tl3 = gsap.timeline();
  tl3.from('#fullnav',{
    x: '100%',
    delay: 0.1,
    duration: 0.5,
    ease: 'Power3.out'
  })
 
  tl3.from('#fullnav div h1',{
    y: '100%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'Power3.out'
  })

}


const fullNavHideanimation = ()=>{
  const tl3 = gsap.timeline();
  tl3.to('#fullnav',{
    x: '100%',
    delay: 0.1,
    duration: 0.5,
    ease: 'Power3.out'
  })
 
  tl3.to('#fullnav div h1',{
    y: '100%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'Power3.out'
  })

}



let navStatusHidden = true;
  
  document.querySelector('#menubar').addEventListener('click',()=>{
    navStatusHidden = !navStatusHidden;
      
    if(navStatusHidden){
      
      document.querySelector('#menubar').classList.remove('ri-close-large-line');
      document.querySelector('#menubar').className = 'ri-menu-line';

      document.querySelector('#fullnav').style.display = 'none';
    }else{
      document.querySelector('#menubar').classList.remove('ri-menu-line');
      document.querySelector('#menubar').className = 'ri-close-large-line';

      document.querySelector('#fullnav').style.display = 'flex';
      fullNavanimation();
    }
    //document.querySelector('#fullnav').style.display = 'flex';
  })