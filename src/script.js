// From DOM to JS
const border = document.getElementById('border');
const borderRadius = document.getElementById('borderradius-range');
const borderColor = document.getElementById('bordercolor-range');
const blur = document.getElementById('blur-range');
const opacity = document.getElementById('opacity-range');
const grayscale = document.getElementById('grayscale-range');


const image = document.getElementById('image');

// Modifiying CSS variables

border.addEventListener('change', function(){
    image.style.borderWidth = `${border.value}px`;
    console.log(border.value);
});


borderRadius.addEventListener('change', function(){
    image.style.borderRadius= `${borderRadius.value}px`;
    console.log(borderRadius.value);
});

borderColor.addEventListener('change', function(){
    image.style.borderColor = `${borderColor.value}`;
    console.log(borderColor.value);
});


// Color modifying

blur.addEventListener('mouseup', function(){
    image.style.filter = `blur(${blur.value}px) opacity(${opacity.value}) grayscale(${grayscale.value})`;
    console.log(blur.value);
});

opacity.addEventListener('mouseup', function(){
    image.style.filter = `blur(${blur.value}px) opacity(${opacity.value}) grayscale(${grayscale.value})`;
    console.log(opacity.value);
});

grayscale.addEventListener('mouseup', function(){
    image.style.filter = `blur(${blur.value}px) opacity(${opacity.value}) grayscale(${grayscale.value})`;
    console.log(grayscale.value);
});




