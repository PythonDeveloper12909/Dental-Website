import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Phone, MapPin, Clock, MessageCircle, Menu, X, Sparkles, Shield, Leaf, BadgeCheck } from 'lucide-react'
import { useState } from 'react'

const clinicName = 'Lorem Ipsum Dental'

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    [
      'px-3 py-2 text-sm font-medium rounded-full transition-colors',
      isActive ? 'bg-primary-soft text-primary-dark' : 'text-slate-600 hover:bg-slate-100',
    ].join(' ')

  return (
    <div className="min-h-screen bg-clinic-background text-slate-900 flex flex-col">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3 select-none">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark md:h-11 md:w-11">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg md:text-xl">
                Lorem Ipsum
              </p>
              <p className="text-[11px] font-medium text-slate-500 sm:text-xs md:text-sm">
                Dental Clinic
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary-dark">
              Lorem ipsum dental care
            </span>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-4 pb-3 pt-2 md:hidden">
            <div className="flex flex-col gap-1">
              <NavLink to="/" className={navLinkClass} end onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/services" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppFloating />
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-clinic-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-20">
        <div className="md:w-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-dark">
            <Shield className="h-3.5 w-3.5" />
            Lorem Ipsum Care
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Your Perfect Smile
            <span className="block text-primary-dark">Starts Here</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="tel:9991234567"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark px-6 py-3 text-sm font-medium text-white shadow-soft hover:bg-sky-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Book Appointment</span>
            </a>
            <a
              href="#services-preview"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary-dark"
            >
              <Leaf className="h-4 w-4 text-accent" />
              View Treatments
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-600 sm:text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary-dark" />
              <div>
                <dt className="font-medium text-slate-800">Clinic Location</dt>
                <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-primary-dark" />
              <div>
                <dt className="font-medium text-slate-800">Typical Hours</dt>
                <dd>Lorem ipsum dolor sit amet, sed do eiusmod tempor.</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="md:w-1/2">
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-100">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-dark">Lorem Ipsum</p>
                <p className="mt-2 text-sm font-medium text-slate-800">Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <BadgeCheck className="h-8 w-8 text-accent" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="rounded-2xl bg-clinic-background px-3 py-3">
                <p className="font-semibold text-slate-800">Patient Comfort</p>
                <p className="mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="rounded-2xl bg-clinic-background px-3 py-3">
                <p className="font-semibold text-slate-800">Quality Care</p>
                <p className="mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor.
                </p>
              </div>
              <div className="rounded-2xl bg-clinic-background px-3 py-3">
                <p className="font-semibold text-slate-800">Hygienic Clinic</p>
                <p className="mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, incididunt ut labore.
                </p>
              </div>
              <div className="rounded-2xl bg-clinic-background px-3 py-3">
                <p className="font-semibold text-slate-800">Personalised Plans</p>
                <p className="mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const services = [
    {
      name: 'Conservative Dentistry',
      description:
        'Preserving natural teeth with precise fillings and minimally invasive treatments to stop decay early.',
    },
    {
      name: 'Cosmetic / Aesthetic Dentistry',
      description:
        'Smile enhancements including shaping, bonding, and other cosmetic treatments for a brighter, confident smile.',
    },
    {
      name: 'Crowns and Bridges Fixing',
      description:
        'Strong, natural-looking crowns and bridges to restore your bite, function, and overall smile harmony.',
    },
  ]

  return (
    <section id="services-preview" className="bg-clinic-background/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Dental Services</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <NavLink
            to="/services"
            className="hidden items-center gap-2 text-xs font-medium text-primary-dark hover:text-sky-700 sm:inline-flex"
          >
            View all services
          </NavLink>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <NavLink
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-medium text-primary-dark hover:text-sky-700"
          >
            View all services
          </NavLink>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    {
      title: 'Lorem One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    },
    {
      title: 'Lorem Two',
      description: 'Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Lorem Three',
      description: 'Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Lorem Four',
      description: 'Lorem ipsum dolor sit amet, ut enim ad minim veniam, quis nostrud.',
    },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="max-w-xl">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Why Choose Us</h2>
          <p className="mt-2 text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-clinic-background px-4 py-4 text-sm text-slate-700"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
    </>
  )
}

