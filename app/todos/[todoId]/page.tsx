import { notFound } from 'next/navigation'
import React from 'react'
import { Todo } from '../../../typings'

export const dynamicParams = true;

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        { next: { revalidate: 60 } }
    );

    const todos: Todo = await res.json();
    return todos;
}

async function Todo({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);
    if (!todo.id) return notFound();
    return (
        <div className='p-4 bg-gray-400 m-2 shadow-lg rounded-lg'>Todo:
            <p>#{todo.id}: {todo.title}</p>

            <p> Completed : {todo.completed ? "Yes" : "No"}</p>
            <p className='border-t border-dotted mt-5 text-right'>
                By User :{todo.userId}
            </p>
        </div>
    )
}

export default Todo

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await res.json();

    //Only 10 pages to avoid rate limite by the jsonplaceholder api
    const trimmedTodos = todos.splice(0, 10);

    return trimmedTodos.map(todo => ({
        todoId: todo.id.toString()
    }))

}
