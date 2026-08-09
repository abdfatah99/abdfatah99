import BlogSubjectPage from "@/src/features/blog/[blog-subject]/blog-subject-page";

interface PageProps {
  params: Promise<{ "blog-subject"?: string[] }>;
}

async function BlogSubject({ params }: PageProps) {
  const { "blog-subject": blogSubject = [] } = await params

  // console.log("blog slug: ", blogSubject)

  return <BlogSubjectPage urlRequest={blogSubject} />;
}

export default BlogSubject;

