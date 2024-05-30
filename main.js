let menu = document.querySelector(".nav ul")
        let bars = document.querySelector(".nav .fa-bars")
        bars.addEventListener("click", function () {
            menu.classList.toggle("show")
        })

        document.getElementById('navigate').addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = event.target.href;
            }, 500); // Duration of the fade-out animation
        });