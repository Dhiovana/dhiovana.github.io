const effects = document.getElementById("filter");
const effectIntensity = document.getElementById("effectIntensity");

const getFilter = () => effects.value ?? 'none' 

const getIntensity = () => effectIntensity.value ?? 0

const getMetric = effect => {
    if (effect == 'blur') return 'px';
    if (effect == 'hue-rotate') return 'deg';
    return '%';
}

const setFilter = () => {
    console.log("entrou na funcao")
    const appliedFilter = getFilter()
    const valueIntensity = getIntensity() + getMetric(appliedFilter);
    const image = document.getElementById("image"); 
    console.log(`${appliedFilter}(${valueIntensity})`)
    image.style.filter = `${appliedFilter}(${valueIntensity})`
}

effectIntensity.addEventListener("change", setFilter)
effects.addEventListener("change", setFilter)