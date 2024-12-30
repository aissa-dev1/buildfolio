import Link from "next/link";

export default function HomeHeader() {
  return (
    <div>
      <p>Hi there</p>
      <Link href="/about">About</Link>
    </div>
  );
}
