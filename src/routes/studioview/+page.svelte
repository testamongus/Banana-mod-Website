<!-- Importing components and libraries should be done at the top -->
<script>
  import { onMount } from 'svelte';
  import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";

  let studio = {};
  let comments = []; // Array to store comments

  // Function to fetch studio data with retries and error handling
  const fetchStudioData = async (studioId) => {
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(`https://snailstudios.glitch.me/get-studios`);
        const studios = await response.json();

        studio = studios[studioId];
        return true;
      } catch (error) {
        attempts++;

        if (attempts === maxAttempts) {
          console.error("Failed to fetch studio data:", error);
          return false;
        }

        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
  };

  // Function to handle image loading and project image fetching
  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const studioId = urlParams.get('id');

    if (studioId) {
      const dataFetched = await fetchStudioData(studioId);

      if (!dataFetched) {
        console.error("Studio data not found after multiple attempts.");
        return;
      }

      const img = new Image();
      img.src = studio.image;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 480;
        canvas.height = 360;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 480, 360);
        studio.image = canvas.toDataURL('image/png');

        studio.projects.forEach(async (project) => {
          const projectId = project.url.split('#').pop();
          const projectResponse = await fetch(`https://snailshare.dreamhosters.com/api/pmWrapper/iconUrl?id=${projectId}`);
          const projectImageBlob = await projectResponse.blob();
          const projectImageUrl = URL.createObjectURL(projectImageBlob);
          project.image = projectImageUrl;

          // Trigger Svelte reactivity by creating a new array
          studio.projects = [...studio.projects];
        });
      };
    }
  });

  // Function to handle form submission and add comment
  const addComment = () => {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();
    if (comment !== '') {
      comments = [...comments, comment];
      commentInput.value = ''; // Clear input field after adding comment
    }
  };
</script>

<style>
  /* CSS styles should be organized and properly commented */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    text-align: center;
  }

  .studio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .studio-image {
    width: 100%;
    max-width: 480px;
    height: auto;
  }

  .project {
    margin-top: 20px;
    text-align: center;
  }

  .project-image {
    width: 100%;
    max-width: 200px;
    height: auto;
  }

  .studio-description {
    margin-top: 10px;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
  }

  .author-info {
    margin-top: 10px;
    text-align: center;
    font-style: italic;
  }

</style>

<!-- Navigation bar component -->
<NavigationBar />

<div class="container">
  <!-- Content rendering based on fetched studio data -->
  {#if studio.name}
    <div class="studio-container">
      <h1>{studio.name}</h1>
      
      {#if studio.author}
        <p class="author-info">Author: {studio.author}</p>
      {/if}

      <img class="studio-image" src={studio.image} alt={studio.name} />

      {#if studio.desc}
        <h2>Description:</h2>
        <p class="studio-description">{studio.desc}</p>
      {:else}
        <p class="studio-description">This studio was made before descriptions were added. You will be able to fix this once studio editing is added.</p>
      {/if}

      {#each studio.projects as project (project.url)}
        <div class="project">
          <img class="project-image" src={project.image} alt="Project Image" />
          <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
        </div>
      {/each}
    </div>
  {:else}
    <p>No studio found</p>
  {/if}
</div>
