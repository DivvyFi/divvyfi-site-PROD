import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" style={{ display: "inline-block" }}>
      <Image
        src="/images/logo/divvyfi-logo.png"   // 👈 updated path
        alt="DivvyFi Logo"
        width={125}
        height={50}
        priority
        quality={100}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "125px",
          display: "block",
        }}
      />
    </Link>
  );
};

export default Logo;
