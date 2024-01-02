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
    if (projectUrlInput && projectUrlInput.startsWith("https://snail-ide.js.org/")) {
      studioProjects.push({ url: projectUrlInput });
      addedProjects.push({ url: projectUrlInput, image: studioImage });
      projectUrlInput = "";
      saveStudioToJson(); // Save studio to JSON in the background when a new item is added
    }
  };

  const removeProjectFromStudio = (index) => {
    studioProjects.splice(index, 1);
    addedProjects.splice(index, 1);
    saveStudioToJson(); // Save studio to JSON in the background when an item is removed
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        studioImage = reader.result; // Set studioImage as Data URL
        saveStudioToJson(); // Save studio to JSON in the background when image is changed
      };
      reader.readAsDataURL(file);
    }
  };

  onMount(() => {
    // You can load the studio data from a JSON file here if needed
  });
</script>

<style>
  /* Your provided styles here (dumo178: omg guyz its chatgpt*/

  :root {
    font-family: Arial;
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
    <input type="text" bind:value={projectUrlInput} placeholder="Enter project URL" />
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

  <section>
    <h2>Added Projects List</h2>
    <ul>
      {#each addedProjects as project (project.url)}
        <li>{project.url}</li>
      {/each}
    </ul>
  </section>

  {#if studioJsonUrl}
    <section>
      <h2>Studio JSON Data</h2>
      <p>View or copy the JSON data:</p>
      <textarea rows="10" readonly>{studioJsonUrl}</textarea>
    </section>
  {/if}
</main>
