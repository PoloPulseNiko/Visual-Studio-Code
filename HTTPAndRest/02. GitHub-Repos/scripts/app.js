function loadRepos() {
   console.log("Loading repositories...");

   fetch('https://api.github.com/users/testnakov/repos', {
       method: 'GET'
   })
   .then(response => {
       if (!response.ok) {
           throw new Error('Network response was not ok');
       }
       return response.json();
   })
   .then(data => {
       const resDiv = document.getElementById('res');
       resDiv.innerHTML = ''; // Clear previous content

       data.forEach(repo => {
           const repoElement = document.createElement('div');

           // Create a pre element to display the JSON data
           const pre = document.createElement('pre');
           pre.textContent = JSON.stringify(repo, null, 2); // Pretty print JSON
           repoElement.appendChild(pre);

           resDiv.appendChild(repoElement);
       });
   })
   .catch(error => {
       console.error('Error fetching repositories:', error);
       const resDiv = document.getElementById('res');
       resDiv.textContent = 'Error loading repositories';
   });
}
