import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Error repros:</h1>
      <ul>
        <li>
          <Link href="/modal-focus">
            <a>Modal focus</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
