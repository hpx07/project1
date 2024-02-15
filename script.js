// Example blog post data
const blogPosts = [

    { title: "Title", content: "Explore the basics of responsive web design.", date: "2023-08-29" },
    { title: "Title", content: "Explore the basics of responsive web design.", date: "2023-08-29" },
    { title: "Title", content: "Explore the basics of responsive web design.", date: "2023-08-29" },
    { title: "Title", content: "Explore the basics of responsive web design.", date: "2023-08-29" },
    { title: "Title", content: "Explore the basics of responsive web design.", date: "2023-08-29" },
];

// Function to create a blog post card
function createBlogCard(post) {
    const card = document.createElement("div");
    card.classList.add("blog-card");
    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p class="date">${post.date}</p>
    `;
    return card;
}

// Add blog post cards to the page
const blogList = document.querySelector(".blog-list");
blogPosts.forEach(post => {
    const card = createBlogCard(post);
    blogList.appendChild(card);
});