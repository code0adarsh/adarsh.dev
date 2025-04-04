"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-slate hover:text-teal transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
              <motion.div
                transition={transition}
                layoutId="active" 
                className="bg-navy/90 backdrop-blur-sm rounded-lg overflow-hidden border border-teal/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-slate/10 bg-navy/80 shadow-md flex justify-center space-x-8 px-8 py-4 backdrop-blur-md"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 rounded-lg hover:bg-navy-light group transition-colors min-w-[200px]"
    >
      <div>
        <h4 className="text-lg font-bold mb-1 text-teal group-hover:text-teal-300 transition-colors">
          {title}
        </h4>
        <p className="text-slate text-sm max-w-[9rem]">{description}</p>
      </div>
    </a>
  );
};

// Define HoveredLinkProps by extending Link's props while omitting 'to' and 'children'
type HoveredLinkProps = {
  children: React.ReactNode;
  to: string;
} & Omit<React.ComponentProps<typeof Link>, "to" | "children">;

export const HoveredLink = ({ children, to, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      to={to}
      {...rest}
      className="text-slate hover:text-teal transition-colors py-1 block"
    >
      {children}
    </Link>
  );
};
