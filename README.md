# Reactive Variables

Simple examples of how to use variables that our JSX is dependent on and that changes over time, either due to user inputs or some other event that happend somewhere else and we were listening for.

## Short examples

Signature of the useState hook:

```jsx
const [ state, setState ] = useState(initialState)
```

Updating the state to an explicit state:

```jsx
setState(newState)
```

When the new state is based on the old state:

```jsx
setState(
  (oldState) => { return oldState + difference }
)
```

Keep the state immutable (ie. create new objects don't change them):

```jsx
setState(
  (oldStateObject) => {
    return {
      ...oldStateObject, // Copy the old state into the new state
      ...partialUpdate, // Overwrite existing fields with updated ones
    }
  }
)
```

Derive what you can, rather than store everything that changes in a reactive variable:

### GOOD

```jsx
const [ filter, setFilter ] = useState("")

const list = getList()
const filteredList = list.filter(item => item.includes(filter))

function updateFilter(newValue) {
  setFilter(newValue)
}
```

### BAD

```jsx
const list = getList()
const [ filter, setFilter ] = useState("")
const [ filteredList, setFilteredList ] = useState(list)

function updateFilter(newValue) {
  setFilteredList(list.filter(item => item.includes(newValue)))
  setFilter(newValue)
}
```

## Links

 - [useState](https://react.dev/reference/react/useState)
 - [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)