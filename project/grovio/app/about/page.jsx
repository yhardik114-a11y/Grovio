import { FiTruck, FiShoppingBag, FiClock } from "react-icons/fi";

export default function About() {
  // Feature data stored as an array of objects (required for Day 1 assignment)
  const features = [
    {
      title: "Quick Delivery",
      description:
        "Get your groceries delivered to your doorstep in record time, every single day.",
      icon: FiTruck,
    },
    {
      title: "Fresh Products",
      description:
        "We handpick fruits, vegetables and daily essentials to make sure quality never drops.",
      icon: FiShoppingBag,
    },
    {
      title: "Easy Shopping",
      description:
        "A simple, clutter-free shopping experience designed to save you time and effort.",
      icon: FiClock,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* About Grovio */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
          About Us
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          About Grovio
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-500">
          Grovio is an online grocery platform built to bring everyday
          essentials — fresh produce, dairy, snacks and more — right to your
          doorstep. We connect you with quality products without the hassle
          of crowded stores or long queues.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Our mission is to make grocery shopping simple, quick and
            convenient for everyone — so you spend less time running errands
            and more time on what matters to you.
          </p>
        </div>
      </section>

      {/* Why Choose Grovio */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Our Promise
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Why Choose Grovio?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-2xl text-green-600">
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
