import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/pages/about">À propos</Link>
          </li>
          <li>
            <Link href="/pages/projects">Projets</Link>
          </li>
          <li>
            <Link href="/pages/comp">COMP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}