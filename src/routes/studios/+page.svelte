<script>
  import { onMount } from "svelte";
  import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
  import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";

  let studioProjects = [];
  let projectUrlInput = "";
  let studioImage = null;
  let addedProjects = [];
  let studioJsonUrl = "";

  const saveStudioToJson = () => {
    const studioData = { projects: studioProjects, image: studioImage };
    const jsonString = JSON.stringify(studioData, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });
    studioJsonUrl = window.URL.createObjectURL(blob);
  };

  const addProjectToStudio = () => {
    if (projectUrlInput.trim() !== "") {
      const urls = projectUrlInput.split('\n').map(url => url.trim());
      urls.forEach(url => {
        if (url.startsWith("https://snail-ide.js.org/") && !studioProjects.some(project => project.url === url)) {
          studioProjects.push({ url });
          addedProjects = [...studioProjects];
        }
      });

      projectUrlInput = "";
      saveStudioToJson(); // Save studio to JSON in the background when new items are added
    }
  };

  const removeProjectFromStudio = (index) => {
    studioProjects.splice(index, 1);
    addedProjects = [...studioProjects];
    saveStudioToJson();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        studioImage = reader.result;
        saveStudioToJson();
      };
      reader.readAsDataURL(file);
    }
  };

  const submitStudio = () => {
    // Add code for submitting the studio data
    console.log("Studio data submitted:", studioProjects, studioImage);
    // You can add an API call or other logic to handle the submission
  };

  onMount(() => {
    // You can load the studio data from a JSON file here if needed
  });
</script>

<title>Snail IDE - Studio Management</title>

<style>
  :root {
    font-family: Arial;
  }

  main {
    padding: 20px;
  }

  h1 {
    color: #333;
  }

  section {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    margin-bottom: 5px;
  }

  textarea {
    width: 100%;
  }
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
    <textarea bind:value={projectUrlInput} placeholder="Enter project URLs (one per line)"></textarea>
    <button on:click={addProjectToStudio}>Add to Studio</button>
  </section>

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

  {#if studioJsonUrl}
    <section>
      <h3>All Projects:</h3>
      <ul>
        {#each addedProjects as project, index (project.url)}
          <li on:click={() => removeProjectFromStudio(index)}>
            {project.url}
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <button on:click={submitStudio}>Submit</button>
</main>
