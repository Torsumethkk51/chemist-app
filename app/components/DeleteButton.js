'use client'
import { useRouter } from "next/navigation";

export default function DeleteButton({taskId}) {
    const router = useRouter()

    const onDelete = async () => {
        const response = await fetch("/api/task/" + taskId, {
            method: "DELETE"
        });
        router.push("/dashboard/rating");
        location.reload()
    }
    
    return (
        <button onClick={onDelete}>Delete</button>
    )
}