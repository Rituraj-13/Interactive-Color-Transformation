var rect = document.querySelector("#rectangle");
var header = document.querySelector("#header");

function initColorChange() {
    rect.addEventListener("mousemove", function (mouseDetails) {
        const dimension = rect.getBoundingClientRect();

        const currentMousePositionOnX = mouseDetails.clientX - dimension.left;
        const currentMousePositionOnY = mouseDetails.clientY - dimension.top;

        const middleOfWidth = dimension.width / 2;
        const middleOfHeight = dimension.height / 2;

        const redColor = gsap.utils.mapRange(0, middleOfWidth, 255, 0, currentMousePositionOnX);
        const blueColor = gsap.utils.mapRange(middleOfWidth, dimension.width, 0, 255, currentMousePositionOnX);
        const opacity0 = gsap.utils.mapRange(0, middleOfHeight, 0.2, 0.5, currentMousePositionOnY);
        const opacity1 = gsap.utils.mapRange(middleOfHeight, dimension.height, 0.5, 1, currentMousePositionOnY);

        if (currentMousePositionOnX < middleOfWidth && currentMousePositionOnY < middleOfHeight) {
            gsap.to(rect, {
                backgroundColor: `rgba(${redColor}, 0, 0, ${opacity0})`,
                ease: Power4,
                border: "5px solid blue",
            });
            gsap.to(header, {
                color: `rgba(${redColor}, 0, 0, ${opacity0})`,
                ease: Power4,
            });
        } else if (currentMousePositionOnX < middleOfWidth && currentMousePositionOnY > middleOfHeight) {
            gsap.to(rect, {
                backgroundColor: `rgba(${redColor}, 0, 0, ${opacity1})`,
                ease: Power4,
                border: "5px solid blue",
            });
            gsap.to(header, {
                color: `rgba(${redColor}, 0, 0, ${opacity1})`,
                ease: Power4,
            });
        } else if (currentMousePositionOnX > middleOfWidth && currentMousePositionOnY < middleOfHeight) {
            gsap.to(rect, {
                backgroundColor: `rgba(0, 0, ${blueColor}, ${opacity0})`,
                ease: Power4,
                border: "5px solid red",
            });
            gsap.to(header, {
                color: `rgba(0, 0, ${blueColor}, ${opacity0})`,
                ease: Power4,
            });
        } else if (currentMousePositionOnX > middleOfWidth && currentMousePositionOnY > middleOfHeight) {
            gsap.to(rect, {
                backgroundColor: `rgba(0, 0, ${blueColor}, ${opacity1})`,
                ease: Power4,
                border: "5px solid red",
            });
            gsap.to(header, {
                color: `rgba(0, 0, ${blueColor}, ${opacity1})`,
                ease: Power4,
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
            ease: Power4,
        });
    });
}

document.body.style.display = "block";
initColorChange();
