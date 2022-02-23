const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    category: form.Category.value,
    title: form.title.value,
    AutherName: form.AutherName.value,
    body: form.body.value,
    likes: 0,
    blogposttime:form.blogposttime.value,
    
  }

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' },
    dataType:"json",
    success:(x)=> {
      
      console.log(x);
      window.location="/writeblog.html";
      alert(AutherName + "blog created Successfully !!");
     

  }
  })

  window.location.replace('/index2.html')
}

form.addEventListener('submit', createPost);




               
            
          
          
        
        

    

