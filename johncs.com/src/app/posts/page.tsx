import Link from "next/link";
import PostIndex from "./PostIndex";

export default function Posts() {
  return (
    <main>
      <p>
        I blog sometimes! I&apos;ve covered topics including software
        engineering, polyamory, tabletop RPGs, and random other things.
      </p>
      <p>
        You can be alerted to new posts by subscribing through{" "}
        <Link href="/rss.xml">RSS</Link> or following me on{" "}
        <a href="https://twitter.com/itsjohncs">Twitter</a>.
      </p>
      <PostIndex />
    </main>
  );
}