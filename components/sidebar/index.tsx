import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineSolution,
  AiOutlineFileSearch,
  AiOutlineSetting,
} from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="h-full w-64 bg-neutral-100 p-4 space-y-4">
      <div className="w-full flex items-center justify-center py-4">
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>

      <Anchor icon={<AiOutlineHome className="size-5" />} text="Home" href="/" />
      <Anchor icon={<AiOutlineSolution className="size-5" />} text="Guide" disabled href="/guide" />
      <Anchor
        icon={<AiOutlineFileSearch className="size-5" />}
        text="Files Search"
        disabled
        href="/files-search"
      />
      <Anchor
        icon={<AiOutlineSetting className="size-5" />}
        text="Settings"
        disabled
        href="/settings"
      />
    </div>
  );
}

function Anchor({
  icon,
  text,
  href,
  disabled,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  disabled?: boolean;
}) {
  return (
    <Link
      className={cn(
        "w-full py-1 px-2 hover:bg-neutral-200 rounded-lg flex items-center space-x-3 transition-colors",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
      href={disabled ? "" : href}
    >
      {icon}
      <p className="">{text}</p>
    </Link>
  );
}
