<script>
    import Swal from 'sweetalert2';
    
    function showAlert() {
      Swal.fire({
                      title: 'Project Succesfuly Uploaded!',
                      text: "Click the button below to view your project.",
                      confirmButtonText: "Take me to my project",
                      icon: "success",
                      allowOutsideClick: false,
                      preConfirm: () => {
                          window.location.href = 'https://example.com';
                      }
                  })
    }
  </script>
  
  <button on:click={showAlert}>Click me</button>
  