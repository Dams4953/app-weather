export function darkmodeFunction() {

// interrupteur bouton
document.getElementById('checkbox').addEventListener('change', function(event) {
    document.body.classList.toggle('dark-mode', event.target.checked);
});


    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const bodyClassList = document.body.classList;
    const checkbox = document.getElementById('checkbox');
  
    if (isDarkMode) {
      bodyClassList.add('dark-mode');
      checkbox.checked = true;
    } else {
      bodyClassList.remove('dark-mode');
      checkbox.checked = false;
    };
  
  // changement de mode
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  })};