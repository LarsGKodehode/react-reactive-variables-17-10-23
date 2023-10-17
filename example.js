function greeting() {
  let name = "Lars"

  setTimeout(
    () => {name = "Greg"},
    1000,
  )

  return `Greeting ${name}`
}


const personalGreeting = greeting()

setInterval(
  () => console.log(personalGreeting),
  500
)