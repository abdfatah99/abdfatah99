# Context

Objective:

- value of context
- add default value
- manipulate context value

## Create Context

- All Context live under `contexts` directory

```bash
├───src
│   └───contexts
|          └─personal-notes
```

### Content Navigation Context

This context used to track user state during reading the content of the notes.
For Example, user go from `Home` to `Personal-notes` page, `home` will be the
first state of the navigation.

If user goes to `Database` Menu, `Content Navigation State` will update to
`Home > Database`. The `user state position` will manage by
`Content Navigation Context`.

#### Context Structure

```jsx
context = {
    nav: [],
    setNav: Dispatch Function
}
```

- `nav` is the state that you have to manage
- `setNav` is a dispatch (menugaskan) function to manipulate the `nav` state.

#### Create the context:

interface for the context:

```tsx
interface IpsContentNavContext {
  nav: string[];
  setNav: React.Dispatch<React.SetStateAction<string[]>>;
}
```

- `Ips`: stand for `Interface Personal Notes`
- Type of the `setNav` dispatch function is dispatching list of string.

create the context based on the interface:

```jsx
const psContentNavContext = createContext<IpsContentNavContext | undefined>(
  undefined,
);
```
- `ps`: Personal Notes
- The default value for the context is `undefined`.
- The structure of the context is `{ nav: string[], setNav: dispatch() }`

## Spread Context

The `Content Navigation Context` only live under `personal-note` page (here,
`personal-notes` is the root page of all notes page). Therefor,
I create the Context Provider in the root page of `personal-note` which live in
`app > personal-notes > page`.

The Initial state also created in the root page, `app > personal-notes > page`.
The initial state is:

```jsx
const [nav, setNav] = useState<string[]>(["Home"])
```

Then I make that `State` as the value of `Context.Provider`. Also with the
`setNav` function as a dispatcher to the State.

```jsx
function PersonalNotesPage() {
  const [nav, setNav] = useState<string[]>(["Home"]);
  return (
    <psContentNavContext.Provider value={{ nav, setNav }}>
      <PersonalNotes />
    </psContentNavContext.Provider>
  );
}
```

As mentioned in the documentation, all `children` component will able to access
and manipulate the provided context.

## Consume Context

`templates > personal-notes > PersonalNotes.tsx` is the **Template** of Personal
Notes page. In this case, we'll try to access the context provided:

```jsx
const navigationValue = useContext(psContentNavContext);
```

Because the context is a `state` build by `useState()` Hook function, actually
you can directly destructuring the Context.

```jsx
const { nav, setNav } = useContext(psContentNavContext);
```

## Manipulate the State

To manipulate the state, you can use the `setNav` dispatcher function.

```jsx
const updateNav = () => {
  setNav((prevNav) => [...prevNav, "material 1"]);
};

const reduceNav = () => {
  setNav((prevNav) => prevNav.slice(0, -1));
};
```
