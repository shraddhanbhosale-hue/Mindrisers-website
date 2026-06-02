// Swiper
if (document.querySelector('.mySwiper')) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        speed: 6000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
        },
    });
}

// Arrow up
if (document.querySelector('.arrow-up i')) {
    document.querySelector('.arrow-up i').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// toggle
if (document.querySelector('.item')) {
    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });
}

// Hero button
if (document.querySelector('.hero-btn')) {
    document.querySelector('.hero-btn').addEventListener('click', function() {
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });
}

// View all services
if (document.querySelector('.view-all')) {
    document.querySelector('.view-all').addEventListener('click', function() {
        window.location.href = 'services.html';
    });
}

// View all technologies
if (document.querySelector('.view-all-t')) {
    document.querySelector('.view-all-t').addEventListener('click', function() {
        window.location.href = 'technology.html';
    });
}

// View all portfolio
if (document.querySelector('.view-all-p')) {
    document.querySelector('.view-all-p').addEventListener('click', function() {
        window.location.href = 'portfolio.html';
    });
}

// Contact us
if (document.querySelector('.right-nav button')) {
    document.querySelector('.right-nav button').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
}



if (document.querySelector('.mid-nav')) {
    var currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.mid-nav a').forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}



// Send Enquiry
if (document.querySelector('.send-btn')) {
    document.querySelector('.send-btn').addEventListener('click', function() {
        var name = document.querySelector('input[placeholder="Enter name"]').value;
        var email = document.querySelector('input[placeholder="Enter email"]').value;
        var phone = document.querySelector('input[placeholder="Enter phone number"]').value;

        if (name === '' || email === '' || phone === '') {
            alert('Please fill all required fields!');
        } else {
            alert('Enquiry sent successfully! We will contact you soon.');

            document.querySelectorAll('.contact-form input').forEach(function(input) {
                input.value = '';
            });
            document.querySelector('.contact-form textarea').value = '';
        }
    });
}


// contact info 
if (document.querySelectorAll('.info-item')) {
    document.querySelectorAll('.info-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var text = item.querySelector('p').textContent;

            if (text === 'Facebook') {
                window.open('https://facebook.com/mindrisers', '_blank');
            } else if (text === 'Instagram') {
                window.open('https://instagram.com/mindrisers', '_blank');
            } else if (text === 'Whatsapp') {
                window.open('https://wa.me/9779843217125', '_blank');
            } else if (text === 'Messenger') {
                window.open('https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fmessages%2Ft%2F112200750406684', '_blank');
            } else if (text === 'Viber') {
                window.open('viber://chat?number=9779843217125', '_blank');
            } else if (text.includes('+977')) {
                window.open('tel:+9779843217125', '_blank');
            } else if (text.includes('@gmail')) {
                window.open('mailto:mindriserstechnology11@gmail.com', '_blank');
            } else if (text.includes('Kumari')) {
                window.open('https://www.google.com/maps/place/Mindrisers+Technologies/@27.7011697,85.3211393,17z/data=!3m1!4b1!4m6!3m5!1s0x4b30d1abfb49e3b3:0x35aaadffd0dcf62e!8m2!3d27.7011697!4d85.3211393!16s%2Fg%2F11ld6znjkc?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
            }
        });
    });
}


if (window.innerWidth <= 768) {
    var contactLink = document.querySelector('#contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
}




if (document.querySelector('#list')) {
    var menuIcon = document.querySelector('#list');
    var dropdown = document.querySelector('.mid-nav');
    var hero = document.querySelector('.hero');

    menuIcon.addEventListener('click', function() {
        dropdown.classList.toggle('dropdown');

        if (dropdown.classList.contains('dropdown')) {
            menuIcon.className = 'ri-close-line';
            menuIcon.id = 'list';
           hero.style.marginTop = 'calc(70vh - 80px)';
        } else {
            menuIcon.className = 'ri-list-unordered';
            menuIcon.id = 'list';
            hero.style.marginTop = '0';
        }
    });
}