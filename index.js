document.addEventListener('DOMContentLoaded', () => {
    console.log('hola')
    const h1 = document.querySelector('h1')
    const input1 = document.querySelector('#calculo1')
    const input2 = document.querySelector('#calculo2')
    const btn = document.querySelector('#btnCalcular')
    const pResult = document.querySelector('#result')

    const form = document.querySelector('#form')

    form.addEventListener('submit', (event) => {
        // console.log(event)
        // event.preventDefault()
        const sumaInputs = input1.value + input2.value
        pResult.innerText = 'Resultado: ' + sumaInputs
    })

    btn.addEventListener('click', () => {
        const sumaInputs = input1.value + input2.value
        pResult.innerText = 'Resultado: ' + sumaInputs
    })

    // input1.addEventListener('change', () => {
    //     console.log('El usuario termino de escribir en el input 1')
    // })

    // input2.addEventListener('change', () => {
    //     console.log('El usuario termino de escribir en el input 2')
    // })

})





function myFunction() {

    const parrafito = document.querySelector('.parrafito')
    const pid = document.querySelector('#pid')
    const p = document.querySelector('p')

    console.log(input.value)

    console.log({
        h1,
        p,
        parrafito,
        pid,
        input
    })

    h1.innerText = 'Crack Grande'

    console.log(h1.getAttribute('myatribute'))
    h1.setAttribute('myatribute', 'increible')

    h1.classList.add('rojo')
    // h1.classList.remove('rojo')
    // h1.classList.toggle('rojo')
    h1.classList.contains('rojo')

    input.value = '123'

    const img = document.createElement('img')

    img.setAttribute('src', 'https://static.platzi.com/static/website/v2/images/avatar_default.png')

    console.log(img)

    // pid.innerHTML = ''
    // pid.append(img)
}
