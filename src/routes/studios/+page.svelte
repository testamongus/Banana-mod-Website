<script>
    import { onMount } from "svelte";
    import ProjectApi from "../../resources/projectapi.js";
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
  
    const ProjectClient = new ProjectApi();
  
    let studioProjects = [];
    let selectedProject = null;
    let studioImage = null;
  
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
      if (selectedProject) {
        studioProjects.push(selectedProject);
        selectedProject = null;
      }
    };
  
    const removeProjectFromStudio = (index) => {
      studioProjects.splice(index, 1);
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
    * {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  
    textarea {
      width: 90%;
      resize: none;
      height: 100px;
      border-radius: 6px;
      border-style: dashed;
      border-color: rgba(0, 162, 255, 0.15);
      border-width: 2px;
    }
    textarea:focus {
      border-color: rgba(0, 162, 255, 0.35);
      outline: none;
    }
    input[type="text"] {
      width: 90%;
      border-radius: 6px;
      border-color: rgba(0, 162, 255, 0.15);
      border-width: 2px;
      border-style: dashed;
    }
    input[type="text"]:focus {
      border-color: rgba(0, 162, 255, 0.35);
      outline: none;
    }
  
    :global(body.dark-mode) input[type="text"] {
      background-color: transparent;
      color: white;
    }
    :global(body.dark-mode) textarea {
      background-color: transparent;
      color: white;
    }
  
    .main {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      min-width: 1000px;
    }
    :global(body.dark-mode) .main {
      color: white;
    }
  
    .section-info {
      background: #00c3ffad;
      height: 6rem;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0;
      text-align: center;
    }
  
    .card {
      width: 60%;
      padding: 32px;
      border-style: solid;
      border-width: 2px;
      border-color: rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      position: relative;
    }
    .full {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;
    }
    :global(body.dark-mode) .card {
      border-color: rgba(255, 255, 255, 0.3);
    }
  
    .important {
      font-weight: bold;
    }
    .notmargin {
      margin-block: 0;
    }
  
    .file-picker {
      display: block;
      background-color: #00c3ff;
      color: white;
      border-radius: 1000px;
      width: 100%;
      border: 0px;
      padding: 0.25rem 0;
      outline: 0;
      cursor: pointer;
      font-weight: bold;
      text-align: center;
    }
    .file-picker:focus {
      outline: 4px solid rgba(0, 195, 255, 0.3);
    }
  
    .hidden-picker {
      width: 0px;
      height: 0px;
      display: block;
    }
  
    .external-loading {
      background: rgba(0, 0, 0, 0.75);
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      z-index: 99999;
    }
  
    .front-card-page {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 99998;
    }
    .card-page {
      box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);
      background: white;
      border-radius: 16px;
      width: 85%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    :global(body.dark-mode) .card-page {
      background: #1f1f1f;
    }
    .card-header {
      width: 97.5%;
      border-bottom: #00000030 1px solid;
      text-align: center;
    }
    .card-projects {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      overflow: auto;
      height: 100%;
    }
  
    .guidelines-link {
      background: transparent;
      border: 0;
      color: dodgerblue;
      text-decoration: underline;
      cursor: pointer;
    }
    /* iframe {
      width: 100%;
      border: 0;
    } */
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
        {#each studioProjects as project, index (project.id)}
          <li>
            {project.name} 
            <button on:click={() => removeProjectFromStudio(index)}>Remove</button>
          </li>
        {/each}
      </ul>
    </section>
  
    <section>
      <h2>Add Project to Studio</h2>
      <select bind:value={selectedProject}>
        {#each studioProjects as project (project.id)}
          <option value={project}>{project.name}</option>
        {/each}
      </select>
      <button on:click={addProjectToStudio}>Add to Studio</button>
    </section>
  
    <button on:click={saveStudio}>Save Studio</button>
  </main>
  