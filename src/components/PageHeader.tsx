import { BackButton } from "./BackButton";

export const PageHeader = () => {
  return (
    <div className="sm:grid grid-cols-2 items-center mb-8">
      <div className="course-meta mb-6 sm:mb-0">
        <h1 className="text-4xl mb-2">JS Interview Prep</h1>
        <p>
          Quick refresher/guide to JavaScript for all experience levels. This is
          by no means a comprehensive guide. For that,{" "}
          <a
            className="hover:underline font-semibold"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            View the MDN JavaScript Guide
          </a>
          . Make sure to also check out:{" "}
          <a
            className="hover:underline font-semibold"
            href="https://ts-interview-prep.vercel.app"
            target="_blank"
          >
            TypeScript Interview Prep
          </a>
        </p>
      </div>
      <div className="course-actions text-end">
        <BackButton />
      </div>
    </div>
  );
};
