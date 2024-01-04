<script>
    import { onMount } from 'svelte';
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
  
    let studio = {};
  
    onMount(async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const studioId = urlParams.get('id');
  
      if (studioId) {
        // Fetch studio data based on the provided ID
        const response = await fetch(`https://snailstudios.glitch.me/get-studios`);
        const studios = await response.json();
  
        studio = studios[studioId];
  
        // Resize the image to 480x360
        const img = new Image();
        img.src = studio.image;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 480;
          canvas.height = 360;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, 480, 360);
          studio.image = canvas.toDataURL('image/png');
  
          // Fetch and update project images
          studio.projects.forEach(async (project) => {
            const projectId = project.url.split('#').pop();
            const projectResponse = await fetch(`https://snailshare-backend.glitch.me/api/pmWrapper/iconUrl?id=${projectId}`);
            const projectImageBlob = await projectResponse.blob();
            const projectImageUrl = URL.createObjectURL(projectImageBlob);
            project.image = projectImageUrl;
  
            // Force Svelte to re-render after updating project image
            studio.projects = [...studio.projects];
          });
        };
      }
    });
  </script>
  
  <style>
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
  </style>
  
  <NavigationBar />
  
  <div class="container">
    {#if studio.name}
      <div class="studio-container">
        <h1>{studio.name}</h1>
        <img class="studio-image" src={studio.image} alt={studio.name} />
  
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
  