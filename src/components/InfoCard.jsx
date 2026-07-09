function InfoCard({ title, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {value}
      </p>
    </div>
  );
}

export default InfoCard;