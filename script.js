const likeButton = document.querySelector("#like-button");

const profileCard = document.querySelector(".profile-card");

likeButton.addEventListener("click", function () {

    profileCard.classList.toggle("liked");

    if (profileCard.classList.contains("liked")) {
        likeButton.textContent = "♥ Liked";
    } else {
        likeButton.textContent = "♡ Like";
    }

});