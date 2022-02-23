// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  console.log(term);
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts  = await res.json();
  console.log(posts);

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        
      <h3>${post.category}</h3>
       <h2>${post.title}</h2><h4>${post.AutherName}</h4>
       <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}...</p>
        <p>${post.commenttext}</P>
        <a href="/details.html?id=${post.id}">Read more</a>
      </div>
    `
  });

  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());