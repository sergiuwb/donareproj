const animalForm = document.querySelector("#animalForm")
animalForm.addEventListener("submit", (e) => {
e.preventDefault()
  const animal = {
    name: e.target.name.value,
    imageUrl: e.target.imageUrl.value,
    description: e.target.description.value,
    donation: 0
  }
  console.log(animal)
  createAnimal(animal).then(newAnimal => {
    console.log("succes", newAnimal)
  })
})
