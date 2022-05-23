let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let user = document.querySelector('input[name="username"]');
  let password = document.querySelector('input[name="password"]');
    
  if (user.value == '' && password.value ==''){
    alert('Ingrese un usuario y su clave');
  } 
  else if (user.value == ''){
        alert('Ingrese un nombre de usuario')
      } else if (password.value == ''){
              alert('Ingrese una clave');
            } else if (!user.value.includes('@')){
                    alert('El nombre de usuario debe tener un @');
                } else {
                    form.submit();
                }
});