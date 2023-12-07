"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then(resp => resp.json())
      .then(result => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      console.log(title, body);

      fetch('http://localhost:9999/topics/' + id, {
        method: 'PUT',
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
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </p>
      <p>
        <input type="submit" value={"update"} />
      </p>
    </form>
  )
}