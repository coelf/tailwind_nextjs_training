import { type } from 'os';
import React from 'react'

type PageProps = {
    params: {
        searchTerm: string;
    };
}
type Comments =
    [
        {
            postId: number;
            id: number;
            name: string;
            email: string;
            body: string;
        }
    ];



async function search(searchTerm: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${searchTerm}`,
        { next: { revalidate: 300 } }
    );

    //throw new Error("Fraacck It's broke")

    const data: Comments = await res.json();
    return data;
}


async function SearchResult({ params: { searchTerm } }: PageProps) {
    const searchResults = await search(searchTerm)
    return (
        <div>
            <p className="text-gray-500 text-sm">You searched for : {searchTerm} </p>

            <ol className="space-y-5 p-5">
                {searchResults.map((comment) => (
                    <li key={comment.id} className="list-decimal">
                        <p className="font-bold">#{comment.postId}:{comment.id} {comment.name} </p>
                        <p>{comment.body}</p>
                        <p className='border-t border-dotted mt-5 text-right'>By User :{comment.email}</p>

                    </li>

                ))}
            </ol>

        </div>
    )
}

export default SearchResult

