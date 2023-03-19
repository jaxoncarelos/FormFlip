let ended = true;
let registerSide = true;

const checked = document.querySelector('.checkbox'); 
checked.addEventListener('click', () => {
  if(!ended) return
  ended = false
  const form = document.querySelector('.form');
  console.log(registerSide)
  if(registerSide)
  {
    form.classList.add('animate')
  } else {
    form.classList.add('reverse')
  }
  setTimeout(() => {
        if(registerSide)
  {
    document.documentElement.style.setProperty('--background-color', '#e93b3b ')
    document.documentElement.style.setProperty('--text-color', '#a71c1c')
    
  } else {
    document.documentElement.style.setProperty('--background-color', '#0077B5 ')
    document.documentElement.style.setProperty('--text-color', '#00AEEF')
  }
    form.innerHTML = `
    <div class="data">
      <form>
        <h1>${registerSide ? "Register" : "Login"}</h1>
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
      </form>
    </div>
    `
    var child = form.lastElementChild;
    if(!registerSide)
    {
      child.style.transform = 'rotateY(180deg)'
    } else {
      child.style.transform = 'rotateY(0deg)'
    }
  }, 500)
  console.log(form.style.animationDuration)
  registerSide = !registerSide;
})

const form = document.querySelector('.form');
form.addEventListener('animationstart', () => {
  checked.disabled = true
})
form.addEventListener('animationend', () => {
  checked.disabled = false
  ended = true;
  var child = form.lastElementChild;
  if(!registerSide)
  {
    form.classList.remove('animate')
    form.style.transform = 'rotateY(180deg)'
  } else {
    form.classList.remove('reverse')
    form.style.transform = 'rotateY(0deg)'
  }
})