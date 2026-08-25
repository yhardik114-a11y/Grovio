export default function HelpCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-2xl text-green-600">
        <Icon />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
    </div>
  );
}
