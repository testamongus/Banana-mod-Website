<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    let project;
  
    onMount(() => {
      const urlParams = new URLSearchParams(window.location.search);
      project = urlParams.get('project');
      fetchComments();
    });
  
    let comments = [];
    let newComment = '';
    let error = '';
  
    const fetchComments = () => {
      if (project) {
        fetch(`https://snailshare.xyz/api/getCommentsForProject?project=${project}`)
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              error = data.error;
            } else {
              comments = data.comments;
            }
          })
          .catch(err => {
            error = 'Error fetching comments';
          });
      }
    };
  
    const handlePostComment = () => {
      const passcode = localStorage.getItem('PV');
  
      if (!passcode) {
        error = 'Passcode not found in local storage';
        return;
      }
  
      const packet = {
        author: 'currentUser',
        passcode: passcode,
        content: newComment,
        project: project
      };
  
      fetch('https://snailshare.xyz/api/postComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(packet)
      })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          comments = [{
            user: packet.author,
            text: packet.content,
            replies: [],
            id: Date.now()
          }, ...comments];
          newComment = '';
        } else {
          error = data.error || 'Error posting comment';
        }
      })
      .catch(err => {
        error = 'Error posting comment';
      });
    };
  </script>
  
  <h2>Comments</h2>
  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  
  {#each comments as comment}
    <div key={comment.id}>
      <p><strong>{comment.user}</strong>: {comment.text}</p>
      {#each comment.replies as reply}
        <div key={reply.id} style="margin-left: 20px;">
          <p><strong>{reply.user}</strong>: {reply.text}</p>
        </div>
      {/each}
    </div>
  {/each}
  
  <div>
    <textarea
      bind:value={newComment}
      placeholder="Write a comment..."
    ></textarea>
    <button on:click={handlePostComment}>Post Comment</button>
  </div>
  
  <style>
    /* erm what the sigma */
  </style>
  