function ServicesPage() {
  const services = [
    {
      name: 'Conservative Dentistry',
      description:
        'Focused on preserving your natural teeth through early diagnosis, tooth-coloured fillings, and minimally invasive treatments that stop decay before it progresses.',
      icon: Shield,
    },
    {
      name: 'Cosmetic / Aesthetic Dentistry',
      description:
        'Smile-enhancing procedures such as reshaping, contouring, and other aesthetic corrections designed to improve the overall appearance of your teeth and smile line.',
      icon: Sparkles,
    },
    {
      name: 'Crowns and Bridges Fixing',
      description:
        'Custom-made crowns and bridges that restore broken or missing teeth, helping you chew comfortably while keeping your smile natural and well-aligned.',
      icon: BadgeCheck,
    },
    {
      name: 'Tooth Extraction',
      description:
        'Gentle removal of teeth that cannot be saved, with a focus on patient comfort and clear guidance for healing and future replacement options.',
      icon: Leaf,
    },
    {
      name: 'Wisdom Tooth Extraction',
      description:
        'Careful removal of impacted or symptomatic wisdom teeth to relieve pain, protect neighbouring teeth, and prevent future complications.',
      icon: Shield,
    },
  ]

  return (
    <section className="bg-clinic-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <header className="max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Dental Services</h1>
          <p className="mt-3 text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.name}
              className="group flex flex-col justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-soft text-primary-dark">
                  <service.icon className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">{service.name}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">About the Clinic</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-clinic-background px-4 py-4">
                <h2 className="text-sm font-semibold text-slate-900">Mission</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="rounded-2xl bg-clinic-background px-4 py-4">
                <h2 className="text-sm font-semibold text-slate-900">Vision</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl bg-clinic-background p-5">
              <div className="h-40 w-full rounded-2xl bg-gradient-to-br from-primary-soft via-white to-accent-soft" />
              <p className="mt-3 text-[11px] text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-100 bg-white px-4 py-4 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Clinic Details</p>
              <p className="mt-2">
                <span className="font-medium">Location:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="mt-1">
                <span className="font-medium">Contact:</span> Lorem ipsum dolor sit amet, sed do eiusmod tempor.
              </p>
              <p className="mt-1">
                <span className="font-medium">Hours:</span> Lorem ipsum dolor sit amet, incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="bg-clinic-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Contact & Location</h1>
            <p className="mt-3 text-sm text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <form className="mt-6 space-y-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary-soft focus:border-primary-dark focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="999XXXXXXX"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary-soft focus:border-primary-dark focus:ring-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your concern or preferred appointment time."
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-primary-soft focus:border-primary-dark focus:ring-2 resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-dark px-5 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-sky-700 transition-colors sm:w-auto"
              >
                <Sparkles className="h-4 w-4" />
                <span>Submit Enquiry</span>
              </button>
              <p className="text-[11px] text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </form>

            <div className="mt-6 space-y-2 text-xs text-slate-700">
              <p>
                <span className="font-medium">Enquiries:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                <span className="font-medium">Visit:</span> Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <div className="aspect-[4/3] w-full bg-slate-200">
                {/* Replace src with actual Google Maps embed when real location is available */}
                <iframe
                  title="Clinic Location Map"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb="
                />
              </div>
            </div>
              <p className="text-[11px] text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{clinicName}</p>
          <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
          <p className="mt-1 text-slate-500">
            Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-slate-500">Lorem ipsum</p>
          <p className="text-[11px] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/9991234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white shadow-soft hover:bg-emerald-500 transition-transform hover:translate-y-0.5"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp Clinic</span>
    </a>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App

