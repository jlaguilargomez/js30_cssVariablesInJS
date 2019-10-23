// From DOM to JS
const border = document.getElementById('border-range');
const borderRadius = document.getElementById('borderradius-range');
const borderColor = document.getElementById('bordercolor-range');
const blur = document.getElementById('blur-range');
const opacity = document.getElementById('opacity-range');
const grayscale = document.getElementById('grayscale-range');


const image = document.getElementById('image');

// Modifiying CSS variables

border.addEventListener('mouseup', function(){
    image.style.border = `${border.value}px solid white`;
    console.log(border.value);
});


// Color modifying

blur.addEventListener('mouseup', function(){
    image.style.filter = `blur(${blur.value}px)`;
    console.log(blur.value);
});

opacity.addEventListener('mouseup', function(){
    image.style.filter = `opacity(${opacity.value})`;
    console.log(opacity.value);
});

grayscale.addEventListener('mouseup', function(){
    image.style.filter = `grayscale(${grayscale.value})`;
    console.log(grayscale.value);
});




