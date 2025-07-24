import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void,
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // ini jadi aku pengen kalo input field empty itu gabisa submit, trim menghapus white spaces
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done?" className="rounded-s-md grow border border-gray-400 p-2 bg-white"/>  {/*rounded s cuma di kiri aja*/}
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"> {/*rounded e di kanan aja*/}
                Add
            </button>
        </form>
    )
}