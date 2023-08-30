export const metadata = {
  title: "ContactUs",
  description: "get in touch with us",
};


export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }