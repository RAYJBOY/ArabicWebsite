import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/privacy-policy.html")
      .then((res) => res.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Error loading privacy policy:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default PrivacyPolicy;
