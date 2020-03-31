// select all control inputs

// NB: querySelectorAll returns nodelist (limited methods) not an array
const ctrls = document.querySelectorAll('.controls input');

function handleUpdate() {
    // need to add px to blur value but not base
    const suffix = (this.name == 'blur') ? 'px' : '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}


ctrls.forEach(element => element.addEventListener('change', handleUpdate));
ctrls.forEach(element => element.addEventListener('mousemove', handleUpdate));

