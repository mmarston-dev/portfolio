interface Props {
  labels: string[];
}

function TechStack({ labels }: Props) {
  return (
    <div className="flex flex-wrap my-5 align-top">
      <span className="font-bold mr-2 mt-1">Tech stack:</span>
      {labels.map((label, index) => (
        <span key={index} className="rounded-full text-sm px-2 py-1 m-1 bg-white text-(--color-bg-dark) font-(family-name:--font-code)">
          {label}
        </span>
      ))}
    </div>
  );
}

export default TechStack;
