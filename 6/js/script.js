        var popup = document.querySelector(".popup");
        var link = document.querySelector(".modal-login");
        var close = popup.querySelector(".modal-close");
        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=name]");
        var password = popup.querySelector("[name=email]");
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            login.focus();
        });
        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        });
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });

