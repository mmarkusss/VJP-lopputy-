/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

     // Array kommentien varastoimiseen
     let comments = [];

     // Funktio kommentin lisäämiseen
     function addComment() {
       const commentInput = document.getElementById('comment-input');
       const commentText = commentInput.value.trim();
 
       if (commentText !== '') {
         const comment = {
           id: Date.now(),
           text: commentText,
           likes: 0,
           liked: false
         };
 
         comments.push(comment);
         commentInput.value = '';
 
         displayComments();
       }
     }
 
     // Funktio tykkäyksiin
     function likeComment(comment) {
       comment.likes++;
       comment.liked = true;
       displayComments();
     }
 
     // Funktio tykkäyksien poistoon
     function unlikeComment(comment) {
       comment.likes--;
       comment.liked = false;
       displayComments();
     }
 
     // Funktio kommentin poistamiseen
     function deleteComment(comment) {
       comments = comments.filter((c) => c.id !== comment.id);
       displayComments();
     }
 
     // Funktio kommentien näyttämiseen
     function displayComments() {
       const commentsContainer = document.getElementById('comments');
       commentsContainer.innerHTML = '';
 
       comments.forEach((comment, index) => {
         const commentElement = document.createElement('div');
         commentElement.classList.add('comment');
 
         const commentText = document.createElement('p');
         commentText.textContent = comment.text;
         commentElement.appendChild(commentText);
 
         const likeButton = document.createElement('span');
         likeButton.classList.add('like-button');
 
         const unlikeButton = document.createElement('span');
         unlikeButton.classList.add('unlike-button');
 
         const deleteButton = document.createElement('span');
         deleteButton.classList.add('delete-button');
         deleteButton.textContent = "  Poista kommentti";
 
         if (comment.liked) {
           likeButton.innerHTML = `&#128077; ${comment.likes}`;
           unlikeButton.innerHTML =   " Poista tykkäys";
           likeButton.onclick = () => unlikeComment(comment);
           unlikeButton.onclick = () => unlikeComment(comment);
         } else {
           likeButton.innerHTML = `&#128077; ${comment.likes}`;
           unlikeButton.innerHTML = ``;
           likeButton.onclick = () => likeComment(comment);
         }
 
         deleteButton.onclick = () => deleteComment(comment);
 
         commentElement.appendChild(likeButton);
         commentElement.appendChild(unlikeButton);
         commentElement.appendChild(deleteButton);
 
         commentsContainer.appendChild(commentElement);
       });
     }