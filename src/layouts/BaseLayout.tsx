import type { ReactNode } from "react";
import Nav from "../partials/Nav";
import Slider from "../partials/Slider";
import Footer from "../partials/Footer";
import HeaderBlock from "../blocks/HeaderBlock";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  flashMessages?: ReactNode;
}

export default function BaseLayout({
  title,
  subtitle,
  children,
  flashMessages,
}: Props) {
  return (
    <section className="wrapper" data-layout-structure="page">
      <div className="container" data-layout-structure="builder">
        <HeaderBlock title={title} subtitle={subtitle} />
        <Nav />
        <Slider />
        {flashMessages}
        {children}
        <Footer />
      </div>
    </section>
  );
}
