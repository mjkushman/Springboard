import {useState} from 'react'
interface GreeterProps {
    person:string,
    punctuation:string
}

export default function Greeter({person, punctuation}: GreeterProps) {
    
    const [score, setScore] = useState(3)
    
    interface User {
        name:string;
        email: string;
    }

    // use Generics!
    const [points, setPoints] = useState<string | number>(); // Tells TS that points can either be of type string or number, and starts empty
    const [user, setUser] = useState<User | null>(null); // Tells TS that user can either be of type User (interface) or null, and starts as null


    return (
    

    <h1>hey here</h1>)
}

 