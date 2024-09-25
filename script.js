var typed = new Typed('.text', {
    strings: ["Web Developer", "Flutter Mobile App Developer", "Cross-platform Developer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
}
);
var typed = new Typed('.text-p', {
    strings: ["In Flutter development, I excel at creating visually appealing and functional apps. I'm skilled in integrating Firebase console APIs, working with maps, and implementing effective state management, ensuring seamless user experiences. My design expertise allows me to craft beautiful and intuitive app interfaces.","In web development, I have a strong command of HTML and CSS for creating responsive and visually appealing websites. I’m proficient in backend development using PHP, skilled in SQL for efficient data organization, and experienced in building dynamic web applications with React.js."],
    typeSpeed: 10,
    // backSpeed: 25,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
}
);

    document.addEventListener('DOMContentLoaded', function () {
        const sliders = document.querySelectorAll('.slider');
        
        sliders.forEach(slider => {
            let images = slider.querySelectorAll('img');
            let currentIndex = 0;

            function showNextImage() {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }

            images[0].classList.add('active');  // Set the first image to be visible initially
            setInterval(showNextImage, 3000);   // Change image every 3 seconds
        });
    });

