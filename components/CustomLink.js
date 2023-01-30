import Link from "next/link";

function CustomLink({ href, className, linkName }) {
  return (
    <>
      <Link
        href={href}
        className={className}
        target="_blank"
        // rel="noreferrer"
      >
        {linkName}
      </Link>
    </>
  );
}

export default CustomLink;
