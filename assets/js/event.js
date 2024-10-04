let countDownDate = new Date("Oct 19, 2024 15:37:25").getTime();

let x = setInterval(function () {

	
	let now = new Date().getTime();

	let distance = countDownDate - now;
	let days = document.getElementById("day");
	let hours = document.getElementById("hour");
	let minutes = document.getElementById("minute");
	let seconds = document.getElementById("second");

	let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

	days.innerHTML = daysValue.toString().padStart(2, '0');
	hours.innerHTML = hoursValue.toString().padStart(2, '0');
	minutes.innerHTML = minutesValue.toString().padStart(2, '0');
	seconds.innerHTML = secondsValue.toString().padStart(2, '0');

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("live").innerHTML = "Event is Live";
	}
}, 1000);


$('.partner-slider .row .owl-carousel').owlCarousel({
	items: 5,
	loop: true,
	autoplay: true,
	slideTransition: 'linear',
	touchDrag: false,
	mouseDrag: false,
	autoplaySpeed: 5000,
	autoplayHoverPause: false,
	dots: false,
	responsive: {
		0: {
			items: 2
		},
		390: {
			items: 3
		},
		500: {
			items: 3
		},
		600: {
			items: 3
		},
		700: {
			items: 3
		},
		1150: {
			items: 5
		}
	}
});


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#speaker",
	{ x: -300 },   
	{
		x: 0,       
		duration: 10,
		delay: 0.5,
		scrollTrigger: {
			trigger: "#speaker", 
			start: "top 75%",    
			end: "top 25%",      
			scrub: true,
		}
	}
);
gsap.fromTo("#speaker-1",
	{ x: -10 },
	{
		x: 0,
		duration: 10,
		delay: 0.5,
		scrollTrigger: {
			trigger: "#speaker-1", 
			start: "top 75%",    
			end: "top 25%",      
			scrub: true,        
		}
	}
);
gsap.fromTo("#speaker-2",
	{ x: -10 },
	{
		x: 0,
		duration: 10,
		delay: 0.5,
		scrollTrigger: {
			trigger: "#speaker-2", 
			start: "top 75%",    
			end: "top 25%",      
			scrub: true,        
		}
	}
);
gsap.fromTo("#speaker-3",
	{ x: 10 },
	{
		x: 0,      
		duration: 10,
		delay: 0.5,
		scrollTrigger: {
			trigger: "#speaker-3", 
			start: "top 75%",    
			end: "top 25%",      
			scrub: true,
		}
	}
);

gsap.fromTo("#network",
	{ x: 300 },  
	{
		x: 50,       
		duration: 10,
		delay: 0.5,  
		scrollTrigger: {
			trigger: "#network", 
			start: "top 75%",    
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#network-1",
	{ x: 80 },    
	{
		x: 0,        
		duration: 10,
		delay: 0.5,   
		scrollTrigger: {
			trigger: "#network-1", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}}
);
gsap.fromTo("#network-2",
	{ x: -60 },  
	{
		x: 0,       
		duration: 10,
		delay: 0.5,   
		scrollTrigger: {
			trigger: "#network-2", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);

 community
gsap.fromTo("#community",
	{ x: -300 },    
	{
		x: 0,        
		duration: 10,
		delay: 0.5,   
		scrollTrigger: {
			trigger: "#community", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#community-1",
	{ x: -50 },    
	{
		x: 0,        
		duration: 10,
		delay: 0.5,   
		scrollTrigger: {
			trigger: "#community-1", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#community-2",
	{ x: -50 },    
	{
		x: 0,        
		duration: 10,
		delay: 0.5,   
		scrollTrigger: {
			trigger: "#community-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);

 innovative
gsap.fromTo("#innovative",
	{ x: 300 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#innovative", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#innovative-1",
	{ x: 50 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#innovative-1", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#innovative-2",
	{ x: -50 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#innovative-2", 
			start: "top 90%",     
			end: "top 30%",       
			scrub: true            
		}
	}
);

 extravaganza
gsap.fromTo("#extravaganza",
	{ x: -300 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#extravaganza", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#extravaganza-3",
	{ x: -20 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#extravaganza-3", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#extravaganza-2",
	{ x: 20 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#extravaganza-2", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);

gsap.fromTo("#mobile-speaker-1",
	{ x: -40 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-speaker-1", 
			start: "top 75%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-speaker-2",
	{ x: -40 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-speaker-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-speaker-3",
	{ x: 60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-speaker-3", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-network-1",
	{ x: -60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-network-1", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-network-2",
	{ x: 60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-network-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);

gsap.fromTo("#mobile-community-1",
	{ x: -60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-community-1", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-community-2",
	{ x: -60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-community-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-community-3",
	{ x: 60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-community-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);

gsap.fromTo("#mobile-innovative-1",
	{ x: -60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-innovative-1", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-innovative-2",
	{ x: 60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-innovative-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);

gsap.fromTo("#mobile-extravaganza-1",
	{ x: -60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-extravaganza-1", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-extravaganza-2",
	{ x: -60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-extravaganza-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
gsap.fromTo("#mobile-extravaganza-3",
	{ x: 60 },    
	{
		x: 0,        
		duration: 10,  
		delay: 0.5,
		scrollTrigger: {
			trigger: "#mobile-extravaganza-2", 
			start: "top 85%",     
			end: "top 25%",       
			scrub: true            
		}
	}
);
