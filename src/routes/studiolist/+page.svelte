<script context="module">
    export async function load({ fetch }) {
      const res = await fetch('https://snailstudios.glitch.me/get-studios');
      const studios = await res.json();
      return {
        props: {
          studios
        }
      };
    }
  </script>
  
  <script>
    export let studios;
  </script>
  
  <style>
    .studio-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 250px;
    }
  
    .studio-card img {
      max-width: 100%;
      border-radius: 8px;
      margin-bottom: 10px;
    }
  </style>
  
  <div>
    {#each studios as studio (studio.id)}
      <div class="studio-card">
        <img src={studio.image} alt="Studio Image">
        <p>Studio: {studio.name}</p>
        <p>Creator: {studio.creator}</p>
      </div>
    {/each}
  </div>
  