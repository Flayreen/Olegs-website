const form = document.querySelector(".contact__form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const formData = new FormData(form);
        const dataToSend = JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            text: formData.get('text')
        });

        const response = await fetch("https://site-for-nastya-992919e1b4a3.herokuapp.com/mail", {
            method: "POST",
            body: dataToSend,
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const modal = document.querySelector(".congratulation");
            modal.classList.remove("congratulation-hidden");
            document.body.style.overflow = "hidden";

            const modalBackground = document.querySelector(".congratulation");
            const modalScroll = window.scrollY;
            modalBackground.style.top = modalScroll + "px";
        }

    } catch (error) {
        console.log(error)
    }
})