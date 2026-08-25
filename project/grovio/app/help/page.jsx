import { FiPackage, FiCreditCard, FiTruck, FiUser, FiMail } from "react-icons/fi";
import HelpCard from "@/components/HelpCard";

export default function Help() {
  // Support categories stored as an array of objects (Day 3 requirement #3)
  const supportCategories = [
    {
      title: "Orders",
      description:
        "Track your order status, view order history or make changes to a recent order.",
      icon: FiPackage,
    },
    {
      title: "Payments",
      description:
        "Get help with payment methods, failed transactions or refunds.",
      icon: FiCreditCard,
    },
    {
      title: "Delivery",
      description:
        "Learn about delivery timings, delivery areas and how to reschedule a delivery.",
      icon: FiTruck,
    },
    {
      title: "Account",
      description:
        "Manage your profile details, saved addresses and account security settings.",
      icon: FiUser,
    },
  ];

  // FAQ data stored as an array of objects
  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "Once your order is placed, you can track its live status from the Orders section in your account.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "Grovio accepts UPI, debit/credit cards and cash on delivery for all orders.",
    },
    {
      question: "How long does delivery usually take?",
      answer:
        "Most orders are delivered within 30-45 minutes depending on your location.",
    },
    {
      question: "Can I change my delivery address after placing an order?",
      answer:
        "Yes, you can update your delivery address before the order is dispatched from the Orders section.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Help Page Header */}
      <section className="px-6 py-16 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
          Support
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Help &amp; Support
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Need a hand? Browse common topics below or reach out to our support
          team — we&apos;re here to help you get the most out of Grovio.
        </p>
      </section>

      {/* Support Categories */}
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Browse by Topic
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportCategories.map((category) => (
            <HelpCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-10">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-green-600 p-10 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-bold">Still need help?</h2>
            <p className="mt-1 text-sm text-green-100">
              Our support team is available to assist you with any questions.
            </p>
          </div>

          <a
            href="mailto:support@grovio.com"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
          >
            <FiMail size={17} />
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
