$(document).ready(
    () => {
        $('button').click(
            (e) => {
                e.preventDefault();
                var name = $('#new_comment_name').val();
                var email =$('#new_comment_email').val();
                var commenttext = $('#new_comment_text').val();

        if(name=='' || email=='' || commenttext=='' ){
        alert("name and mail not entered");
        }
        else{
          {
                $.ajax({
                    url: " http://localhost:3000/commentusers",
                    method:"POST",
                    data: {
                        "name": name,
                        "email": email,
                        "commenttext":commenttext,
                    },
                    dataType:"json",
                    success:(x)=> {
                        
                        window.location="/details.html";
                        alert(name + "...your comment done Successfully  !");
                        console.log(x);

                    },
                    error: (err) => {
                        alert("Error: " + err);
                    }
                })
            }
            
            }
            }

        )

    })