import { useParams } from "react-router-dom"

export const User = () => {
    const { userId } = useParams();
    return (
        <div className="text-center bg-slate-950 text-zinc-50 text-3xl p-2">User:{userId}</div>
    )
}