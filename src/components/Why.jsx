import React from "react";

export default function Why() {
  const reasons = [
    {
      title: "We are Local",
      description: "Based right here on the Gold Coast. We understand local business needs and the local market. We are not a faceless agency in another city."
    },
    {
      title: "No Contracts, No Retainers",
      description: "Once we build your website, it is yours. No monthly fees, no lock-in periods. You own it. That is it."
    },
    {
      title: "Simple, Modern Design",
      description: "We build clean websites that look professional and work beautifully on every device. No clutter. No fluff. Just results."
    },
    {
      title: "Clear Communication",
      description: "We explain what we are doing and why. No jargon. No buzzwords. You will understand every step of the process."
    },
    {
      title: "Easy to Update",
      description: "Your website works for you, not the other way around. Built so you can easily update content and images without needing a developer."
    },
    {
      title: "Focused on Results",
      description: "We design with your goals in mind. A website that helps you get more customers and grow your business."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-4">Why Nikosta Systems</h2>
          <p className="text-lg text-navy-700 font-light max-w-2xl mx-auto">
            We are different because we put your success first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-navy-100 hover:border-marina-300 transition-all"
            >
              <h3 className="text-lg font-medium mb-3 text-navy-900">{reason.title}</h3>
              <p className="text-navy-700 leading-relaxed font-light text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-navy-900 text-marina-100 p-12 md:p-16 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Ready to get started?
            </h3>
            <p className="text-marina-100/80 text-lg font-light mb-8 leading-relaxed">
              Get in touch and let us talk about building a website that works for your business.
              No pressure, no obligations. Just a straightforward conversation.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-marina-400 text-navy-900 font-medium rounded-full hover:bg-marina-300 border-2 border-marina-300 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
