# Magical functions -Hooks

# useState
example to understand is when you click a button username has changed from user to username.
   Hi, user ->Hi, Bhu
   17k followers->18k followers

   const [a, setA] = useState(20)

   initialize a=20 , by setA we can change state.

   setA(30)  to change 

# useEffect
    handle side effects
    main task is running and side function also runs 

# useRef
    select any Dom element.

# useContext
access global state without prop drilling 
    global context -> data 
    darktheme , light theme from any where toggle it.

# useReducer
    access to different pages 
    
    useState-> basic changes
    useContext -> global changes
    useReducer -> complext global changes

# useMemo and useCallback 
    for optimization & unnecessary render.