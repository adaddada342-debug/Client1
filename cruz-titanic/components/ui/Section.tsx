import { forwardRef, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export const Section = forwardRef<HTMLElement, Props>(function Section(
  { id, className = "", children, ...rest },
  ref
) {
  return (
    <section
      id={id}
      ref={ref}
      {...rest}
      className={`section relative ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
});
