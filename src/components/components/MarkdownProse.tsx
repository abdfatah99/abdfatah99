function MarkdownProse({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`prose 
                    prose-headings:mt-8 
                    prose-headings:font-semibold 
                  prose-headings:text-black 
                    prose-h1:text-3xl 
                    prose-h2:text-2xl 
                    prose-h3:text-xl 
                    prose-h4:text-lg
                  dark:prose-headings:text-white
                    prose-p:text-justify`}
    >
      {children}
    </div>
  );
}

export default MarkdownProse;
