import Head from "@/components/head"

interface PageProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

const Page: React.FC<PageProps> = ({
    title,
    description,
    children,
}) => {
  return (
    <>
      <Head
        title={`${title ? `${title} - ` : ''}GlShop`}
        description={description}
      />

      <main>{children}</main>
    </>
  )
}

export default Page