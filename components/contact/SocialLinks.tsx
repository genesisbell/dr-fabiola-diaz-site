"use client";

import { useLanguage } from "@/lib/context/LanguageContext";
import { FacebookIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function SocialLinks() {
  const { t } = useLanguage();
  const { social, phoneUrl, phone } = t.footer;

  const links = [
    {
      href: social.instagram,
      Icon: InstagramIcon,
      label: "Instagram",
      hover: "hover:border-instagram hover:text-instagram",
    },
    {
      href: social.facebook,
      Icon: FacebookIcon,
      label: "Facebook",
      hover: "hover:border-facebook hover:text-facebook",
    },
    {
      href: social.whatsapp,
      Icon: WhatsAppIcon,
      label: "WhatsApp",
      hover: "hover:border-whatsapp hover:text-whatsapp",
    },
    {
      href: phoneUrl,
      Icon: PhoneIcon,
      label: phone,
      hover: "hover:border-secondary hover:text-secondary",
    },
  ];

  return (
    <div className="flex gap-3 mb-8">
      {links.map(({ href, Icon, label, hover }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("tel:") ? undefined : "_blank"}
          rel={href.startsWith("tel:") ? undefined : "noopener noreferrer"}
          className={`social-btn ${hover}`}
        >
          <Icon className="size-5" />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </div>
  );
}
