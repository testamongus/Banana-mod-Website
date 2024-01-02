<script>
    import { onMount } from "svelte";
    import ProjectApi from "../../resources/projectapi.js";
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
  
    const ProjectClient = new ProjectApi();
  
    let studioProjects = [];
    let projectUrlInput = "";
    let studioImage = null;
    let addedProjects = [];
  
    const loadProjects = () => {
      ProjectClient.getProjects(/* specify your page and oldFirst parameters */)
        .then((projects) => {
          studioProjects = projects;
        })
        .catch((error) => {
          console.error("Error loading projects:", error);
        });
    };
  
    const addProjectToStudio = () => {
      if (projectUrlInput && projectUrlInput.startsWith("https://snail-ide.js.org/")) {
        studioProjects.push({ url: projectUrlInput });
        addedProjects.push({ url: projectUrlInput, image: studioImage });
        projectUrlInput = "";
      }
    };
  
    const removeProjectFromStudio = (index) => {
      studioProjects.splice(index, 1);
      addedProjects.splice(index, 1);
    };
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          studioImage = reader.result; // Set studioImage as Data URL
        };
        reader.readAsDataURL(file);
      }
    };
  
    const saveStudio = () => {
      // Implement logic to save the studio with the updated project list and studioImage
      console.log("Saving studio with projects and image:", studioProjects, studioImage);
    };
  
    onMount(() => {
      loadProjects();
    });
  </script>
  
  <style>
    /* Your provided styles here */
  </style>
  
  <NavigationBar />
  
  <main>
    <NavigationMargin />
    <h1>Snail IDE Studio</h1>
  
    <section>
      <h2>Studio Image</h2>
      <input type="file" accept="image/*" on:change={handleImageUpload} />
      {#if studioImage}
        <img src={studioImage} alt="Studio Image" />
      {/if}
    </section>
  
    <section>
      <h2>Available Projects</h2>
      <ul>
        {#each studioProjects as project, index (project.url)}
          <li>
            {project.url} 
            <button on:click={() => removeProjectFromStudio(index)}>Remove</button>
          </li>
        {/each}
      </ul>
    </section>
  
    <section>
      <h2>Add Project to Studio</h2>
      <input type="text" bind:value={projectUrlInput} placeholder="Enter project URL" />
      <button on:click={addProjectToStudio}>Add to Studio</button>
    </section>
  
    <button on:click={saveStudio}>Save Studio</button>
  
    <section>
      <h2>Added Projects</h2>
      {#each addedProjects as project, index (project.url)}
        <div>
          <h3>{project.url}</h3>
          {#if project.image}
            <img src={project.image} alt="Project Image" />
          {/if}
        </div>
      {/each}
    </section>
  </main>
  