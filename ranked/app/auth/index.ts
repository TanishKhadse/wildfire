import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "@/firebase/clientApp"

const [user, loading, error] = useAuthState(auth);

// not needed right now --> supposed to be used to prevent going to certain url's