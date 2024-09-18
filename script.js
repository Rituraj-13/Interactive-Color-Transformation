var rect = document.querySelector("#rectangle");
var header = document.querySelector("#header"); 

// Function to initialize the color change effect
function initColorChange() {
    rect.addEventListener("mousemove", function(mouseDetails) {
        const dimension = rect.getBoundingClientRect(); // To get the exact position of the rectangle

        // Current Mouse position - X-Value of the top-left corner of the rectangle.
        const currentMousePosition = (mouseDetails.clientX - dimension.left);
        console.log("position: ", currentMousePosition);
    
        const middle = dimension.width / 2;
        const redColor = gsap.utils.mapRange(0, middle, 255, 0, currentMousePosition);
        const blueColor = gsap.utils.mapRange(middle, dimension.width, 0, 255, currentMousePosition);
        
        if (currentMousePosition < middle) {
            console.log("Left");
    
            // Change the background color of rect
            gsap.to(rect, {
                backgroundColor: `rgb(${redColor},0,0)`,
                ease: Power4,
                border: "5px solid blue",
            });
    
            // Change the color of the header
            gsap.to(header, {
                color: `rgb(${redColor},0,0)`,
                ease: Power4
            });
        } else {
            console.log("Right");
    
            // Change the background color of rect
            gsap.to(rect, {
                backgroundColor: `rgb(0,0,${blueColor})`,
                ease: Power4,
                border: "5px solid red"
            });
    
            // Change the color of the header
            gsap.to(header, {
                color: `rgb(0,0,${blueColor})`,
                ease: Power4
            });
        }
    });
    
    rect.addEventListener("mouseleave", function () {
        gsap.to(rect, {
            backgroundColor: "white",
            ease: Power4,
            border: "5px solid black",
        });
        gsap.to(header, {
            color: "Black",
            ease: Power4
        });
    });
}

// Check the window size and handle accordingly
if (window.matchMedia("(max-width: 768px)").matches) {
    alert("Sorry, This site is designed for larger screens !!");
    // Do not show any content, keep it hidden
} else {
    console.log("Large screen detected");
    document.body.style.display = "block"; // Show content for large screens
    initColorChange(); // Call the function to initialize the color change
}