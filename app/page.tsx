import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ButtonDestructive() {
    return (
        <>
            <Link href="./signup/signup.tsx">
                <Button variant="secondary" className="mr-2">SignUp</Button>
            </Link>
            <Link href="login/Login.tsx">
                <Button variant="secondary">Login</Button>
            </Link>
        </>
    )
}
