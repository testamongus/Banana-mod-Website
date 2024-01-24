<script context="module">
    export async function load({ params, query }) {
      // Check if the current domain is snail-ide.vercel.app
      if (window.location.hostname === 'snail-ide.vercel.app') {
        // Redirect to snail-ide.com
        window.location.href = "https://snail-ide.com" + window.location.pathname + window.location.search;
      }
    }
  </script>
  
