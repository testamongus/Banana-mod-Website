<script>
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
  
    let maxAge = "All Ages";
  
    function updateMaxAge(newMaxAge) {
      maxAge = newMaxAge;
      // ye
    }
</script>
  
<main>
    <NavigationBar />
    <NavigationMargin />
    
    <h1>Parental Controls</h1>
    
    <p>Choose the maximum age guideline for your child's usage:</p>
    
    <label>
        <input
          type="radio"
          name="maxAge"
          value="All Ages"
          bind:group={maxAge}
          on:change={() => updateMaxAge("All Ages")}
        />
        All Ages
    </label>
    
    <label>
        <input
          type="radio"
          name="maxAge"
          value="10+"
          bind:group={maxAge}
          on:change={() => updateMaxAge("10+")}
        />
        10+
    </label>
    
    <label>
        <input
          type="radio"
          name="maxAge"
          value="13+"
          bind:group={maxAge}
          on:change={() => updateMaxAge("13+")}
        />
        13+
    </label>
    
    <p>Current setting: {maxAge}</p>
</main>
  
<style>
    main {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
    
    label {
      display: block;
      font-size: 20px;
      margin-bottom: 10px;
    }
</style>
