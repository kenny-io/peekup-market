import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      {/* Layered atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-orange-600/[0.07] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-orange-500/[0.05] blur-[100px]"
      />

      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to shop Enugu?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Join 1,500+ people waiting for Peekup. Order from any vendor,
            pay at checkout, track in real time. Android and iOS coming soon.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/waitlist" color="primary">
              Join the waitlist
            </Button>
            <Button href="/vendors" variant="outline" color="transparent" className="border-white/20 text-white hover:bg-white/5">
              Become a vendor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
