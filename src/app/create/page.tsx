"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;

      fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          body: body
        })
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          const lastId = json.id;
          router.push(`/read/${lastId}`);
          router.refresh();
        });
    }}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        <input type="submit" value={"create"} />
      </p>
    </form>
  )
}