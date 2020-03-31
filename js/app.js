// select all control inputs

// NB: querySelectorAll returns nodelist (limited methods) not an array
const ctrls = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this.value);
}


ctrls.forEach(element => element.addEventListener('change', handleUpdate));
ctrls.forEach(element => element.addEventListener('mousemove', handleUpdate));

