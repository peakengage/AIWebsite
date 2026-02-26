"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const t = useTranslations("Nav");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-72 bg-white shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <nav className="p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                    activeSection === item.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
