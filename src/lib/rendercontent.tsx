import { ReactNode } from "react";

export const renderContent = (content: string): ReactNode[] => {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];
  let i = 0;

  const parseBold = (text: string): ReactNode[] => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, idx) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={idx} className="font-semibold text-gray-800">
          {part.replace(/\*\*/g, "")}
        </strong>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);

    if (imageMatch) {
      const alt = imageMatch[1];
      const src = imageMatch[2];

      elements.push(
        <div key={i} className="my-6">
          <img
            src={src}
            alt={alt}
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-md"
          />
        </div>
      );

      i++;
      continue;
    }

    // TABLE SUPPORT
    if (line.includes("|") && i + 1 < lines.length && lines[i + 1].includes("|---")) {
      const headers = line
        .split("|")
        .map((h) => h.trim())
        .filter(Boolean);

      i += 2;

      const rows: string[][] = [];

      while (i < lines.length && lines[i].includes("|")) {
        const row = lines[i]
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean);

        rows.push(row);
        i++;
      }

      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-pink-50">
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="border border-gray-300 px-4 py-3 text-gray-600 leading-relaxed"
                    >
                      {parseBold(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={i}
          className="text-2xl md:text-3xl font-bold text-pink-700 mt-6 mb-4 leading-snug"
        >
          {line.replace("# ", "")}
        </h1>
      );

      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-xl md:text-2xl font-bold text-pink-600 mt-8 mb-3 leading-snug"
        >
          {line.replace("## ", "")}
        </h2>
      );

      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-lg md:text-xl font-semibold text-gray-800 mt-6 mb-2 leading-snug"
        >
          {line.replace("### ", "")}
        </h3>
      );

      i++;
      continue;
    }
    if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={i}
          className="text-lg font-semibold text-pink-700 mt-5 mb-2 leading-snug"
        >
          {line.replace("#### ", "")}
        </h4>
      );

      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];

      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }

      elements.push(
        <ul key={`ul-${i}`} className="flex flex-col gap-2 my-4 ml-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2" />
              <span>{parseBold(item)}</span>
            </li>
          ))}
        </ul>
      );

      continue;
    }

    elements.push(
      <p key={i} className="text-gray-500 text-sm leading-relaxed mb-3">
        {parseBold(line)}
      </p>
    );

    i++;
  }

  return elements;
};