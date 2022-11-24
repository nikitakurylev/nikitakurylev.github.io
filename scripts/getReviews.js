const createTemplate = (name, body) => {
    return `<div class="reviews-list__item">
            <h2><strong>${name}</strong></h2>
            <p>${body}</p>
        </div>`;
};

window.addEventListener("load", async () => {
    const loader = document.querySelector(".loader");
    const reviews = document.querySelector(".reviews");
    const error = document.querySelector(".error");
    const listOfReviews = document.querySelector(".reviews-list");
    loader.style.display = "block";
    reviews.style.display = "none";
    error.style.display = "none";

    await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((data) => {
            const page = Math.floor(Math.random() * 25);
            const result = data.slice(page * 20, (page + 1) * 20);
            result.forEach(({ name, body }) => {
                listOfReviews.insertAdjacentHTML(
                    "afterbegin",
                    createTemplate(name, body)
                );
            });
            loader.style.display = "none";
            reviews.style.display = "block";
            error.style.display = "none";
        })
        .catch(() => {
            loader.style.display = "none";
            reviews.style.display = "none";
            error.style.display = "block";
        });
});