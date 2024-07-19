const apiUrl = "https://gorest.co.in/public-api/posts";

async function fetchPosts() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization:
          "Bearer 9b34e0a60fd5187e24363d77d2617d5cb1577fb33a7fff27363385974b9ce988",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar postagens");
    }

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Erro:", error);
  }
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  posts.data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p class="author">Autor: ${post.user_id}</p>
        `;

    postsContainer.appendChild(postElement);
  });
}

document.addEventListener("DOMContentLoaded", fetchPosts);
