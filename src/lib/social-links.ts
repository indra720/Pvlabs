import { Linkedin, MessageCircle } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

export const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/pvlabs",
    hoverColor: "group-hover:text-[#0077B5]",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    href: "https://x.com/pvlabs",
    hoverColor: "group-hover:text-black",
  },
  {
    icon: SiThreads,
    label: "Threads",
    href: "https://threads.net/@pvlabs",
    hoverColor: "group-hover:text-black",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/917417791003",
    hoverColor: "group-hover:text-[#25D366]",
  },
];
