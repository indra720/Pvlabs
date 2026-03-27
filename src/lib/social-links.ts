import { Linkedin, MessageCircle, Instagram, Facebook } from "lucide-react";
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
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/pvlabs_?igsh=MWYwdGo4dmxwanZ2dA==",
    hoverColor: "group-hover:text-[#E4405F]",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1T75uqyNf9/",
    hoverColor: "group-hover:text-[#1877F2]",
  },
];

